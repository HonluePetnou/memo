import React, { createContext, useContext, useEffect, useState } from 'react';

// Create the context
const DarkModeContext = createContext();

// Custom hook to use dark mode context
export const useDarkMode = () => useContext(DarkModeContext);

// Provider component
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize dark mode state from local storage if available
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  // Effect to add/remove dark mode class on the <html> element
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('darkMode', true);
    } else {
      root.classList.remove('dark');
      localStorage.setItem('darkMode', false);
    }
  }, [darkMode]);

  // Toggle function
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
