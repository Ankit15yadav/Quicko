import { Request } from "@src/services/api-connector";

export interface IVerifyOtp {
    otp: string
}

interface IResponse {
    message: string;
    error: boolean,
    status: number,
}

export async function VerifyOtp({ otp }: IVerifyOtp) {

    const response = await Request()
        .body<IVerifyOtp>({ otp })
        .headers({ 'apiVer': 4 })
        .post<IResponse>('/api/v1/auth/login/verify-otp')
    return response;
}