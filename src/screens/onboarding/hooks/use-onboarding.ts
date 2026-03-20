import { ISendOtp } from "@src/services/operations/auth";
import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";
import z from "zod";
import { ApiError, useSendOtp, useVerifyOtp } from "../api";

const schema = z.object({
  phoneNumber: z
    .string()
    .length(10, {
      abort: true,
      error: "Phone number must be exactly 10 digits",
    })
    .regex(/^[6-9]\d{9}$/, "Phone number must start with 6, 7, 8, or 9")
    .nonempty(),
});

export const useOnboarding = () => {
  const router = useRouter();

  const handleSendOtpSuccess = (data: unknown) => {};

  const handleSendOtpError = (error: ApiError) => {};

  const { sendOtp, isSending, error } = useSendOtp({
    onSuccess: handleSendOtpSuccess,
    onError: handleSendOtpError,
  });

  const { verifyOtp, isVerifying, isSuccess } = useVerifyOtp({});

  const handleSendOtp = async (payload: ISendOtp) => {
    const validationResult = schema.safeParse(payload);

    if (!validationResult.success) {
      const { properties } = z.treeifyError(validationResult.error);
      const { phoneNumber } = properties ?? {};
      console.log(phoneNumber?.errors);
      const validationError = phoneNumber?.errors[0];

      if (validationError && typeof validationError === "string") {
        Toast.show({
          autoHide: true,
          type: "error",
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

  return {
    handleSubmit: handleSendOtp,
    isSending,
    error,
  };
};
