import { useEffect, useRef } from "react";
import { Animated } from "react-native";

// interface IAnimationRef {
//     badgeAnim: Animated.Value;
//     headlineAnim: Animated.Value;
//     sheetAnim: Animated.Value;
// }

export function useInitialAnimation() {

    const badgeAnim = useRef(new Animated.Value(0)).current;
    const headlineAnim = useRef(new Animated.Value(0)).current;
    const sheetAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.stagger(120, [
            Animated.spring(badgeAnim, {
                toValue: 1,
                tension: 80,
                friction: 9,
                useNativeDriver: true,
            }),
            Animated.spring(headlineAnim, {
                toValue: 1,
                tension: 80,
                friction: 9,
                useNativeDriver: true,
            }),
            Animated.spring(sheetAnim, {
                toValue: 1,
                tension: 60,
                friction: 10,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    return {
        badgeAnim, headlineAnim, sheetAnim
    }
}