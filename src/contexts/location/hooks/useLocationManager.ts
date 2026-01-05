import * as Location from "expo-location";
import { useState } from "react";
import { Alert } from "react-native";
import { Details, Region } from "react-native-maps";
import { useStorage } from "../../storage";
import { ILatLong } from "../interface";

interface UseLocationManagerParams {
    permissonState: Location.PermissionResponse | null;
    requestPermissionAsync: () => Promise<Location.PermissionResponse>;
    setLocation: React.Dispatch<React.SetStateAction<Location.LocationObject | null>>;
    locationRef: React.RefObject<Location.LocationObject | null>;
}

export const useLocationManager = ({
    permissonState,
    requestPermissionAsync,
    setLocation,
    locationRef,
}: UseLocationManagerParams) => {
    const { saveLocation: saveLocationToStorage, getLocation: getCachedLocation } = useStorage();
    const [selectedAddress, setSelectedAddress] = useState<Location.LocationGeocodedAddress[] | undefined>(undefined)
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const ensurePermission = async () => {
        if (!permissonState) return false;

        if (permissonState.granted) return true;

        if (!permissonState.canAskAgain) {
            Alert.alert(
                "Location Required",
                "Enable location from settings to continue"
            );
            return false;
        }

        const response = await requestPermissionAsync();
        return response.granted;
    };

    const getCurrentLocation = async () => {
        const ok = await ensurePermission();
        if (!ok) return;

        const location = await Location.getCurrentPositionAsync({
            accuracy: Location.LocationAccuracy.High
        });
        return location;
    };

    const fetchLocation = async () => {
        // const location = await getCachedLocation();
        // if (location) {
        //     console.log('from cache');
        //     setLocation(location);
        //     locationRef.current = location;
        //     return;
        // }
        const userLocation = await getCurrentLocation();
        if (!userLocation) {
            setLocation(null);
            return;
        }
        locationRef.current = userLocation;
        setLocation(userLocation);
        await saveLocationToStorage(userLocation);
    };

    const handleOnRegionChangeComplete = async (region: Region, details: Details) => {
        setIsLoading(false)
        const latLong: ILatLong = {
            latitude: region.latitude,
            longitude: region.longitude
        }
        const address = await SelectedLoationAddress(latLong)
        setSelectedAddress(address)
    }

    // call this to fetch the address and automatically set the corresponding state for the selected state
    const SelectedLoationAddress = async (location: ILatLong) => {
        const address = await Location.reverseGeocodeAsync(location)
        // TODO: handle the error efficiently (push in the logs)
        if (!address) console.log('error while fetching location')
        return address;
    }

    return {
        ensurePermission,
        getCurrentLocation,
        fetchLocation,
        selectedAddress,
        setSelectedAddress,
        handleOnRegionChangeComplete,
        setIsLoading,
        isLoading
    };
};
