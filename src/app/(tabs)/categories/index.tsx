import { useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

export default function Categories() {
    const { push } = useRouter()
    return (
        <Text>
            This is category page
            <TouchableOpacity onPress={() => push({
                pathname: '/cart',
                params: {
                    isDefaultJourney: 'false'
                }
            })}>
                <Text>Go to next page</Text>
            </TouchableOpacity>
        </Text>
    )
}