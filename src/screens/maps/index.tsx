import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Region } from 'react-native-maps';

const INITIAL_REGION: Region = {
    "latitude": 18.5204,
    "longitude": 73.8567,
    "latitudeDelta": 0.2000,
    "longitudeDelta": 0.2200
}

export default () => (
    <View style={styles.container}>
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={INITIAL_REGION}
            showsUserLocation
            showsMyLocationButton
        >
        </MapView>
    </View>
);

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 'auto',
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});