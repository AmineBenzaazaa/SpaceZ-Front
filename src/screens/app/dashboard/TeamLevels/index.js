import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import { AuthContext } from "../../../../context/AuthContext";
import Checkbox from "../../../../components/Checkbox";
import Header from "../../../../components/Header";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import colors from "../../../../constants/colors";

const TeamLevels = ({ navigation }) => {
  const { isLoading, userInfo } = useContext(AuthContext);
  
  return (
    <KeyboardAwareScrollView
      behavior={"padding"}
      style={{ ...styles.container }}
    >
      <Header
        title="Team Levels"
        leftIconName="chevron-left"
        leftNavigation="Team"
        rightIconName={false}
        rightNavigation={false}
        navigation={navigation}
      />
      
    </KeyboardAwareScrollView>
  );
};

export default TeamLevels;

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
  levelsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row", // Arrange items in a row
    justifyContent: "space-between", // Space evenly between items
  },
  levelItem: {
    margin: 10,
    padding: 20,
    backgroundColor: colors.purplebold,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: "left", // Center items horizontally
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
  },
  levelName: {
    fontSize: 14,
    color: colors.white,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 20,
    marginRight: 10,
    color: colors.white,
  },
  label: {
    fontSize: 18,
    color: colors.white,
  },
  chevronIcon: {
    marginLeft: 10,
    color: colors.purplelight,
  },
  numberedPoint: {
    marginRight: 8, // Adjust the spacing as needed
    width: 16, // Adjust the size of the point as needed
    alignItems: "center",
  },
  pointDirect:{
    marginHorizontal:8,
    color: colors.purplelight
  },
  pointInDirect:{
    marginHorizontal:8,
    color: colors.white
  },
  pointText: {
    fontSize: 14,
    color:colors.white 
  },
});
