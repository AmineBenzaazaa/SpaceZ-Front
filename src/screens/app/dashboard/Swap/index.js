// Swap.js
import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { AuthContext } from "../../../../context/AuthContext";
import Header from "../../../../components/Header";
import styles from "./styles";
import colors from "../../../../constants/colors";
import ButtonDash from "../../../../components/ButtonDash";

const Swap = ({ navigation }) => {
  const { isLoading, userInfo } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const MenuItem = ({ iconName, label, balance, onPress }) => (
    <TouchableOpacity style={styles.Cardcontainer} onPress={onPress}>
      <View style={styles.iconContainer}>
        <FontAwesome5 name={iconName} size={20} style={styles.coin} />
        <Text style={styles.CardText}>{balance}</Text>
      </View>
      <Text style={styles.CardText}>{label}</Text>
    </TouchableOpacity>
  );

  const handleProfilePress = () => {
    console.log("My Profile Pressed");
    // Add navigation logic here if needed
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Swap"
        leftIconName="bell"
        leftNavigation="Notification"
        rightIconName="bars"
        rightNavigation="Menu"
        navigation={navigation}
      />
      <View style={styles.main}>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Deposit")} style={styles.columnContainer}>
            <View style={styles.icon}>
              <Image source={require("../../../../assets/icons/deposit.png")} />
            </View>
            <Text style={styles.text}>Deposit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Withdraw")} style={styles.columnContainer}>
            <View style={styles.icon}>
              <Image
                source={require("../../../../assets/icons/withdraw.png")}
              />
            </View>
            <Text style={styles.text}>Withdraw</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomColor: colors.purplelight,
            borderBottomWidth: 0.3,
            padding: 10,
            width: "100%",
          }}
        />

        <MenuItem
          iconName="bitcoin"
          balance="0.00"
          label="BTC"
          onPress={handleProfilePress}
        />
        <MenuItem
          iconName="ethereum"
          balance="0.00"
          label="ETH"
          onPress={handleProfilePress}
        />
        <MenuItem
          iconName="viacoin"
          balance="0.00"
          label="VIA"
          onPress={handleProfilePress}
        />
        <MenuItem
          iconName="maxcdn"
          balance="0.00"
          label="MXD"
          onPress={handleProfilePress}
        />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Offer")}>
            <Text style={styles.btnText}>Make offer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button , styles.btnbg]}>
            <Text style={[styles.btnText]}>My offers</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Swap;
