import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Theme = 'purple' | 'blue' | 'green' | 'orange' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: {
    [key in Theme]: {
      name: string;
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      surface: string;
      text: string;
      gradient: string;
    };
  };
}

const themes = {
  purple: {
    name: 'Purple Gradient',
    primary: 'from-purple-600 to-pink-600',
    secondary: 'from-purple-500 to-pink-500',
    accent: 'purple-600',
    background: 'white',
    surface: 'gray-50',
    text: 'gray-900',
    gradient: 'from-purple-400 via-pink-500 to-red-500'
  },
  blue: {
    name: 'Ocean Blue',
    primary: 'from-blue-600 to-cyan-600',
    secondary: 'from-blue-500 to-cyan-500',
    accent: 'blue-600',
    background: 'white',
    surface: 'blue-50',
    text: 'gray-900',
    gradient: 'from-blue-400 via-cyan-500 to-teal-500'
  },
  green: {
    name: 'Nature Green',
    primary: 'from-green-600 to-emerald-600',
    secondary: 'from-green-500 to-emerald-500',
    accent: 'green-600',
    background: 'white',
    surface: 'green-50',
    text: 'gray-900',
    gradient: 'from-green-400 via-emerald-500 to-teal-500'
  },
  orange: {
    name: 'Sunset Orange',
    primary: 'from-orange-600 to-red-600',
    secondary: 'from-orange-500 to-red-500',
    accent: 'orange-600',
    background: 'white',
    surface: 'orange-50',
    text: 'gray-900',
    gradient: 'from-orange-400 via-red-500 to-pink-500'
  },
  dark: {
    name: 'Dark Mode',
    primary: 'from-gray-700 to-gray-900',
    secondary: 'from-gray-600 to-gray-800',
    accent: 'gray-700',
    background: 'gray-900',
    surface: 'gray-800',
    text: 'white',
    gradient: 'from-gray-700 via-gray-800 to-gray-900'
  }
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('purple');

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme;
    if (savedTheme && themes[savedTheme]) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    
    // Apply theme to document root
    const root = document.documentElement;
    const currentTheme = themes[theme];
    
    // Update CSS custom properties
    root.style.setProperty('--theme-primary', currentTheme.primary);
    root.style.setProperty('--theme-secondary', currentTheme.secondary);
    root.style.setProperty('--theme-accent', currentTheme.accent);
    root.style.setProperty('--theme-background', currentTheme.background);
    root.style.setProperty('--theme-surface', currentTheme.surface);
    root.style.setProperty('--theme-text', currentTheme.text);
    root.style.setProperty('--theme-gradient', currentTheme.gradient);
    
    // Apply dark mode class
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};