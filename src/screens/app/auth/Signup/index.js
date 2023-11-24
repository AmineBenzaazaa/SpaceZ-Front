import React, { useContext, useRef, useState } from "react";
import {
  // Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import CountryPicker from "react-native-country-picker-modal";
import PhoneInput from "react-native-phone-input";

import styles from "./styles";

import Button from "../../../../components/Button";
import Title from "../../../../components/Title";
import Input from "../../../../components/Input";
import CustomPhoneInput from "../../../../components/PhoneInput";

import { AuthContext } from "../../../../context/AuthContext";
import colors from "../../../../constants/colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const RegisterScreen = ({ navigation }) => {
  const [fullName, setfullName] = useState(null);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmationPassword, setConfirmationPassword] = useState(null);
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);
  const { isLoading, register, setUserId } = useContext(AuthContext);

  const handlePhoneNumberChange = (number) => {
    // Update the phoneNumber state when the phone number changes
    setPhoneNumber(number);
  };

  const handleRegister = async () => {
    setError(null); // Reset any previous errors
    if (password !== confirmationPassword) {
      setError("Password and confirmation password do not match.");
      return; // Exit early if there's a mismatch
    }

    try {
      const response = await register(
        fullName,
        username,
        email,
        phoneNumber,
        password,
        country
      );
      // Check if the registration response indicates success
      if (response.userInfo.token) {
        // Login was successful, navigate to another page
        const userId = response.userData.user._id;
        console.log("userId:", userId);

        // Set userId in AuthContext
        setUserId(userId);

        // Optional: You can navigate the user to another screen after successful verification
        navigation.navigate("Verification");
      } else {
        // Login failed, set error message
        setError("Login failed. Please check your credentials.");
      }
    } catch (e) {
      // Handle API call errors here
      console.error("Login error:", e);
      setError("Server error. Please try again.");
    }
  };

  // const phone = (
  //   <FontAwesome5 name="phone" size={15} color={colors.purplelight} />
  // );
  const userIcon = (
    <FontAwesome5 name="user" size={15} color={colors.purplelight} />
  );
  const emailIcon = (
    <FontAwesome5 name="envelope" size={15} color={colors.purplelight} />
  );
  const passwordIcon = (
    <FontAwesome5 name="lock" size={15} color={colors.purplelight} />
  );

  return (
    <>
      <KeyboardAwareScrollView behavior={"padding"} style={styles.container} >
        <Title title="Sign up" subtitle="Enter your credentials" />
        <ScrollView style={styles.form}>
          {/* <SafeAreaView style={styles.container}> */}
          <Spinner visible={isLoading} />

          <View style={styles.input}>
            <Text style={styles.label}>Phone Number</Text>

            <CustomPhoneInput
              value={phoneNumber}
              placeholder="Enter your Phone Number"
              onPhoneNumberChange={handlePhoneNumberChange}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.label}>Email Address</Text>
            <Input
              placeholder="Enter your email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              icon={emailIcon}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.label}>Full name</Text>
            <Input
              placeholder="Enter your Full name"
              value={fullName}
              onChangeText={(text) => setfullName(text)}
              icon={userIcon}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.label}>Username</Text>
            <Input
              placeholder="Username"
              value={username}
              onChangeText={(text) => setUsername(text)}
              icon={userIcon}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.label}>Country</Text>
            <Input
              placeholder="Country"
              value={country}
              onChangeText={(text) => setCountry(text)}
              icon={passwordIcon}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.label}>Password</Text>
            <Input
              placeholder="Password"
              value={password}
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
              icon={passwordIcon}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.label}>Confirmation Password</Text>
            <Input
              placeholder="Confirmation Password"
              value={confirmationPassword}
              secureTextEntry
              onChangeText={(text) => setConfirmationPassword(text)}
              icon={passwordIcon}
            />
          </View>

          <Button onPress={() => handleRegister()}>Sign up</Button>
          {error && <Text style={styles.errorText}>{error}</Text>}
          <Text style={styles.text}>
            Already have an account?{" "}
            <Text
              style={styles.link}
              onPress={() => navigation.navigate("Signin")}
            >
              Sign in!
            </Text>
          </Text>
          {/* </SafeAreaView> */}
        </ScrollView>
      </KeyboardAwareScrollView>
    </>
  );
};

export default RegisterScreen;
