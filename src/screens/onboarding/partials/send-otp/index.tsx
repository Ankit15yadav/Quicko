import { useThemedStyles } from "@src/common/hooks";
import SquircleButton from "@src/components/squircles/button";
import TermsAndServices from "@src/components/terms-and-services";
import { useState } from "react";
import {
  Animated,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useOnboarding } from "../../hooks/use-onboarding";
import SquircleMarquee from "./partials/hero-section";
import InputContainerHeader from "./partials/input-container-header";
import PhoneNumberInput from "./partials/phone-input";
import { styles as sendOtpStyles } from "./styles";

const UserOnboardingScreen = () => {
  const {
    sendOtp: { handleSubmit },
    number: { phoneNumber, setPhoneNumber },
    keyboardHandler: { handleKeyboardToggle },
  } = useOnboarding();

  const [isFocused, setIsFocused] = useState(false);

  const isActive = !!phoneNumber.length;

  const styles = useThemedStyles((theme) => sendOtpStyles(theme, isActive));

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={handleKeyboardToggle}>
          <View style={{ flex: 1 }}>
            {/* hero section */}
            <Animated.View
              style={styles.topView}
              data-testid="hero-section-component"
            >
              <SquircleMarquee cardSizeRatio={0.35} />
            </Animated.View>

            {/* mobile number input section */}
            <View style={styles.bottomSheet}>
              <InputContainerHeader />
              <View style={styles.divider} />
              <PhoneNumberInput
                isFocused={isFocused}
                phoneNumber={phoneNumber}
                setIsFocused={setIsFocused}
                setPhoneNumber={setPhoneNumber}
              />

              <SquircleButton
                style={[
                  styles.continueBtn,
                  isActive
                    ? styles.continueBtnActive
                    : styles.continueBtnInactive,
                ]}
                onPress={() => handleSubmit({ phoneNumber })}
                disabled={!phoneNumber}
                hapticFeel="Medium"
              >
                <Text style={styles.continueText}>Continue</Text>
              </SquircleButton>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      {/* footer - terms and conditions */}
      <TermsAndServices data-testid="Terms-and-conditions" />
    </SafeAreaView>
  );
};

export default UserOnboardingScreen;
