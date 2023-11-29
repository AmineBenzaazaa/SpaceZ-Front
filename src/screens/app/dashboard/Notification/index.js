import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useContext, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import styles from "./styles";

import { AuthContext } from "../../../../context/AuthContext";
import Checkbox from "../../../../components/Checkbox";
import Header from "../../../../components/Header";

const Notification = ({ navigation }) => {
  const { isLoading, userInfo } = useContext(AuthContext);

  return (
    <SafeAreaView style={{ ...styles.container }}>
      <Header
        title="Notification"
        leftIconName="chevron-left"
        leftNavigation="Home"
        rightIconName={false}
        rightNavigation={false}
        navigation={navigation}
      />
      
    </SafeAreaView>
  );
};

export default Notification;
