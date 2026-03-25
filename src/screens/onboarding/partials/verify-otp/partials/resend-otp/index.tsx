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
  const s = getBaseStyle(screenHeight);
  return (
    <Text style={[s.base, s.timerText]}>
      {MESSAGES.RESEND_OTP} in {timer}s
    </Text>
  );
};

const ResendSection = ({ reset, screenHeight }: Omit<IResendOtp, "timer">) => {
  const s = getBaseStyle(screenHeight);
  return (
    <PressableHaptic onPress={reset}>
      <Text style={[s.base, s.resendText]}>{MESSAGES.RESEND_OTP}</Text>
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
