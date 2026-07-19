import { ProductNameProps } from "@src/types/sdui";
import { StyleSheet, Text } from "react-native";

export function ProductName({ text }: ProductNameProps) {
  return (
    <Text style={styles.name} numberOfLines={2}>
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 13,
    fontWeight: "500",
    color: "#1a1a1a",
    lineHeight: 18,
  },
});
