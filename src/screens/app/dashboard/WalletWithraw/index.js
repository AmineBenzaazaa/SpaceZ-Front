import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useContext, useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import Spinner from "react-native-loading-spinner-overlay";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Header from "../../../../components/Header";
import CustomModal from "../../../../components/Modal";

import { AuthContext } from "../../../../context/AuthContext";
import colors from "../../../../constants/colors";
import { useDashboard } from "../../../../context/DashboardContext";
import ValideModal from "../../../../components/ValideModal";

const WalletWithdraw = ({ navigation }) => {
  const { isLoading, userInfo } = useContext(AuthContext);
  const { tokenList, withdraw, loading, setLoading, error } = useDashboard();
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [validationError, setValidationError] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState(null);
  const [isValideModalVisible, setValideModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const symbols = tokenList.tokens.map((token) => ({
    label: token.symbol,
    value: token.symbol,
  }));

  const data = [...symbols];

  const handleStakeButtonPress = async () => {
    try {
      if (amount <= "0" || amount === "" || address === "" || value === null) {
        setValidationError("Please fill out all the required fields.");
        setModalVisible(true);
        return;
      }

      setLoading(true);

      await withdraw(amount, address, value);

      // The API call is successful, set loading to false
      setLoading(false);
    } catch (error) {
      // The API call failed, set loading to false
      console.error("Unable to send amount: ", error);
      setLoading(false);
      setValidationError("Unable to send amount.");
      setModalVisible(true);
    }
  };

  return (
    <KeyboardAwareScrollView behavior={"padding"} style={styles.container}>
      <Header
        title="Withdraw"
        leftIconName="chevron-left"
        leftNavigation="Wallet"
        rightIconName={false}
        rightNavigation={false}
        navigation={navigation}
      />
      <Spinner visible={loading} />

      <View style={styles.body}>
        <Text style={styles.text}>Choose asset to Swap</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Address"
            value={address}
            onChangeText={(text) => setAddress(text)}
            style={styles.input}
            placeholderTextColor={colors.text}
          />
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
            maxHeight={200}
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
          />
        </View>
        <Input
          placeholder="Amount"
          value={amount}
          keyboardType="numeric"
          onChangeText={(text) => setAmount(text)}
        />
        <Button onPress={handleStakeButtonPress} type="blue">
          Validate
        </Button>
        {validationError && (
          <CustomModal
            isVisible={isModalVisible}
            toggleModal={toggleModal}
            modalText={validationError}
          />
        )}
        <ValideModal
          isVisible={isValideModalVisible}
          toggleModal={toggleModal}
          modalText={message}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default WalletWithdraw;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purpledark,
  },
  dropdown: {
    flex: 1,
    backgroundColor: colors.white,
    height: 42,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 32,
  },
  input: {
    flex: 3, // Allow input to expand and fill available space
    color: colors.text,
    borderBottomWidth: 0.7,
    borderRadius: 9,
    borderColor: colors.grey,
    backgroundColor: colors.purpleinput,
    padding: 12,
    fontSize: 14,
    borderRadius: 10,
    fontSize: 15,
    marginRight: 8,
  },
  addressInput: {
    flex: 3,
  },
  pasteIcon: {
    flex: 0.1,
    marginLeft: 8,
    marginRight: 8,
  },
  coinIcon: {
    flex: 0.1,
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
    alignItems: "center",
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
    backgroundColor: colors.green,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: "auto",
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});
