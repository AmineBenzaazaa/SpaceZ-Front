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
  const [password, setPassword] = useState(null);
  const [confirmationPassword, setConfirmationPassword] = useState(null);
  const [error, setError] = useState(null);
  const { isLoading, register } = useContext(AuthContext);

  const handleRegister = async ({ navigation }) => {
    setError(null); // Reset any previous errors
    try {
      const response = await register(fullName, username, email, password);
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

  const phone = <FontAwesome5 name="phone" size={15} color={colors.purplelight} />;
  const userIcon = <FontAwesome5 name="phone" size={15} color={colors.purplelight} />;
  const emailIcon = <Image source={require('../../../../assets/icons/email.png')}/>;
  const eIcon = <FontAwesome5 name="phone" size={15} color={colors.purplelight} />;

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Title title="Sign up" subtitle="Enter your credentials" />
        <Spinner visible={isLoading} />
        <View style={styles.input}>
          <Text style={styles.label}>Phone Number</Text>
          <Input
            placeholder="Enter your phone number"
            value={fullName}
            onChangeText={(text) => setfullName(text)}
            icon={phone}
          />
        </View>
        <Text style={styles.label}>Email Address</Text>
        <Input
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          icon={emailIcon}
        />
        <View style={styles.input}>
          <Text style={styles.label}>First name</Text>
          <Input
            placeholder="Enter your First name"
            value={fullName}
            onChangeText={(text) => setfullName(text)}
            icon={userIcon}

          />
        </View>
        <View style={styles.input}>
          <Text style={styles.label}>Last name</Text>
          <Input
            placeholder="Enter your Last name"
            value={fullName}
            onChangeText={(text) => setfullName(text)}
            icon={userIcon}
          />
        </View>
        <Text style={styles.label}>Username</Text>
        <Input
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />

        <Text style={styles.label}>Password</Text>
        <Input
          placeholder="Password"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <Text style={styles.label}>Confirmation Password</Text>
        <Input
          placeholder="Confirmation Password"
          value={confirmationPassword}
          secureTextEntry
          onChangeText={(text) => setConfirmationPassword(text)}
        />
        <Button onPress={() => navigation.navigate("Verification")}>
          Sign up
        </Button>
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   wrapper: {
//     width: "80%",
//   },
//   input: {
//     marginBottom: 12,
//     borderWidth: 1,
//     borderColor: "#bbb",
//     borderRadius: 5,
//     paddingHorizontal: 14,
//   },
//   link: {
//     color: "blue",
//   },
// });

export default RegisterScreen;
