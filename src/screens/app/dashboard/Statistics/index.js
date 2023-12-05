import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useContext, useState } from "react";
import Spinner from "react-native-loading-spinner-overlay";

import Header from "../../../../components/Header";

import styles from "./styles";
import { AuthContext } from "../../../../context/AuthContext";
import Checkbox from "../../../../components/Checkbox";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Statistics = ({ navigation }) => {
  const { isLoading, userInfo } = useContext(AuthContext);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState(null);

  const onCheckboxPress = () => {
    setAgreed((value) => !value);
  };

  return (
    <KeyboardAwareScrollView behavior={"padding"} style={styles.container}>
      <Header
        title="Statistics"
        leftIconName="bell"
        leftNavigation="Notification"
        rightIconName="bars"
        rightNavigation="Menu"
        navigation={navigation}
      />
      <View style={styles.main}>
        <View style={styles.transactionsLight}>
          {/* Left column */}
          <View style={styles.columnLeft}>
            <Text style={styles.CardText}>Total Staked in Pool</Text>
          </View>

          {/* Right column */}
          <View style={styles.columnRight}>
            <Text style={styles.CardText}>100 SPZ</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.transactionsLight}>
            {/* Left column */}
            <View style={styles.columnLeft}>
              <Text style={styles.CardText}>Total Staked in Pool</Text>
            </View>

            {/* Right column */}
            <View style={styles.columnRight}>
              <Text style={styles.CardText}>100 SPZ</Text>
            </View>
          </View>
          <View style={styles.cardDescription}>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.transactionsLight}>
            {/* Left column */}
            <View style={styles.columnLeft}>
              <Text style={styles.CardText}>Maximum Rewards</Text>
            </View>

            {/* Right column */}
            <View style={styles.columnRight}>
              <Text style={styles.CardText}>500 SPZ</Text>
            </View>
          </View>
          <View style={styles.cardDescription}>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sed do eiusmod tempor incididunt.</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.transactionsLight}>
            {/* Left column */}
            <View style={styles.columnLeft}>
              <Text style={styles.CardText}>Receivable Rewards</Text>
            </View>

            {/* Right column */}
            <View style={styles.columnRight}>
              <Text style={styles.CardText}>500 SPZ</Text>
            </View>
          </View>
          <View style={styles.cardDescription}>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sed do eiusmod tempor incididunt.</Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Statement")}>
            <Text style={styles.btnText}>Statemenet Details </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button , styles.btnbg]} onPress={() => navigation.navigate("WithdrawReward")}>
            <Text style={[styles.btnText]}>Withdraw Rewards</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Statistics;
