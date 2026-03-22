import PressableHaptic from "@src/components/pressable-haptics"
import { LocationObject } from "expo-location"
import { ForwardedRef, forwardRef } from "react"
import { StyleSheet, Text } from "react-native"
import MapView from "react-native-maps"

interface IGoToCurrentLocationCTA {
    location: LocationObject | null
}

const GoToCurrentLocationCTA = ({ location }: IGoToCurrentLocationCTA, ref: ForwardedRef<MapView | null>) => {

    const handleGoToCurrentLocation = () => {
        if (typeof ref === 'object') {
            ref?.current?.animateToRegion({
                latitude: location?.coords.latitude ?? 0,
                longitude: location?.coords.longitude ?? 0,
                latitudeDelta: 0.001,
                longitudeDelta: 0.001,
            }, 1000)
        }
        return;
    }

    return (
        <PressableHaptic style={styles.container} onPress={handleGoToCurrentLocation} hapticFeel="Medium" >
            <Text style={styles.text}>
                Go to current location
            </Text>
        </PressableHaptic>
    )
}

export default forwardRef(GoToCurrentLocationCTA)

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 260,
        padding: 10,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#2E7D32',
        backgroundColor: '#8bbf8dff',
        shadowColor: '#2E7D32',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        elevation: 6,
    },
    text: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 0.3,
    }
})