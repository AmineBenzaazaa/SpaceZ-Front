import React, { useState, useRef } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
import colors from "../../constants/colors";

const OtpInput = ({ onOtpChange }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef([]);

  const generateNewOtp = () => {
    const newOtp = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 10).toString()
    );
    setOtp(newOtp);
    onOtpChange(newOtp.join(""));
  };

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];

    if (value === "" && index > 0) {
      // Handle backspace/delete
      inputs.current[index - 1].focus();
      newOtp[index] = "";
    } else {
      newOtp[index] = value;
      if (index < newOtp.length - 1) {
        // Focus on the next input
        inputs.current[index + 1].focus();
      }
    }

    setOtp(newOtp);
    onOtpChange(newOtp.join(""));

    // Check if OTP is complete (no empty values)
    if (newOtp.every((digit) => digit !== "")) {
      // Trigger OTP verification
      const otpValue = newOtp.join("");
      // verifyOtp(otpValue);
    }
  };

  const handlePaste = (event) => {
    const pastedValue = event.clipboardData.getData("Text").trim();

    if (pastedValue.length === 6) {
      // Distribute pasted value to OTP input fields
      const newOtp = [...otp];
      for (let i = 0; i < 6; i++) {
        newOtp[i] = pastedValue[i];
      }
      setOtp(newOtp);
      onOtpChange(newOtp.join(""));
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          style={styles.box}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(value) => handleOtpChange(value, index)}
          value={digit}
          ref={(input) => {
            inputs.current[index] = input;
          }}
          onPaste={handlePaste}
        />
      ))}
      <Button title="Generate New OTP" onPress={generateNewOtp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    borderBottomWidth: 1.3,
    color: colors.white,
    borderColor: colors.purplelight,
    width: 40,
    height: 40,
    margin: 8,
    textAlign: "center",
    fontSize: 20,
  },
});

export default OtpInput;
