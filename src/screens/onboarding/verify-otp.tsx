import HeaderText from "@src/common/header-text"
import PageHeader from "@src/components/page-header"
import { useLocalSearchParams } from "expo-router"
import { Text, View } from "react-native"

const UserVerificationScreen = () => {

    const { number } = useLocalSearchParams()

    return (
        <View>
            <PageHeader name="OTP Verification" />
            <HeaderText text="We have sent a verification code to" variant="heading-2" />
            <Text>+91 {number}</Text>
        </View>
    )
}

export default UserVerificationScreen