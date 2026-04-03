import { ThemeType } from "@src/theme";
import { StyleSheet } from "react-native";

export const getStyles = (screenHeight: number, theme: ThemeType) =>
  StyleSheet.create({
    errorText: {
      color: theme.status.error,
      marginTop: screenHeight * 0.02,
      fontSize: 12,
      fontWeight: "600",
    },
  });
