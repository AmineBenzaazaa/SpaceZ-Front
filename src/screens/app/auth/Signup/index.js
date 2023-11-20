import React, { useContext, useState } from "react";
import {
  // Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import styles from "./styles";

import Button from "../../../../components/Button";
import Title from "../../../../components/Title";
import Input from "../../../../components/Input";

import { AuthContext } from "../../../../context/AuthContext";
import colors from "../../../../constants/colors";

const RegisterScreen = ({ navigation }) => {
  const [fullName, setfullName] = useState(null);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmationPassword, setConfirmationPassword] = useState(null);
  const [error, setError] = useState(null);
  const { isLoading, register } = useContext(AuthContext);

  const handleRegister = async () => {
    setError(null); // Reset any previous errors
    if (password !== confirmationPassword) {
      setError("Password and confirmation password do not match.");
      return; // Exit early if there's a mismatch
    }
    try {
      console.log("Registration Data:", {
        fullName,
        username,
        email,
        phoneNumber,
        password,
        confirmationPassword,
      });
      const response = await register(
        fullName,
        username,
        email,
        phoneNumber,
        password
      );
      // console.log("response :>> ", response);

      // Check if the registration response indicates success
      if (response && response.status === 200) {
        // Registration was successful, navigate to another page
        // navigation.navigate("Verification");
      } else {
        // Registration failed, set error message
        setError("Registration failed. Please try again.");
      }
    } catch (e) {
      // Handle API call errors here
      setError("Server error. Please try again.");
    }
  };

  const phone = (
    <FontAwesome5 name="phone" size={15} color={colors.purplelight} />
  );
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
      <SafeAreaView style={styles.container}>
        <Title title="Sign up" subtitle="Enter your credentials" />
        <Spinner visible={isLoading} />

        <View style={styles.input}>
          <Text style={styles.label}>Phone Number</Text>
          <Input
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
            icon={phone}
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
      </SafeAreaView>
    </>
  );
};


export default RegisterScreen;