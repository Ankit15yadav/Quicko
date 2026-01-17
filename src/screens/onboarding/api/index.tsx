import { IVerifyOtp, VerifyOtp } from "@src/services/operations/auth";
import { useMutation } from "@tanstack/react-query";

export const useOnboardingDataApi = () => {
    const verifyOtpMutation = useMutation({
        mutationKey: ['verify-otp'],
        mutationFn: (data: IVerifyOtp) => VerifyOtp(data),
        retry: false,

        onSuccess: (data) => {
        },

        onError: (error: any) => {
        },
    });

    return {
        verifyOtp: verifyOtpMutation.mutate,
        isVerifying: verifyOtpMutation.isPending,
        error: verifyOtpMutation.error,
    };
};
