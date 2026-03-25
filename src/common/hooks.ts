import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import { Animated } from "react-native";

export const useTimer = (seconds: number = 60) => {
  const [timer, setTimer] = useState<number>(seconds);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = useCallback(() => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, []);

  const reset = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setTimer(seconds);
    start();
  }, [seconds, start]);

  useEffect(() => {
    start();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [start]);

  return { timer, reset };
};

export const useShakeAnimation = ({
  ref,
}: {
  ref: RefObject<Animated.Value>;
}) => {
  const triggerShake = () => {
    ref.current.setValue(0);

    Animated.sequence([
      Animated.timing(ref.current, {
        toValue: 6,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(ref.current, {
        toValue: -6,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(ref.current, {
        toValue: 5,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(ref.current, {
        toValue: -5,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(ref.current, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return { triggerShake };
};
