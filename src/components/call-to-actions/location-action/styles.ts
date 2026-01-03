import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wrapper: {
        marginTop: 1.5,
        backgroundColor: '#2B2D31',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconWrapper: {
        marginRight: 12,
    },
    textWrapper: {
        flex: 1,
    },
    title: {
        color: '#3DBE29',
        fontSize: 15,
        letterSpacing: 0.3,
        fontWeight: '600',
    },
    subtitle: {
        marginTop: 2,
        color: '#A1A4AA',
        fontSize: 12,
    },
});