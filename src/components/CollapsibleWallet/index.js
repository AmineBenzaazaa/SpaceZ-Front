import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../../constants/colors";

export default class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      expanded: false,
    };

    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    return (
      <View>
        {this.state.expanded && (
          <>
            <View style={styles.child}>
              <Text style={styles.title}>Global Stats</Text>
              <View style={styles.states}>
                <Text style={styles.token}>16,350,270</Text>
                <Text style={styles.text}>Total Participants</Text>
              </View>

              <Text style={styles.token}>205</Text>
              <Text style={styles.text}>Countries</Text>

              <View style={styles.transactionsLight}>
                {/* Left column */}
                <View style={styles.columnLeft}>
                  <Text style={styles.token}>11,265,520,780 SPZ</Text>
                  <Text style={styles.text}>Total Staked in Pool</Text>
                </View>

                {/* Right column */}
                <View style={styles.columnRight}>
                  <Text style={styles.token}>$2,253,104,156</Text>
                  <Text style={styles.text}>Total Staked in Pool (USD)</Text>
                </View>
              </View>

              <View style={styles.transactions}>
                {/* Left column */}
                <View style={styles.columnLeft}>
                  <Text style={styles.token}>20,456,456,352 SPZ</Text>
                  <Text style={styles.text}>Total Staked in Pool</Text>
                </View>

                {/* Right column */}
                <View style={styles.columnRight}>
                  <Text style={styles.token}>$4,091,291,270</Text>
                  <Text style={styles.text}>Total Staked in Pool (USD)</Text>
                </View>
              </View>

              <View style={styles.transactionsLight}>
                {/* Left column */}
                <View style={styles.columnLeft}>
                  <Text style={styles.token}>11,265,520,780 SPZ</Text>
                  <Text style={styles.text}>Total Staked in Pool</Text>
                </View>

                {/* Right column */}
                <View style={styles.columnRight}>
                  <Text style={styles.token}>$2,253,104,156</Text>
                  <Text style={styles.text}>Total Staked in Pool (USD)</Text>
                </View>
              </View>
            </View>
          </>
        )}
        <TouchableOpacity
          ref={this.accordian}
          style={styles.row}
          onPress={() => this.toggleExpand()}
        >
          <Icon
            name={
              this.state.expanded ? "keyboard-arrow-up" : "keyboard-arrow-down"
            }
            size={30}
            color={colors.white}
          />
        </TouchableOpacity>
        <View style={styles.parentHr} />
      </View>
    );
  }

  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded: !this.state.expanded });
  };
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: colors.white,
    textAlign: "center",
    marginBottom: 10,
  },
  text: {
    color: colors.grey,
    textAlign: "center",
    fontSize: 12,
  },
  token: {
    color: colors.white,
    textAlign: "center",
    fontSize: 14,
  },
  row: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  parentHr: {
    height: 1,
    color: colors.white,
    width: "100%",
  },
  child: {
    padding: 16,
  },
  columnLeft: {
    flex: 1,
    alignItems: "flex-start", // Updated from "left"
    justifyContent: "flex-start", // Updated from "top"
  },
  columnRight: {
    flex: 1,
    alignItems: "flex-end", // Updated from "right"
    justifyContent: "flex-start", // Updated from "top"
  },
  transactions: {
    flexDirection: "row", // Arrange children horizontally
    backgroundColor: colors.purplebold,
    borderRadius: 8,
    justifyContent: "space-between", // Space evenly between children
    padding: 8,
  },
  transactionsLight: {
    flexDirection: "row", // Arrange children horizontally
    backgroundColor: colors.purpledark,
    borderRadius: 8,
    justifyContent: "space-between", // Space evenly between children
    padding: 8,
  },
});
