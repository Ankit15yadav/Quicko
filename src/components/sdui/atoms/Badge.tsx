import { BadgeProps } from "@src/types/sdui";
import { StyleSheet, Text, View } from "react-native";

const variantStyles: Record<
  BadgeProps["variant"],
  { bg: string; color: string }
> = {
  delivery: { bg: "#EAF3DE", color: "#3B6D11" },
  offer: { bg: "#FAECE7", color: "#993C1D" },
  new: { bg: "#E6F1FB", color: "#185FA5" },
};

export function Badge({ label, variant }: BadgeProps) {
  const { bg, color } = variantStyles[variant];
  return (
    <View style={[styles.badge, { backgroundColor: bg }]}>
      <Text style={[styles.text, { color }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 4,
  },
  text: {
    fontSize: 10,
    fontWeight: "500",
    letterSpacing: 0.2,
  },
});
