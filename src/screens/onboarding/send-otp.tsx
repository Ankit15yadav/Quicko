import TermsAndServices from "@src/components/terms-and-services";
import { useEffect, useRef, useState } from "react";
import {
    Animated,
    Easing,
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { useKeyboardAnimation } from "react-native-keyboard-controller";
import { SafeAreaView } from "react-native-safe-area-context";
import { useOnboarding } from "./hooks/use-onboarding";
import { styles } from "./styles";

// ─── Quick-commerce items shown as animated chips ─────────────────────────────
const ITEMS = [
  { emoji: "🥛", label: "Milk" },
  { emoji: "🍌", label: "Bananas" },
  { emoji: "💊", label: "Medicines" },
  { emoji: "🥚", label: "Eggs" },
  { emoji: "🧴", label: "Shampoo" },
  { emoji: "🍕", label: "Pizza" },
  { emoji: "☕", label: "Coffee" },
  { emoji: "🥗", label: "Salad" },
];

// ─── Single animated floating chip ───────────────────────────────────────────
const FloatingChip = ({
  emoji,
  label,
  delay,
}: {
  emoji: string;
  label: string;
  delay: number;
}) => {
  const translateY = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fade in
    Animated.timing(opacity, {
      toValue: 1,
      duration: 600,
      delay,
      useNativeDriver: true,
    }).start();

    // Continuous float loop
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: -8,
          duration: 1800 + delay * 0.3,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 1800 + delay * 0.3,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <Animated.View
      style={[styles.chip, { opacity, transform: [{ translateY }] }]}
    >
      <Text style={styles.chipEmoji}>{emoji}</Text>
      <Text style={styles.chipText}>{label}</Text>
    </Animated.View>
  );
};

// ─── Orbiting delivery dot animation ──────────────────────────────────────────
const PulsingDot = ({
  delay,
  size,
  color,
  style,
}: {
  delay: number;
  size: number;
  color: string;
  style?: object;
}) => {
  const scale = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(0.7)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(scale, {
            toValue: 1.6,
            duration: 900,
            delay,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 0,
            duration: 900,
            delay,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(scale, {
            toValue: 1,
            duration: 0,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 0.7,
            duration: 0,
            useNativeDriver: true,
          }),
        ]),
      ]),
    ).start();
  }, []);

  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: color,
          opacity,
          transform: [{ scale }],
        },
        style,
      ]}
    />
  );
};

// ─── Marquee ticker row ────────────────────────────────────────────────────────
const TICKER_ITEMS = [
  "⚡ 10-min delivery",
  "🛒 10,000+ products",
  "🆓 Free delivery on first order",
  "📦 No minimum order",
  "🌙 Open till midnight",
  "💚 Fresh & quality guaranteed",
];

const MarqueeTicker = () => {
  const translateX = useRef(new Animated.Value(0)).current;
  const FULL_WIDTH = 1400; // approximate total content width

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: -FULL_WIDTH / 2,
        duration: 14000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS]; // seamless loop

  return (
    <View style={{ overflow: "hidden", width: "100%" }}>
      <Animated.View
        style={{
          flexDirection: "row",
          transform: [{ translateX }],
        }}
      >
        {doubled.map((item, i) => (
          <Text
            key={i}
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: 11,
              fontWeight: "500",
              marginRight: 28,
              letterSpacing: 0.3,
            }}
          >
            {item}
          </Text>
        ))}
      </Animated.View>
    </View>
  );
};

