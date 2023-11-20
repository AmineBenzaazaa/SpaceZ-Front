import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Spinner from "react-native-loading-spinner-overlay";

import Button from "../../../../components/Button";
import Title from "../../../../components/Title";
import Input from "../../../../components/Input";
import OtpInput from "../../../../components/OtpInput";


import styles from "./styles";

const Key = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <Title title="Private Key" subtitle="Save it somewhere safe and secret" />

      <Text style={styles.text}>
        Not registered?{" "}
        <Text style={styles.link} onPress={() => navigation.navigate("Signup")}>
          Sign up!
        </Text>
      </Text>
      <Spinner
        visible={showSpinner}
        textContent={"Loading..."}
        textStyle={{ color: "white" }}
      />
    </SafeAreaView>
  );
};

export default Key;
