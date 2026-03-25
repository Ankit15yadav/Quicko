// components/SquircleMarquee.tsx
import SquircleCard from "@src/components/squircles/card";
import { MARQUEE_ROWS, MarqueeItem } from "@src/screens/onboarding/constants";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

// ─── single chip using YOUR SquircleCard ─────────────────────────────────────
interface ChipProps {
  item: MarqueeItem;
  size: number;
}

const Chip: React.FC<ChipProps> = ({ item, size }) => (
  <SquircleCard
    width={size}
    height={size}
    style={{ backgroundColor: item.bg }} // passes straight into your style prop
  >
    <View style={styles.chipInner}>
      <Text style={[styles.emoji, { fontSize: size * 0.6 }]}>{item.emoji}</Text>
    </View>
  </SquircleCard>
);

// ─── one infinite scrolling row ───────────────────────────────────────────────
interface RowProps {
  items: MarqueeItem[];
  size: number;
  gap: number;
  direction: "left" | "right";
  speed: number; // px per second
}

const MarqueeRow: React.FC<RowProps> = ({
  items,
  size,
  gap,
  direction,
  speed,
}) => {
  const translateX = useRef(new Animated.Value(0)).current;
  // duplicate so the seam is invisible
  const doubled = [...items, ...items];
  const totalWidth = items.length * (size + gap);

  useEffect(() => {
    const start = direction === "right" ? -totalWidth : 0;
    const end = direction === "right" ? 0 : -totalWidth;
    translateX.setValue(start);

    const anim = Animated.loop(
      Animated.timing(translateX, {
        toValue: end,
        duration: (totalWidth / speed) * 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );
    anim.start();
    return () => anim.stop();
  }, [totalWidth, speed, direction]);

  return (
    <View style={styles.rowClip}>
      <Animated.View
        style={[styles.rowInner, { gap, transform: [{ translateX }] }]}
      >
        {doubled.map((item, i) => (
          <Chip key={`${item.id}-${i}`} item={item} size={size} />
        ))}
      </Animated.View>
    </View>
  );
};

// ─── main component ───────────────────────────────────────────────────────────
interface SquircleMarqueeProps {
  cardSizeRatio?: number; // fraction of screen width, default 0.22
  gap?: number;
  speeds?: [number, number, number];
}

const SquircleMarquee: React.FC<SquircleMarqueeProps> = ({
  cardSizeRatio = 0.22,
  gap = 10,
  speeds = [38, 30, 44],
}) => {
  const { width: screenWidth } = useWindowDimensions();
  const size = Math.floor(screenWidth * cardSizeRatio);

  return (
    <View style={[styles.wrapper, { gap }]}>
      {MARQUEE_ROWS.map((row, idx) => (
        <MarqueeRow
          key={idx}
          items={row}
          size={size}
          gap={gap}
          direction={idx % 2 === 0 ? "left" : "right"}
          speed={speeds[idx] ?? 38}
        />
      ))}
    </View>
  );
};

export default SquircleMarquee;

const styles = StyleSheet.create({
  wrapper: { overflow: "hidden" },
  rowClip: { overflow: "hidden" },
  rowInner: { flexDirection: "row", alignItems: "center" },
  chipInner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  emoji: { textAlign: "center" },
});
