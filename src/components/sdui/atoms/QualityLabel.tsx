// components/sdui/atoms/QuantityLabel.tsx

import { QuantityLabelProps } from "@src/types/sdui";
import { StyleSheet, Text } from "react-native";

export function QuantityLabel({ text }: QuantityLabelProps) {
  return <Text style={styles.qty}>{text}</Text>;
}

const styles = StyleSheet.create({
  qty: {
    fontSize: 11,
    color: "#888780",
    marginTop: 2,
  },
});
