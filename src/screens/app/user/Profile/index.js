import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { useContext, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import { AuthContext } from "../../../../context/AuthContext";
import Checkbox from "../../../../components/Checkbox";
import Header from "../../../../components/Header";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import colors from "../../../../constants/colors";
import Input from "../../../../components/Input";

const emailIcon = (
  <FontAwesome5 name="envelope" size={15} color={colors.purplelight} />
);
const userIcon = (
  <FontAwesome5 name="user" size={15} color={colors.purplelight} />
);
const keyIcon = (
  <FontAwesome5 name="key" size={15} color={colors.purplelight} />
);
const dateIcon = (
  <FontAwesome5 name="calendar" size={15} color={colors.purplelight} />
);
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
  return formattedDate;
};

const Profile = ({ navigation }) => {
  const { isLoading, userInfo } = useContext(AuthContext);
  console.log("userInfo :>> ", userInfo);
  return (
    <KeyboardAwareScrollView
      behavior={"padding"}
      style={{ ...styles.container }}
    >
      <Header
        title="Profile"
        leftIconName="chevron-left"
        leftNavigation="Menu"
        rightIconName={false}
        rightNavigation={false}
        navigation={navigation}
      />
      <View style={styles.body}>
      <View style={styles.col}>
          <Text style={styles.label}>Full Name</Text>
          <View style={styles.inputContainer}>
            {emailIcon && <View style={styles.icon}>{userIcon}</View>}
            <Text style={styles.input}>{userInfo.userData.user.fullName}</Text>
          </View>
        </View>
      <View style={styles.col}>
          <Text style={styles.label}>Username</Text>
          <View style={styles.inputContainer}>
            {emailIcon && <View style={styles.icon}>{userIcon}</View>}
            <Text style={styles.input}>{userInfo.userData.user.username}</Text>
          </View>
        </View>
        <View style={styles.col}>
          <Text style={styles.label}>Email Address</Text>
          <View style={styles.inputContainer}>
            {emailIcon && <View style={styles.icon}>{emailIcon}</View>}
            <Text style={styles.input}>{userInfo.userData.user.email}</Text>
          </View>
        </View>
        <View style={styles.col}>
          <Text style={styles.label}>Public Key</Text>
          <View style={styles.inputContainer}>
            {emailIcon && <View style={styles.icon}>{keyIcon}</View>}
            <Text style={styles.input}>{userInfo.userData.user.walletPublicKey}</Text>
          </View>
        </View>
        <View style={styles.col}>
          <Text style={styles.label}>Joined at</Text>
          <View style={styles.inputContainer}>
            {emailIcon && <View style={styles.icon}>{dateIcon}</View>}
            <Text style={styles.input}>{formatDate(userInfo.userData.user.createdAt)}</Text>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purpledark,
  },
  body: {
    padding:20,
  },
  inputContainer: {
    marginVertical: 10,
    flexDirection: "row", // Align icon and input horizontally
    alignItems: "center", // Vertically center icon and input
    borderBottomWidth: 0.7,
    borderRadius: 9,
    borderColor: colors.grey,
    backgroundColor: colors.purpleinput,
    marginBottom: 12,
    padding: 12,
    fontSize: 14,
  },
  icon: {
    marginRight: 10, // Adjust spacing between icon and input
  },
  input: {
    flex: 1, // Allow input to expand and fill available space
    color: colors.text,
    borderRadius: 10,
    fontSize: 15,
  },
  label: {
    textAlign: "left",
    color: colors.white,
  },
  col: {
    marginHorizontal: 8,
  },
});
