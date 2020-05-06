import React, { useState, createContext, useContext } from 'react';

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = useState('dark');

  function toggleTheme() {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }} {...props} />;
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export { ThemeProvider, useTheme };
