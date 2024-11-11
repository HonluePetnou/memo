import { useState } from 'react';
import Sidebar from './Sidebar';
import Main from './Main';

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar onNavigate={setCurrentPage} currentPage={currentPage} />
      <div className="flex-1">
        <Main currentPage={currentPage} />
      </div>
    </div>
  );
} 