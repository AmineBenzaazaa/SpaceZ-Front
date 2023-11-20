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
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const { isLoading, login } = useContext(AuthContext);

  const handleLogin = async () => {
    setError(null); // Reset any previous errors
    try {
      const response = await login(email, password);
      console.log('response :>> ', response.userInfo.token);

      // if (response.userInfo.token) {
      //   // Login was successful, navigate to another page
      //   navigation.navigate("Verification");
      // } else {
      //   // Login failed, set error message
      //   setError("Login failed. Please check your credentials.");
      // }
    } catch (e) {
      // Handle API call errors here
      console.error("Login error:", e);
      setError("Server error. Please try again.");
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
      <SafeAreaView style={styles.container}>
        <Title title="Log in" subtitle="Enter your credentials" />
        <Spinner visible={isLoading} />

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
        {error && <Text style={styles.errorText}>{error}</Text>}
        <Text style={styles.text}>
        Don’t have an account?{" "}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("Signin")}
          >
            Sign up!
          </Text>
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("Verification")}
          >
            Verification
          </Text>
        </Text>
      </SafeAreaView>
    </>
  );
};


export default RegisterScreen;