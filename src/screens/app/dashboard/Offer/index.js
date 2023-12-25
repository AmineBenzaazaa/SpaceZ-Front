import { SafeAreaView, View, Text, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Spinner from "react-native-loading-spinner-overlay";

import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Header from "../../../../components/Header";

import styles from "./styles";

import colors from "../../../../constants/colors";
import { AuthContext } from "../../../../context/AuthContext";
import { useDashboard } from "../../../../context/DashboardContext";
import CustomModal from "../../../../components/Modal";

const Offer = ({ navigation }) => {
  const { userInfo } = useContext(AuthContext);
  const { tokenList, qoute, swap, setLoading, loading, error } = useDashboard();
  const [amountFrom, setAmountFrom] = useState();
  const [amountTo, setAmountTo] = useState();
  const [valueFrom, setValueFrom] = useState(null);
  const [valueTo, setValueTo] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [buttonText, setButtonText] = useState("Get Quote");
  const [buttonType, setButtonType] = useState(undefined);
  const [validationError, setValidationError] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const symbols = tokenList.tokens.map((token) => ({
    label: token.symbol,
    value: token.symbol,
  }));

  const dataFrom = [...symbols];
  const dataTo = symbols.filter((symbol) => symbol.value !== valueFrom); // Filter out selected item in dataTo

  useEffect(() => {
    // Monitor changes in valueFrom, valueTo, and amountFrom
    if (valueFrom !== null || valueTo !== null || amountFrom !== null) {
      setButtonText("Get Quote");
      setButtonType(undefined);
    } else {
      setButtonText("Validate");
      setButtonType("blue");
    }
  }, [valueFrom, valueTo, amountFrom]);

  const handleQouteButtonPress = async () => {
    console.log("amountFrom, :>> ", amountFrom, valueTo, valueFrom);
    if (
      amountFrom === undefined ||  // Check for undefined instead of "undefined"
      amountFrom <= 0 ||            // Check if amountFrom is less than or equal to 0
      valueTo === null ||            // Check for null instead of "null"
      valueFrom === null             // Check for null instead of "null"
    ) {
      setValidationError("Please fill out all the required fields.");
      setModalVisible(true);
      return;
    } else {
      setLoading(true);
      try {
        await qoute(valueFrom, valueTo, amountFrom)
          .then((toAmount) => {
            setAmountTo(toAmount);
            setButtonText("Validate");
            setButtonType("blue");
          })
          .catch((error) => {
            // Handle any errors that occurred during the request
            console.error("Error:", error);
          });
        // The API call is successful, set loading to false
        setLoading(false);
      } catch (error) {
        // The API call failed, set loading to false
        console.error("Unable to Swap: ", error);
        setLoading(false);
        setValidationError("Unable to Swap the amount.");
        setModalVisible(true);
      }
    }
  };
  
  const handleSwapButtonPress = () => {
    swap(valueFrom, valueTo, amountFrom);
  };

  return (
    <KeyboardAwareScrollView behavior={"padding"} style={styles.container}>
      <Header
        title="Enter Amount to Swap"
        leftIconName="chevron-left"
        leftNavigation="Swap"
        rightIconName={false}
        rightNavigation={false}
        navigation={navigation}
      />
      <Spinner visible={loading} />

      <View style={styles.body}>
        <View style={styles.token}>
          <Text style={styles.text}>From: </Text>
          <Dropdown
            style={[
              styles.dropdown,
              isFocus && { borderColor: colors.purplelight },
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={dataFrom}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Select item" : "..."}
            searchPlaceholder="Search..."
            value={valueFrom}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValueFrom(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <FontAwesome5
                name="coins"
                size={16}
                color={colors.purplelight}
                style={{ marginHorizontal: 12 }}
              ></FontAwesome5>
            )}
          />
        </View>
        <Input
          placeholder="Enter Amount to Swap"
          value={amountFrom}
          keyboardType="numeric"
          onChangeText={(text) => setAmountFrom(text)}
        />
        <View style={styles.token}>
          <Text style={styles.text}>To: </Text>
          <Dropdown
            style={[
              styles.dropdown,
              isFocus && { borderColor: colors.purplelight },
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={dataTo}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Select item" : "..."}
            searchPlaceholder="Search..."
            value={valueTo}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValueTo(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <FontAwesome5
                name="coins"
                size={16}
                color={colors.purplelight}
                style={{ marginHorizontal: 12 }}
              ></FontAwesome5>
            )}
          />
        </View>
        <Input
          placeholder="Please generate Quote"
          value={amountTo}
          keyboardType="numeric"
          onChangeText={(text) => setAmountTo(text)}
          editable={false}
        />
        <Button
          onPress={() => {
            if (buttonText === "Get Quote") {
              handleQouteButtonPress();
            } else {
              handleSwapButtonPress();
            }
          }}
          type={buttonType}
        >
          {buttonText}
        </Button>
        {validationError && (
          <CustomModal
            isVisible={isModalVisible}
            toggleModal={toggleModal}
            modalText={validationError}
          />
        )}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Offer;
