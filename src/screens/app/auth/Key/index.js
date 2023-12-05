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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Key = ({ navigation }) => {
  const { isLoading, userInfo } = useContext(AuthContext);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState(null);

  const onCheckboxPress = () => {
    setAgreed((value) => !value);
  };

  return (
    <KeyboardAwareScrollView behavior={"padding"} style={styles.container}>
      <Title title="Public Key" subtitle="Save it somewhere safe and secret" />
      <View style={styles.body}>
        <View style={styles.keyContainer}>
          <View style={styles.key}>
            <Image
              source={require("../../../../assets/icons/key.png")}
              style={styles.icon}
            />
            <Text style={styles.walletPublicKey}>
              {userInfo.userData.user.walletPublicKey}
            </Text>
          </View>
          <TouchableOpacity style={styles.copy}>
            <Image
              source={require("../../../../assets/icons/copy.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.warning}>
          Warning Never discloses this private key to anyone with your private
          key they can fully control your wallet including transferring away
          your BLC and BFIC
        </Text>
        <View style={styles.checkboxContainer}>
          <Checkbox
            checked={agreed}
            onPress={onCheckboxPress}
            // value={isSelected}
            // onValueChange={setSelection}
            // style={styles.checkbox}
          />
          <Text style={styles.text}>
            Are you sure you have saved this private key?
          </Text>
        </View>
        <Button onPress={() => navigation.navigate("HomeTabs")}>Next</Button>
        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Key;
