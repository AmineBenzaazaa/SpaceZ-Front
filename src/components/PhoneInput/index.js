import React, { useRef } from "react";
import { View, Text } from "react-native";
import PhoneInput from "react-native-phone-input";

import styles from "./styles";

const CustomPhoneInput = ({ value, onPhoneNumberChange, ...props }) => {
  const phoneInputRef = useRef();

  const handlePhoneNumberChange = (number) => {
    // Call the parent component's callback function to update the state
    console.log('number :>> ', number);
    onPhoneNumberChange(number);
  };

  return (
    <View style={styles.inputContainer}>
      <PhoneInput
        ref={phoneInputRef}
        value={value}
        keyboardType="numeric"
        style={styles.icon}
        textStyle={styles.input}
        onChangePhoneNumber={handlePhoneNumberChange}
        {...props}
      />
    </View>
  );
};

export default CustomPhoneInput;
