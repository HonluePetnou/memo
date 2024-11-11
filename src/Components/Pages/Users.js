import React, { useState } from 'react';
import { LuSearch } from 'react-icons/lu';

const Users = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: '',
    status: 'Active',
    joinDate: '',
    lastLogin: ''
  });

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

  const handleAddUser = (e) => {
    e.preventDefault();
    const userToAdd = {
      ...newUser,
      id: users.length + 1,
    };
    users.push(userToAdd);
    setNewUser({
      name: '',
      email: '',
      role: '',
      status: 'Active',
      joinDate: '',
      lastLogin: ''
    });
    setShowAddForm(false);
  };

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
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 whitespace-nowrap"
        >
          {showAddForm ? 'Cancel' : 'Add New User'}
        </button>
      </div>

      {/* Add User Form */}
      {showAddForm && (
        <div className="mb-6 bg-white text-gray-500  p-6 rounded-lg shadow">
          <form onSubmit={handleAddUser} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border rounded-lg"
                value={newUser.name}
                onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded-lg"
                value={newUser.email}
                onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                required
              />
              <input
                type="text"
                placeholder="Role"
                className="w-full p-2 border rounded-lg"
                value={newUser.role}
                onChange={(e) => setNewUser({...newUser, role: e.target.value})}
                required
              />
              <select
                className="w-full p-2 border rounded-lg"
                value={newUser.status}
                onChange={(e) => setNewUser({...newUser, status: e.target.value})}
                required
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              <input
                type="date"
                placeholder="Join Date"
                className="w-full p-2 border rounded-lg"
                value={newUser.joinDate}
                onChange={(e) => setNewUser({...newUser, joinDate: e.target.value})}
                required
              />
              <input
                type="date"
                placeholder="Last Login"
                className="w-full p-2 border rounded-lg"
                value={newUser.lastLogin}
                onChange={(e) => setNewUser({...newUser, lastLogin: e.target.value})}
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Add User
              </button>
            </div>
          </form>
        </div>
      )}

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