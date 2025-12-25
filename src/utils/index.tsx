import * as Haptic from "expo-haptics";

export function HapticFeel(
    touch?: keyof typeof Haptic.ImpactFeedbackStyle,
    delay: number = 10
): void {
    setTimeout(() => {
        Haptic.impactAsync(Haptic.ImpactFeedbackStyle[touch ?? 'Light']);
    }, delay);
}