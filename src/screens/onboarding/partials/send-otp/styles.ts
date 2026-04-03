import { ThemeType } from "@src/theme";
import { StyleSheet } from "react-native";

export const styles = (theme: ThemeType, isActive?: boolean) =>
  StyleSheet.create({
    // ─── Root ───────────────────────────────────────────────────────
    safeArea: {
      flex: 1,
      backgroundColor: theme.bg.primary,
    },
    keyboardView: {
      flex: 1,
    },

    // ─── Top Hero ───────────────────────────────────────────────────
    topView: {
      flex: 1,
      overflow: "hidden",
    },
    // ─── Bottom Sheet ────────────────────────────────────────────────
    bottomSheet: {
      backgroundColor: theme.bg.primary,
      borderTopLeftRadius: 28,
      borderTopRightRadius: 28,
      paddingHorizontal: 22,
      paddingTop: 20,
      paddingBottom: 12,
      borderTopWidth: 3,
      borderTopColor: "rgba(255,255,255,0.07)",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: -8 },
      shadowOpacity: 0.5,
      shadowRadius: 20,
      elevation: 20,
    },

    brandRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 13,
      marginBottom: 4,
    },
    logoImage: {
      width: 60,
      height: 60,
      resizeMode: "contain",
    },
    brandTextGroup: {
      gap: 2,
    },
    brandSub: {
      color: theme.text.secondary,
      fontSize: 16,
      fontWeight: "500",
    },

    divider: {
      height: 1,
      backgroundColor: theme.border,
      marginVertical: 18,
    },

    inputLabel: {
      color: theme.text.secondary,
      fontSize: 11,
      fontWeight: "600",
      letterSpacing: 0.8,
      textTransform: "uppercase",
      marginBottom: 8,
    },
    logo: {
      backgroundColor: theme.logo.primary,
    },
    inputWrapper: {
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 14,
      backgroundColor: theme.bg.primary,
      borderWidth: 1,
      borderColor: theme.border,
      paddingHorizontal: 16,
      height: 54,
      marginBottom: 13,
    },
    inputWrapperFocused: {
      borderColor: theme.brand.primary,
      backgroundColor: theme.bg.primary,
    },
    flagEmoji: {
      fontSize: 18,
      marginRight: 8,
    },
    countryCodeSeparator: {
      width: 1,
      height: 20,
      backgroundColor: theme.border,
      marginRight: 12,
    },
    countryCode: {
      color: theme.text.primary,
      fontSize: 15,
      fontWeight: "500",
      marginRight: 10,
    },
    input: {
      flex: 1,
      color: theme.text.primary,
      fontSize: 16,
      letterSpacing: 0.5,
    },

    continueBtn: {
      height: 54,
      borderRadius: 14,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      gap: 8,
    },
    continueBtnActive: {
      backgroundColor: theme.brand.primary,
    },
    continueBtnInactive: {
      backgroundColor: theme.text.disabled,
    },
    continueText: {
      color: theme.white.primary,
      fontSize: 15,
      fontWeight: "600",
      letterSpacing: 0.4,
    },
    continueArrow: {
      color: "#FFFFFF",
      fontSize: 16,
      fontWeight: "700",
    },
  });
