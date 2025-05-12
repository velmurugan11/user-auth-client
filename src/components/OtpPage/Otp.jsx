import React, { useState } from "react";
import "./Otp.css";

const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to the next input field
    if (value !== "" && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleSubmit = () => {
    // Here you would send the OTP to your backend for validation
    console.log("OTP Submitted:", otp.join(""));
  };

  return (
    <div className="otp-container">
      <h2>Enter OTP</h2>
      <div className="otp-inputs">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            className="otp-input"
          />
        ))}
      </div>
      <button className="otp-submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Otp;
