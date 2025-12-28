import { useLocation } from '@src/contexts/location';
import { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { EdgePadding, Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';

const INITIAL_REGION: Region = {
    "latitude": 18.5204,
    "longitude": 73.8567,
    "latitudeDelta": 0.2000,
    "longitudeDelta": 0.2200
}

const PADDING: EdgePadding = {
    bottom: 10,
    left: 10,
    right: 20,
    top: 10
}

const MapPinLocation = () => {
    const { location } = useLocation()
    const mapRef = useRef<MapView>(null)

    // Animate to user's location when location changes
    useEffect(() => {
        if (location && mapRef.current) {
            mapRef.current.animateToRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }, 1000);
        }
    }, [location]);

    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef}
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={location ? {
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                } : INITIAL_REGION}
                showsUserLocation
                showsMyLocationButton
                followsUserLocation
                showsCompass
                showsTraffic
                mapPadding={PADDING}
            >
                {location && (
                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                        title="Current Location"
                        description={`Accuracy: ${location.coords.accuracy?.toFixed(0)}m`}
                        pinColor="red"
                    />
                )}
            </MapView>
        </View>
    )
};

export default MapPinLocation

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