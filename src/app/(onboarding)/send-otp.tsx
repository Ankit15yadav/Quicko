import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

const UserOnboarding = () => {
    const { push } = useRouter()
    return (
        <View>
            <Text>
                This is user onboarding page
            </Text>
            <Pressable style={{ backgroundColor: "#5fb1caff", padding: 6, width: 100, borderRadius: 10, marginTop: 10 }} onPress={() => push("/(onboarding)/verify-otp")} >
                <Text style={{ textAlign: 'center', color: "white", }} >
                    Send otp
                </Text>
            </Pressable>
        </View>
    )
}

export default UserOnboarding;