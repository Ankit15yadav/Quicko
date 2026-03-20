import TermsAndServices from "@src/components/terms-and-services";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { useKeyboardAnimation } from "react-native-keyboard-controller";
import { SafeAreaView } from "react-native-safe-area-context";
import { CHIP_ROWS, RADIAL_GLOWS, TICKER_ITEMS } from "../../constants";
import { useInitialAnimation } from "../../hooks/use-initial-animations";
import { useOnboarding } from "../../hooks/use-onboarding";
import RadialGlow from "../radio-glow";
import { styles } from "../styles";

// ─── FloatingChip ─────────────────────────────────────────────────────────────
const FloatingChip = ({
  emoji,
  label,
  delay,
}: {
  emoji: string;
  label: string;
  delay: number;
}) => {
  const mountAnim = useRef(new Animated.Value(0)).current;
  const floatAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Mount: slide up + fade in
    Animated.timing(mountAnim, {
      toValue: 1,
      duration: 500,
      delay,
      easing: Easing.out(Easing.back(1.4)),
      useNativeDriver: true,
    }).start();

    // Continuous float — each chip has a slightly different period
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: 1,
          duration: 1600 + delay * 0.8,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 1600 + delay * 0.8,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  const translateY = floatAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -7],
  });

  return (
    <Animated.View
      style={[
        styles.chip,
        {
          opacity: mountAnim,
          transform: [
            {
              translateY: Animated.add(
                mountAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [14, 0],
                }),
                translateY,
              ),
            },
            {
              scale: mountAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0.88, 1],
              }),
            },
          ],
        },
      ]}
    >
      <Text style={styles.chipEmoji}>{emoji}</Text>
      <Text style={styles.chipText}>{label}</Text>
    </Animated.View>
  );
};

// ─── MarqueeTicker ────────────────────────────────────────────────────────────
const MarqueeTicker = () => {
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
  }, []);

  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

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

// ─── Main Screen ──────────────────────────────────────────────────────────────
const UserOnboardingScreen = () => {

  // handles animation on page load.
  const { badgeAnim, headlineAnim, sheetAnim } = useInitialAnimation()
  const {
    sendOtp: { handleSubmit },
    number: { phoneNumber, setPhoneNumber },
    keyboardHandler: { handleKeyboardToggle }
  } = useOnboarding();
  const { progress } = useKeyboardAnimation();
  const [isFocused, setIsFocused] = useState(false);

  // ── Keyboard-driven sheet movement ─────────────────────────────
  const sheetTranslateY = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -8],
  });

  const isActive = !!phoneNumber.length;

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={handleKeyboardToggle}>
          <View style={{ flex: 1 }}>
            {/* ── Hero top ─────────────────────────────────────────── */}
            <Animated.View
              style={[
                styles.topView,
                // { opacity: topOpacity, transform: [{ scale: topScale }] },
              ]}
            >
              {RADIAL_GLOWS.map((glow, index) => (
                <RadialGlow key={index} {...glow} />
              ))}

              <View style={styles.topContent}>
                {/* Live badge */}
                <Animated.View
                  style={{
                    opacity: badgeAnim,
                    transform: [
                      {
                        scale: badgeAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0.8, 1],
                        }),
                      },
                      {
                        translateY: badgeAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [10, 0],
                        }),
                      },
                    ],
                  }}
                >
                  <View style={styles.liveBadge}>
                    <View style={styles.liveDot} />
                    <Text style={styles.liveBadgeText}>Delivering near you</Text>
                  </View>
                </Animated.View>

                {/* Headline */}
                <Animated.Text
                  style={[
                    styles.heroHeadline,
                    {
                      opacity: headlineAnim,
                      transform: [
                        {
                          translateY: headlineAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [18, 0],
                          }),
                        },
                      ],
                    },
                  ]}
                >
                  Everything you need,{"\n"}
                  <Text style={styles.heroAccent}>in 10 minutes</Text>
                </Animated.Text>

                {CHIP_ROWS.map((row, rowIdx) => (
                  <View key={rowIdx} style={styles.chipRow}>
                    {row.map((chip, i) => (
                      <FloatingChip
                        key={chip.label}
                        {...chip}
                        delay={300 + rowIdx * 180 + i * 80}
                      />
                    ))}
                  </View>
                ))}

                {/* Scrolling ticker */}
                <MarqueeTicker />
              </View>
            </Animated.View>

            {/* ── Bottom sheet ─────────────────────────────────────── */}
            <Animated.View
              style={[
                styles.bottomSheet,
                {
                  transform: [
                    { translateY: sheetTranslateY },
                    {
                      translateY: sheetAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [60, 0],
                      }),
                    },
                  ],
                  opacity: sheetAnim,
                },
              ]}
            >
              {/* Drag handle */}
              <View style={styles.sheetHandle} />

              {/* Brand row */}
              <View style={styles.brandRow}>
                <View style={styles.logoBox}>
                  <Image
                    source={require("@src/assets/images/quicko-logo.png")}
                    style={styles.logoImage}
                  />
                </View>
                <View style={styles.brandTextGroup}>
                  <Text style={styles.brandName}>Quicko</Text>
                  <Text style={styles.brandSub}>Log in or sign up to continue</Text>
                </View>
              </View>

              <View style={styles.divider} />

              {/* Input label */}
              <Text style={styles.inputLabel}>Mobile number</Text>

              {/* Phone input */}
              <View
                style={[
                  styles.inputWrapper,
                  isFocused && styles.inputWrapperFocused,
                ]}
              >
                <Text style={styles.flagEmoji}>🇮🇳</Text>
                <View style={styles.countryCodeSeparator} />
                <Text style={styles.countryCode}>+91</Text>
                <TextInput
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  placeholder="Enter mobile number"
                  placeholderTextColor="rgba(255,255,255,0.2)"
                  keyboardType="number-pad"
                  maxLength={10}
                  style={styles.input}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
              </View>

              {/* Continue button */}
              <Pressable
                style={({ pressed }) => [
                  styles.continueBtn,
                  isActive ? styles.continueBtnActive : styles.continueBtnInactive,
                  pressed && { opacity: 0.85, transform: [{ scale: 0.985 }] },
                ]}
                onPress={() => handleSubmit({ phoneNumber })}
                disabled={!phoneNumber}
              >
                <Text style={styles.continueText}>Continue</Text>
                {/* {isActive && <Text style={styles.continueArrow}>→</Text>} */}
              </Pressable>
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      <TermsAndServices />
    </SafeAreaView>
  );
};

export default UserOnboardingScreen;
