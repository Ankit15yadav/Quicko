import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
    },

    walletIcon: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        width: 35,
        height: 35,
        backgroundColor: "#a9a8a8",
    },

    walletAmount: {
        position: "absolute",
        bottom: -4,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3d3d3dff",
        width: 34,
        height: 12,
        borderRadius: 100,
    },

    WalletAmountText: {
        fontSize: 8,
        fontWeight: "bold",
        color: "white",
    },
});
