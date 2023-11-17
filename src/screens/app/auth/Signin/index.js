import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import Spinner from "react-native-loading-spinner-overlay";

import Button from "../../../../components/Button";
import Title from "../../../../components/Title";
import Input from "../../../../components/Input";

import { AuthContext } from "../../../../context/AuthContext";

import styles from "./styles";

const Signin = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const { isLoading, register } = useContext(AuthContext);

  const handleLogin = async ({ navigation }) => {
    setError(null); // Reset any previous errors
    try {
      const response = await login(email, password);
      console.log("response :>> ", response);

      // Check if the registration response indicates success
      if (response && response.status === 200) {
        // Registration was successful, navigate to another page
        navigation.navigate("Verification");
      } else {
        // Registration failed, set error message
        setError("Registration failed. Please try again.");
        navigation.navigate("Verification");
      }
    } catch (e) {
      // Handle API call errors here
      setError("Server error. Please try again.");
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Title>Welcome Back!</Title>
      <Input
        placeholder="email"
        value={email}
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button onPress={handleLogin()}>Login</Button>
      {error && <Text style={styles.errorText}>{error}</Text>}
      <Text style={styles.text}>
        Not registered?{" "}
        <Text style={styles.link} onPress={() => navigation.navigate("Signup")}>
          Sign up!
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default Signin;
