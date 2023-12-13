import React, { createContext, useContext, useEffect, useState } from "react";
import { BASE_URL } from "../config";
import { Alert } from "react-native";

// Create a context for your dashboard data
const DashboardContext = createContext();

// Custom hook to access the dashboard context
export const useDashboard = () => useContext(DashboardContext);

// Component to fetch and provide dashboard data through context
export const DashboardProvider = ({ children, token }) => {
  const [homeData, setHomeData] = useState(null);
  const [statsData, setStatsData] = useState(null);
  const [walletData, setWalletData] = useState(null);
  const [tokenList, setTokenList] = useState(null);
  const [statisticsData, setStatisticsData] = useState(null);
  const [teamData, setTeamData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to send an amount
  const sendAmount = (amount) => {
    const apiUrl = `${BASE_URL}/stake`;

    // Define the data you want to send in the request body
    const postData = {
      amount: amount,
    };

    // Convert the data to a JSON string
    const requestBody = JSON.stringify(postData);

    // Define the headers including the authorization token
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    // Make the POST request
    fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: requestBody, // Include the JSON data in the request body
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        Alert.alert(response.json);
        return response.json();
      })
      .then((data) => {
        // Handle the response data as needed
        console.log("POST request successful", data);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error making POST request:", error);
      });
  };
  const withdraw = (amount, to, tokenSymbol) => {
    const apiUrl = `${BASE_URL}/wallet/withdraw`;

    // Define the data you want to send in the request body
    const postData = {
      amount: amount,
      to: to,
      tokenSymbol: tokenSymbol,
    };

    // Convert the data to a JSON string
    const requestBody = JSON.stringify(postData);

    // Define the headers including the authorization token
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    // Make the POST request
    fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: requestBody, // Include the JSON data in the request body
    })
      .then((response) => {
        if (!response.ok) {
          console.log("response :>> ", response);
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle the response data as needed
        console.log("POST request successful", data);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error making POST request:", error);
      });
  };
  const qoute = async (fromToken_id, toToken_id, fromAmount) => {
    const apiUrl = `${BASE_URL}/swap/qoute`;
    // Define the data you want to send in the request body
    const postData = {
      fromToken_id: fromToken_id,
      toToken_id: toToken_id,
      fromAmount: fromAmount,
    };
    console.log('postData :>> ', postData);
    // Convert the data to a JSON string
    const requestBody = JSON.stringify(postData);
  
    // Define the headers including the authorization token
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  
    // Make the POST request and return a promise
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: headers,
        body: requestBody, // Include the JSON data in the request body
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      // Return the toAmount
      console.log("POST request successful", data.toAmount);
      return data.toAmount;
    } catch (error) {
      // Handle any errors that occur during the request
      console.error("Error making POST request:", error);
      throw error; // Propagate the error
    }
  };
  const swap = async (fromToken_id, toToken_id, fromAmount) => {
    const apiUrl = `${BASE_URL}/swap`;
    // Define the data you want to send in the request body
    const postData = {
      fromToken_id: fromToken_id,
      toToken_id: toToken_id,
      fromAmount: fromAmount,
    };
    // Convert the data to a JSON string
    const requestBody = JSON.stringify(postData);
  
    // Define the headers including the authorization token
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  
    // Make the POST request and return a promise
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: headers,
        body: requestBody, // Include the JSON data in the request body
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      // Return the toAmount
      console.log("POST request successful", data.toAmount);
      return data.toAmount;
    } catch (error) {
      // Handle any errors that occur during the request
      console.error("Error making POST request:", error);
      throw error; // Propagate the error
    }
  };
  

  useEffect(() => {
    // Fetch data from the API endpoints with the token
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Add the token to the headers
    };

    const fetchHomeData = () => {
      const apiUrl = `${BASE_URL}/home/data`;
      fetch(apiUrl, { headers: headers }) // Include headers in the fetch request
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          setLoading(false);
          return response.json();
        })
        .then((data) => {
          setLoading(false);
          setHomeData(data);
        })
        .catch((error) => {
          setError(error.message);
          console.error("Error fetching home data:", error);
        });
    };

    const fetchStatsData = () => {
      const apiUrl = `${BASE_URL}/stake/home`;
      fetch(apiUrl, { headers: headers })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          setLoading(false);
          return response.json();
        })
        .then((data) => {
          setLoading(false);
          setStatsData(data);
        })
        .catch((error) => {
          setError(error.message);
          console.error("Error fetching stats data:", error);
        });
    };

    const fetchWalletData = () => {
      const apiUrl = `${BASE_URL}/wallet/balance`;
      fetch(apiUrl, { headers: headers })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          setLoading(false);
          return response.json();
        })
        .then((data) => {
          setLoading(false);
          setWalletData(data);
        })
        .catch((error) => {
          setError(error.message);
          console.error("Error fetching wallet data:", error);
        });
    };

    const fetchTokenListData = () => {
      const apiUrl = `${BASE_URL}/wallet/tokenlist`;
      fetch(apiUrl, { headers: headers })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          setLoading(false);
          return response.json();
        })
        .then((data) => {
          setLoading(false);
          setTokenList(data);
        })
        .catch((error) => {
          setError(error.message);
          console.error("Error fetching wallet data:", error);
        });
    };

    const fetchStatisticsData = () => {
      const apiUrl = `${BASE_URL}/stats`;
      fetch(apiUrl, { headers: headers })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          setLoading(false);
          return response.json();
        })
        .then((data) => {
          setLoading(false);
          setStatisticsData(data);
        })
        .catch((error) => {
          setError(error.message);
          console.error("Error fetching wallet data:", error);
        });
    };

    const fetchTeamData = () => {
      const apiUrl = `${BASE_URL}/stats`;
      fetch(apiUrl, { headers: headers })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          setLoading(false);
          return response.json();
        })
        .then((data) => {
          setLoading(false);
          setTeamData(data);
        })
        .catch((error) => {
          setError(error.message);
          console.error("Error fetching wallet data:", error);
        });
    };

    // Fetch home, stats, and wallet data when the component mounts
    fetchHomeData();
    fetchStatsData();
    fetchWalletData();
    fetchTokenListData();
    fetchStatisticsData();
    fetchTeamData();

  }, [token]);
  return (
    <DashboardContext.Provider
      value={{
        homeData,
        statsData,
        walletData,
        statisticsData,
        teamData,
        tokenList,
        loading,
        error,
        sendAmount,
        withdraw,
        qoute,
        swap
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
