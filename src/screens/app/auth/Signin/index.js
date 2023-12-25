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
import { KeyboardAvoidingView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CustomModal from "../../../../components/Modal";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const { isLoading, login, setUserId } = useContext(AuthContext);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleLogin = async () => {
    setError(null); // Reset any previous errors
    if (!email || !password) {
      setError("Please enter both email and password.");
      setModalVisible(true);
      return;
    }
    try {
      // Remove spaces from the email
      const cleanedEmail = email.replace(/\s/g, "");

      const response = await login(cleanedEmail, password);
      if (response?.userInfo.token) {
        // Login was successful, navigate to another page
        const userId = response.userData.user._id;
        console.log("userId:", userId);

        // Set userId in AuthContext
        setUserId(userId);

        // navigate after successful verification
        navigation.navigate("Key");
      } else {
        // Login failed, set error message
        setError("Login failed. Please check your credentials.");
        setModalVisible(true);
      }
    } catch (e) {
      // Handle API call errors here
      console.error("Login error:", e);
      setError("Server error. Please try again.");
      setModalVisible(true);
    }
  };

  const emailIcon = (
    <FontAwesome5 name="envelope" size={15} color={colors.purplelight} />
  );
  const passwordIcon = (
    <FontAwesome5 name="lock" size={15} color={colors.purplelight} />
  );

  return (
    <>
      <KeyboardAwareScrollView behavior={"padding"} style={styles.container}>
        <Title title="Log in" subtitle="Enter your credentials" />
        <Spinner visible={isLoading} />
        <View style={styles.main}>
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
            <Text style={styles.label}>Password</Text>
            <Input
              placeholder="Password"
              value={password}
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
              icon={passwordIcon}
            />
          </View>

          <Button onPress={() => handleLogin()}>Log in</Button>
          {error && (
            <CustomModal
              isVisible={isModalVisible}
              toggleModal={toggleModal}
              modalText={error}
            />
          )}
          <Text style={styles.text}>
            Don’t have an account?{" "}
            <Text
              style={styles.link}
              onPress={() => navigation.navigate("Signup")}
            >
              Sign up!
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

export default LoginScreen;
