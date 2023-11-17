import React, { createContext, useState, useContext } from "react";
import Spinner from "react-native-loading-spinner-overlay";

// Create an OTP context
const OtpContext = createContext();

// Create an OTP context provider
const OtpProvider = ({ children }) => {
  const [otp, setOtp] = useState("");
  const [verificationResult, setVerificationResult] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);

  const verifyOtp = async (otp) => {
    try {
      setShowSpinner(true);

      // Make the OTP verification API request here
      const response = await fetch("YOUR_BACKEND_API_URL/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp }), // Send the OTP entered by the user
      });

      // Set the verification result based on the response

      if (response.ok) {
        const data = await response.json();
        const isVerified = data.isVerified; // Replace with the actual response key

        if (isVerified) {
          setVerificationResult("OTP is verified.");
        } else {
          setVerificationResult("OTP is not verified.");
        }
      } else {
        console.error("Failed to verify OTP.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    } finally {
      // Hide the spinner after receiving a response
      setShowSpinner(false);
    }
  };

  const contextValue = {
    otp,
    setOtp,
    verificationResult,
    showSpinner,
    verifyOtp,
  };

  return (
    <OtpContext.Provider value={contextValue}>{children}</OtpContext.Provider>
  );
};

// Create a custom hook to access the OTP context
const useOtp = () => {
  const context = useContext(OtpContext);
  if (!context) {
    throw new Error("useOtp must be used within an OtpProvider");
  }
  return context;
};

export { OtpProvider, useOtp };
