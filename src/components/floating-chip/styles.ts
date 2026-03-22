import { fontFamily } from "@src/constants/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    chip: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.055)",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.09)",
        borderRadius: 9,
        paddingHorizontal: 9,
        paddingVertical: 5,
        gap: 5,
    },
    chipEmoji: {
        fontSize: 12,
    },
    chipText: {
        color: "rgba(255,255,255,0.6)",
        fontSize: 11,
        fontWeight: "500",
        fontFamily: fontFamily.BlueBubble,
    },
})