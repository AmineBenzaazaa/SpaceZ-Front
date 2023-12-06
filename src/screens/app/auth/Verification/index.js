import React, { useContext, useEffect, useRef, useState } from "react";
import { SafeAreaView, View, Text, TextInput, StyleSheet } from "react-native";
import Button from "../../../../components/Button";
import Title from "../../../../components/Title";
import OtpInput from "../../../../components/OtpInput";
import { AuthContext } from "../../../../context/AuthContext";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import colors from "../../../../constants/colors";

const Verification = ({ navigation }) => {
  const { verifyEmail, userInfo, sendVerificationEmail } =
    useContext(AuthContext);
  // const [otp, setOtp] = useState("");
  const [countdown, setCountdown] = useState(60);
  const { userId } = useContext(AuthContext);
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const fifthInput = useRef();
  const sixthInput = useRef();
  const [otp, setOtp] = useState({ 1: "", 2: "", 3: "", 4: "", 5: "", 6: "" });

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
      <View style={styles.body}>
        <View style={styles.Otpcontainer}>
          <View style={styles.otpBox}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={firstInput}
              onChangeText={(text) => {
                setOtp({ ...otp, 1: text });
                text && secondInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={secondInput}
              onChangeText={(text) => {
                setOtp({ ...otp, 2: text });
                text ? thirdInput.current.focus() : firstInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={thirdInput}
              onChangeText={(text) => {
                setOtp({ ...otp, 3: text });
                text ? fourthInput.current.focus() : secondInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={fourthInput}
              onChangeText={(text) => {
                setOtp({ ...otp, 4: text });
                text ? fifthInput.current.focus() : thirdInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={fifthInput}
              onChangeText={(text) => {
                setOtp({ ...otp, 5: text });
                text ? sixthInput.current.focus() : fourthInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={sixthInput}
              onChangeText={(text) => {
                setOtp({ ...otp, 6: text });
                text && fifthInput.current.focus();
              }}
            />
          </View>
        </View>
        {/* <OtpInput onOtpChange={setOtp} /> */}
        <Button onPress={handleEmailVerification}>Verify</Button>
        <Text style={styles.text}>
          Resend in {countdown} seconds
          {countdown === 0 && (
            <Text style={styles.link} onPress={handleResend}>
              Resend
            </Text>
          )}
        </Text>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purpledark,
  },
  body: {
    paddingHorizontal: 24,
  },
  label: {
    textAlign: "left",
    color: colors.white,
  },
  text: {
    textAlign: "center",
    color: colors.white,
    fontSize: 12,
    marginTop: 28,
  },
  link: {
    color: colors.purplelight,
    paddingLeft: 4,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 24,
    paddingTop: 12,
  },
  agreeText: {
    color: colors.purplelight,
    fontSize: 12,
  },
  agreelink: {
    color: colors.purplelight,
    textDecorationLine: "underline",
  },
  input: {
    marginHorizontal: 8,
  },
  resend: {
    flex: 1,
    textAlign: "center",
  },
  Otpcontainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  otpBox: {
    borderBottomWidth: 1.3,
    color: colors.white,
    borderColor: colors.purplelight,
    width: 40,
    height: 40,
    margin: 8,
    textAlign: "center",
    fontSize: 20,
  },
  otpText: {
    fontSize: 25,
    color: colors.purplelight,
    padding: 0,
    textAlign: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
});

export default Verification;
