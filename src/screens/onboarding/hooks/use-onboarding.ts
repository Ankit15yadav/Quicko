import { IVerifyOtp } from "@src/services/operations/auth";
import { useOnboardingDataApi } from "../api";

export const useOnboarding = () => {

    const { verifyOtp, isVerifying } = useOnboardingDataApi()

    const handleSubmit = (number: IVerifyOtp) => {
        verifyOtp(number)
    }

    return {
        isVerifying,
        handleSubmit
    }
};
