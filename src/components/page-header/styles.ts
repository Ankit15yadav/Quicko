import { ThemeType } from "@src/theme";
import { StyleSheet } from "react-native";

export const styles = (theme: ThemeType) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: "row",
      alignItems: "flex-end",
      backgroundColor: theme.bg.tertiary,
      height: 90,
      paddingBottom: 8,
      paddingHorizontal: 10,
      zIndex: 999,
      borderBottomColor: "#f0f0f0",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    container: {
      flexDirection: "row",
      alignItems: "center",
    },
    leftSection: {
      width: 30,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20,
    },
    centerSection: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    rightSection: {
      width: 30,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 20,
    },
    headerText: {
      fontSize: 16,
      fontWeight: "600",
      color: theme.text.primary,
      textAlign: "center",
      letterSpacing: 0.5,
    },
  });
