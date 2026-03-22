import { usePageLoadOnce } from "@src/common/use-page-load-once";
import SquircleCard from "@src/components/squircles/card";
import { useLocalSearchParams } from "expo-router";
import { OTPInput, OTPInputRef, SlotProps } from "input-otp-native";
import { useRef } from "react";
import { Animated, Text, View } from "react-native";
import { useOnboarding } from "../../hooks/use-onboarding";

const defaultPhone: number = 9166304793;
const SLOT_SIZE = 40;

const UserVerificationScreen = () => {
  const { phoneNumber = defaultPhone } = useLocalSearchParams();
  const phoneNumberToUse = phoneNumber as string;
  const ref = useRef<OTPInputRef>(null);
  const {
    verifyOtp: { handleSubmit },
  } = useOnboarding();

  usePageLoadOnce(() => ref.current?.focus());

  const onComplete = (otp: string) => {
    setTimeout(() => {
      handleSubmit({ otp, phoneNumber: phoneNumberToUse });
      console.log("api call to verify otp: ", otp);
      ref.current?.clear();
    }, 100);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#272727ff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <OTPInput
        ref={ref}
        maxLength={6}
        onComplete={onComplete}
        render={({ slots }) => (
          <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
            {slots.map((slot, idx) => (
              <Slot key={idx} {...slot} index={idx} />
            ))}
          </View>
        )}
      />
    </View>
  );
};

function Slot({ char, isActive }: SlotProps & { index: number }) {
  return (
    <SquircleCard
      width={SLOT_SIZE}
      height={SLOT_SIZE + 2}
      style={{
        backgroundColor: "transparent",
        borderWidth: 1,
        borderRadius: 12,
        borderColor: isActive ? "white" : "gray",
        shadowColor: isActive ? "#111827" : "transparent",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: isActive ? 0.25 : 0,
        shadowRadius: isActive ? 6 : 0,
        elevation: isActive ? 4 : 0,
      }}
    >
      {char !== null && (
        <Animated.View>
          <Text style={{ fontSize: 20, fontWeight: "800", color: "white" }}>
            {char}
          </Text>
        </Animated.View>
      )}
    </SquircleCard>
  );
}

export default UserVerificationScreen;
