import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const UserVerification = () => {

    const { number } = useLocalSearchParams()

    return (
        <View>
            <Text>{number}</Text>
        </View>
    )
}

export default UserVerification;