import {
  ScrollView,
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useContext, useState } from "react";
import Spinner from "react-native-loading-spinner-overlay";

import Header from "../../../../components/Header";
import { AuthContext } from "../../../../context/AuthContext";
import Checkbox from "../../../../components/Checkbox";
import colors from "../../../../constants/colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Statement = ({ navigation }) => {
  const { isLoading, userInfo } = useContext(AuthContext);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState(null);

  const onCheckboxPress = () => {
    setAgreed((value) => !value);
  };

  return (
    <KeyboardAwareScrollView behavior={"padding"} style={styles.container}>
      <Header
        title="Statement Details"
        leftIconName="chevron-left"
        leftNavigation="Statistics"
        rightIconName={false}
        rightNavigation={false}
        navigation={navigation}
      />
      <ScrollView style={styles.main}>
        <View style={styles.card}>
          <View style={styles.transactionsLight}>
            {/* Left column */}
            <View style={styles.columnLeft}>
              <Text style={styles.CardText}>Total Rewards</Text>
            </View>

            {/* Right column */}
            <View style={styles.columnRight}>
              <Text style={styles.CardText}>500 SPZ</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row", // Use row direction to horizontally center
              alignItems: "center", // Center vertically
              justifyContent: "center", // Center horizontally
            }}
          >
            <View
              style={{
                borderBottomColor: colors.purplelight,
                borderBottomWidth: 0.6,
                width: "90%", // Set the width to 100% to make it a horizontal line
              }}
            />
          </View>
          <View style={styles.transactionsLight}>
            {/* Left column */}
            <View style={styles.columnLeft}>
              <Text style={styles.text}>Total Rewards</Text>
            </View>

            {/* Right column */}
            <View style={styles.columnRight}>
              <Text style={styles.text}>500 SPZ</Text>
            </View>
          </View>
          <View style={styles.transactionsLight}>
            {/* Left column */}
            <View style={styles.columnLeft}>
              <Text style={styles.text}>Direct Rewards</Text>
            </View>

            {/* Right column */}
            <View style={styles.columnRight}>
              <Text style={styles.text}>500 SPZ</Text>
            </View>
          </View>
          <View style={styles.transactionsLight}>
            {/* Left column */}
            <View style={styles.columnLeft}>
              <Text style={styles.text}>Team Rewards</Text>
            </View>

            {/* Right column */}
            <View style={styles.columnRight}>
              <Text style={styles.text}>500 SPZ</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row", // Use row direction to horizontally center
              alignItems: "center", // Center vertically
              justifyContent: "center", // Center horizontally
            }}
          >
            <View
              style={{
                borderBottomColor: colors.purplelight,
                borderBottomWidth: 0.6,
                width: "90%", // Set the width to 100% to make it a horizontal line
              }}
            />
          </View>
          <View style={styles.transactionsLight}>
            {/* Left column */}
            <View style={styles.columnLeft}>
              <Text style={styles.CardText}>Available for withdrawal</Text>
            </View>

            {/* Right column */}
            <View style={styles.columnRight}>
              <Text style={styles.CardText}>500 SPZ</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.transactionsLight}>
            {/* Left column */}
            <View style={styles.columnLeft}>
              <Text style={styles.CardText}>Total Rewards</Text>
            </View>

            {/* Right column */}
            <View style={styles.columnRight}>
              <Text style={styles.CardText}>500 SPZ</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row", // Use row direction to horizontally center
              alignItems: "center", // Center vertically
              justifyContent: "center", // Center horizontally
            }}
          >
            <View
              style={{
                borderBottomColor: colors.purplelight,
                borderBottomWidth: 0.6,
                width: "90%", // Set the width to 100% to make it a horizontal line
              }}
            />
          </View>
          <View style={styles.transactionsLight}>
            {/* Left column */}
            <View style={styles.columnLeft}>
              <Text style={styles.text}>Total Rewards</Text>
            </View>

            {/* Right column */}
            <View style={styles.columnRight}>
              <Text style={styles.text}>500 SPZ</Text>
            </View>
          </View>
          <View style={styles.transactionsLight}>
            {/* Left column */}
            <View style={styles.columnLeft}>
              <Text style={styles.text}>Direct Rewards</Text>
            </View>

            {/* Right column */}
            <View style={styles.columnRight}>
              <Text style={styles.text}>500 SPZ</Text>
            </View>
          </View>
          <View style={styles.transactionsLight}>
            {/* Left column */}
            <View style={styles.columnLeft}>
              <Text style={styles.text}>Team Rewards</Text>
            </View>

            {/* Right column */}
            <View style={styles.columnRight}>
              <Text style={styles.text}>500 SPZ</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row", // Use row direction to horizontally center
              alignItems: "center", // Center vertically
              justifyContent: "center", // Center horizontally
            }}
          >
            <View
              style={{
                borderBottomColor: colors.purplelight,
                borderBottomWidth: 0.6,
                width: "90%", // Set the width to 100% to make it a horizontal line
              }}
            />
          </View>
          <View style={styles.transactionsLight}>
            {/* Left column */}
            <View style={styles.columnLeft}>
              <Text style={styles.CardText}>Available for withdrawal</Text>
            </View>

            {/* Right column */}
            <View style={styles.columnRight}>
              <Text style={styles.CardText}>500 SPZ</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.transactionsLight}>
            {/* Left column */}
            <View style={styles.columnLeft}>
              <Text style={styles.CardText}>Total Rewards</Text>
            </View>

            {/* Right column */}
            <View style={styles.columnRight}>
              <Text style={styles.CardText}>500 SPZ</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row", // Use row direction to horizontally center
              alignItems: "center", // Center vertically
              justifyContent: "center", // Center horizontally
            }}
          >
            <View
              style={{
                borderBottomColor: colors.purplelight,
                borderBottomWidth: 0.6,
                width: "90%", // Set the width to 100% to make it a horizontal line
              }}
            />
          </View>
          <View style={styles.transactionsLight}>
            {/* Left column */}
            <View style={styles.columnLeft}>
              <Text style={styles.text}>Total Rewards</Text>
            </View>

            {/* Right column */}
            <View style={styles.columnRight}>
              <Text style={styles.text}>500 SPZ</Text>
            </View>
          </View>
          <View style={styles.transactionsLight}>
            {/* Left column */}
            <View style={styles.columnLeft}>
              <Text style={styles.text}>Direct Rewards</Text>
            </View>

            {/* Right column */}
            <View style={styles.columnRight}>
              <Text style={styles.text}>500 SPZ</Text>
            </View>
          </View>
          <View style={styles.transactionsLight}>
            {/* Left column */}
            <View style={styles.columnLeft}>
              <Text style={styles.text}>Team Rewards</Text>
            </View>

            {/* Right column */}
            <View style={styles.columnRight}>
              <Text style={styles.text}>500 SPZ</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row", // Use row direction to horizontally center
              alignItems: "center", // Center vertically
              justifyContent: "center", // Center horizontally
            }}
          >
            <View
              style={{
                borderBottomColor: colors.purplelight,
                borderBottomWidth: 0.6,
                width: "90%", // Set the width to 100% to make it a horizontal line
              }}
            />
          </View>
          <View style={styles.transactionsLight}>
            {/* Left column */}
            <View style={styles.columnLeft}>
              <Text style={styles.CardText}>Available for withdrawal</Text>
            </View>

            {/* Right column */}
            <View style={styles.columnRight}>
              <Text style={styles.CardText}>500 SPZ</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.transactionsLight}>
            {/* Left column */}
            <View style={styles.columnLeft}>
              <Text style={styles.CardText}>Total Rewards</Text>
            </View>

            {/* Right column */}
            <View style={styles.columnRight}>
              <Text style={styles.CardText}>500 SPZ</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row", // Use row direction to horizontally center
              alignItems: "center", // Center vertically
              justifyContent: "center", // Center horizontally
            }}
          >
            <View
              style={{
                borderBottomColor: colors.purplelight,
                borderBottomWidth: 0.6,
                width: "90%", // Set the width to 100% to make it a horizontal line
              }}
            />
          </View>
          <View style={styles.transactionsLight}>
            {/* Left column */}
            <View style={styles.columnLeft}>
              <Text style={styles.text}>Total Rewards</Text>
            </View>

            {/* Right column */}
            <View style={styles.columnRight}>
              <Text style={styles.text}>500 SPZ</Text>
            </View>
          </View>
          <View style={styles.transactionsLight}>
            {/* Left column */}
            <View style={styles.columnLeft}>
              <Text style={styles.text}>Direct Rewards</Text>
            </View>

            {/* Right column */}
            <View style={styles.columnRight}>
              <Text style={styles.text}>500 SPZ</Text>
            </View>
          </View>
          <View style={styles.transactionsLight}>
            {/* Left column */}
            <View style={styles.columnLeft}>
              <Text style={styles.text}>Team Rewards</Text>
            </View>

            {/* Right column */}
            <View style={styles.columnRight}>
              <Text style={styles.text}>500 SPZ</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row", // Use row direction to horizontally center
              alignItems: "center", // Center vertically
              justifyContent: "center", // Center horizontally
            }}
          >
            <View
              style={{
                borderBottomColor: colors.purplelight,
                borderBottomWidth: 0.6,
                width: "90%", // Set the width to 100% to make it a horizontal line
              }}
            />
          </View>
          <View style={styles.transactionsLight}>
            {/* Left column */}
            <View style={styles.columnLeft}>
              <Text style={styles.CardText}>Available for withdrawal</Text>
            </View>

            {/* Right column */}
            <View style={styles.columnRight}>
              <Text style={styles.CardText}>500 SPZ</Text>
            </View>
          </View>
        </View>
          <View style={{marginBottom:40}}/>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default Statement;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purpledark,
    flex: 1,
  },
  main: {
    paddingTop: 24,
    paddingHorizontal: 20,
  },
  columnLeft: {
    flex: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  columnRight: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  card: {
    marginVertical: 8,
    backgroundColor: colors.purplebold,
    borderRadius: 8,
    padding: 8,
  },
  text: {
    color: colors.grey,
    fontSize: 14,
  },
  CardText: {
    color: colors.white,
    fontSize: 15,
  },
  transactionsLight: {
    marginHorizontal: 10,
    flexDirection: "row",
    backgroundColor: colors.purplebold,
    borderRadius: 8,
    justifyContent: "space-between",
    padding: 8,
  },
  buttonsContainer: {
    flexDirection: "column",
    marginVertical: 10,
  },
  button: {
    // flex: 1,
    marginVertical: 5,
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
});
