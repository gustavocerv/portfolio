'use client';

import React, { useState, useEffect } from 'react';

const ThemeSwitcher = ({ darkClassName = 'dark' }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Check localStorage for theme preference
    const storedThemePreference = localStorage.getItem('theme');
    if (storedThemePreference) {
      setIsDarkMode(storedThemePreference === 'dark');
    } else {
      const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDarkMode);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  useEffect(() => {
    if (isMounted) {
      if (isDarkMode) {
        document.body.classList.add(darkClassName);
      } else {
        document.body.classList.remove(darkClassName);
      }
    }
  }, [isDarkMode, isMounted, darkClassName]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <button
        data-testid="themeSwitcherButton"
        className="fixed top-1.5 right-16 h-8 w-8 rounded-full p-0 cursor-pointer text-lg shadow-md bg-white dark:bg-gray-200 text-gray-300 dark:text-gray-900 border-gray-300 dark:border-gray-700 shadow-gray-300 dark:shadow-teal-500"
        onClick={toggleTheme}
      >
        <img
          src={isDarkMode ? "/Moon.png" : "/sunIcon.png"}
          alt="Theme Icon"
          className={`transition-transform duration-300 ${isDarkMode ? 'w-5 h-5 ml-1.5' : 'w-6 h-6 ml-0.5'}`}
        />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
