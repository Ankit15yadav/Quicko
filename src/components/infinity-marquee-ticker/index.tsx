import { useEffect, useRef } from "react";
import { Animated, Easing, Text, View } from "react-native";
import { styles } from "./styles";

interface ITickerItem {
  tickerItem: string[];
}

const MarqueeTicker = ({ tickerItem }: ITickerItem) => {
  const x = useRef(new Animated.Value(0)).current;
  // Approximate total width of one copy of the list
  const TILE_WIDTH = 1200;

  useEffect(() => {
    Animated.loop(
      Animated.timing(x, {
        toValue: -TILE_WIDTH,
        duration: 16000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [x]);

  const doubled = [...tickerItem, ...tickerItem];

  return (
    <View style={styles.tickerWrapper}>
      <Animated.View
        style={[styles.tickerRow, { transform: [{ translateX: x }] }]}
      >
        {doubled.map((t, i) => (
          <Text key={i} style={styles.tickerItem}>
            {t}
          </Text>
        ))}
      </Animated.View>
    </View>
  );
};

export default MarqueeTicker;
