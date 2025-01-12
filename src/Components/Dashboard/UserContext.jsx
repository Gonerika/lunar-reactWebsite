import React, { createContext, useState, useContext } from "react";

// Create User Context
const UserContext = createContext();

// Context Provider
export const UserProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState({
    fullName: "John Doe",
    email: "johndoe@example.com",
    phoneNumber: "(123) 456-7890",
    address: "123 Main St\nAnytown, USA 12345",
  });

  const updateUserProfile = (newProfile) => {
    setUserProfile(newProfile);
  };

  return (
    <UserContext.Provider value={{ userProfile, updateUserProfile }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook for User Context
export const useUserContext = () => {
  return useContext(UserContext);
};
