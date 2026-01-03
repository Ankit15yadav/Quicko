import { useLocation } from '@src/contexts/location';
import { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { EdgePadding, PROVIDER_GOOGLE, Region } from 'react-native-maps';
import PinLocationMarker from './partials/marker';
import SelectedAddressPreview from './partials/selected-address-modal';

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
    const { location, selectedAddress, handleOnRegionChangeComplete, setIsLoading, isLoading, setSelectedAddress } = useLocation()
    const mapRef = useRef<MapView>(null)

    useEffect(() => {
        if (location && mapRef.current) {
            mapRef.current.animateToRegion({
                latitude: location?.coords?.latitude,
                longitude: location?.coords?.longitude,
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
                    latitude: location?.coords?.latitude,
                    longitude: location?.coords?.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                } : INITIAL_REGION}
                showsUserLocation
                showsMyLocationButton
                followsUserLocation
                mapPadding={PADDING}
                onRegionChangeComplete={handleOnRegionChangeComplete}
                onRegionChangeStart={() => {
                    setIsLoading?.(true);
                    setSelectedAddress(undefined)
                }}
            />
            <PinLocationMarker />
            <SelectedAddressPreview address={selectedAddress?.[0]} isLoading={isLoading} />
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
    }
});