import { StatusBar } from "expo-status-bar";
import React from "react";
import { Animated, Text, View } from "react-native";
// import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useRef } from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
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
import WalletDeposit from "./src/screens/app/dashboard/WalletDeposit";

import { DashboardProvider } from "./src/context/DashboardContext";
import Profile from "./src/screens/app/user/Profile";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const SharedElementStack = createSharedElementStackNavigator();

// Hiding Tab Names...
export default function App() {
  // Animated Tab Indicator...
  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  const config = {
    animation: "spring",
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  const screenOptions = {
    headerShown: false,
    unmountOnBlur: true,
    TransitionEvent: {
      animation: "spring",
    },
    tabBarStyle: {
      backgroundColor: "#ffffff",
      position: "absolute",
      // bottom: 20,
      // Max Height...
      height: 90,
      alignItems: "center",
      justifyContent: "center",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 20,
      paddingHorizontal: 20,
      // margin: 15,
      // Shadow...
      shadowColor: "#000",
      shadowOpacity: 0.2,
      shadowOffset: {
        width: 10,
        height: 10,
      },
      padding: 20,
    },
  };

  const HomeTabs = () => (
    <BetweenPagesProvider>
      <Tab.Navigator
        {...{ screenOptions }}
        sceneContainerStyle={{
          backgroundColor: "transparent",
        }}
        lazy="true"
        tabBarOptions={{
          showLabel: false,
          tabBarStyle: { borderTopWidth: 0 },
        }}
      >
        <Tab.Screen
          name={"Home"}
          component={Home}
          options={{
            tabBarIcon: ({ focused, name }) => (
              <>
                <View
                  style={{
                    backgroundColor: focused
                      ? colors.purpleinput
                      : "transparent",
                    borderRadius: 20,
                    padding: 30,
                    position: "absolute",
                  }}
                />
                <FontAwesome5
                  name="home"
                  size={20}
                  color={focused ? colors.purplelight : colors.purpledark}
                  style={{ marginBottom: 5 }}
                ></FontAwesome5>
                <Text
                  style={{
                    color: focused ? colors.purplelight : colors.purpledark,
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
                <View
                  style={{
                    backgroundColor: focused
                      ? colors.purpleinput
                      : "transparent",
                    borderRadius: 20,
                    padding: 30,
                    position: "absolute",
                  }}
                />
                <FontAwesome5
                  name="exchange-alt"
                  size={20}
                  color={focused ? colors.purplelight : colors.purpledark}
                  style={{ marginBottom: 5 }}
                ></FontAwesome5>
                <Text
                  style={{
                    color: focused ? colors.purplelight : colors.purpledark,
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
                <View
                  style={{
                    backgroundColor: focused
                      ? colors.purpleinput
                      : "transparent",
                    borderRadius: 20,
                    padding: 30,
                    position: "absolute",
                  }}
                />
                <FontAwesome5
                  name="wallet"
                  size={20}
                  color={focused ? colors.purplelight : colors.purpledark}
                  style={{ marginBottom: 5 }}
                ></FontAwesome5>
                <Text
                  style={{
                    color: focused ? colors.purplelight : colors.purpledark,
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
                <View
                  style={{
                    backgroundColor: focused
                      ? colors.purpleinput
                      : "transparent",
                    borderRadius: 20,
                    padding: 30,
                    position: "absolute",
                  }}
                />
                <FontAwesome5
                  name="users"
                  size={20}
                  color={focused ? colors.purplelight : colors.purpledark}
                  style={{ marginBottom: 5 }}
                ></FontAwesome5>
                <Text
                  style={{
                    color: focused ? colors.purplelight : colors.purpledark,
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
                <View
                  style={{
                    backgroundColor: focused
                      ? colors.purpleinput
                      : "transparent",
                    borderRadius: 20,
                    padding: 30,
                    position: "absolute",
                  }}
                />
                <FontAwesome5
                  name="chart-bar"
                  size={20}
                  color={focused ? colors.purplelight : colors.purpledark}
                  style={{ marginBottom: 5 }}
                ></FontAwesome5>
                <Text
                  style={{
                    color: focused ? colors.purplelight : colors.purpledark,
                  }}
                >
                  Stats
                </Text>
              </>
            ),
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </BetweenPagesProvider>
  );

  HomeTabs.navigationOptions = {
    transitionSpec: {
      open: {
        animation: "timing",
        config: { duration: 500 }, // Customize duration
      },
      close: {
        animation: "timing",
        config: { duration: 500 }, // Customize duration
      },
    },
    cardStyleInterpolator: ({ current: { progress } }) => {
      return {
        cardStyle: {
          opacity: progress, // Customize opacity animation
        },
      };
    },
  };

  const AppStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        transitionSpec: {
          open: config,
          close: config,
        },
      }}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Verification" component={Verification} /> 
      <Stack.Screen name="Key" component={Key} />
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
      <Stack.Screen name="Staking" component={Staking} />
      <Stack.Screen
        name="Notification"
        component={Notification}
        screenOptions={{ gestureDirection: "horizontal-inverted" }}
      />
      <Stack.Screen name="Withdraw" component={Withdraw} />
      <Stack.Screen name="Deposit" component={Deposit} />
      <Stack.Screen name="Offer" component={Offer} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="WithdrawReward" component={WithdrawReward} />
      <Stack.Screen name="Statement" component={Statement} />
      <Stack.Screen name="WalletWithdraw" component={WalletWithdraw} />
      <Stack.Screen name="WalletDeposit" component={WalletDeposit} />
      <Stack.Screen name="Profile" component={Profile} />
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
