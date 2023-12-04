import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";

import Button from "../../../../components/Button";
import Input from "../../../../components/Input";

// import styles from "./styles";

import { AuthContext } from "../../../../context/AuthContext";
import Checkbox from "../../../../components/Checkbox";
import Header from "../../../../components/Header";
import colors from "../../../../constants/colors";

const data = [
  { label: "SPZ", value: "1" },
  { label: "SPZ", value: "2" },
  { label: "SPZ", value: "3" },
  { label: "SPZ", value: "4" },
  { label: "SPZ", value: "5" },
];

const WalletWithdraw = ({ navigation }) => {
  const { isLoading, userInfo } = useContext(AuthContext);
  const [amount, setAmount] = useState();
  const [selectedValue, setSelectedValue] = useState("option1");
  const [error, setError] = useState(null);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  const handleStakeButtonPress = () => {
    console.log("Stake button pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Withdraw"
        leftIconName="chevron-left"
        leftNavigation="Swap"
        rightIconName={false}
        rightNavigation={false}
        navigation={navigation}
      />
      <View style={styles.body}>
        <Text style={styles.text}>Choose asset to Swap</Text>
        <Input
          placeholder="Address"
          value={amount}
          // keyboardType="numeric"
          onChangeText={(text) => setAmount(text)}
        />
        <Input
          placeholder="Amount"
          value={amount}
          keyboardType="numeric"
          onChangeText={(text) => setAmount(text)}
        />
        <Button onPress={handleStakeButtonPress()} type="blue">
          Validate
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default WalletWithdraw;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purpledark,
  },
  dropdown: {
    borderRadius: 20,
    backgroundColor: colors.white,
    height: 50,
    width: 180,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  body: {
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center", // Center content horizontally
    // flex: 1, // Take up available vertical space
  },
  token: {
    marginTop: 34,
    color: colors.white,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  },
  text: {
    color: colors.white,
    textAlign: "left",
    fontSize: 14,
    paddingHorizontal: 4,
    paddingTop: 12,
  },
  button: {
    backgroundColor: colors.green, // Adjust the color as needed
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: "auto", // Pushes the button to the bottom
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});
