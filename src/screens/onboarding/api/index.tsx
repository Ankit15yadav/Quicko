import {
  ISendOtp,
  IVerifyOtp,
  SendOtp,
  VerifyOtp,
} from "@src/services/operations/auth";
import { useMutation } from "@tanstack/react-query";

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
    onSuccess: options?.onSuccess,
    onError: (error: ApiError) => {
      console.error(
        "[VerifyOtp Error]:",
        error?.data?.message ?? error.message,
      );
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
