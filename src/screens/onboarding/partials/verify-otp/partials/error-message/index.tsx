import { useShakeAnimation, useThemedStyles } from "@src/common/hooks";
import { ApiError } from "@src/screens/onboarding/api";
import * as Haptics from "expo-haptics";
import { useEffect, useRef } from "react";
import { Animated, Text } from "react-native";
import { getStyles } from "./style";

interface IErrorMessage {
  isOtpError: boolean;
  error: ApiError | null;
  screenHeight: number;
}

const ErrorMessage = ({ error, screenHeight, isOtpError }: IErrorMessage) => {
  const errorRef = useRef(new Animated.Value(0));
  const { triggerShake } = useShakeAnimation({ ref: errorRef });
  const styles = useThemedStyles((theme) => getStyles(screenHeight, theme));

  useEffect(() => {
    if (!isOtpError) return;
    // generated vibartion on every error
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    triggerShake();
  }, [isOtpError]);

  return (
    <Animated.View style={{ transform: [{ translateX: errorRef.current }] }}>
      <Text style={styles.errorText}>
        {error?.data?.message ?? error?.message}
      </Text>
    </Animated.View>
  );
};

export default ErrorMessage;
