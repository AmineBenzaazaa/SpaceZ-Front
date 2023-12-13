import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import QRCode from "react-native-qrcode-svg";
import * as Clipboard from 'expo-clipboard';

// import styles from "./styles";

import { AuthContext } from "../../../../context/AuthContext";
import Checkbox from "../../../../components/Checkbox";
import Header from "../../../../components/Header";
import colors from "../../../../constants/colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDashboard } from "../../../../context/DashboardContext";

const data = [
  { label: "SPZ", value: "1" },
  { label: "SPZ", value: "2" },
  { label: "SPZ", value: "3" },
  { label: "SPZ", value: "4" },
  { label: "SPZ", value: "5" },
];

const WalletDeposit = ({ navigation }) => {
  const { isLoading, userInfo } = useContext(AuthContext);
  const { walletData, loading, error } = useDashboard();
  const [amount, setAmount] = useState();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const walletPublicKey = userInfo.userData.user.walletPublicKey;


  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(walletPublicKey);
  };

  useEffect(() => {
    if (!userInfo || !userInfo.userInfo.token) {
      navigation.replace("Onboarding");
    } else {
    }
  }, [userInfo, navigation]);

  

  return (
    <KeyboardAwareScrollView behavior={"padding"} style={styles.container}>
      <Header
        title="Deposit"
        leftIconName="chevron-left"
        leftNavigation="Wallet"
        rightIconName={false}
        rightNavigation={false}
        navigation={navigation}
      />
      <View style={styles.body}>
        <View style={styles.qr}>
          <QRCode value={userInfo.userData.user.walletPublicKey} />
        </View>
        <View style={styles.card}>
          <View style={styles.Walletcontainer}>
            <View style={styles.WalletIconContainer}>
              <FontAwesome5 name="wallet" size={20} style={styles.walletIcon} />
              <Text style={styles.WalletText}>
                {userInfo.userData.user.walletPublicKey.slice(0, 30)}
              </Text>
            </View>
            <TouchableOpacity onPress={copyToClipboard}>
              <FontAwesome5 name="copy" size={20} style={styles.walletIcon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.WalletSmallText}>Your Wallet Address</Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default WalletDeposit;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purpledark,
    flex: 1,
  },
  main: {
    paddingTop: 24,
    paddingHorizontal: 20,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  WalletIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  columnContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  walletIcon: {
    marginHorizontal: 2,
    color: colors.white,
  },
  icon: {
    marginHorizontal: 25,
    // marginVertical: 5,
    backgroundColor: colors.purplelight,
    padding: 30,
    marginBottom: 4,
    borderRadius: 50,
    color: colors.purpledark,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 6,
      height: 5,
    },
  },
  Walletcontainer: {
    // marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.purpledark,
    // marginHorizontal: 16,
    marginVertical: 6,
    borderRadius: 8,
    borderColor: "#414154",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 6,
      height: 5,
    },
  },
  Cardcontainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.purplebold,
    // marginHorizontal: 16,
    marginVertical: 6,
    borderRadius: 8,
    borderColor: "#414154",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 6,
      height: 5,
    },
  },
  card: {
    marginHorizontal: 20,
    borderRadius: 8,
    borderColor: "#414154",
    borderStyle: "solid",
    backgroundColor: colors.purpledark,
    margin: 20,
    borderWidth: 1,
    padding: 16,
    shadowColor: "#414154",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 7,
      height: 4,
    },
  },
  qr:{
    backgroundColor:colors.white,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderRadius:20,
    marginTop:20,
    marginHorizontal:138,
  },
  Walletcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // marginHorizontal: 16,
  },
  coin: {
    marginVertical: 5,
    backgroundColor: colors.purplelight,
    padding: 15,
    borderRadius: 10,
    color: colors.purpledark,
  },
  WalletText: {
    marginHorizontal: 10,
    color: colors.white,
    fontSize: 14,
  },
  WalletSmallText: {
    color: colors.grey,
    fontSize: 12,
    paddingHorizontal: 4,
    paddingTop: 12,
  },
  CardText: {
    marginHorizontal: 10,
    color: colors.white,
    fontSize: 16,
  },
  text: {
    color: colors.white,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: colors.purplelight,
    borderRadius: 30,
    padding: 13,
    alignSelf: "stretch",
  },
  btnText: {
    color: colors.purpledark,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "normal",
  },
  btnbg: {
    backgroundColor: colors.purplelight,
  },
  container: {
    flex: 1,
    backgroundColor: colors.purpledark,
  },
  bg: {
    backgroundColor: colors.purplebold,
    // paddingHorizontal: 20,
    borderRadius: 16,
  },
  head: {
    flexDirection: "row",
    paddingHorizontal: 20,
    // justifyContent: "space-between",
    // alignItems: "flex-start", // Updated from "top"
    padding: 10,
    // height: "100%",
    // flex: 1,
  },

  transactions: {
    flexDirection: "row",
    maHorizontal: 20,
    borderRadius: 8,
    justifyContent: "space-between",
    paddingHorizontal: 25,
    marginVertical: 10,
  },

  columnRef: {
    flexDirection: "row", // Added to align items horizontally
    alignItems: "center", // Align items vertically in the center
  },

  icons: {
    marginRight: 8, // Adjust the margin as needed
  },

  columnLeft: {
    flex: 1,
    alignItems: "flex-start", // Updated from "left"
    justifyContent: "flex-start", // Updated from "top"
  },

  columnCenter: {
    flex: 1,
    alignItems: "center", // Updated from "left"
    justifyContent: "flex-start", // Updated from "top"
  },

  columnRight: {
    flex: 1,
    alignItems: "flex-end", // Updated from "right"
    justifyContent: "flex-start", // Updated from "top"
  },
  text: {
    marginBottom: 36,
    color: colors.grey,
    fontSize: 12,
  },
  token: {
    color: colors.white,
    fontSize: 14,
  },
  imageContainer: {
    height: 100, // Adjust the height as needed
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    // width: "240%", // Adjusted to take the full width of the container
    height: "145%", // Adjusted to maintain aspect ratio
    resizeMode: "contain",
  },
  tabsContainer: {
    width: "100%",
    marginVertical: 6,
  },
  tab: (activeType, item) => ({
    paddingVertical: 12 / 2,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: activeType === item ? colors.purplelight : colors.purpledark,
    backgroundColor:
      activeType === item ? colors.purplelight : colors.purpledark,
  }),
  tabText: (activeType, item) => ({
    fontSize: 14, // Add the fontSize property here
    color: activeType === item ? colors.purpledark : colors.purplelight,
  }),
});
