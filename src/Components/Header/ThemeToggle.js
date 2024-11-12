import React from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';
import { useDarkMode } from '../DarkModeContext';

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex items-center">
      <button
        onClick={toggleDarkMode}
        className={`
          relative inline-flex h-8 w-16 items-center rounded-full
          transition-colors duration-300 focus:outline-none
          ${darkMode ? 'bg-indigo-600' : 'bg-gray-200'}
        `}
      >
        {/* Icons Container */}
        <div className="flex w-full justify-between px-1.5">
          {/* Sun Icon */}
          <HiSun className={`h-5 w-5 ${darkMode ? 'text-gray-300' : 'text-yellow-500'}`} />
          {/* Moon Icon */}
          <HiMoon className={`h-5 w-5 ${darkMode ? 'text-white' : 'text-gray-400'}`} />
        </div>
        
        {/* Sliding Circle */}
        <span
          className={`
            absolute h-6 w-6 rounded-full bg-white
            transition-transform duration-300 shadow-sm
            ${darkMode ? 'translate-x-9' : 'translate-x-1'}
          `}
        />
      </button>
    </div>
  );
};

export default ThemeToggle; 