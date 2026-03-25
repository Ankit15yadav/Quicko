import { fontFamily } from "@src/constants/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // ─── Root ───────────────────────────────────────────────────────
  safeArea: {
    flex: 1,
    backgroundColor: "#bbafafff",
  },
  keyboardView: {
    flex: 1,
  },

  // ─── Top Hero ───────────────────────────────────────────────────
  topView: {
    flex: 1,
    overflow: "hidden",
  },
  topContent: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 16,
    gap: 12,
  },

  liveBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(48,180,48,0.12)",
    borderWidth: 1,
    borderColor: "rgba(48,180,48,0.35)",
    borderRadius: 100,
    paddingHorizontal: 13,
    paddingVertical: 5,
    gap: 6,
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#30b430",
  },
  liveBadgeText: {
    color: "#30b430",
    fontSize: 11.5,
    fontWeight: "600",
    letterSpacing: 0.4,
    fontFamily: fontFamily.BlueBubble,
  },

  heroHeadline: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 38,
    letterSpacing: -0.5,
    paddingHorizontal: 24,
  },
  heroAccent: {
    color: "#30b430",
  },

  chipRow: {
    flexDirection: "row",
    gap: 7,
    paddingHorizontal: 4,
  },

  // ─── Bottom Sheet ────────────────────────────────────────────────
  bottomSheet: {
    backgroundColor: "#111111",
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
  logoBox: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: "#FACC15",
    borderWidth: 2,
    borderColor: "#41b947",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
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
    color: "rgba(255,255,255,0.38)",
    fontSize: 15,
    fontWeight: "400",
    fontFamily: fontFamily.BlueBubble,
  },

  divider: {
    height: 1,
    backgroundColor: "rgba(255,255,255,0.06)",
    marginVertical: 18,
  },

  inputLabel: {
    color: "rgba(255,255,255,0.45)",
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 0.8,
    textTransform: "uppercase",
    marginBottom: 8,
    fontFamily: fontFamily.BlueBubble,
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 14,
    backgroundColor: "#1A1A1A",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
    paddingHorizontal: 16,
    height: 54,
    marginBottom: 13,
  },
  inputWrapperFocused: {
    borderColor: "rgba(48,180,48,0.5)",
    backgroundColor: "#1C1F1C",
  },
  flagEmoji: {
    fontSize: 18,
    marginRight: 8,
  },
  countryCodeSeparator: {
    width: 1,
    height: 20,
    backgroundColor: "rgba(255,255,255,0.1)",
    marginRight: 12,
  },
  countryCode: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    marginRight: 10,
    fontFamily: fontFamily.BlueBubble,
  },
  input: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: fontFamily.BlueBubble,
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
    backgroundColor: "#0C831F",
  },
  continueBtnInactive: {
    backgroundColor: "#1E1E1E",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.07)",
  },
  continueText: {
    color: "#FFFFFF",
    fontSize: 15.5,
    fontWeight: "700",
    fontFamily: fontFamily.BlueBubble,
    letterSpacing: 0.2,
  },
  continueArrow: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
