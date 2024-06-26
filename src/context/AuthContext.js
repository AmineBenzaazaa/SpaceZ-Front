import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../config";
import * as SecureStore from "expo-secure-store";
import { DashboardProvider } from "./DashboardContext";
import ValideModal from "../components/ValideModal";

export const AuthContext = createContext();

export const AuthProvider = ({ children, navigation }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);
  const [error, setError] = useState(false);
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null);
  const [message, setMessage] = useState(null);
  const [isValideModalVisible, setValideModalVisible] = useState(false);

  const toggleModal = () => {
    setValideModalVisible(!isValideModalVisible);
  };

  const register = async (
    fullName,
    username,
    email,
    phoneNumber,
    password,
    country
  ) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/user/signup`, {
        fullName: fullName,
        username: username,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
        country: country,
      });

      let userInfo = response.data;
      setToken(userInfo.token);
      AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));

      const userData = await getUser(userInfo);

      const combinedData = {
        userInfo: userInfo,
        userData: userData,
      };

      setUserInfo(combinedData);
      setIsLoading(false);
      console.log(combinedData);
      AsyncStorage.setItem("combinedData", JSON.stringify(combinedData));
      return combinedData;
    } catch (error) {
      if (error.response) {
        console.error(
          "Server error:",
          error.response.status,
          error.response.data
        );
      } else if (error.request) {
        console.error("No response received. Network issue.");
        setModalVisible(true);
      } else {
        console.error("Request setup error:", error.message);
        setModalVisible(true);
      }
      setIsLoading(false);
    }
  };

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/user/login`, {
        email,
        password,
      });
      if ((response.status = 200)) {
        let userInfo = response.data;
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));

        setToken(userInfo.token);
        // console.log('token :>> ', token);
        const userData = await getUser(userInfo);
        const combinedData = {
          userInfo: userInfo,
          userData: userData,
        };

        setUserInfo(combinedData);
        AsyncStorage.setItem("combinedData", JSON.stringify(combinedData));

        // Alert.alert("Success!", `User was successfully logged in!`);
        storeUserDataSecurely(combinedData);
        // sendVerificationEmail(email);
        setIsLoading(false);
        return combinedData;
      } else {
        // Login failed, show error message
        setError(response.message || "Login failed. Please try again.");
      }
    } catch (error) {
      // Handle API call errors
      setError("Server error. Please try again.");
    } finally {
      // Hide loading indicator
      setIsLoading(false);
    }
  };

  const sendVerificationEmail = async (email, token_) => {
    try {
      const token = token_ || userInfo?.token;

      if (!token) {
        throw new Error("User token not available");
      }

      // Send a POST request to the endpoint for sending verification email
      const response = await axios.post(
        `${BASE_URL}/user/send-verify-token`,
        { email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Verification email response:", response.data);
    } catch (e) {
      // Handle any errors that may occur while sending the verification email
      console.error("Error sending verification email:", e);
    }
  };

  const verifyEmail = async (userId, token) => {
    setIsLoading(true);

    try {
      const response = await axios.post(`${BASE_URL}/user/verify-email`, {
        userId,
        token,
      });

      // Handle the response based on your application's logic
      console.log("Verification email response:", response.data);

      // Optional: You can navigate the user to another screen after successful verification
      // navigation.navigate('Login');

      // Alert.alert(
      //   "Success!",
      //   "Email verification successful. You can now log in."
      // );

      setIsLoading(false);
      return response;
    } catch (error) {
      // Handle verification errors
      console.error("Error verifying email:", error);

      // Example: Display a more detailed error message to the user
      const errorMessage =
        error.response?.data?.message ||
        "Email verification failed. Please try again.";

      // Alert.alert("Error", errorMessage);

      setIsLoading(false);
      throw error; // Rethrow the error to indicate verification failure
    }
  };

  const getUser = async (userInfo_) => {
    setIsLoading(true);
    try {
      // Make an HTTP GET request to the /get-user endpoint
      const response = await axios.get(`${BASE_URL}/user/getuser`, {
        headers: {
          Authorization: `Bearer ${userInfo_.token}`,
        },
      });

      const userData = response.data;

      // You can set the user data in the state or return it as needed
      setIsLoading(false);
      return userData;
    } catch (error) {
      // Handle any errors that may occur while fetching user data
      console.error("Error fetching user data:", error);

      setIsLoading(false);

      // You can return an empty object or handle the error in your application logic
      return {};
    }
  };

  const storeUserDataSecurely = async (userData_) => {
    try {
      // Store user data securely using expo-secure-store
      await SecureStore.setItemAsync("userInfo", JSON.stringify(userData_));
    } catch (error) {
      console.error("Error storing user data securely:", error);
    }
  };

  const changePassword = async (currentPassword, newPassword) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/user/change-password`,
        {
          currentPassword,
          newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Handle the response based on your application's logic
      console.log("Change password response:", response.data);
      console.log('response :>> ', response);

      if (response.status == "200") {
        console.log("POST request successful", response.data);
        setMessage("Password Changed Successfully");
        setValideModalVisible(true);
      }else {
        console.log("POST request:", response.data);
        setMessage("Something Went wrong");
        setValideModalVisible(true);
      }
      // Optional: You can navigate the user to another screen or display a success message
      // navigation.navigate('Profile');

      setIsLoading(false);
      return response;
    } catch (error) {
      // Handle password change errors
      console.error("Error changing password:", error);

      // Example: Display a more detailed error message to the user
      const errorMessage =
        error.response?.data?.message ||
        "Password change failed. Please try again.";

      // Alert.alert("Error", errorMessage);

      setIsLoading(false);
      throw error; // Rethrow the error to indicate password change failure
    }
  };

  const logout = () => {
    setIsLoading(true);
    axios
      .post(
        `${BASE_URL}/logout`,
        {},
        {
          headers: { Authorization: `Bearer ${userInfo.access_token}` },
        }
      )
      .then((res) => {
        console.log(res.data);
        AsyncStorage.removeItem("userInfo");
        AsyncStorage.removeItem("combinedData");
        setUserInfo({});
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(`logout error ${e}`);
        setIsLoading(false);
      });
  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);

      let userInfo = await AsyncStorage.getItem("combinedData");
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
        return true;
      }

      setSplashLoading(false);
      return false;
    } catch (e) {
      setSplashLoading(false);
      console.log(`is logged in error ${e}`);
      return false;
    }
  };

  useEffect(() => {
    const checkLoggedIn = async () => {
      const userLoggedIn = await isLoggedIn();
      if (userLoggedIn) {
        // User is already logged in, navigate to the main screen
        navigation.navigate("Key"); // Replace "MainScreen" with your actual main screen name
      }
    };

    checkLoggedIn();
  }, [navigation]);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        splashLoading,
        getUser,
        sendVerificationEmail,
        register,
        login,
        logout,
        userId,
        setUserId,
        verifyEmail,
        changePassword,
        token,
      }}
    >
      <DashboardProvider token={token}>
        {children}
        <ValideModal
          isVisible={isValideModalVisible}
          toggleModal={toggleModal}
          modalText={message}
        />
      </DashboardProvider>
    </AuthContext.Provider>
  );
};
