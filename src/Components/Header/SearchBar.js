import React from 'react';
import { LuSearch } from 'react-icons/lu';

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="w-96">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg border bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <LuSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" size={20} />
      </div>
    </div>
  );
}

export default SearchBar; 