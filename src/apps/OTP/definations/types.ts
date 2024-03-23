export interface OTPTypes {
  result: Result;
}

export interface Result {
  messgae: string;
  error: boolean;
  success: boolean;
}

export interface OTPBoxTypes {
  length: number;
  handleOTPSubmit: (otpFilled: number) => void;
}
