import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useBetweenPages, BetweenTypes } from "between-pages";
import styles from "./styles";
import Button from "../../../../components/Button";

import Signin from "../Signin/index";


const Onboarding = ({ navigation }) => {
  const { startTransition } = useBetweenPages(<Signin />);

  const handleAnimation = () => {
    startTransition(
      // First parameter are animation type, duration and others thing about animations.
      {
        type: BetweenTypes.FADE,
        duration: 3000,
      },
      // Second parameter is a callback that happens when the animation is finished.
      () => {}
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../../../assets/logo.png")}
          />
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Signin")}>
            <Text style={styles.btnText}>Login </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button , styles.btnbg]} onPress={() => navigation.navigate("Signup")}>
            <Text style={[styles.btnText]}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;
