import { StyleSheet } from "react-native";

export const getStyles = (screenHeight: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#262531ff",
      paddingTop: screenHeight * 0.06,
      justifyContent: "flex-start",
      alignItems: "center",
    },
  });
