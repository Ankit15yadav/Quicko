import * as Location from "expo-location";

export interface ILatLong extends Pick<Location.LocationGeocodedLocation, 'latitude' | 'longitude'> {
}