import PressableHaptic from "@src/components/pressable-haptics";
import { useRouter } from "expo-router";
import { Text } from "react-native";

const LocationBottomDrawer = () => {
    const { replace } = useRouter();
    return (
        <PressableHaptic
            onPress={() => {
                replace('/(main)/select-location')
            }}
        >
            <Text>This is bottom drawer</Text>
        </PressableHaptic>
    )
}

export default LocationBottomDrawer