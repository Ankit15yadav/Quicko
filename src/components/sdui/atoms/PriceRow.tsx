// components/sdui/atoms/PriceRow.tsx

import { PriceRowProps } from "@src/types/sdui";
import { StyleSheet, Text, View } from "react-native";

export function PriceRow({ current, original }: PriceRowProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.current}>₹{current}</Text>
      {original && <Text style={styles.original}>₹{original}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 5,
    marginTop: 4,
  },
  current: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1a1a1a",
  },
  original: {
    fontSize: 11,
    color: "#B4B2A9",
    textDecorationLine: "line-through",
  },
});
