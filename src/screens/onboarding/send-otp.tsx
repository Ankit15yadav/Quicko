import TermsAndServices from "@src/components/terms-and-services";
import { fontFamily } from "@src/constants/fonts";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Animated, Image, Keyboard, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { useKeyboardAnimation } from "react-native-keyboard-controller";
import { SafeAreaView } from "react-native-safe-area-context";
import { useOnboarding } from "./hooks/use-onboarding";

const UserOnboardingScreen = () => {
    const { push } = useRouter();
    const { handleSubmit } = useOnboarding()
    const { progress } = useKeyboardAnimation();
    const [number, setNumber] = useState<string>("");

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
        <SafeAreaView style={styles.container} edges={['top']} >
            <KeyboardAvoidingView
                style={styles.keyboardView}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.topView} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Animated.View style={[
                        styles.bottomView,
                        {
                            transform: [{ translateY }, { scale }],
                        }
                    ]}>
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
                        <Pressable style={styles.continueBtn} onPress={() => handleSubmit({ otp: number })}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0B0B0B",
    },

    keyboardView: {
        flex: 1,
    },
    HeaderSection: {
        alignItems: 'center'
    },
    topView: {
        flex: 1,
        backgroundColor: "#111",
    },

    bottomView: {
        height: '50%',
        paddingHorizontal: 24,
        paddingTop: 10,
    },

    logoWrapper: {
        width: 70,
        height: 70,
        borderRadius: 20,
        backgroundColor: "#FACC15",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
    },

    logoImage: {
        width: 80,
        height: 80,
        resizeMode: "contain",
    },

    heading: {
        color: "#FFFFFF",
        fontSize: 25,
        fontWeight: "700",
        marginBottom: 6,
        fontFamily: fontFamily.BlueBubble
    },

    subHeading: {
        color: "#9CA3AF",
        fontSize: 14,
        marginBottom: 24,
        fontFamily: fontFamily.BlueBubble

    },

    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 12,
        backgroundColor: "#1F2933",
        borderWidth: 1,
        borderColor: 'grey',
        paddingHorizontal: 14,
        height: 52,
        marginBottom: 16,
    },

    countryCode: {
        color: "#FFFFFF",
        fontSize: 16,
        marginRight: 10,
        fontFamily: fontFamily.BlueBubble
    },

    input: {
        flex: 1,
        color: "#FFFFFF",
        fontSize: 16,
        fontFamily: fontFamily.BlueBubble
    },

    continueBtn: {
        height: 52,
        borderRadius: 12,
        backgroundColor: "#6B7280",
        alignItems: "center",
        justifyContent: "center",
    },

    continueText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600",
        fontFamily: fontFamily.BlueBubble
    },
});
