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
import React, { useContext, useRef, useState } from "react";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import 'react-native-gesture-handler';
import { FontAwesome5 } from "@expo/vector-icons";
import RBSheet from "@nonam4/react-native-bottom-sheet";

import Header from "../../../../components/Header";

import { AuthContext } from "../../../../context/AuthContext";
// import CollapsibleWallet from "../../../../components/CollapsibleWallet";
import colors from "../../../../constants/colors";
import ButtonDash from "../../../../components/ButtonDash";

const Home = ({ navigation }) => {
  const { isLoading, userInfo } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(true);
  const [error, setError] = useState(null);
  const [activeJobType, setActiveJobType] = useState("Deposit");
  const jobTypes = ["Deposit", "SPZ", "USDB", "BTC", "BNB", "ETH", "HTC"];
  const snapPoints = ["40%"];

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

  const handleProfilePress = () => {
    console.log("My Profile Pressed");
    // Add navigation logic here if needed
  };

  return (
    <SafeAreaView style={{ ...styles.container }}>
      <ScrollView>
        <View style={{ ...styles.bg }}>
          {/* <Header title="" navigation={navigation}/> */}
          <Header
            title="Wallet"
            leftIconName="bell"
            leftNavigation="Notification"
            rightIconName="bars"
            rightNavigation="Menu"
            navigation={navigation}
          />
          {/* <Drawer.Navigator>
          <Drawer.Screen name="Feed" component={Notification} />
          <Drawer.Screen name="Article" component={Notification} />
        </Drawer.Navigator> */}

          <View style={styles.head}>
            <View style={styles.columnLeft}>
              <Text style={styles.token}>0.00 BFIC</Text>
              <Text style={styles.text}>BFIC Available</Text>

              <Text style={styles.token}>$14.75</Text>
              <Text style={styles.text}>BFIC Price</Text>
            </View>
            <View style={styles.columnCenter}>
              <View style={styles.imageContainer}>
                {/* <Image
                source={require("../../../../assets/images/Group.png")}
                style={styles.image}
              /> */}
              </View>
            </View>
            <View style={styles.columnRight}>
              <Text style={styles.token}>0.00 SPZ</Text>
              <Text style={styles.text}>SPZ Available</Text>

              <Text style={styles.token}>$0.20</Text>
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
                  liurfhepirhjfpihj32o842638212o84262...
                </Text>
              </View>
              <TouchableOpacity>
                <FontAwesome5 name="copy" size={20} style={styles.walletIcon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome5
                  name="share"
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
                onPress={() => this.RBSheet.open()}
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
                  this.RBSheet = ref;
                }}
                height={300}
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
                      data={jobTypes}
                      renderItem={({ item }) => (
                        <TouchableOpacity
                          style={styles.tab(activeJobType, item)}
                          onPress={() => {
                            setActiveJobType(item);
                          }}
                        >
                          <Text style={styles.tabText(activeJobType, item)}>
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
                      onPress={() => navigation.navigate("WalletWithdraw")}
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
                onPress={() => this.RBSheet.open()}
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
              <RBSheet
                ref={(ref) => {
                  this.RBSheet = ref;
                }}
                height={300}
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
                      data={jobTypes}
                      renderItem={({ item }) => (
                        <TouchableOpacity
                          style={styles.tab(activeJobType, item)}
                          onPress={() => {
                            setActiveJobType(item);
                          }}
                        >
                          <Text style={styles.tabText(activeJobType, item)}>
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
                      onPress={() => navigation.navigate("WalletWithdraw")}
                    >
                      <Text style={styles.btnText}>Validate</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </RBSheet>
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
        </View>
        <View style={{ marginBottom: 80 }} />
      </ScrollView>
    </SafeAreaView>
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
    // marginVertical: 5,
    color: colors.white,
  },
  icon: {
    marginHorizontal: 25,
    // marginVertical: 5,
    backgroundColor: colors.purplelight,
    padding: 30,
    borderRadius: 50,
    color: colors.purpledark,
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
  },
  card: {
    borderRadius: 8,
    borderColor: "#414154",
    borderStyle: "solid",
    backgroundColor: colors.purplebold,
    margin: 10,
    borderWidth: 1,
    padding: 16,
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
    width: "240%", // Adjusted to take the full width of the container
    height: "45%", // Adjusted to maintain aspect ratio
    resizeMode: "contain",
  },
  tabsContainer: {
    width: "100%",
    marginVertical: 6,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: 12 / 2,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor:
      activeJobType === item ? colors.purplelight : colors.purpledark,
    backgroundColor:
      activeJobType === item ? colors.purplelight : colors.purpledark,
  }),
  tabText: (activeJobType, item) => ({
    fontSize: 14, // Add the fontSize property here
    color: activeJobType === item ? colors.purpledark : colors.purplelight,
  }),
});
