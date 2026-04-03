import {
  ISendOtp,
  IVerifyOtp,
  SendOtp,
  VerifyOtp,
} from "@src/services/operations/auth";
import { useMutation } from "@tanstack/react-query";
import { HttpStatusCode } from "axios";
import { router } from "expo-router";
import * as secureStorage from "expo-secure-store";
import Toast from "react-native-toast-message";

const MUTATION_KEYS = {
  VERIFY_OTP: ["verify-otp"],
  SEND_OTP: ["send-verification-otp"],
} as const;

export type ApiError = Error & {
  data?: { message?: string };
  status?: number;
};

interface MutationCallbacks<TData = unknown> {
  onSuccess?: (data: TData) => void;
  onError?: (error: ApiError) => void;
}

export const useSendOtp = (options?: MutationCallbacks) => {
  const mutation = useMutation({
    mutationKey: MUTATION_KEYS.SEND_OTP,
    mutationFn: (payload: ISendOtp) => SendOtp(payload),
    onSuccess: options?.onSuccess,
    onError: (error: ApiError) => {
      console.error("[SendOtp Error]:", error?.data?.message);
      options?.onError?.(error);
    },
  });

  return {
    sendOtp: mutation.mutateAsync,
    isSending: mutation.isPending,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
    reset: mutation.reset,
  };
};

export const useVerifyOtp = (options?: MutationCallbacks) => {
  const mutation = useMutation({
    mutationKey: MUTATION_KEYS.VERIFY_OTP,
    mutationFn: (data: IVerifyOtp) => VerifyOtp(data),
    retry: false,
    onSuccess: async (apiResponse) => {
      const {
        data: { tokens, userId, isNewUser },
      } = apiResponse;
      await secureStorage.setItemAsync("accessToken", tokens.accessToken);
      await secureStorage.setItemAsync("refreshToken", tokens.refreshToken);

      router.dismissAll();
      if (isNewUser) {
        router.push({
          pathname: "/(onboarding)/user-info",
          params: {
            id: userId,
          },
        });
      }
    },
    onError: (error: ApiError) => {
      console.log(error);
      if (error.status === HttpStatusCode.TooManyRequests) {
        Toast.show({
          text1: "Too many requests. Please try again later.",
          autoHide: true,
          visibilityTime: 4000,
        });
      }
      options?.onError?.(error);
    },
  });

  return {
    verifyOtp: mutation.mutateAsync,
    isVerifying: mutation.isPending,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
    reset: mutation.reset,
  };
};
