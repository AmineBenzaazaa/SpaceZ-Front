import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import React, { useContext, useState } from "react";
import Spinner from "react-native-loading-spinner-overlay";

import { FontAwesome5 } from "@expo/vector-icons";

import { AuthContext } from "../../../../context/AuthContext";
import Checkbox from "../../../../components/Checkbox";
import Header from "../../../../components/Header";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import colors from "../../../../constants/colors";

const Team = ({ navigation }) => {
  const { isLoading, userInfo } = useContext(AuthContext);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState(null);

  const levelsData = [
    {
      id: 1,
      name: "Level 1",
      pointDirect: 128,
      pointInDirect: 400,
      points: "100",
      lvl_count: "5",
      referrals: [
        {
          username: "User1",
          referralCode: "ABC123",
          dateAdded: "15-12-2023",
        },
        {
          username: "User2",
          referralCode: "XYZ789",
          dateAdded: "16-12-2023",
        },
        {
          username: "User3",
          referralCode: "ABC123",
          dateAdded: "15-12-2023",
        },
        {
          username: "User4",
          referralCode: "XYZ789",
          dateAdded: "16-12-2023",
        },
        {
          username: "User5",
          referralCode: "ABC123",
          dateAdded: "15-12-2023",
        },
        {
          username: "User6",
          referralCode: "XYZ789",
          dateAdded: "16-12-2023",
        },
      ],
    },
    {
      id: 2,
      name: "Level 2",
      pointDirect: 8,
      pointInDirect: 20,
      points: "100",
      lvl_count: "5",
      referrals: [
        {
          username: "User1",
          referralCode: "ABC123",
          dateAdded: "15-12-2023",
        },
        {
          username: "User2",
          referralCode: "XYZ789",
          dateAdded: "16-12-2023",
        },
      ],
    },
    {
      id: 3,
      name: "Level 3",
      pointDirect: 15,
      pointInDirect: 40,
      points: "100",
      lvl_count: "5",
      referrals: [
        {
          username: "User3",
          referralCode: "DEF456",
          dateAdded: "17-12-2023",
        },
      ],
    },
    {
      id: 4,
      name: "Level 4",
      pointDirect: 7,
      pointInDirect: 15,
      points: "100",
      lvl_count: "5",
      referrals: [],
    },
    {
      id: 5,
      name: "Level 5",
      pointDirect: 9,
      pointInDirect: 25,
      points: "100",
      lvl_count: "5",
      referrals: [],
    },
    {
      id: 6,
      name: "Level 6",
      pointDirect: 11,
      pointInDirect: 30,
      points: "100",
      lvl_count: "5",
      referrals: [],
    },
    {
      id: 7,
      name: "Level 7",
      pointDirect: 14,
      pointInDirect: 35,
      points: "100",
      lvl_count: "5",
      referrals: [],
    },
    {
      id: 8,
      name: "Level 8",
      pointDirect: 6,
      pointInDirect: 19,
      points: "100",
      lvl_count: "5",
      referrals: [],
    },
    {
      id: 9,
      name: "Level 9",
      pointDirect: 12,
      pointInDirect: 32,
      points: "100",
      lvl_count: "5",
      referrals: [],
    },
    {
      id: 10,
      name: "Level 10",
      pointDirect: 5,
      pointInDirect: 12,
      points: "100",
      lvl_count: "5",
      referrals: [],
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.levelItem}
      onPress={() => navigation.navigate("LevelDetail", { level: item })}
    >
      <View style={styles.iconContainer}>
        <Text style={styles.label}>{item.name}</Text>
        <Text style={styles.pointDirect}>●</Text>
        <Text style={styles.pointText}>{item.pointDirect}</Text>
        <Text style={styles.pointInDirect}>●</Text>
        <Text style={styles.pointText}>{item.pointInDirect}</Text>
      </View>
      <FontAwesome5 name="chevron-right" size={20} style={styles.chevronIcon} />
    </TouchableOpacity>
  );

  return (
    <KeyboardAwareScrollView behavior={"padding"} style={styles.container}>
      <Header
        title="Team"
        leftIconName="bell"
        leftNavigation="Notification"
        rightIconName="bars"
        rightNavigation="Menu"
        navigation={navigation}
      />
      <View style={styles.body}>
        <View style={styles.cardsContainer}>
          <View style={styles.card}>
            <Text style={styles.cardText}>12</Text>
            <Text>Total Team Members</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>8</Text>
            <Text>Direct Members</Text>
          </View>
        </View>
        <View style={styles.levelsContainer}>
          <FlatList
            data={levelsData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
        <View style={styles.space} />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Team;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purpledark,
    // justifyContent: "center", // Center content vertically
  },
  body: {
    padding: 24,
  },
  cardsContainer: {
    flexDirection: "row", // Arrange items in a row
    justifyContent: "space-between", // Space evenly between items
  },
  card: {
    backgroundColor: colors.purplelight,
    // paddingHorizontal: 10,
    paddingVertical: 16,
    borderRadius: 8,
    width: "48%", // Take up 48% of the container width (adjust as needed)
    alignItems: "center", // Center items horizontally
  },
  cardText: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center", // Center text horizontally
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: colors.white,
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
  levelsContainer: {
    marginVertical: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row", // Arrange items in a row
    justifyContent: "space-between", // Space evenly between items
  },
  levelItem: {
    marginVertical: 5,
    padding: 20,
    backgroundColor: colors.purplebold,
    // paddingHorizontal: 10,
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
  pointDirect: {
    marginHorizontal: 8,
    color: colors.purplelight,
  },
  pointInDirect: {
    marginHorizontal: 8,
    color: colors.white,
  },
  pointText: {
    fontSize: 14,
    color: colors.white,
  },
  space: {
    margin: 40,
  },
});
