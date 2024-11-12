import { useState } from 'react';
import Header from './Header/Header';
import Home from './Pages/Home';
import Books from './Pages/Books';
import Users from './Pages/Users';
import Analytics from './Pages/Analytics';
import Settings from './Pages/Settings';
export default function Main({ currentPage }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />;
      case 'books':
        return <Books />;
      case 'users':
        return <Users />;
      case 'analytics':
        return <Analytics />;
      case 'settings':
        return <Settings />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="w-full">
      <Header 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      {/* Content container */}
      <div className="w-[1200px] mx-auto p-6">
        {renderPage()}
      </div>
    </div>
  );
}
