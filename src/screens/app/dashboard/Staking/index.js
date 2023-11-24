import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useContext, useState } from "react";
import Spinner from "react-native-loading-spinner-overlay";

import Button from "../../../../components/Button";
import Title from "../../../../components/Title";
import Input from "../../../../components/Input";
import OtpInput from "../../../../components/OtpInput";

import styles from "./styles";

import { AuthContext } from "../../../../context/AuthContext";
import Checkbox from "../../../../components/Checkbox";
import Header from "../../../../components/Header";

const Stacking = ({ navigation }) => {
  const { isLoading, userInfo } = useContext(AuthContext);
  const [amount, setAmount] = useState();
  const [error, setError] = useState(null);


  const handleStakeButtonPress = () => {
    // Implement your logic for handling the stake button press
    console.log("Stake button pressed");
  };


  return (
    <SafeAreaView style={styles.container}>
      <Header title="Staking" />
      <View style={styles.body}>
        <View style={styles.token}>
          <Image
            style={styles.coinImage}
            source={require("../../../../assets/images/coin.png")}
          />
          <View style={styles.states}>
            <Text style={styles.token}>0.00 SPZ</Text>
            <Text style={styles.text}>Balance</Text>
          </View>
        </View>
        <Input
          placeholder="Enter SPZ Amount"
          value={amount}
          keyboardType="numeric"
          onChangeText={(text) => setAmount(text)}
        />
        <View style={styles.content}>
        <Button onPress={handleStakeButtonPress()} type="blue">Validate</Button>
      </View>
      </View>
    </SafeAreaView>
  );
};

export default Stacking;
