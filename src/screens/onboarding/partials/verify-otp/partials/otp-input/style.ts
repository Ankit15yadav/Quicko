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
    color: "gray",
  },
});

export const getSlotStyle = (isActive: boolean) =>
  StyleSheet.create({
    card: {
      backgroundColor: isActive ? "white" : "#cfcfcfff",
      shadowColor: isActive ? "#111827" : "transparent",
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: isActive ? 0.25 : 0,
      shadowRadius: isActive ? 6 : 0,
      elevation: isActive ? 4 : 0,
    },
  });
