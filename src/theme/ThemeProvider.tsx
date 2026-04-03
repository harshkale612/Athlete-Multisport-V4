'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'dark-cinematic' | 'light-editorial' | 'sport-adaptive';

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: (newTheme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark-cinematic',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('dark-cinematic');

  useEffect(() => {
    const saved = (localStorage.getItem('athlete-theme') as Theme) || 'dark-cinematic';
    setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('athlete-theme', theme);
  }, [theme]);

  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
