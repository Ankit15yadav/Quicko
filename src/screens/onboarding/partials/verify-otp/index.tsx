import { useTimer } from "@src/common/hooks";
import { usePageLoadOnce } from "@src/common/use-page-load-once";
import { useLocalSearchParams } from "expo-router";
import { OTPInputRef } from "input-otp-native";
import { lazy, Suspense, useRef } from "react";
import { useWindowDimensions, View } from "react-native";
import { useOnboarding } from "../../hooks/use-onboarding";
import OtpInputComponent from "./partials/otp-input";
import OtpSentNotice from "./partials/otp-sent-notice";
import ResendOtp from "./partials/resend-otp";
import { getStyles } from "./style";

const ErrorMessage = lazy(() => import("../verify-otp/partials/error-message"));

const defaultPhone: number = 9166304793;

const UserVerificationScreen = () => {
  const { height: screenHeight } = useWindowDimensions();
  const { phoneNumber = defaultPhone } = useLocalSearchParams();
  const phoneNumberToUse = phoneNumber as string;
  const ref = useRef<OTPInputRef>(null);

  const {
    verifyOtp: { handleSubmit, isVerificationError, error },
  } = useOnboarding();
  const { timer, reset } = useTimer(30);

  usePageLoadOnce(() => ref.current?.focus());

  const onComplete = (otp: string) => {
    handleSubmit({ otp, phoneNumber: phoneNumberToUse });
    ref.current?.clear();
  };

  const styles = getStyles(screenHeight);

  return (
    <View style={styles.container}>
      {/* otp sent message section */}
      <OtpSentNotice
        phoneNumber={phoneNumberToUse}
        screenHeight={screenHeight}
      />

      {/* otp input slots */}
      <OtpInputComponent onCompleteHandler={onComplete} ref={ref} />

      {/* validation error message component */}
      {isVerificationError && (
        <Suspense fallback={null}>
          <ErrorMessage error={error} isOtpError screenHeight={screenHeight} />
        </Suspense>
      )}

      {/* resend otp timer component */}
      <ResendOtp reset={reset} screenHeight={screenHeight} timer={timer} />
    </View>
  );
};

export default UserVerificationScreen;
