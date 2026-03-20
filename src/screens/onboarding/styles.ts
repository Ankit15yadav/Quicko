import { fontFamily } from "@src/constants/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B0B",
  },

  keyboardView: {
    flex: 1,
  },

  // ─── Top Section ───────────────────────────────────────────────
  topView: {
    flex: 1,
    overflow: "hidden",
    position: "relative",
  },

  topGradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },

  animationCanvas: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },

  topContentWrapper: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 2,
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
  },

  topTagline: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "500",
    letterSpacing: 3,
    textTransform: "uppercase",
    opacity: 0.5,
  },

  topHeadline: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 36,
    paddingHorizontal: 32,
  },

  topHeadlineAccent: {
    color: "#30b430",
  },

  floatingBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(48, 180, 48, 0.15)",
    borderWidth: 1,
    borderColor: "rgba(48, 180, 48, 0.4)",
    borderRadius: 100,
    paddingHorizontal: 14,
    paddingVertical: 6,
    gap: 6,
  },

  floatingBadgeDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#30b430",
  },

  floatingBadgeText: {
    color: "#30b430",
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 0.5,
  },

  // ─── Floating Item Chips ────────────────────────────────────────
  chipContainer: {
    flexDirection: "row",
    gap: 8,
    marginTop: 4,
  },

  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.06)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    gap: 5,
  },

  chipEmoji: {
    fontSize: 13,
  },

  chipText: {
    color: "rgba(255,255,255,0.65)",
    fontSize: 11,
    fontWeight: "500",
  },

  // ─── Bottom Section ─────────────────────────────────────────────
  bottomView: {
    height: "50%",
    paddingHorizontal: 24,
    paddingTop: 10,
  },

  HeaderSection: {
    alignItems: "center",
  },

  logoWrapper: {
    width: 70,
    height: 65,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#41b947",
    backgroundColor: "#FACC15",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  logoImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },

  heading: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 4,
  },

  subHeading: {
    color: "#9CA3AF",
    fontSize: 14,
    marginBottom: 24,
  },

  // ─── Input ──────────────────────────────────────────────────────
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#1F2933",
    borderWidth: 1,
    borderColor: "grey",
    paddingHorizontal: 14,
    height: 52,
    marginBottom: 16,
  },

  countryCode: {
    color: "#FFFFFF",
    fontSize: 16,
    marginRight: 10,
    fontFamily: fontFamily.BlueBubble,
  },

  input: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: fontFamily.BlueBubble,
  },

  // ─── Button ─────────────────────────────────────────────────────
  continueBtn: {
    height: 52,
    borderRadius: 12,
    backgroundColor: "#6B7280",
    alignItems: "center",
    justifyContent: "center",
  },

  continueText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: fontFamily.BlueBubble,
  },
});
