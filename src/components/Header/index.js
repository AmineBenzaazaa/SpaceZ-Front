import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";
import colors from "../../constants/colors";

const Header = ({
  title,
  leftIconName,
  leftNavigation,
  rightIconName,
  rightNavigation,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      {leftIconName && leftNavigation && (
        <TouchableOpacity onPress={() => navigation.navigate(leftNavigation)}>
          <FontAwesome5 name={leftIconName} style={styles.icon} />
        </TouchableOpacity>
      )}

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        {/* <Text style={styles.subtitle}>{subtitle}</Text> */}
      </View>

      {rightIconName && rightNavigation && (
        <TouchableOpacity onPress={() => navigation.navigate(rightNavigation)}>
          <FontAwesome5 name={rightIconName} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default React.memo(Header);
