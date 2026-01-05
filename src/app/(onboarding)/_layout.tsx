import { Stack } from "expo-router";

export default function OnBoardingLayout() {

    return (
        <Stack>
            <Stack.Screen name="send-otp" />
            <Stack.Screen name="verify-otp" />
        </Stack>
    )
}