import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import React, { useContext, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import Spinner from "react-native-loading-spinner-overlay";
import Toast from 'react-native-toast-message';

import { AuthContext } from "../../../../context/AuthContext";
import Checkbox from "../../../../components/Checkbox";
import Header from "../../../../components/Header";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import colors from "../../../../constants/colors";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

const UpdatePassword = ({ navigation }) => {
  const { isLoading, userInfo, changePassword } = useContext(AuthContext);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleChangePassword = async () => {
    try {
      const response = await changePassword(currentPassword, newPassword);
      console.log("response :>> ", response.data.message);
      // Password changed successfully, you can navigate to another screen or show a success message.
    } catch (error) {
      console.log("error!!! :>> ", error);
      // Handle password change failure, display an error message, etc.
    }
  };

  const passwordIcon = (
    <FontAwesome5 name="lock" size={15} color={colors.purplelight} />
  );

  return (
    <KeyboardAwareScrollView
      behavior={"padding"}
      style={{ ...styles.container }}
    >
      <Header
        title="Update Password"
        leftIconName="chevron-left"
        leftNavigation="Menu"
        rightIconName={false}
        rightNavigation={false}
        navigation={navigation}
      />

      <Spinner visible={isLoading} />
      <View style={styles.body}>
        <TouchableOpacity
          onPress={showToasts}
          style={{
            backgroundColor: "white",
            borderColor: "green",
            borderWidth: 1,
            padding: 10,
          }}
        >
          <Text>SHOW SOME AWESOMENESS!</Text>
        </TouchableOpacity>
        <View style={styles.input}>
          <Text style={styles.label}>Current Password</Text>
          <Input
            placeholder="Enter current Password"
            value={currentPassword}
            onChangeText={(text) => setCurrentPassword(text)}
            icon={passwordIcon}
          />
        </View>

        <View style={styles.input}>
          <Text style={styles.label}>New Password</Text>
          <Input
            placeholder="Enter new Password"
            value={newPassword}
            onChangeText={(text) => setNewPassword(text)}
            icon={passwordIcon}
          />
        </View>
        <Button onPress={() => handleChangePassword()}>Update</Button>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default UpdatePassword;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purpledark,
  },
  body: {
    padding: 24,
  },
  label: {
    textAlign: "left",
    color: colors.purplelight,
  },
  text: {
    textAlign: "center",
    color: colors.white,
    fontSize: 12,
    marginVertical: 28,
  },
  input: {
    marginHorizontal: 8,
  },
  footer: {
    flex: 1,
  },
});
