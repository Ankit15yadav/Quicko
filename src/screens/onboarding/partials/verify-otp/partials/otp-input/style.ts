import { ThemeType } from "@src/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  slotsRow: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  charText: {
    fontSize: 20,
    fontWeight: "800",
    color: "#9D9DB1",
  },
});

export const getSlotStyle = (isActive: boolean, theme: ThemeType) =>
  StyleSheet.create({
    card: {
      backgroundColor: theme.bg.secondary,
      shadowColor: isActive ? "#111827" : "transparent",
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: isActive ? 0.25 : 0,
      shadowRadius: isActive ? 6 : 0,
      elevation: isActive ? 4 : 0,
    },
  });
