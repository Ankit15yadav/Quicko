import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 65,
        paddingHorizontal: 10,
        color: 'black',
        backgroundColor: "#7e7e7e",
        paddingBottom: 10
    },
    header: {
        // fontFamily: fontFamily.BlueBubble,
        fontWeight: '700',
        marginLeft: 5,
    },
    name_of_location: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    color: {
        color: 'white'
    },
    timeText: {
        fontSize: 22,
        fontWeight: '800',
        marginTop: 4,
    },
    locationButton: {
        display: "flex",
        flexDirection: 'row',
        marginTop: 4
    },
    walletIcon: {
        borderRadius: 100,
        width: 30,
        height: 30,
    },
    rightSection: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: "center",
    },
    current_location: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2
    }
})