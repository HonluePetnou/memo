import React, { useState } from 'react';
import { LuSearch } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import '../SignIn';

const Users = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Admin',
      status: 'Active',
      joinDate: '2024-01-15',
      lastLogin: '2024-03-20'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'User',
      status: 'Active',
      joinDate: '2024-02-01',
      lastLogin: '2024-03-19'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
      role: 'Editor',
      status: 'Inactive',
      joinDate: '2024-01-20',
      lastLogin: '2024-03-15'
    },
    {
      id: 4,
      name: 'Sarah Williams',
      email: 'sarah.w@example.com',
      role: 'User',
      status: 'Active',
      joinDate: '2024-02-15',
      lastLogin: '2024-03-20'
    },
    {
      id: 5,
      name: 'Mike Brown',
      email: 'mike.brown@example.com',
      role: 'User',
      status: 'Active',
      joinDate: '2024-03-01',
      lastLogin: '2024-03-18'
    }
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Search and Add Button Row */}
      <div className="mb-6 text-gray-600 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="relative flex-grow md:max-w-md">
          <input
            type="text"
            placeholder="Search users..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <LuSearch className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <button
          onClick={() => navigate('/signin')}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 whitespace-nowrap"
        >
          Add New User
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white text-gray-700 rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Login</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {filteredUsers.map(user => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.joinDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.lastLogin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users; 