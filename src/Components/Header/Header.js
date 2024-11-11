import React from 'react';
import SearchBar from './SearchBar';
import NotificationPanel from './NotificationPanel';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';

function Header() {
  return (
    <header className="bg-white shadow-sm h-16">
      <div className="flex items-center justify-between h-full px-6">
        <SearchBar />
        
        <div className="flex items-center gap-6">
          <LanguageSelector />
          <NotificationPanel />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header; 