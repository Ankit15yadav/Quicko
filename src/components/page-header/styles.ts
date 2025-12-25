import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        backgroundColor: '#ffffff',
        height: 90,
        paddingBottom: 8,
        paddingHorizontal: 10,
        zIndex: 999,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftSection: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    centerSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightSection: {
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    headerText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1a1a1a',
        textAlign: 'center',
        letterSpacing: 0.5,
    },
});