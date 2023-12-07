import React, { createContext, useContext, useEffect, useState } from "react";
import { BASE_URL } from "../config";

// Create a context for your dashboard data
const DashboardContext = createContext();

// Custom hook to access the dashboard context
export const useDashboard = () => useContext(DashboardContext);

// Component to fetch and provide dashboard data through context
export const DashboardProvider = ({ children, token }) => {
  const [homeData, setHomeData] = useState(null);
  const [statsData, setStatsData] = useState(null);
  const [walletData, setWalletData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to send an amount
  const sendAmount = (amount) => {
    const apiUrl = `${BASE_URL}/stake/get/reward`;

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

    // Fetch home, stats, and wallet data when the component mounts
    fetchHomeData();
    fetchStatsData();
    fetchWalletData();
  }, [token]);
  return (
    <DashboardContext.Provider value={{ homeData, statsData, walletData, loading, error, sendAmount }}>
      {children}
    </DashboardContext.Provider>
  );
};
