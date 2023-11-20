import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import Spinner from "react-native-loading-spinner-overlay";

import Button from "../../../../components/Button";
import Title from "../../../../components/Title";
import Input from "../../../../components/Input";
import OtpInput from "../../../../components/OtpInput";

import { AuthContext } from '../../../../context/AuthContext'; 

import styles from "./styles";

const Verification = ({ navigation, username }) => {
  // const { otp, setOtp, verificationResult, showSpinner, verifyOtp } = useOtp();

  const { verifyEmail } = useContext(AuthContext);

  // const handleVerifyOtp = async () => {
  //   await verifyOtp(otp, username); // Pass the username to the verifyOtp function
  // };
  const handleEmailVerification = async () => {
    try {
      await verifyEmail('945657', '655b1f48864b23d9e3fdafe9');
      // If verification is successful, you can navigate the user to the next screen or perform other actions
    } catch (error) {
      // Handle verification error
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title title="Verify Your Email" subtitle="Confirmation code was sent to your email address" />
      <OtpInput verifyOtp={handleEmailVerification} />
      <Button>Verify</Button>
      <Text style={styles.text}>
        Not registered?{" "}
        <Text style={styles.link} onPress={() => navigation.navigate("Signup")}>
          Sign up!
        </Text>
      </Text>
      {/* <Spinner
        visible={showSpinner}
        textContent={"Loading..."}
        textStyle={{ color: "white" }}
      /> */}  
    </SafeAreaView>
  );
};

export default Verification;
