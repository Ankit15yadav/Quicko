import { fontFamily } from "@src/constants/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    tickerWrapper: {
        overflow: "hidden",
        width: "100%",
        marginTop: 2,
    },
    tickerRow: {
        flexDirection: "row",
    },
    tickerItem: {
        color: "rgba(255,255,255,0.35)",
        fontSize: 10.5,
        fontWeight: "500",
        marginRight: 24,
        letterSpacing: 0.2,
        fontFamily: fontFamily.BlueBubble,
    },
})