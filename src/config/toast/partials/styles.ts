import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0F1A12",
    borderEndEndRadius: 15,
    borderEndStartRadius: 15,
    marginHorizontal: 16,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginTop: 18,
    borderWidth: 1,
    elevation: 4,
    minHeight: 50,
    width: "100%",
  },
  blurView: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    backgroundColor: "transparent",
    overflow: "hidden",
    borderColor: "rgba(255,255,255,0.1)",
    borderWidth: 1,
    elevation: 0,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "500",
  },
  squircleCard: {
    backgroundColor: "black",
  },
  quickoText: {
    fontWeight: "500",
  },
  textGreen: {
    color: "#3eb43aff",
  },
  textYellow: {
    color: "#FFD600",
  },
});
