import { useEffect, useRef } from "react";
import { Animated, Easing, Text } from "react-native";
import { styles } from "./styles";

const FloatingChip = ({
  emoji,
  label,
  delay,
}: {
  emoji: string;
  label: string;
  delay: number;
}) => {
  const mountAnim = useRef(new Animated.Value(0)).current;
  const floatAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Mount: slide up + fade in
    Animated.timing(mountAnim, {
      toValue: 1,
      duration: 500,
      delay,
      easing: Easing.out(Easing.back(1.4)),
      useNativeDriver: true,
    }).start();

    // Continuous float — each chip has a slightly different period
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: 1,
          duration: 1600 + delay * 0.8,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 1600 + delay * 0.8,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [delay, floatAnim, mountAnim]);

  const translateY = floatAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -7],
  });

  return (
    <Animated.View
      style={[
        styles.chip,
        {
          opacity: mountAnim,
          transform: [
            {
              translateY: Animated.add(
                mountAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [14, 0],
                }),
                translateY,
              ),
            },
            {
              scale: mountAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0.88, 1],
              }),
            },
          ],
        },
      ]}
    >
      <Text style={styles.chipEmoji}>{emoji}</Text>
      <Text style={styles.chipText}>{label}</Text>
    </Animated.View>
  );
};

export default FloatingChip;
