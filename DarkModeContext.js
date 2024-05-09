import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const DarkModeContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {}
});

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const loadSettings = async () => {
      const storedDarkMode = await AsyncStorage.getItem('darkModeSetting');
      if (storedDarkMode !== null) {
        setIsDarkMode(JSON.parse(storedDarkMode));
      }
    };

    loadSettings();
  }, []);

  const toggleDarkMode = async () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    await AsyncStorage.setItem('darkModeSetting', JSON.stringify(newIsDarkMode));
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
