import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, View, Text, TextInput } from "react-native";
import styles from "./styles";
import Button from "../../../../components/Button";
import Title from "../../../../components/Title";
import OtpInput from "../../../../components/OtpInput";
import { AuthContext } from "../../../../context/AuthContext";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Verification = ({ navigation }) => {
  const { verifyEmail, userInfo, sendVerificationEmail } =
    useContext(AuthContext);
  const [otp, setOtp] = useState("");
  const [countdown, setCountdown] = useState(60);
  const { userId } = useContext(AuthContext);

  const handleEmailVerification = async () => {
    try {
      // Use the token and userId in the verifyEmail function
      const response = await verifyEmail(userId, otp);

      console.log("response :>> ", response.status);

      if (response.status === 200) {
        // If verification is successful, navigate the user to the "Key" screen
        navigation.navigate("Key");
      } else {
        // Handle the case where verification was not successful
        console.error("Email verification failed:", response.message);
      }
    } catch (error) {
      console.error("error :>> ", error);
    }
  };

  const handleResend = async () => {
    // Call your resend email logic here
    await sendVerificationEmail(
      userInfo.userData.user.email,
      userInfo.userInfo.token
    );
    setCountdown(60); // Reset the countdown
  };

  useEffect(() => {
    let timer;

    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }
    console.log("countdown :>> ", countdown);
    return () => {
      // Clear the interval when the component unmounts
      clearInterval(timer);
    };
  }, [countdown]);

  return (
    <KeyboardAwareScrollView behavior={"padding"} style={styles.container}>
      <Title
        title="Verify Your Email"
        subtitle="Confirmation code was sent to your email address"
      />
      <OtpInput onOtpChange={setOtp} />
      <Button onPress={handleEmailVerification}>Verify</Button>
      <Text style={styles.text}>
        Resend in {countdown} seconds
        {countdown === 0 && (
          <Text style={styles.link} onPress={handleResend}>
            Resend
          </Text>
        )}
      </Text>
    </KeyboardAwareScrollView>
  );
};

export default Verification;
