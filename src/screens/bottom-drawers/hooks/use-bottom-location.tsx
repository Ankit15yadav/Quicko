import { LocationActionItemProps } from "@src/components/call-to-actions/location-action";
import { useRouter } from "expo-router";
import { LocateFixed, Plus } from "lucide-react-native";
import { LocationBottomDrawerStyle as styles } from "../styles";

export const useBottomLocation = () => {
    const { replace, push } = useRouter()
    const locationOptions: LocationActionItemProps[] = [
        {
            icon: LocateFixed,
            title: "Use your current location",
            subtitle: "Somnath Nagar",
            onPress: () => replace('/(main)/select-location'),
            hideLowerRounded: true,
            containerStyle: styles.marginTop,
        },
        {
            icon: Plus,
            title: "Add new address",
            hideUpperRounded: true,
            onPress: () => push("/(modals)/add-address")
        },
    ];

    const savedAddresses = [
        {
            id: '1',
            title: 'Home',
            badgeText: 'You are here',
            address:
                'Floor 3, 301, Big Blue white building Sri Venkat pg, Somnath Nagar, Wadgaon Sheri, Pune',
            phoneNumber: '9166304793',
        },
        {
            id: '2',
            title: 'Om bhai',
            address:
                '2nd Floor, Sigma Tech Park, Viman Nagar, Pune',
            phoneNumber: '9810760431',
            badgeText: '1000 km away'
        },
        {
            id: '3',
            title: 'Friend',
            address:
                'Flat 12, Green Residency, Kharadi, Pune',
            phoneNumber: '9988776655',
        },
        {
            id: '4',
            title: 'Gym',
            address:
                'Ground Floor, FitZone Complex, Nagar Road, Pune',
        },
        {
            id: '5',
            title: 'Gym',
            address:
                'Ground Floor, FitZone Complex, Nagar Road, Pune',
        },
    ];


    return {
        locationOptions,
        savedAddresses
    }
}