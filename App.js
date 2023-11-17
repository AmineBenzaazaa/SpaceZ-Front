import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

import { AuthProvider } from "./src/context/AuthContext";
import { OtpProvider } from "./src/context/OtpContext";

import Onboarding from "./src/screens/app/auth/Onboarding";
import Signin from "./src/screens/app/auth/Signin";
import Signup from "./src/screens/app/auth/Signup";
import Verification from "./src/screens/app/auth/Verification";

export default function App() {
  const Stack = createStackNavigator();

  const [fontsLoaded] = useFonts({
    "poppins-bold": require("./src/assets/fonts/Poppins-Bold.ttf"),
    "poppins-light": require("./src/assets/fonts/Poppins-Light.ttf"),
    "poppins-regular": require("./src/assets/fonts/Poppins-Regular.ttf"),
    "poppins-semibold": require("./src/assets/fonts/Poppins-SemiBold.ttf"),
  });


  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <AuthProvider>
      <OtpProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Verification" component={Verification} />
          </Stack.Navigator>
        </NavigationContainer>
      </OtpProvider>
    </AuthProvider>
  );
}