// ─── Main Screen ──────────────────────────────────────────────────────────────
const UserOnboardingScreen = () => {
  const { handleSubmit } = useOnboarding();
  const { progress } = useKeyboardAnimation();
  const [number, setNumber] = useState<string>("");

  // Headline fade-in
  const headlineAnim = useRef(new Animated.Value(0)).current;
  const badgeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.stagger(200, [
      Animated.timing(badgeAnim, {
        toValue: 1,
        duration: 700,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(headlineAnim, {
        toValue: 1,
        duration: 700,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  // Keyboard-driven animations on bottom card
  const translateY = progress.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: [0, -10, -20, -30, -50],
  });

  const scale = progress.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: [1, 0.98, 0.96, 0.94, 0.92],
  });

  const opacity = progress.interpolate({
    inputRange: [0, 0.5],
    outputRange: [1, 0.7],
  });

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {/* ── Top animated section ─────────────────────────────── */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.topView}>
            {/* Background pulsing dots (decorative) */}
            <PulsingDot
              delay={0}
              size={120}
              color="rgba(48,180,48,0.08)"
              style={{ top: "15%", left: "10%" }}
            />
            <PulsingDot
              delay={400}
              size={80}
              color="rgba(48,180,48,0.06)"
              style={{ top: "50%", right: "5%" }}
            />
            <PulsingDot
              delay={800}
              size={60}
              color="rgba(250,204,21,0.07)"
              style={{ bottom: "20%", left: "40%" }}
            />

            {/* Content */}
            <View style={styles.topContentWrapper}>
              {/* Live badge */}
              <Animated.View
                style={[
                  styles.floatingBadge,
                  {
                    opacity: badgeAnim,
                    transform: [
                      {
                        translateY: badgeAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [10, 0],
                        }),
                      },
                    ],
                  },
                ]}
              >
                <View style={styles.floatingBadgeDot} />
                <Text style={styles.floatingBadgeText}>
                  Delivering near you
                </Text>
              </Animated.View>

              {/* Headline */}
              <Animated.Text
                style={[
                  styles.topHeadline,
                  {
                    opacity: headlineAnim,
                    transform: [
                      {
                        translateY: headlineAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [16, 0],
                        }),
                      },
                    ],
                  },
                ]}
              >
                Everything you need,{"\n"}
                <Text style={styles.topHeadlineAccent}>in 10 minutes</Text>
              </Animated.Text>

              {/* Floating item chips — row 1 */}
              <View style={styles.chipContainer}>
                {ITEMS.slice(0, 4).map((item, i) => (
                  <FloatingChip
                    key={item.label}
                    {...item}
                    delay={300 + i * 120}
                  />
                ))}
              </View>

              {/* Floating item chips — row 2 */}
              <View style={styles.chipContainer}>
                {ITEMS.slice(4).map((item, i) => (
                  <FloatingChip
                    key={item.label}
                    {...item}
                    delay={700 + i * 120}
                  />
                ))}
              </View>

              {/* Scrolling ticker */}
              <MarqueeTicker />
            </View>
          </View>
        </TouchableWithoutFeedback>

        {/* ── Bottom card ──────────────────────────────────────── */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Animated.View
            style={[
              styles.bottomView,
              { transform: [{ translateY }, { scale }] },
            ]}
          >
            <Animated.View style={[styles.HeaderSection, { opacity }]}>
              <View style={styles.logoWrapper}>
                <Image
                  source={require("@src/assets/images/quicko-logo.png")}
                  style={styles.logoImage}
                />
              </View>
              <Text style={styles.heading}>India's last minute app</Text>
              <Text style={styles.subHeading}>Log in or sign up</Text>
            </Animated.View>

            <View style={styles.inputWrapper}>
              <Text style={styles.countryCode}>+91</Text>
              <TextInput
                value={number}
                onChangeText={setNumber}
                placeholder="Enter mobile number"
                placeholderTextColor="#9CA3AF"
                keyboardType="number-pad"
                maxLength={10}
                style={styles.input}
              />
            </View>

            <Pressable
              style={[
                styles.continueBtn,
                { backgroundColor: number.length > 0 ? "#30b430" : "#6B7280" },
              ]}
              onPress={() => handleSubmit({ phoneNumber: number })}
            >
              <Text style={styles.continueText}>Continue</Text>
            </Pressable>
          </Animated.View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      <TermsAndServices />
    </SafeAreaView>
  );
};

export default UserOnboardingScreen;
