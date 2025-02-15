"use client";

import React, { useState } from "react";

const EmailVerification = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState(["", "", "", ""]);

  const handleCodeChange = (value: string, index: number) => {
    if (value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 3) {
        document.getElementById(`code-${index + 1}`)?.focus();
      }
    }
  };

  const handleVerify = () => {
    const verificationCode = code.join("");
    alert(`Email: ${email}, Code: ${verificationCode}`);
  };

  const handleResend = () => {
    alert("Verification code resent to your email.");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <a
        href="/"
        className="absolute top-4 right-4 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        Back
      </a>
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
        <h1 className="text-2xl font-bold text-black mb-4">
          Mobile Phone Verification
        </h1>
        <p className="text-gray-600 mb-4">
          Enter the 4-digit verification code that was sent to your phone number.
        </p>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex justify-center gap-2 mb-4">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`code-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleCodeChange(e.target.value, index)}
              className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>

        <button
          onClick={handleVerify}
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Verify Account
        </button>

        <p className="mt-4 text-sm text-gray-600">
          Didn&apos;t receive code?{" "}
          <button
            onClick={handleResend}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Resend
          </button>
        </p>
      </div>
    </div>
  );
};

export default EmailVerification;
