import { useState } from "react";
import "./styles/index.scss";
import OTPBox from "./components/OTPBox";

export default function OTP() {
  const [length, setlength] = useState(0);
  const [showOTPBox, setshowOTPBox] = useState(true);
  const [result, setResult] = useState({
    messgae: "match",
    error: false,
    success: false,
  });
  const [genOTP, setGenOTP] = useState("");

  const genNewOTP = (length: number) => {
    let randomNumber = "";
    for (let i = 0; i < length; i++) {
      randomNumber += Math.floor(Math.random() * 10);
    }
    setGenOTP(randomNumber);
  };

  const handleOTPSubmit = (otpFilled: number) => {
    setshowOTPBox(false);
    if (otpFilled === Number(genOTP)) {
      let newResult = { ...result };
      newResult.success = true;
      setResult(newResult);
    } else {
      let newResult = { ...result };
      newResult.error = true;
      setResult(newResult);
    }
  };

  return (
    <div className="otp-app-container">
      <div className="top-bar">
        <h2>OTP Input Field</h2>
      </div>
      <div className="otp-container">
        <div className="otp-length-box">
          <select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setlength(Number(e.target.value))
            }
          >
            <option value={0}>Select OTP Length</option>
            <option value={4}>4</option>
            <option value={6}>6</option>
          </select>
          <button onClick={() => genNewOTP(length)}>Generate New OTP</button>
        </div>
        {genOTP && <h3>Current Value of OTP {genOTP}</h3>}
        {showOTPBox
          ? length !== 0 &&
            genOTP.length !== 0 && (
              <OTPBox length={length} handleOTPSubmit={handleOTPSubmit} />
            )
          : result.messgae && (
              <div className="otp-result">
                {result.error && (
                  <div className="error">
                    <h3>OTP Doesn't match</h3>
                  </div>
                )}
                {result.success && (
                  <div className="success">
                    <h3>OTP match successfully</h3>
                  </div>
                )}
              </div>
            )}
      </div>
    </div>
  );
}
