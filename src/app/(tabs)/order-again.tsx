import { useLocationBottomDrawer } from "@src/contexts/location-bottom-drawer";
import { Text, TouchableOpacity } from "react-native";

export default function OrderAgain() {
    const { close } = useLocationBottomDrawer()
    return (
        <>
            <TouchableOpacity onPress={close}>
                <Text>open bottom drawer</Text>
            </TouchableOpacity>
            <Text>
                This is order again page
            </Text>
        </>
    )
}