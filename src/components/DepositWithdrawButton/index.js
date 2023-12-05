import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from "react-native";
import RBSheet from "@nonam4/react-native-bottom-sheet";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../../constants/colors";


const DepositWithdrawButton = ({
  iconName,
  buttonText,
  jobTypes,
  activeJobType,
  onTabPress,
  onValidatePress,
}) => {
  const [isRBSheetOpen, setIsRBSheetOpen] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => setIsRBSheetOpen(true)}
        style={{ flexDirection: "column", alignItems: "center" }}
      >
        <View
          style={{
            marginHorizontal: 25,
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
          }}
        >
          <Image source={require("../../assets/icons/deposit.png")} />
        </View>
        <Text style={{ ...styles.text, color: colors.white, fontSize: 14 }}>
          {buttonText}
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
            backgroundColor: colors.purplebold,
            borderTopLeftRadius: 28,
            borderTopRightRadius: 28,
          },
        }}
        onClose={() => setIsRBSheetOpen(false)}
        visible={isRBSheetOpen}
      >
        {/* Content for the RBSheet */}
        <View style={{ justifyContent: "center", padding: 12 }}>
          <Text style={[styles.CardText, { textAlign: "center" }]}>
            {buttonText}
          </Text>
          <Text
            style={{
              textAlign: "left",
              fontSize: 14,
              paddingVertical: 5,
              color: colors.grey,
            }}
          >
            Choose asset to {buttonText.toLowerCase()}
          </Text>
          <View style={styles.tabsContainer}>
            <FlatList
              data={jobTypes}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.tab(activeJobType, item)}
                  onPress={() => {
                    onTabPress(item);
                  }}
                >
                  <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
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
            Deposit SPZ tokens for staking. The Network fees for transaction on
            SPZ Network will be charged in BFIC
          </Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onValidatePress()}
            >
              <Text style={styles.btnText}>Validate</Text>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
    </View>
  );
};

export default DepositWithdrawButton;

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
  