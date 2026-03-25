import { StyleSheet } from "react-native";

export const getBaseStyle = (screenHeight: number) =>
  StyleSheet.create({
    base: {
      marginTop: screenHeight * 0.02,
      fontSize: 15,
      fontWeight: "600",
    },
    timerText: {
      color: "grey",
    },
    resendText: {
      color: "#0C831F",
    },
  });
