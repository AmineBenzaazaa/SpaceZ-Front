import { SafeAreaView, View, Text, Image } from "react-native";
import React, { useContext, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";

import Button from "../../../../components/Button";
import Input from "../../../../components/Input";

import styles from "./styles";

import { AuthContext } from "../../../../context/AuthContext";
import Checkbox from "../../../../components/Checkbox";
import Header from "../../../../components/Header";
import DropDownPicker from "react-native-dropdown-picker";
import colors from "../../../../constants/colors";

const data = [
  { label: "SPZ", value: "1" },
  { label: "SPZ", value: "2" },
  { label: "SPZ", value: "3" },
  { label: "SPZ", value: "4" },
  { label: "SPZ", value: "5" },
];

const Offer = ({ navigation }) => {
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
        title="Enter Amount to Swap"
        leftIconName="chevron-left"
        leftNavigation="Swap"
        rightIconName={false}
        rightNavigation={false}
        navigation={navigation}
      />
      <View style={styles.body}>
        <Text>From: </Text>
        <View style={styles.token}>
          <Dropdown
            style={[
              styles.dropdown,
              isFocus && { borderColor: colors.purplelight },
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Select item" : "..."}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <FontAwesome5
                name="bitcoin"
                size={16}
                color={colors.purplelight}
                style={{ marginHorizontal: 12 }}
              ></FontAwesome5>
            )}
          />
        <Input
          placeholder="Enter SPZ Amount"
          value={amount}
          keyboardType="numeric"
          onChangeText={(text) => setAmount(text)}
        />
        </View>
        <Button onPress={handleStakeButtonPress()} type="blue">
          Validate
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Offer);
