import { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";

type PositionValue =
  | number
  | `${number}%`
  | Animated.Value
  | Animated.AnimatedInterpolation<number | string>;

export type RadialGlowProps = {
  top?: PositionValue;
  left?: PositionValue;
  size: number;
  color: string;
  delay: number;
};

const RadialGlow = ({ top, left, size, color, delay }: RadialGlowProps) => {
  const pulse = useRef(new Animated.Value(0.6)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1,
          duration: 2200,
          delay,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(pulse, {
          toValue: 0.6,
          duration: 2200,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <Animated.View
      pointerEvents="none"
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: color,
        opacity: pulse,
        top: top,
        left: left,
      }}
    />
  );
};

export default RadialGlow;
