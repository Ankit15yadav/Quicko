import { getEndpoint } from "@src/endpoints";
import { IVerifyOtpData } from "@src/screens/onboarding/api/interface";
import { Request } from "@src/services/api-connector";

export interface IVerifyOtp {
  otp: string;
}

export interface ISendOtp {
  phoneNumber: string;
}

export async function VerifyOtp({ otp }: IVerifyOtp) {
  const endpoint = getEndpoint("VERIFY_OTP");
  const response = await Request()
    .body<IVerifyOtp>({ otp })
    .headers({ apiVer: 1 })
    .post<IVerifyOtpData>(endpoint);

  return response;
}

export async function SendOtp(payload: ISendOtp) {
  const endpoint = getEndpoint("SEND_OTP");
  const { phoneNumber } = payload;

  const response = await Request()
    .body<ISendOtp>({ phoneNumber })
    .post<{ success: boolean; message: string }>(endpoint);

  return response;
}
