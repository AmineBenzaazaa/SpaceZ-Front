import { View, Text, Image, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import Spinner from "react-native-loading-spinner-overlay";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import CustomModal from "../../../../components/Modal";
import Header from "../../../../components/Header";

import { AuthContext } from "../../../../context/AuthContext";
import { useDashboard } from "../../../../context/DashboardContext";
import colors from "../../../../constants/colors";

const Stacking = ({ navigation }) => {
  const { userInfo } = useContext(AuthContext);
  const { sendAmount, homeData, loading, setLoading, error } = useDashboard();
  const [validationError, setValidationError] = useState(false);
  const [amount, setAmount] = useState();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleStakeButtonPress = async () => {
    if (homeData) {
      if (amount <= "0" || amount === "") {
        setValidationError("Amount must be greater than zero.");
        setModalVisible(true);
        return;
      } else {
        setLoading(true);

        try {
          await sendAmount(amount);
          // The API call is successful, set loading to false
          setLoading(false);
        } catch (error) {
          // The API call failed, set loading to false
          setLoading(false);
        }
      }
    } else {
      console.error("Unable to send amount.");
      setLoading(false);
      setValidationError("Unable to send amount.");
      setModalVisible(true);
    }
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
      <Spinner visible={loading} />
      <View style={styles.body}>
        <View style={styles.token}>
          <Image
            style={styles.coinImage}
            source={require("../../../../assets/images/coin.png")}
          />
          <View style={styles.states}>
            {homeData ? (
              <>
                <Text style={styles.token}>
                  {homeData.staking?.length > 7
                    ? homeData.staking.slice(0, 7)
                    : homeData.staking}{" "}
                  SPZ
                </Text>
                <Text style={styles.text}>Balance</Text>
              </>
            ) : (
              <Text style={styles.loadingText}>Loading...</Text>
            )}
          </View>
        </View>
        <Input
          placeholder="Enter SPZ Amount"
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
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Stacking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purpledark,
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
    marginBottom: 50,
    color: colors.purplelight,
    textAlign: "center",
    fontSize: 14,
  },
  coinImage: {
    width: 90,
    height: 90,
    resizeMode: "contain", // Maintain aspect ratio and fit within the specified dimensions
  },
  modalClose: {
    backgroundColor: colors.purplelight, // Adjust the color as needed
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: "auto", // Pushes the button to the bottom
    color: colors.purplebold,
  },
  button: {
    backgroundColor: colors.purplelight, // Adjust the color as needed
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
