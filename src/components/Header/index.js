import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";

const Header = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log("Notification Pressed")}>
        <FontAwesome5 name="bell" style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        {/* <Text style={styles.subtitle}>{subtitle}</Text> */}
      </View>

      <TouchableOpacity onPress={() => console.log("Hamburger Menu Pressed")}>
        <FontAwesome5 name="bars" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(Header);
