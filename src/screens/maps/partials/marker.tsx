import { StyleSheet, View } from "react-native";

const PinLocationMarker = () => {
    return (
        <View style={styles.markerFixed}>
            <View style={styles.marker}>
                <View style={styles.markerDot} />
                <View style={styles.markerStick} />
            </View>
        </View>
    )
}

export default PinLocationMarker

const styles = StyleSheet.create({
    markerFixed: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginLeft: -24,
        marginTop: -48,
    },
    marker: {
        height: 48,
        width: 48,
        alignItems: 'center',
    },
    markerDot: {
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: '#FF0000',
        borderWidth: 3,
        borderColor: '#FFFFFF',
    },
    markerStick: {
        width: 2,
        height: 32,
        backgroundColor: '#FF0000',
    },
});