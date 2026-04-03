import { fontFamily } from "@src/constants/fonts";
import { ThemeType } from "@src/theme";
import { StyleSheet } from "react-native";

export const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      marginBottom: 40,
    },
    bodyText: {
      fontSize: 14,
      fontFamily: fontFamily.BlueBubble,
      color: theme.text.secondary,
    },
    phoneText: {
      color: theme.text.primary,
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
