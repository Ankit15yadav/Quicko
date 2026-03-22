import * as Haptic from "expo-haptics";

export function HapticFeel(
    touch?: keyof typeof Haptic.ImpactFeedbackStyle,
    delay: number = 10
): void {
    setTimeout(() => {
        Haptic.impactAsync(Haptic.ImpactFeedbackStyle[touch ?? 'Light']);
    }, delay);
}

export function isTokenExpired(token: string | null) {
    return false;
}

export const squirclePath = (
    width: number,
    height: number,
    exponent: number,
    cornerRadius?: number // kept for API consistency but superellipse doesn't use it directly
): string => {
    const n = exponent; // exponent for superellipse (squircle)
    const a = width / 2;
    const b = height / 2;

    // Parametric t from 0 to 1, map to angle 0..2pi
    const getPoint = (t: number) => {
        const angle = t * 2 * Math.PI;
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);
        const x = a * Math.sign(cosA) * Math.pow(Math.abs(cosA), 2 / n);
        const y = b * Math.sign(sinA) * Math.pow(Math.abs(sinA), 2 / n);
        return { x: x + width / 2, y: y + height / 2 };
    };

    // Build path by sampling points
    let path = '';
    const steps = 100; // smoothness
    for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const { x, y } = getPoint(t);
        if (i === 0) path += `M ${x} ${y}`;
        else path += ` L ${x} ${y}`;
    }
    path += ' Z';
    return path;
};