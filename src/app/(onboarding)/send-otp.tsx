import { useRouter } from "expo-router";
import { Animated, Keyboard, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { useKeyboardAnimation } from "react-native-keyboard-controller";
import { SafeAreaView } from "react-native-safe-area-context";

const UserOnboarding = () => {
    const { push } = useRouter();
    const { progress } = useKeyboardAnimation();

    const translateY = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -50],
    });

    const scale = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0.95],
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
                keyboardVerticalOffset={100}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.topView} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Animated.View style={[
                        styles.bottomView,
                        {
                            transform: [
                                { translateY },
                                { scale }
                            ],
                        }
                    ]}>
                        <Animated.View style={{ opacity }}>
                            <View style={styles.logoWrapper}>
                                <Text style={styles.logoText}>blinkit</Text>
                            </View>
                            <Text style={styles.heading}>India's last minute app</Text>
                            <Text style={styles.subHeading}>Log in or sign up</Text>
                        </Animated.View>

                        <View style={styles.inputWrapper}>
                            <Text style={styles.countryCode}>+91</Text>
                            <TextInput
                                placeholder="Enter mobile number"
                                placeholderTextColor="#9CA3AF"
                                keyboardType="number-pad"
                                maxLength={10}
                                style={styles.input}
                            />
                        </View>
                        <Pressable style={styles.continueBtn} onPress={() => push({
                            pathname: '/(onboarding)/verify-otp',
                            params: {
                                number: '9166304793'
                            }
                        })}>
                            <Text style={styles.continueText}>Continue</Text>
                        </Pressable>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default UserOnboarding;

// ...existing code...


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0B0B0B",
    },

    keyboardView: {
        flex: 1,
    },

    topView: {
        flex: 1,
        backgroundColor: "#111",
    },

    bottomView: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 32,
    },

    logoWrapper: {
        width: 64,
        height: 64,
        borderRadius: 16,
        backgroundColor: "#FACC15",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },

    logoText: {
        fontWeight: "800",
        color: "#000",
        fontSize: 16,
    },

    heading: {
        color: "#FFFFFF",
        fontSize: 22,
        fontWeight: "700",
        marginBottom: 6,
    },

    subHeading: {
        color: "#9CA3AF",
        fontSize: 14,
        marginBottom: 24,
    },

    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 12,
        backgroundColor: "#1F2933",
        paddingHorizontal: 14,
        height: 52,
        marginBottom: 16,
    },

    countryCode: {
        color: "#FFFFFF",
        fontSize: 16,
        marginRight: 10,
    },

    input: {
        flex: 1,
        color: "#FFFFFF",
        fontSize: 16,
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
    },
});
