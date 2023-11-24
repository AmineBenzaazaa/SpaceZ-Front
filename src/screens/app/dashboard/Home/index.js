import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import React, { useContext, useState } from "react";
import Spinner from "react-native-loading-spinner-overlay";
// import AccordionView from 'react-native-accordion-view'
import { FontAwesome5 } from "@expo/vector-icons";

import Header from "../../../../components/Header";

import styles from "./styles";
import { AuthContext } from "../../../../context/AuthContext";
import CollapsibleView from "../../../../components/CollapsibleView";
import colors from "../../../../constants/colors";

const Home = ({ navigation }) => {
  const { isLoading, userInfo } = useContext(AuthContext);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState(null);

  // const [expanded, setExpanded] = React.useState(true);
  // const handlePress = () => setExpanded(!expanded);

  return (
    <SafeAreaView style={{ ...styles.container }}>
      <View style={{ ...styles.bg }}>
        <Header title="Space’Z Network" />
        <View style={styles.head}>
          <View style={styles.columnLeft}>
            <Text style={styles.token}>100 SPZ</Text>
            <Text style={styles.text}>My Staking</Text>

            <Text style={styles.token}>0</Text>
            <Text style={styles.text}>My Team</Text>

            <Text style={styles.token}>0.00 SPZ</Text>
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
            <Text style={styles.token}>100 SPZ</Text>
            <Text style={styles.text}>Staking rewards</Text>

            <Text style={styles.token}>100 SPZ</Text>
            <Text style={styles.text}>Direct rewards</Text>

            <Text style={styles.token}>100 SPZ</Text>
            <Text style={styles.text}>Team rewards</Text>
          </View>
        </View>
        <CollapsibleView title="text" data={[1, 2, 3]} />
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

        <TouchableOpacity style={styles.columnRef} onPress={() => navigation.navigate("Staking")}>
          <FontAwesome5
            name="wallet"
            size={16}
            color={colors.white}
            style={styles.icons}
          ></FontAwesome5>
          <Text style={styles.token}>Stake SPZ</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
