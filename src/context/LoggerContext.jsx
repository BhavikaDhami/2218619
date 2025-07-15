import React, { createContext, useContext } from "react";

const LoggerContext = createContext();

export const LoggerProvider = ({ children }) => {
  const log = (message, data = {}) => {
    // Log logic (you may store in localStorage/sessionStorage if needed)
    console.log(`[Logger]: ${message}`, data);
  };
  return (
    <LoggerContext.Provider value={{ log }}>
      {children}
    </LoggerContext.Provider>
  );
};

export const useLogger = () => useContext(LoggerContext);
