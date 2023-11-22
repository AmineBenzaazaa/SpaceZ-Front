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

const Key = ({ navigation }) => {
  const { isLoading, userInfo } = useContext(AuthContext);
  const [error, setError] = useState(null);

  console.log('userInfo.userData.walletPublicKey :>> ', userInfo.userData.user.walletPublicKey);
  return (
    <SafeAreaView style={styles.container}>
      <Title title="Public Key" subtitle="Save it somewhere safe and secret" />

      <View style={styles.key}>
        <Image source={require("../../../../assets/icons/key.png")} />
        <Text style={styles.walletPublicKey}>{userInfo.userData.user.walletPublicKey}</Text>
      </View>
        <View style={styles.copy}>
          <Image source={require("../../../../assets/icons/copy.png")} />
        </View>
      <Text style={styles.warning}>
        Warning Never discloses this private key to anyone with your private key
        they can fully control your wallet including transferring away your BLC
        and BFIC
      </Text>
      <Button onPress={() => navigation.navigate("Signin")}>Next</Button>
      {error && <Text style={styles.errorText}>{error}</Text>}
      <Text style={styles.text}>
        Not registered?{" "}
        <Text style={styles.link} onPress={() => navigation.navigate("Signup")}>
          Sign up!
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default Key;
