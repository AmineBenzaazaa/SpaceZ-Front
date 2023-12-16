import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import { AuthContext } from "../../../../context/AuthContext";
import Checkbox from "../../../../components/Checkbox";
import Header from "../../../../components/Header";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import colors from "../../../../constants/colors";

const LevelDetail = ({ navigation, route }) => {
  const { level } = route.params;
  const totalPoints = level.pointInDirect + level.pointDirect;

  return (
    <KeyboardAwareScrollView
      behavior={"padding"}
      style={{ ...styles.container }}
    >
      <View style={styles.container}>
        <Header
          title={`${level.name}`}
          leftIconName="chevron-left"
          leftNavigation="Team"
          rightIconName={false}
          rightNavigation={false}
          navigation={navigation}
        />
        <View style={styles.body}>
          <View style={styles.cardsContainer}>
            <View style={styles.card}>
              <Text style={styles.cardNum}>{totalPoints}</Text>
              <Text style={styles.cardText}>Total Team Members</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardNum}>{level.pointDirect}</Text>
              <Text style={styles.cardText}>Active Members</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardNum}>{level.pointInDirect}</Text>
              <Text style={styles.cardText}>Inactive Members</Text>
            </View>
          </View>
          <Text style={styles.text}>Search Level 1 Members</Text>
          {level.referrals.length === 0 ? (
            <Text style={styles.noDataText}>No members found</Text>
          ) : (
            level.referrals.map((item, index) => (
              <View style={styles.refCard} key={index}>
                <View>
                  <Text style={styles.refCardText}>Username</Text>
                  <Text style={styles.refCardNum}>{item.username}</Text>
                </View>
                <View>
                  <Text style={styles.refCardText}>Referral Code</Text>
                  <Text style={styles.refCardNum}>{item.referralCode}</Text>
                </View>
                <View>
                  <Text style={styles.refCardText}>Date Added</Text>
                  <Text style={styles.refCardNum}>{item.dateAdded}</Text>
                </View>
              </View>
            ))
          )}
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LevelDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purpledark,
  },
  body: {
    padding: 24,
    justifyContent: "center",
    alignItems: "center", // Center content horizontally
    backgroundColor: colors.purpledark,
    // flex: 1, // Take up available vertical space
  },
  levelItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  levelName: {
    fontSize: 18,
  },
  levelInfo: {
    fontSize: 16,
    marginTop: 10,
  },
  cardsContainer: {
    flexDirection: "row", // Arrange items in a row
    justifyContent: "space-between", // Space evenly between items
  },
  text: {
    textAlign: "left",
    color: colors.white,
    paddingVertical: 18,
    fontSize: 16,
  },
  card: {
    backgroundColor: colors.purplelight,
    padding: 10,
    marginHorizontal: 10,
    paddingVertical: 16,
    borderRadius: 8,
    width: "30%", // Take up 48% of the container width (adjust as needed)
    alignItems: "center", // Center items horizontally
  },
  refCard: {
    marginVertical: 5,
    flexDirection: "row", // Arrange items in a row
    justifyContent: "space-between", // Space evenly between items
    backgroundColor: colors.purplebold,
    padding: 10,
    marginHorizontal: 10,
    paddingVertical: 16,
    borderRadius: 8,
    width: "100%", // Take up 48% of the container width (adjust as needed)
    alignItems: "left", // Center items horizontally
  },
  cardText: {
    marginBottom: 5,
    fontSize: 13,
    textAlign: "center", // Center text horizontally
  },
  cardNum: {
    marginBottom: 5,
    fontSize: 18,
    textAlign: "center", // Center text horizontally
  },
  refCardText: {
    marginBottom: 5,
    fontSize: 13,
    textAlign: "left", // Center text horizontally
    color: colors.grey,
  },
  refCardNum: {
    marginBottom: 5,
    fontSize: 18,
    textAlign: "left", // Center text horizontally
    color: colors.white,
  },
  noDataText: {
    color: colors.white,
    paddingVertical:200,
  },
});
