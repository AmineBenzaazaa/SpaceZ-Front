import React, { useContext } from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Header from "../../../../components/Header";
import colors from "../../../../constants/colors";


import { AuthContext } from "../../../../context/AuthContext";


import styles from "./styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const MenuItem = ({ iconName, label, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.iconContainer}>
      <FontAwesome5 name={iconName} size={20} style={styles.icon} />
      <Text style={styles.label}>{label}</Text>
    </View>
    <FontAwesome5 name="chevron-right" size={20} style={styles.chevronIcon} />
  </TouchableOpacity>
);

const Menu = ({ navigation }) => {
  const { logout } = useContext(AuthContext);
  const handleProfilePress = () => {
    console.log("My Profile Pressed");
    // Add navigation logic here if needed
  };

  const handleLogout = async () => {
    try {
      await logout();
      // You can perform any additional actions after successful logout if needed.
      console.log("User logged out successfully");
      navigation.navigate('Login');
    } catch (error) {
      // Handle logout errors, if any.
      console.error("Error logging out:", error);
    }
  };

  return (
    <KeyboardAwareScrollView behavior={"padding"} style={{ flex: 1, backgroundColor: colors.purpledark }}>
      <Header
        title="Menu"
        leftIconName="chevron-left"
        leftNavigation="Home"
        rightIconName={false}
        rightNavigation={false}
        navigation={navigation}
      />

      <View style={{ paddingVertical: 16, paddingHorizontal: 28 }}>
        <MenuItem
          iconName="user"
          label="My Profile"
          onPress={handleProfilePress}
        />
        <MenuItem
          iconName="lock"
          label="Change password"
          onPress={handleProfilePress}
        />
        <View
          style={{
            borderBottomColor: colors.purplelight,
            borderBottomWidth: 0.3,
            width: "100%", // Set the width to 100% to make it a horizontal line
          }}
        />
        <MenuItem
          iconName="newspaper"
          label="News"
          onPress={handleProfilePress}
        />
        <MenuItem
          iconName="comment"
          label="Support"
          onPress={handleProfilePress}
        />
        <View
          style={{
            borderBottomColor: colors.purplelight,
            borderBottomWidth: 0.3,
            width: "100%", // Set the width to 100% to make it a horizontal line
          }}
        />
        <MenuItem
          iconName="paste"
          label="Terms and conditions"
          onPress={handleProfilePress}
        />
        <MenuItem
          iconName="paperclip"
          label="Privacy Policy"
          onPress={handleProfilePress}
        />
        <MenuItem iconName="info" label="About" onPress={handleProfilePress} />
        <View
          style={{
            borderBottomColor: colors.purplelight,
            borderBottomWidth: 0.3,
            width: "100%", // Set the width to 100% to make it a horizontal line
          }}
        />
        <MenuItem iconName="door-open" label="Log out" onPress={handleLogout} />
      </View>
    </KeyboardAwareScrollView>
  );
};
export default Menu;
