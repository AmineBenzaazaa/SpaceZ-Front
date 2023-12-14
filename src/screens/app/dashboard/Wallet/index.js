import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
  Button,
} from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import 'react-native-gesture-handler';
import { FontAwesome5 } from "@expo/vector-icons";
import RBSheet from "@nonam4/react-native-bottom-sheet";
import * as Clipboard from "expo-clipboard";
import Header from "../../../../components/Header";

import { AuthContext } from "../../../../context/AuthContext";
// import CollapsibleWallet from "../../../../components/CollapsibleWallet";
import colors from "../../../../constants/colors";
import ButtonDash from "../../../../components/ButtonDash";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDashboard } from "../../../../context/DashboardContext";

const Home = ({ navigation }) => {
  const { walletData, tokenList, loading, error } = useDashboard();
  const { userInfo } = useContext(AuthContext);
  const [isDepositOpen, setIsDepositOpen] = useState(false);
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);
  const [copiedText, setCopiedText] = React.useState("");
  const symbols = tokenList.tokens.map((token) => token.symbol);
  const walletPublicKey = userInfo.userData.user.walletPublicKey;

  const [activeType, setActiveType] = useState(symbols[0]);

  useEffect(() => {
    if (!userInfo || !userInfo.userInfo.token) {
      navigation.replace("Onboarding");
    } else {
    }
  }, [userInfo, navigation]);

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(walletPublicKey);
  };

  // const Drawer = createDrawerNavigator();
  const MenuItem = ({ iconName, label, balance, onPress }) => (
    <TouchableOpacity style={styles.Cardcontainer} onPress={onPress}>
      <View style={styles.iconContainer}>
        <FontAwesome5 name={iconName} size={20} style={styles.coin} />
        <Text style={styles.CardText}>{balance}</Text>
      </View>
      <Text style={styles.CardText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView>
      <KeyboardAwareScrollView
        behavior={"padding"}
        style={{ ...styles.container }}
      >
        <ScrollView>
          <View style={{ ...styles.bg }}>
            <Header
              title="Wallet"
              leftIconName="bell"
              leftNavigation="Notification"
              rightIconName="bars"
              rightNavigation="Menu"
              navigation={navigation}
            />

            <View style={styles.head}>
              <View style={styles.columnLeft}>
                <Text style={styles.token}>
                  {String(walletData[0].balance).length > 7
                    ? String(walletData[0].balance).slice(0, 7) + " "
                    : String(walletData[0].balance) + " "}
                  {walletData[0].symbol}
                </Text>
                <Text style={styles.text}>BFIC Available</Text>

                <Text style={styles.token}>
                  $
                  {String(walletData[0].Price).length > 7
                    ? String(walletData[0].Price).slice(0, 7) + " "
                    : String(walletData[0].Price) + " "}
                </Text>
                <Text style={styles.text}>BFIC Price</Text>
              </View>
              <View style={styles.columnCenter}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../../../../assets/images/wallet.png")}
                    style={styles.image}
                  />
                </View>
              </View>
              <View style={styles.columnRight}>
                <Text style={styles.token}>
                  {walletData[1].balance} {walletData[1].symbol}
                </Text>
                <Text style={styles.text}>SPZ Available</Text>

                <Text style={styles.token}>
                  $
                  {String(walletData[1].Price).length > 7
                    ? String(walletData[1].Price).slice(0, 7) + " "
                    : String(walletData[1].Price) + " "}
                </Text>
                <Text style={styles.text}>SPZ Price</Text>
              </View>
            </View>
            {/* <CollapsibleWallet title="text" data={[1, 2, 3]} /> */}
            <View style={styles.card}>
              <View style={styles.Walletcontainer}>
                <View style={styles.WalletIconContainer}>
                  <FontAwesome5
                    name="wallet"
                    size={20}
                    style={styles.walletIcon}
                  />
                  <Text style={styles.WalletText}>
                    {userInfo.userData.user.walletPublicKey.slice(0, 30)}
                  </Text>
                </View>
                <TouchableOpacity onPress={copyToClipboard}>
                  <FontAwesome5
                    name="copy"
                    size={20}
                    style={styles.walletIcon}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.WalletSmallText}>Your Wallet Address</Text>
            </View>
          </View>
          <View style={styles.main}>
            <View style={styles.iconContainer}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => this.depositRBSheet.open()}
                  style={styles.columnContainer}
                >
                  <View style={styles.icon}>
                    <Image
                      source={require("../../../../assets/icons/deposit.png")}
                    />
                  </View>
                  <Text
                    style={[styles.text, { color: colors.white, fontSize: 14 }]}
                  >
                    Deposit
                  </Text>
                </TouchableOpacity>
                <RBSheet
                  ref={(ref) => {
                    this.depositRBSheet = ref;
                  }}
                  height={400}
                  openDuration={250}
                  customStyles={{
                    container: {
                      // justifyContent: "center",
                      backgroundColor: colors.purplebold,
                      // alignItems: "center",
                      borderTopLeftRadius: 28,
                      borderTopRightRadius: 28,
                    },
                  }}
                >
                  <View style={{ justifyContent: "center", padding: 12 }}>
                    <Text style={[styles.CardText, { textAlign: "center" }]}>
                      Deposit
                    </Text>
                    <Text
                      style={{
                        textAlign: "left",
                        fontSize: 14,
                        paddingVertical: 5,
                        color: colors.grey,
                      }}
                    >
                      Choose asset to deposit
                    </Text>
                    <View style={styles.tabsContainer}>
                      <FlatList
                        data={symbols}
                        renderItem={({ item }) => (
                          <TouchableOpacity
                            style={styles.tab(activeType, item)}
                            onPress={() => {
                              setActiveType(item);
                            }}
                          >
                            <Text style={styles.tabText(activeType, item)}>
                              {item}
                            </Text>
                          </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item}
                        contentContainerStyle={{ columnGap: 8 }}
                        horizontal
                      />
                    </View>
                    <Text
                      style={[
                        styles.text,
                        { textAlign: "left", paddingVertical: 12 },
                      ]}
                    >
                      Deposit SPZ tokens for staking. The Network fees for
                      transaction on SPZ Network will be charged in BFIC
                    </Text>
                    <View style={styles.buttonsContainer}>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                          navigation.navigate("WalletDeposit") +
                          this.depositRBSheet.close()
                        }
                      >
                        <Text style={styles.btnText}>Validate</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </RBSheet>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("WalletWithdraw")}
                  style={styles.columnContainer}
                >
                  <View style={styles.icon}>
                    <Image
                      source={require("../../../../assets/icons/withdraw.png")}
                    />
                  </View>
                  <Text
                    style={[styles.text, { color: colors.white, fontSize: 14 }]}
                  >
                    withdraw
                  </Text>
                </TouchableOpacity>
                {/* <RBSheet
                  ref={(ref) => {
                    this.withdrawRBSheet = ref;
                  }}
                  height={400}
                  openDuration={250}
                  onClose={() => setIsDepositOpen(false)}
                  customStyles={{
                    container: {
                      // justifyContent: "center",
                      backgroundColor: colors.purplebold,
                      // alignItems: "center",
                      borderTopLeftRadius: 28,
                      borderTopRightRadius: 28,
                    },
                  }}
                >
                  <View style={{ justifyContent: "center", padding: 12 }}>
                    <Text style={[styles.CardText, { textAlign: "center" }]}>
                      Withdraw
                    </Text>
                    <Text
                      style={{
                        textAlign: "left",
                        fontSize: 14,
                        paddingVertical: 5,
                        color: colors.grey,
                      }}
                    >
                      Choose asset to withdraw
                    </Text>
                    <View style={styles.tabsContainer}>
                      <FlatList
                        data={symbols}
                        renderItem={({ item }) => (
                          <TouchableOpacity
                            style={styles.tab(activeType, item)}
                            onPress={() => {
                              setActiveType(item);
                            }}
                          >
                            <Text style={styles.tabText(activeType, item)}>
                              {item}
                            </Text>
                          </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item}
                        contentContainerStyle={{ columnGap: 8 }}
                        horizontal
                      />
                    </View>
                    <Text
                      style={[
                        styles.text,
                        { textAlign: "left", paddingVertical: 12 },
                      ]}
                    >
                      Deposit SPZ tokens for staking. The Network fees for
                      transaction on SPZ Network will be charged in BFIC
                    </Text>
                    <View style={styles.buttonsContainer}>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                          navigation.navigate("WalletWithdraw") +
                          this.withdrawRBSheet.close()
                        }
                      >
                        <Text style={styles.btnText}>Validate</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </RBSheet> */}
              </View>
            </View>
            <View
              style={{
                borderBottomColor: colors.purplelight,
                borderBottomWidth: 0.6,
                // padding: 10,
                width: "100%",
              }}
            />
            <View>
              <MenuItem
                iconName="bitcoin"
                balance={walletData[0].balance.slice(0, 4)}
                label={walletData[0].symbol}
              />
              <MenuItem
                iconName="ethereum"
                balance={walletData[1].balance.slice(0, 4)}
                label={walletData[1].symbol}
              />
              <MenuItem
                iconName="viacoin"
                balance={walletData[2].balance.slice(0, 4)}
                label={walletData[2].symbol}
              />
            </View>
          </View>
          <View style={{ marginBottom: 80 }} />
        </ScrollView>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};

export default Home;

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
