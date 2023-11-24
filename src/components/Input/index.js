import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import colors from "../../constants/colors";

const Input = ({ icon, ...props }) => {
  return (
    <View style={styles.inputContainer}>
      {icon && <View style={styles.icon}>{icon}</View>}
      <TextInput
        placeholderTextColor={colors.text}
        style={styles.input}
        {...props}
      />
    </View>
  );
};

export default React.memo(Input);
