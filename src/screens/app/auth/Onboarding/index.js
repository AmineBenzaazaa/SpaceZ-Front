import { View, Text, Image } from "react-native";
import React from "react";

import styles from "./styles";
import Button from "../../../../components/Button";

const Onboarding = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("../../../../assets/logo.png")} />
        </View>
      </View>
      <View style={styles.content}>
        <Button onPress={() => navigation.navigate("Signin")}>Login</Button>
        <Button onPress={() => navigation.navigate("Signup")} type="blue">
          Get Started
        </Button>
      </View>
    </View>
  );
};

export default Onboarding;
