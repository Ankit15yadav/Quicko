import { useThemedStyles } from "@src/common/hooks";
import PressableHaptic from "@src/components/pressable-haptics";
import { Text } from "react-native";
import { MESSAGES } from "../../constants";
import { getBaseStyle } from "./style";

interface IResendOtp {
  screenHeight: number;
  timer: number;
  reset: () => void;
}

const TimerSection = ({ screenHeight, timer }: Omit<IResendOtp, "reset">) => {
  const { base, timerText } = useThemedStyles((theme) =>
    getBaseStyle(screenHeight, theme),
  );
  return (
    <Text style={[base, timerText]}>
      {MESSAGES.RESEND_OTP} in {timer}s
    </Text>
  );
};

const ResendSection = ({ reset, screenHeight }: Omit<IResendOtp, "timer">) => {
  const { base, resendText } = useThemedStyles((theme) =>
    getBaseStyle(screenHeight, theme),
  );
  return (
    <PressableHaptic onPress={reset}>
      <Text style={[base, resendText]}>{MESSAGES.RESEND_OTP}</Text>
    </PressableHaptic>
  );
};

const ResendOtp = ({ timer, reset, screenHeight }: IResendOtp) => {
  const isTimerActive = timer > 0;

  return isTimerActive ? (
    <TimerSection screenHeight={screenHeight} timer={timer} />
  ) : (
    <ResendSection reset={reset} screenHeight={screenHeight} />
  );
};

export default ResendOtp;
