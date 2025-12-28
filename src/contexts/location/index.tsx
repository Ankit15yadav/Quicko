import * as Location from "expo-location";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { Alert } from "react-native";

interface ILocationContext {
    location: Location.LocationObject | null;
}

interface ILocationProvider {
    children: React.ReactNode;
}

const LocationContext = createContext<ILocationContext | null>(null);

export const LocationProvider = ({ children }: ILocationProvider) => {
    const [permissonState, requestPermissionAsync] = Location.useForegroundPermissions()
    const locationRef = useRef<Location.LocationObject | null>(null)
    const [location, setLocation] = useState<Location.LocationObject | null>(null)

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
    }

    const getCurrentLocation = async () => {
        const ok = await ensurePermission();
        if (!ok) return;

        const location = await Location.getCurrentPositionAsync({ accuracy: Location.LocationAccuracy.Balanced })
        return location
    }

    const fetchLocation = async () => {
        const userLocation = await getCurrentLocation();
        if (!userLocation) {
            setLocation(null);
            return;
        }
        locationRef.current = userLocation;
        setLocation(userLocation);
    };


    useEffect(() => {

        if (permissonState !== null) {
            fetchLocation();
        }
    }, [permissonState])

    return (
        <LocationContext.Provider value={{ location }}>
            {children}
        </LocationContext.Provider>
    )
}

export function useLocation() {
    const state = useContext(LocationContext);
    if (!state) throw new Error("can't access location");
    return state;
}
