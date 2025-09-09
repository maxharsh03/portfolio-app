import { useState, useEffect } from 'react';

interface UseDarkModeReturn {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const useDarkMode = (): UseDarkModeReturn => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check if user has a preference stored in localStorage
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return JSON.parse(savedMode);
    }
    
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Save preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    
    // Update CSS custom properties for global theming
    const root = document.documentElement;
    if (darkMode) {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return { darkMode, toggleDarkMode };
};

export default useDarkMode;