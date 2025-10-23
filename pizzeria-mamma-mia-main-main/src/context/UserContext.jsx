// src/context/UserContext.jsx
import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true); // Por defecto true (usuario logueado)

  const logout = () => {
    setToken(false);
    console.log('👋 Usuario deslogueado');
  };

  const login = () => {
    setToken(true);
    console.log('✅ Usuario logueado');
  };

  const value = {
    token,
    logout,
    login
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser debe usarse dentro de <UserProvider>");
  }
  return context;
};
