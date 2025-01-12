import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState({
    fullName: "John Doe",
    email: "johndoe@example.com",
  });

  const updateUserProfile = (updatedProfile) => {
    setUserProfile(updatedProfile);
  };

  return (
    <UserContext.Provider value={{ userProfile, updateUserProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
