import { useLocalSearchParams } from "expo-router"
import { Text } from "react-native"

export default function Cart() {
    const { isDefaultJourney } = useLocalSearchParams()
    return (
        <Text>
            This is the cart page and is this journey default: {isDefaultJourney}
        </Text>
    )
}