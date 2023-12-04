import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { useRef } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import * as SplashScreen from "expo-splash-screen";
import { BetweenPagesProvider } from "between-pages";
import { AuthContext, AuthProvider } from "./src/context/AuthContext";

import Onboarding from "./src/screens/app/auth/Onboarding";
import Signin from "./src/screens/app/auth/Signin";
import Signup from "./src/screens/app/auth/Signup";
import Verification from "./src/screens/app/auth/Verification";
import Key from "./src/screens/app/auth/Key";

// Font Awesome Icons...
import { FontAwesome5 } from "@expo/vector-icons";

// Dashboard
import Home from "./src/screens/app/dashboard/Home";
import Swap from "./src/screens/app/dashboard/Swap";
import Team from "./src/screens/app/dashboard/Team";
import Statistics from "./src/screens/app/dashboard/Statistics";
import Wallet from "./src/screens/app/dashboard/Wallet";
import colors from "./src/constants/colors";
import Staking from "./src/screens/app/dashboard/Staking";
import Notification from "./src/screens/app/dashboard/Notification";
import Menu from "./src/screens/app/dashboard/Menu";
import Withdraw from "./src/screens/app/dashboard/Withdraw";
import Deposit from "./src/screens/app/dashboard/Deposit";
import Offer from "./src/screens/app/dashboard/Offer";
import WithdrawReward from "./src/screens/app/dashboard/WithdrawReward";
import Statement from "./src/screens/app/dashboard/Statement";
import WalletWithdraw from "./src/screens/app/dashboard/WalletWithraw";
import { DashboardProvider } from "./src/context/DashboardContext";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Hiding Tab Names...
export default function App() {
  // Animated Tab Indicator...
  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  const screenOptions = {
    headerShown: false,
    tabBarStyle: {
      backgroundColor: "#1E1D2B",
      position: "absolute",
      // bottom: 40,
      // marginHorizontal: 20,
      // Max Height...
      height: 70,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      // Shadow...
      // shadowColor: "#000",
      // shadowOpacity: 0.06,
      // shadowOffset: {
      //   width: 10,
      //   height: 10,
      // },
      paddingHorizontal: 20,
    },
  };

  const HomeTabs = () => (
    <>
      <Tab.Navigator
        {...{ screenOptions }}
        sceneContainerStyle={{
          backgroundColor: "transparent",
          marginLeft: -1,
        }}
        tabBarOptions={{
          showLabel: false,
          tabBarStyle: { borderTopWidth: 0 },
          activeTintColor: colors.purpledark,
          inactiveTintColor: colors.purpledark,
          style: styles.container,
        }}
      >
        <Tab.Screen
          name={"Home"}
          component={Home}
          options={{
            tabBarIcon: ({ focused, name }) => (
              <>
                <FontAwesome5
                  name="home"
                  size={20}
                  color={focused ? colors.purplelight : colors.darkgold}
                  style={{ marginBottom: 5 }}
                ></FontAwesome5>
                <Text
                  style={{
                    color: focused ? colors.purplelight : colors.darkgold,
                  }}
                >
                  Home
                </Text>
              </>
            ),
          }}
        ></Tab.Screen>

        <Tab.Screen
          name={"Swap"}
          component={Swap}
          options={{
            tabBarIcon: ({ focused, name }) => (
              <>
                <FontAwesome5
                  name="exchange-alt"
                  size={20}
                  color={focused ? colors.purplelight : colors.darkgold}
                  style={{ marginBottom: 5 }}
                ></FontAwesome5>
                <Text
                  style={{
                    color: focused ? colors.purplelight : colors.darkgold,
                  }}
                >
                  Swap
                </Text>
              </>
            ),
          }}
        ></Tab.Screen>

        <Tab.Screen
          name={"Wallet"}
          component={Wallet}
          options={{
            tabBarIcon: ({ focused, name }) => (
              <>
                <FontAwesome5
                  name="wallet"
                  size={20}
                  color={focused ? colors.purplelight : colors.darkgold}
                  style={{ marginBottom: 5 }}
                ></FontAwesome5>
                <Text
                  style={{
                    color: focused ? colors.purplelight : colors.darkgold,
                  }}
                >
                  wallet
                </Text>
              </>
            ),
          }}
        ></Tab.Screen>

        <Tab.Screen
          name={"Team"}
          component={Team}
          options={{
            tabBarIcon: ({ focused, name }) => (
              <>
                <FontAwesome5
                  name="users"
                  size={20}
                  color={focused ? colors.purplelight : colors.darkgold}
                  style={{ marginBottom: 5 }}
                ></FontAwesome5>
                <Text
                  style={{
                    color: focused ? colors.purplelight : colors.darkgold,
                  }}
                >
                  Team
                </Text>
              </>
            ),
          }}
        ></Tab.Screen>

        <Tab.Screen
          name={"Statistics"}
          component={Statistics}
          options={{
            tabBarIcon: ({ focused, name }) => (
              <>
                <FontAwesome5
                  name="chart-bar"
                  size={20}
                  color={focused ? colors.purplelight : colors.darkgold}
                  style={{ marginBottom: 5 }}
                ></FontAwesome5>
                <Text
                  style={{
                    color: focused ? colors.purplelight : colors.darkgold,
                  }}
                >
                  Statistics
                </Text>
              </>
            ),
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </>
  );

  const AppStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="Key" component={Key} />
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
      <Stack.Screen name="Staking" component={Staking} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Withdraw" component={Withdraw} />
      <Stack.Screen name="Deposit" component={Deposit} />
      <Stack.Screen name="Offer" component={Offer} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="WithdrawReward" component={WithdrawReward} />
      <Stack.Screen name="Statement" component={Statement} />
      <Stack.Screen name="WalletWithdraw" component={WalletWithdraw} />
    </Stack.Navigator>
  );

  return (
    <AuthProvider>
      <NavigationContainer>
        <BetweenPagesProvider>
          <AppStack />
        </BetweenPagesProvider>
      </NavigationContainer>
    </AuthProvider>
  );
}

function getWidth() {
  let width = Dimensions.get("window").width;

  // Horizontal Padding = 20...
  width = width - 80;

  // Total five Tabs...
  return width / 5;
}

function EmptyScreen() {
  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    ></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E1D2B",
    borderTopWidth: 0,
  },
});
