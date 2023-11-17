import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
const OtpInput = ({ verifyOtp }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  
    if (value && index < newOtp.length - 1) {
      // Focus on the next input
      inputs[index + 1].focus();
    }
  
    // Check if OTP is complete (no empty values)
    if (newOtp.every((digit) => digit !== '')) {
      // Trigger OTP verification
      const otpValue = newOtp.join('');
      verifyOtp(otpValue);
    }
  };
  const inputs = [];
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
            inputs[index] = input;
          }}
        />
      ))}
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
    // borderWidth: 1,
    borderColor: "grey",
    width: 40,
    height: 40,
    margin: 8,
    textAlign: "center",
    fontSize: 20,
  },
});
export default OtpInput;
