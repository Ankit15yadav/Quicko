import { fontFamily } from "@src/constants/fonts";
import { StyleSheet } from "react-native";
import { VariantStyles } from "./types";

export const HeaderTextstyles: VariantStyles = StyleSheet.create({
    'heading-1': {
        fontSize: 32,
        fontWeight: 'bold',
        fontFamily: fontFamily.BlueBubble,
        lineHeight: 40,
        letterSpacing: -0.5,
        color: '#000000',
    },
    'heading-2': {
        fontSize: 16,
        fontWeight: 800,
        lineHeight: 30,
        letterSpacing: 0.1,
        color: 'white',
    },
    'base-1': {

    }
})

export const Modalpadding = StyleSheet.create({
    default: {
        paddingHorizontal: 8
    }
})