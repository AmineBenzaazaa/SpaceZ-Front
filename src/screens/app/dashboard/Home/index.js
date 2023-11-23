import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useContext, useState } from "react";
// import Collapsible from "react-native-collapsible";
import Spinner from "react-native-loading-spinner-overlay";

import Title from "../../../../components/Title";

import styles from "./styles";
import { AuthContext } from "../../../../context/AuthContext";
import Checkbox from "../../../../components/Checkbox";

const Home = ({ navigation }) => {
  const { isLoading, userInfo } = useContext(AuthContext);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState(null);

  // const onCheckboxPress = () => {
  //   setAgreed((value) => !value);
  // };

  // const [isCollapsed, setIsCollapsed] = useState(true);

  // const toggleAccordion = () => {
  //   setIsCollapsed(!isCollapsed);
  // };

  return (
    <SafeAreaView style={styles.container}>
      <Title title="Space’Z Network" />
      <View style={styles.head}>
        {/* First View */}
        <View style={styles.columnLeft}>
          <Text style={styles.token}>100 SPZ</Text>
          <Text style={styles.text}>My Staking</Text>

          <Text style={styles.token}>0</Text>
          <Text style={styles.text}>My Team</Text>

          <Text style={styles.token}>0.00 SPZ</Text>
          <Text style={styles.text}>My Rewards</Text>
        </View>

        {/* Second View */}
        <View style={styles.columnCenter}>
          <Image
            source={require("../../../../assets/images/Group.png")}
            style={styles.image}
          />
        </View>

        {/* Third View */}
        <View style={styles.columnRight}>
          <Text style={styles.token}>100 SPZ</Text>
          <Text style={styles.text}>Staking rewards</Text>

          <Text style={styles.token}>100 SPZ</Text>
          <Text style={styles.text}>Direct rewards</Text>

          <Text style={styles.token}>100 SPZ</Text>
          <Text style={styles.text}>Team rewards</Text>
        </View>
      </View>
      {/* <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity onPress={toggleAccordion}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 18 }}>Accordion</Text>
            <Text style={{ fontSize: 18 }}>{isCollapsed ? " ▼" : " ▲"}</Text>
          </View>
        </TouchableOpacity>

        <view collapsed={isCollapsed}>
          <View style={{ padding: 10 }}>
            <Text>Content to display when accordion is open</Text>
          </View>
        </view>
      </View> */}
    </SafeAreaView>
  );
};

export default Home;
