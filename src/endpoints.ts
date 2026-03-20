export enum Endpoints {
  SEND_OTP = "api/v1/auth/login/send-otp",
  VERIFY_OTP = "api/v1/auth/login/verify-otp",
}

export function getEndpoint(endpoint: keyof typeof Endpoints) {
  const commnoEndpoint = Endpoints[endpoint];
  return `/${commnoEndpoint}`;
}
