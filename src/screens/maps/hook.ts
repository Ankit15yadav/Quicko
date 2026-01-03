// import { useLocation } from "@src/contexts/location";
// import { ILatLong } from "@src/contexts/location/interface";
// import { Details, Region } from "react-native-maps";

// export function useMap() {
//     const { setLatLong,, selectedAddress } = useLocation()

//     const handleOnRegionChangeComplete = async (region: Region, details: Details) => {
//         const latLong: ILatLong = {
//             latitude: region.latitude,
//             longitude: region.longitude
//         }
//         setLatLong(latLong)
//         console.log([`lati: ${region.latitude}`, `longi: ${region.longitude}`])

//         address(latLong)
//     }

//     return {
//         handleOnRegionChangeComplete,
//     }
// }