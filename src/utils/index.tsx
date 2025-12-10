import * as Haptic from "expo-haptics";

export async function HapticFeel(
    touch?: keyof typeof Haptic.ImpactFeedbackStyle,
) {
    return Haptic.impactAsync(Haptic.ImpactFeedbackStyle[touch ?? 'Light']);
}