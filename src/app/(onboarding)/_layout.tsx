import PageHeader from "@src/components/page-header";
import { Stack } from "expo-router";

export default function OnBoardingLayout() {
  return (
    <Stack>
      <Stack.Screen name="send-otp" options={{ headerShown: false }} />
      <Stack.Screen
        name="verify-otp"
        options={{
          headerShown: true,
          header: () => <PageHeader name="OTP Verification" />,
        }}
      />
    </Stack>
  );
}
