import { createContext, useState } from "react";

export const darkModeState = createContext();

export const StateProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <darkModeState.Provider value={{ isDarkMode, handleDarkMode }}>
      {children}
    </darkModeState.Provider>
  );
};
