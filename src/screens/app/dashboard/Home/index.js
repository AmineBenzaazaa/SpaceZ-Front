import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import 'react-native-gesture-handler';
import { FontAwesome5 } from "@expo/vector-icons";
import axios from "axios";

import Header from "../../../../components/Header";
import CollapsibleView from "../../../../components/CollapsibleView";

import styles from "./styles";
import colors from "../../../../constants/colors";

import { AuthContext } from "../../../../context/AuthContext";
import { useDashboard } from "../../../../context/DashboardContext"; // Import useDashboard
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Home = ({ navigation }) => {
  const { userInfo } = useContext(AuthContext);
  const { homeData, statsData, loading, error } = useDashboard();

  useEffect(() => {
    if (!userInfo || !userInfo.userInfo.token) {
      navigation.replace("Onboarding");
    } else {
      // console.log("res :>> ", homeData);
    }
  }, [userInfo, navigation]);

  return (
    <KeyboardAwareScrollView
      behavior={"padding"}
      style={{ ...styles.container }}
    >
      <View style={{ ...styles.bg }}>
        <Header
          title="Space’Z Network"
          leftIconName="bell"
          leftNavigation="Notification"
          rightIconName="bars"
          rightNavigation="Menu"
          navigation={navigation}
        />
        <View style={styles.head}>
          <View style={styles.columnLeft}>
            <Text style={styles.token}>
              {homeData.staking.length > 7
                ? homeData.staking.slice(0, 7)
                : homeData.staking}{" "}
              SPZ
            </Text>
            <Text style={styles.text}>My Staking</Text>

            <Text style={styles.token}>
              {homeData.team.length > 7
                ? homeData.team.slice(0, 7)
                : homeData.team}{" "}
            </Text>
            <Text style={styles.text}>My Team</Text>

            <Text style={styles.token}>
              {homeData.rewards.length > 7
                ? homeData.rewards.slice(0, 7)
                : homeData.rewards}{" "}
              SPZ
            </Text>
            <Text style={styles.text}>My Rewards</Text>
          </View>
          <View style={styles.columnCenter}>
            <View style={styles.imageContainer}>
              <Image
                source={require("../../../../assets/images/Group.png")}
                style={styles.image}
              />
            </View>
          </View>
          <View style={styles.columnRight}>
            <Text style={styles.token}>
              {homeData.staking_rewards.length > 7
                ? homeData.staking_rewards.slice(0, 7)
                : homeData.staking_rewards}{" "}
              SPZ
            </Text>
            <Text style={styles.text}>Staking rewards</Text>

            <Text style={styles.token}>
              {homeData.direct_rewards.length > 7
                ? homeData.direct_rewards.slice(0, 7)
                : homeData.direct_rewards}{" "}
              SPZ
            </Text>
            <Text style={styles.text}>Direct rewards</Text>

            <Text style={styles.token}>
              {homeData.team_rewards.length > 7
                ? homeData.team_rewards.slice(0, 7)
                : homeData.team_rewards}{" "}
              SPZ
            </Text>
            <Text style={styles.text}>Team rewards</Text>
          </View>
        </View>
        <CollapsibleView title="text" data={statsData} />
      </View>
      <View style={styles.transactions}>
        <TouchableOpacity style={styles.columnRef}>
          <FontAwesome5
            name="user-plus"
            size={16}
            color={colors.white}
            style={styles.icons}
          ></FontAwesome5>
          <Text style={styles.token}>Add Referral</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.columnRef}
          onPress={() => navigation.navigate("Staking")}
        >
          <FontAwesome5
            name="wallet"
            size={16}
            color={colors.white}
            style={styles.icons}
          ></FontAwesome5>
          <Text style={styles.token}>Stake SPZ</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Home;
