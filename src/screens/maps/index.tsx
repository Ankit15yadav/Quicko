import { useLocation } from '@src/contexts/location';
import { useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { EdgePadding, PROVIDER_GOOGLE } from 'react-native-maps';
import GoToCurrentLocationCTA from "./partials/current-location-button";
import PinLocationMarker from './partials/marker';
import SelectedAddressPreview from './partials/selected-address-modal';

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
                latitudeDelta: 0.001,
                longitudeDelta: 0.001,
            }, 1000);
        }
    }, [location]);

    if (!location && !mapRef.current) {
        return (
            <View>
                <Text>Location not presnet</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef}
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                followsUserLocation
                mapPadding={PADDING}
                showsBuildings
                onRegionChangeComplete={handleOnRegionChangeComplete}
                onRegionChangeStart={() => {
                    setIsLoading?.(true);
                    setSelectedAddress(undefined)
                }}
            />

            <PinLocationMarker />
            <SelectedAddressPreview address={selectedAddress?.[0]} isLoading={isLoading} />
            <GoToCurrentLocationCTA ref={mapRef} location={location} />
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