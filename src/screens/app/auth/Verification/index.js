import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Spinner from "react-native-loading-spinner-overlay";

import Button from "../../../../components/Button";
import Title from "../../../../components/Title";
import Input from "../../../../components/Input";
import OtpInput from "../../../../components/OtpInput";

import { useOtp } from '../../../../context/OtpContext'; 

import styles from "./styles";

const Verification = ({ navigation }) => {
  const { otp, setOtp, verificationResult, showSpinner, verifyOtp } = useOtp();

  const handleVerifyOtp = async () => {
    await verifyOtp(otp);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title>Verify</Title>
      <OtpInput verifyOtp={handleVerifyOtp} />
      <Button>Verify</Button>
      <Text style={styles.text}>
        Not registered?{" "}
        <Text style={styles.link} onPress={() => navigation.navigate("Signup")}>
          Sign up!
        </Text>
      </Text>
      <Spinner
        visible={showSpinner}
        textContent={"Loading..."}
        textStyle={{ color: "white" }}
      />
    </SafeAreaView>
  );
};

export default Verification;
