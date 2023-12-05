import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useContext, useState } from "react";
import Spinner from "react-native-loading-spinner-overlay";

import Button from "../../../../components/Button";
import Title from "../../../../components/Title";
import Input from "../../../../components/Input";
import OtpInput from "../../../../components/OtpInput";

import styles from "./styles";
import { AuthContext } from "../../../../context/AuthContext";
import Checkbox from "../../../../components/Checkbox";
import Header from "../../../../components/Header";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Team = ({ navigation }) => {
  const { isLoading, userInfo } = useContext(AuthContext);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState(null);

  const onCheckboxPress = () => {
    setAgreed((value) => !value);
  };

  return (
    <KeyboardAwareScrollView behavior={"padding"} style={styles.container}>
      <Header
        title="Team"
        leftIconName="bell"
        leftNavigation="Notification"
        rightIconName="bars"
        rightNavigation="Menu"
        navigation={navigation}
      />
    </KeyboardAwareScrollView>
  );
};

export default Team;
