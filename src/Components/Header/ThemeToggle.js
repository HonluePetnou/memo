import { LuMoon, LuSun } from 'react-icons/lu';

export default function ThemeToggle({ isDarkMode, setIsDarkMode }) {
  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2.5 rounded-full text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
    >
      {isDarkMode ? <LuMoon size={22} className="text-white" /> : <LuSun size={22} />}
    </button>
  );
} 