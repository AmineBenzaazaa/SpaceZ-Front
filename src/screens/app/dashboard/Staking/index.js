import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useContext, useState } from "react";

import Button from "../../../../components/Button";
import Input from "../../../../components/Input";

import styles from "./styles";

import { AuthContext } from "../../../../context/AuthContext";
import Header from "../../../../components/Header";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDashboard } from "../../../../context/DashboardContext";

const Stacking = ({ navigation }) => {
  const { isLoading, userInfo } = useContext(AuthContext);
  const { sendAmount, homeData, loading } = useDashboard();
  const [amount, setAmount] = useState();
  const [error, setError] = useState(null);

  const handleStakeButtonPress = () => {
    sendAmount(amount); // Call the sendAmount method with the amount
  };

  return (
    <KeyboardAwareScrollView behavior={"padding"} style={styles.container}>
      <Header
        title="Staking"
        leftIconName="chevron-left"
        leftNavigation="Home"
        rightIconName={false}
        rightNavigation={false}
        navigation={navigation}
      />
      <View style={styles.body}>
        <View style={styles.token}>
          <Image
            style={styles.coinImage}
            source={require("../../../../assets/images/coin.png")}
          />
          <View style={styles.states}>
            <Text style={styles.token}>
              {homeData.staking.length > 7
                ? homeData.staking.slice(0, 7)
                : homeData.staking}{" "}
              SPZ
            </Text>
            <Text style={styles.text}>Balance</Text>
          </View>
        </View>
        <Input
          placeholder="Enter SPZ Amount"
          value={amount}
          keyboardType="numeric"
          onChangeText={(text) => setAmount(text)}
        />
        <Button onPress={handleStakeButtonPress()} type="blue">
          Validate
        </Button>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Stacking;
