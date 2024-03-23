import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { OTPBoxTypes } from "../definations/types";

export default function OTPBox({ length, handleOTPSubmit }: OTPBoxTypes) {
  const [fields, setFields] = useState(new Array(length).fill(""));
  const inputRefs: MutableRefObject<(HTMLInputElement | null)[]> = useRef([]);

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    if (isNaN(value)) console.log("error NaN");
    const newOTP = [...fields];
    newOTP[index] = value.substring(value.length - 1);
    setFields(newOTP);

    const combinedOtp = newOTP.join("");
    if (combinedOtp.length === length) handleOTPSubmit(Number(combinedOtp));

    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]!.focus();
    }
  };

  const handleClick = (index: number) => {
    inputRefs.current[index]!.setSelectionRange(1, 1);

    if (index > 0 && !fields[index - 1]) {
      inputRefs.current[fields.indexOf("")]!.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (
      e.key === "Backspace" &&
      !fields[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      // Move focus to the previous input field on backspace
      inputRefs.current[index - 1]!.focus();
    }
  };

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0]!.focus();
    }
  }, []);

  return (
    <div className="otp-fields-box">
      {fields.map((value, index) => {
        return (
          <div className="field" key={index}>
            <input
              value={value}
              type="text"
              ref={(input) => (inputRefs.current[index] = input)}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(index, e)
              }
              onClick={() => handleClick(index)}
              onKeyDown={(e) => handleKeyDown(index, e)}
            />
          </div>
        );
      })}
    </div>
  );
}
