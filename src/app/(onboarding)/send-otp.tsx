import UserOnboardingScreen from "@src/screens/onboarding/send-otp"
import { useLocalSearchParams } from "expo-router"

const UserOnboarding = () => {

    const { number } = useLocalSearchParams()

    return (
        <UserOnboardingScreen />
    )
}

export default UserOnboarding