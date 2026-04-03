import { ThemeType } from "@src/theme";
import { StyleSheet } from "react-native";

export const getStyles = (screenHeight: number, theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.bg.primary,
      paddingTop: screenHeight * 0.06,
      justifyContent: "flex-start",
      alignItems: "center",
    },
  });
