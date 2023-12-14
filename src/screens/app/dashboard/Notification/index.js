import {
  StyleSheet,
} from "react-native";
import React, { useContext, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";


import { AuthContext } from "../../../../context/AuthContext";
import Checkbox from "../../../../components/Checkbox";
import Header from "../../../../components/Header";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import colors from "../../../../constants/colors";

const Notification = ({ navigation }) => {
  const { isLoading, userInfo } = useContext(AuthContext);

  return (
    <KeyboardAwareScrollView behavior={"padding"} style={{ ...styles.container }}>
      <Header
        title="Notification"
        leftIconName="chevron-left"
        leftNavigation="Home"
        rightIconName={false}
        rightNavigation={false}
        navigation={navigation}
      />
      
    </KeyboardAwareScrollView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purpledark,
  },
  body: {
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center", // Center content horizontally
    backgroundColor: colors.purpledark,
    // flex: 1, // Take up available vertical space
  },
})