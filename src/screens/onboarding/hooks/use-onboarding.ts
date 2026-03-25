import { ISendOtp, IVerifyOtp } from "@src/services/operations/auth";
import { HttpStatusCode } from "axios";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Keyboard } from "react-native";
import Toast from "react-native-toast-message";
import z from "zod";
import { ApiError, useSendOtp, useVerifyOtp } from "../api";

const schema = z.object({
  phoneNumber: z
    .string()
    .length(10, {
      abort: true,
      error: "Please enter a valid mobile number of 10 digits",
    })
    .regex(/^[6-9]\d{9}$/, "Phone number must start with 6, 7, 8, or 9")
    .nonempty(),
});

export const useOnboarding = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleSendOtpSuccess = (data: unknown) => {};

  const handleSendOtpError = (error: ApiError) => {};

  const { sendOtp, isSending, error } = useSendOtp({
    onSuccess: handleSendOtpSuccess,
    onError: handleSendOtpError,
  });
  const { verifyOtp, error: verifyOtpError } = useVerifyOtp({});

  function handleKeyboardToggle() {
    if (Keyboard && Keyboard.isVisible()) {
      Keyboard.dismiss();
    }
  }

  const handleSendOtp = async (payload: ISendOtp) => {
    const validationResult = schema.safeParse(payload);

    if (!validationResult.success) {
      const { properties } = z.treeifyError(validationResult.error);
      const { phoneNumber } = properties ?? {};

      const validationError = phoneNumber?.errors[0];

      if (validationError && typeof validationError === "string") {
        Toast.show({
          autoHide: true,
          text1: validationError,
        });
      }

      return;
    }

    try {
      const result = await sendOtp(payload);
      if (result.success) {
        router.push({
          pathname: "/(onboarding)/verify-otp",
          params: {
            phoneNumber: payload.phoneNumber,
          },
        });
      }
    } catch (err) {
      // handled by onError in useSendOtp
    }
  };

  const handleVerifyOtp = async (payload: IVerifyOtp) => {
    try {
      const result = await verifyOtp(payload);
    } catch (error) {
      // handled by onError in useVerifyOtp
    }
  };

  const isOtpVerificationError = !!(
    verifyOtpError &&
    (verifyOtpError.message || verifyOtpError?.data?.message) &&
    (verifyOtpError.status === HttpStatusCode.Unauthorized ||
      verifyOtpError.status === HttpStatusCode.Gone)
  );

  return {
    sendOtp: {
      handleSubmit: handleSendOtp,
      isSending,
      error,
    },
    verifyOtp: {
      handleSubmit: handleVerifyOtp,
      error: verifyOtpError,
      isVerificationError: isOtpVerificationError,
    },
    number: {
      setPhoneNumber,
      phoneNumber,
    },
    keyboardHandler: {
      handleKeyboardToggle,
    },
  };
};
