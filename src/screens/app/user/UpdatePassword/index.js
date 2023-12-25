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
import Toast from "react-native-toast-message";

import { AuthContext } from "../../../../context/AuthContext";
import Checkbox from "../../../../components/Checkbox";
import Header from "../../../../components/Header";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import colors from "../../../../constants/colors";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import CustomModal from "../../../../components/Modal";

const UpdatePassword = ({ navigation }) => {
  const { isLoading, userInfo, changePassword } = useContext(AuthContext);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setconfirmNewPassword] = useState("");
  const [validationError, setValidationError] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const handleChangePassword = async () => {
    console.log(
      "object :>> ",
      currentPassword,
      newPassword,
      confirmNewPassword
    );
    try {
      if (
        currentPassword === "" ||
        newPassword === "" ||
        confirmNewPassword === ""
      ) {
        setValidationError("Please fill out all the required fields.");
        setModalVisible(true);
        return;
      }
      if (newPassword !== confirmNewPassword) {
        setValidationError("Password confirmation does not match.");
        setModalVisible(true);
        return;
      } else {
        const response = await changePassword(currentPassword, newPassword);
        if (response.status == "200") {
          setCurrentPassword("");
          setNewPassword("");
          setconfirmNewPassword("");
        }
      }
      // Password changed successfully, you can navigate to another screen or show a success message.
    } catch (error) {
      console.log("error!!! :>> ", error);
      setValidationError("Failed to change password. Please try again.");
      setModalVisible(true);
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
        <View style={styles.input}>
          <Text style={styles.label}>Current Password</Text>
          <Input
            placeholder="Enter current Password"
            value={currentPassword}
            secureTextEntry
            onChangeText={(text) => setCurrentPassword(text)}
            icon={passwordIcon}
          />
        </View>

        <View style={styles.input}>
          <Text style={styles.label}>New Password</Text>
          <Input
            placeholder="Enter new Password"
            value={newPassword}
            secureTextEntry
            onChangeText={(text) => setNewPassword(text)}
            icon={passwordIcon}
          />
        </View>

        <View style={styles.input}>
          <Text style={styles.label}>Confirm New Password</Text>
          <Input
            placeholder="Confirm new Password"
            value={confirmNewPassword}
            secureTextEntry
            onChangeText={(text) => setconfirmNewPassword(text)}
            icon={passwordIcon}
          />
        </View>
        <Button onPress={() => handleChangePassword()}>Update</Button>
        {validationError && (
          <CustomModal
            isVisible={isModalVisible}
            toggleModal={toggleModal}
            modalText={validationError}
          />
        )}
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
