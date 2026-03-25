import { StyleSheet } from "react-native";

export const getStyles = (screenHeight: number) =>
  StyleSheet.create({
    errorText: {
      color: "#d61414",
      marginTop: screenHeight * 0.02,
      fontSize: 12,
      fontWeight: "600",
    },
  });
