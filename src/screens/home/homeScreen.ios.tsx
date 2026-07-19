// screens/HomeScreen.tsx
import { useMapper } from "@quicko-sdui/mapper";
import RenderNode from "@src/component-mapper/render.node";
import { Request } from "@src/services/api-connector";
import { ScreenSpec } from "@src/types/dumm1";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

async function fetchProductCard(productId: string): Promise<ScreenSpec> {
  const res = await Request().get<ScreenSpec>(
    `/api/sdui/product-card/${productId}`,
  );
  return res;
}

export default function HomeScreen() {
  const [state, setState] = useState({});
  const { timer } = useMapper({ startTimer: 0 });
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["product-card", "amul-milk-1l"],
    queryFn: () => fetchProductCard("amul-milk-1l"),
    enabled: true,
    staleTime: 30000,
  });

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <RenderNode node={data?.renderer!} state={state} setState={setState} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F1EFE8",
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
