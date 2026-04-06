import { getEndpoint } from "@src/endpoints";
import { IVerifyOtpData } from "@src/screens/onboarding/api/interface";
import { Request } from "@src/services/api-connector";

export interface IVerifyOtp {
  otp: string;
  phoneNumber: string;
}

export interface ISendOtp {
  phoneNumber: string;
}

export async function VerifyOtp({ otp, phoneNumber }: IVerifyOtp) {
  const endpoint = getEndpoint("VERIFY_OTP");
  const response = await Request()
    .body({ otp })
    .params({ phoneNumber })
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

export async function ValidateToken() {
  const endpoint = getEndpoint("VALIDATE");
  console.log("validate token called");
  // normal api call to check the token validity when app is initialized.
  // Don't use anywhere in the application other than AuthContext.
  return await Request().get(endpoint);
}
