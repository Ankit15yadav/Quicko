import PressableHaptic from "@src/components/pressable-haptics";
import TermsAndServices from "@src/components/terms-and-services";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, Text, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useOnboarding } from "../../hooks/use-onboarding";
import HeroSection from "../hero-section";
import InputContainerHeader from "../input-container-header";
import PhoneNumberInput from "../phone-input";
import { styles } from "../styles";

const UserOnboardingScreen = () => {

  const {
    sendOtp: { handleSubmit },
    number: { phoneNumber, setPhoneNumber },
    keyboardHandler: { handleKeyboardToggle }
  } = useOnboarding();

  const [isFocused, setIsFocused] = useState(false);

  const isActive = !!phoneNumber.length;

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={handleKeyboardToggle}>
          <View style={{ flex: 1 }}>

            <HeroSection data-testid='send-otp-hero-section' />

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

              <PressableHaptic
                style={[
                  styles.continueBtn,
                  isActive ? styles.continueBtnActive : styles.continueBtnInactive,
                ]}
                onPress={() => handleSubmit({ phoneNumber })}
                disabled={!phoneNumber}
                hapticFeel="Medium"
              >
                <Text style={styles.continueText}>
                  Continue
                </Text>
              </PressableHaptic>

            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      <TermsAndServices data-testid='Terms-and-conditions' />

    </SafeAreaView>
  );
};

export default UserOnboardingScreen;
