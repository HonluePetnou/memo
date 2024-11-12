import React, { useState, useEffect } from 'react';
import { LuSearch } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { db } from '../../config/firebase.config';
import { collection, getDocs, query, orderBy, deleteDoc, doc } from 'firebase/firestore';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Users = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersQuery = query(
          collection(db, 'users'),
          orderBy('createdAt', 'desc')
        );
        
        const querySnapshot = await getDocs(usersQuery);
        const usersData = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            // Safely convert timestamps to strings
            createdAt: data.createdAt ? new Date(data.createdAt.seconds * 1000).toLocaleString() : 'N/A',
            lastLogin: data.lastLogin ? new Date(data.lastLogin.seconds * 1000).toLocaleString() : 'N/A'
          };
        });
        
        setUsers(usersData);
      } catch (err) {
        console.error('Error fetching users:', err);
        setError('Failed to load users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteDoc(doc(db, 'users', userId));
        setUsers(users.filter(user => user.id !== userId));
      } catch (err) {
        console.error('Error deleting user:', err);
        alert('Failed to delete user');
      }
    }
  };

  const handleEdit = (userId) => {
    navigate(`/edit-user/${userId}`);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 sm:px-8">
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
          onClick={() => navigate('../SignIn')}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 whitespace-nowrap"
        >
          Add New User
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white text-gray-700 rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2">Name</th>
                <th className="px-5 py-3 border-b-2">Email</th>
                <th className="px-5 py-3 border-b-2">Phone</th>
                <th className="px-5 py-3 border-b-2">Date of Birth</th>
                <th className="px-5 py-3 border-b-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td className="px-5 py-5 border-b text-center">{user.name}</td>
                  <td className="px-5 py-5 border-b text-center">{user.email}</td>
                  <td className="px-5 py-5 border-b text-center">{user.phone}</td>
                  <td className="px-5 py-5 border-b text-center">{user.dateOfBirth}</td>
                  <td className="px-5 py-5 border-b text-center">
                    <div className="flex gap-3 justify-center">
                      <button
                        onClick={() => handleEdit(user.id)}
                        className="text-blue-600 hover:text-blue-800 cursor-pointer"
                        title="Edit user"
                      >
                        <FaEdit size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="text-red-600 hover:text-red-800"
                        title="Delete user"
                      >
                        <FaTrash size={18} />
                      </button>
                    </div>
                  </td>
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