import React, { createContext, useContext, useEffect, useState } from "react";

// Create a context for your dashboard data
const DashboardContext = createContext();

// Custom hook to access the dashboard context
export const useDashboard = () => useContext(DashboardContext);

// Component to fetch and provide dashboard data through context
export const DashboardProvider = ({ children, token }) => {
  const [homeData, setHomeData] = useState(null);
  const [statsData, setStatsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API endpoints with the token
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Add the token to the headers
    };

    const fetchHomeData = () => {
      const apiUrl = "http://192.168.100.28:8000/api/stake/get/reward";
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
      const apiUrl = "http://192.168.100.28:8000/api/stake/home";
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
          console.error("Error fetching home data:", error);
        });
    };

    // Fetch both home and stats data when the component mounts
    fetchHomeData();
    fetchStatsData();
  }, [token]); // Include the token as a dependency

  return (
    <DashboardContext.Provider value={{ homeData, statsData, loading, error }}>
      {children}
    </DashboardContext.Provider>
  );
};
