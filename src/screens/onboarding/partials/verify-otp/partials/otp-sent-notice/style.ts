import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 40,
  },
  bodyText: {
    fontSize: 16,
    color: "white",
  },
  phoneText: {
    color: "white",
    fontWeight: "800",
    fontSize: 14,
  },
});

export const getDynamicStyles = (screenHeight: number) =>
  StyleSheet.create({
    bodyText: {
      marginBottom: screenHeight * 0.002,
    },
  });
