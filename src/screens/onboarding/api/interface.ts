export interface IVerifyOtpResponse {
  message: string;
  data: IVerifyOtpData;
}

export interface IVerifyOtpData {
  data: {
    isNewUser: boolean;
    userId: string;
    tokens: IAuthTokens;
  };
}

export interface IAuthTokens {
  accessToken: string;
  refreshToken: string;
}
