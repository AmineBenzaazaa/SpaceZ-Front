import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const Title = ({ title,subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default React.memo(Title);
