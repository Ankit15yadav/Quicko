import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';
import { createContext, PropsWithChildren, useContext } from "react";

const STORAGE_KEYS = {
    LOCATION: '@quicko/user_location',
};

interface IStorageContext {
    saveLocation: (location: Location.LocationObject) => Promise<void>;
    getLocation: () => Promise<Location.LocationObject | null>;
    clearLocation: () => Promise<void>;
}

const StorageContext = createContext<IStorageContext | null>(null);

export const StorageProvider = ({ children }: PropsWithChildren) => {
    const saveLocation = async (location: Location.LocationObject, freshTime?: number) => {
        try {
            await AsyncStorage.setItem(STORAGE_KEYS.LOCATION, JSON.stringify(location));
        } catch (error) {
            console.error('Error saving location:', error);
        }
    };

    const getLocation = async (): Promise<Location.LocationObject | null> => {
        try {
            const locationData = await AsyncStorage.getItem(STORAGE_KEYS.LOCATION);
            return locationData ? JSON.parse(locationData) : null;
        } catch (error) {
            console.error('Error getting location:', error);
            return null;
        }
    };

    const clearLocation = async () => {
        try {
            await AsyncStorage.removeItem(STORAGE_KEYS.LOCATION);
        } catch (error) {
            console.error('Error clearing location:', error);
        }
    };

    return (
        <StorageContext.Provider value={{ saveLocation, getLocation, clearLocation }} >
            {children}
        </StorageContext.Provider>
    )
}

export const useStorage = () => {
    const state = useContext(StorageContext);
    if (!state) throw new Error("useStorage must be used within StorageProvider");
    return state;
}