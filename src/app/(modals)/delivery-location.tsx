import PressableHaptic from "@src/components/pressable-haptics";
import { useRouter } from "expo-router";
import { Text } from "react-native";

const LocationBottomDrawer = () => {
    const { push } = useRouter();
    return (
        <PressableHaptic 
        onPress={() => push('/(main)/select-location')}
        >
            <Text>This is bottom drawer</Text>
        </PressableHaptic>
    )
}

export default LocationBottomDrawer