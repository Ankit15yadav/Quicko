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

// squircle-path.ts — fixed
export const squirclePath = (width: number, height: number, exponent?: number): string => {
    const n = exponent ?? 4; // higher = more squircle-like, closer to iOS
    const a = width / 2;
    const b = height / 2;
    const cx = width / 2;
    const cy = height / 2;

    const getPoint = (t: number) => {
        const angle = t * 2 * Math.PI;
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);
        // superellipse formula: |x/a|^n + |y/b|^n = 1
        const x = a * Math.sign(cosA) * Math.pow(Math.abs(cosA), 2 / n);
        const y = b * Math.sign(sinA) * Math.pow(Math.abs(sinA), 2 / n);
        return { x: x + cx, y: y + cy };
    };

    // 200 steps = smooth enough for any screen density
    const steps = 200;
    let path = '';
    for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const { x, y } = getPoint(t);
        path += i === 0 ? `M ${x.toFixed(3)} ${y.toFixed(3)}` : ` L ${x.toFixed(3)} ${y.toFixed(3)}`;
    }
    return path + ' Z';
};