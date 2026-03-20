import React, { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";
import { BaseToastProps } from "react-native-toast-message";

export const SuccessToast = (props: BaseToastProps) => {
  const shimmer = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.85)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Entry animation
    Animated.parallel([
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
        tension: 80,
        friction: 8,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start();

    // Shimmer loop
    Animated.loop(
      Animated.sequence([
        Animated.timing(shimmer, {
          toValue: 1,
          duration: 1800,
          useNativeDriver: true,
        }),
        Animated.timing(shimmer, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  const shimmerTranslate = shimmer.interpolate({
    inputRange: [0, 1],
    outputRange: [-120, 280],
  });

  return (
    <Animated.View
      style={[styles.container, { transform: [{ scale }], opacity }]}
    >
      {/* Shimmer overlay */}
      {/* <Animated.View
        style={[
          styles.shimmer,
          { transform: [{ translateX: shimmerTranslate }] },
        ]}
        pointerEvents="none"
      /> */}

      {/* Left: Logo badge */}
      <View style={styles.logoBadge}>
        {/* <View style={styles.logoGlow} /> */}
        <Image
          source={require("@src/assets/images/quicko-logo.png")}
          style={{ width: 50, height: 60 }}
        />
        {/* Success tick badge */}
        <View style={styles.tickBadge}>
          <Text style={styles.tickText}>✓</Text>
        </View>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Right: Text content */}
      <View style={styles.textBlock}>
        <Text style={styles.title} numberOfLines={1}>
          {props.text1 ?? "Success!"}
        </Text>
        {props.text2 ? (
          <Text style={styles.subtitle} numberOfLines={2}>
            {props.text2}
          </Text>
        ) : null}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0F1A12", // Deep forest base
    borderRadius: 18,
    marginHorizontal: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginTop: 15,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#2A7A3B",
    shadowColor: "#1DB954",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 12,
    minHeight: 72,
    maxWidth: "auto",
    width: "100%",
  },

  // Shimmer sweep
  shimmer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 60,
    backgroundColor: "rgba(255,255,255,0.06)",
    transform: [{ skewX: "-20deg" }],
    zIndex: 10,
  },

  // Logo section
  logoBadge: {
    width: 50,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#FACC15",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#2ECC71",
    overflow: "visible",
  },
  logoGlow: {
    position: "absolute",
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#fcbf85ef",
  },
  logo: {
    width: 28,
    height: 28,
  },
  tickBadge: {
    position: "absolute",
    bottom: -5,
    right: -5,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#FF6B1A", // Brand orange
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#0F1A12",
  },
  tickText: {
    color: "#fff",
    fontSize: 9,
    fontWeight: "800",
    lineHeight: 11,
  },

  // Divider
  divider: {
    width: 1,
    height: 36,
    backgroundColor: "#2A7A3B",
    marginHorizontal: 14,
    opacity: 0.6,
  },

  // Text
  textBlock: {
    flex: 1,
    justifyContent: "center",
    gap: 3,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "600",
    letterSpacing: 0.2,
  },
  subtitle: {
    color: "#8BAF8E", // Muted green-grey
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 17,
  },
});
