import LocationBottomDrawerScreen from "@src/screens/bottom-drawers/locationBottomDrawer.ios";
import { ScrollView } from "react-native";

const LocationBottomDrawer = () => {
    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: '#242529' }}
            showsVerticalScrollIndicator={false}
        >
            <LocationBottomDrawerScreen />
        </ScrollView>
    )
}

export default LocationBottomDrawer