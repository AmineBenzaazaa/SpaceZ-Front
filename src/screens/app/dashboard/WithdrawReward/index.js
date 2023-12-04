import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { useContext, useState } from "react";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";


import { AuthContext } from "../../../../context/AuthContext";
import Checkbox from "../../../../components/Checkbox";
import Header from "../../../../components/Header";
import colors from "../../../../constants/colors";

const WithdrawReward = ({ navigation }) => {
  const { isLoading, userInfo } = useContext(AuthContext);
  const [amount, setAmount] = useState();
  const [error, setError] = useState(null);

  const handleStakeButtonPress = () => {
    // Implement your logic for handling the stake button press
    console.log("Stake button pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Withdraw Reward"
        leftIconName="chevron-left"
        leftNavigation="Statistics"
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
            <Text style={styles.token}>0.00 SPZ</Text>
            <Text style={styles.text}>Available Rewards</Text>
          </View>
        </View>
        <Input
          placeholder="Enter SPZ Amount"
          value={amount}
          keyboardType="numeric"
          onChangeText={(text) => setAmount(text)}
        />
        <View style={styles.card}>
          <View style={styles.transactionsLight}>
            <View style={styles.columnLeft}>
              <Text style={styles.CardText}>Fee (5% of the amount in USD)</Text>
            </View>
            <View style={styles.columnRight}>
              <Text style={styles.CardText}>0.00 USD</Text>
            </View>
          </View>
          <View style={styles.cardDescription}>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sed do eiusmod tempor incididunt.</Text>
          </View>
        </View>
        <Button onPress={handleStakeButtonPress()} type="blue">
          Validate
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(WithdrawReward);

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
    marginTop:34,
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
  buttonText: {
    color: colors.white,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  columnLeft: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  columnRight: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  card: {
    marginVertical:8,
    backgroundColor: colors.purplebold,
    borderRadius: 8,
    padding: 8,
  },
  text: {
    color: colors.grey,
    fontSize:12,
    marginHorizontal:18,
  },
  CardText: {
    marginHorizontal: 10,
    color: colors.white,
    fontSize: 14,
  },
  transactionsLight: {
    flexDirection: "row",
    backgroundColor: colors.purplebold,
    borderRadius: 8,
    justifyContent: "space-between",
    padding: 8,
  },
})