import * as Location from "expo-location";
import React, { createContext, PropsWithChildren, useContext, useEffect, useRef, useState } from "react";
import { Details, Region } from "react-native-maps";
import { useLocationManager } from "./hooks/useLocationManager";

interface ILocationContext {
    location: Location.LocationObject | null;
    selectedAddress: Location.LocationGeocodedAddress[] | undefined
    setSelectedAddress: React.Dispatch<React.SetStateAction<Location.LocationGeocodedAddress[] | undefined>>;
    handleOnRegionChangeComplete: (region: Region, details: Details) => Promise<void>
    isLoading: boolean
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const LocationContext = createContext<ILocationContext | null>(null);

export const LocationProvider = ({ children }: PropsWithChildren) => {
    const [permissonState, requestPermissionAsync] = Location.useForegroundPermissions();
    const locationRef = useRef<Location.LocationObject | null>(null);
    // TODO: to change the name of location to currentLocation and setCurrentLocation to use this for custom `take to my location button`
    const [location, setLocation] = useState<Location.LocationObject | null>(null);

    const { fetchLocation, selectedAddress, handleOnRegionChangeComplete, isLoading, setIsLoading, setSelectedAddress } = useLocationManager({
        permissonState,
        requestPermissionAsync,
        setLocation,
        locationRef,
    });

    useEffect(() => {
        if (permissonState !== null) {
            fetchLocation();
        }
    }, [permissonState])

    return (
        <LocationContext.Provider value={{ location, selectedAddress, handleOnRegionChangeComplete, setSelectedAddress, isLoading, setIsLoading }}>
            {children}
        </LocationContext.Provider>
    )
}

export function useLocation() {
    const state = useContext(LocationContext);
    if (!state) throw new Error("can't access location");
    return state;
}
