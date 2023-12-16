import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  StyleSheet,
} from "react-native";
import React, { useContext, useState } from "react";

import Button from "../../../../components/Button";
import Input from "../../../../components/Input";

import { AuthContext } from "../../../../context/AuthContext";
import Header from "../../../../components/Header";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDashboard } from "../../../../context/DashboardContext";
import Modal from "react-native-modal";
import colors from "../../../../constants/colors";
import CustomModal from "../../../../components/Modal";

const Stacking = ({ navigation }) => {
  const { isLoading, userInfo } = useContext(AuthContext);
  const { sendAmount, homeData, loading } = useDashboard();
  const [amount, setAmount] = useState();
  const [error, setError] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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
        <Button title="Show modal" onPress={toggleModal} />

        <CustomModal
          isVisible={isModalVisible}
          toggleModal={toggleModal}
          modalText="I am the modal content!"
        />
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
