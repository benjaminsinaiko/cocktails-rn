import React, { useState, createContext, useContext } from 'react';

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [themeMode, setThemeMode] = useState('dark');

  function toggleTheme() {
    const nextTheme = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(nextTheme);
  }

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }} {...props} />
  );
}

function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export { ThemeProvider, useThemeContext };
