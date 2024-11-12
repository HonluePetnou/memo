import React, { useState, useEffect } from 'react';
import { LuStar, LuSearch } from 'react-icons/lu';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { db } from '../../config/firebase.config';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';

// Define collection name at the top of the component
const BOOKS_COLLECTION = 'books';

export default function Books() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    genre: '',
    rating: '',
    status: 'Available',
    publishedDate: ''
  });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, BOOKS_COLLECTION));
      const booksList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setBooks(booksList);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching books:', error);
      setLoading(false);
    }
  };

  const handleAddBook = async (e) => {
    e.preventDefault();
    try {
      const bookToAdd = {
        ...newBook,
        rating: Number(newBook.rating),
        createdAt: new Date()
      };
      
      const docRef = await addDoc(collection(db, BOOKS_COLLECTION), bookToAdd);
      setBooks([...books, { id: docRef.id, ...bookToAdd }]);
      setNewBook({
        title: '',
        author: '',
        genre: '',
        rating: '',
        status: 'Available',
        publishedDate: ''
      });
      setShowAddForm(false);
    } catch (error) {
      console.error('Error adding book:', error);
      setLoading(false);
    }
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (bookId) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await deleteDoc(doc(db, BOOKS_COLLECTION, bookId));
        setBooks(books.filter(book => book.id !== bookId));
      } catch (error) {
        console.error('Error deleting book:', error);
        alert('Failed to delete book');
      }
    }
  };

  const handleEdit = async (book) => {
    try {
      const updatedBook = { ...book, status: book.status === 'Available' ? 'Unavailable' : 'Available' };
      await updateDoc(doc(db, BOOKS_COLLECTION, book.id), updatedBook);
      setBooks(books.map(b => b.id === book.id ? updatedBook : b));
    } catch (error) {
      console.error('Error editing book:', error);
      alert('Failed to edit book');
    }
  };

  if (loading) return <div className="text-center p-4">Loading...</div>;

  return (
    <div>
      {/* Search and Add Button Row */}
      <div className="mb-6 flex flex-col text-gray-700 md:flex-row md:items-center md:justify-between gap-4">
        <div className="relative flex-grow md:max-w-md">
          <input
            type="text"
            placeholder="Search books or authors..."
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
          {showAddForm ? 'Cancel' : 'Add New Book'}
        </button>
      </div>

      {/* Add Book Form */}
      {showAddForm && (
        <div className="mb-6 text-gray-700 bg-white p-6 rounded-lg shadow">
          <form onSubmit={handleAddBook} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Title"
                className="w-full p-2 border rounded-lg"
                value={newBook.title}
                onChange={(e) => setNewBook({...newBook, title: e.target.value})}
                required
              />
              <input
                type="text"
                placeholder="Author"
                className="w-full p-2 border rounded-lg"
                value={newBook.author}
                onChange={(e) => setNewBook({...newBook, author: e.target.value})}
                required
              />
              <input
                type="text"
                placeholder="Genre"
                className="w-full p-2 border rounded-lg"
                value={newBook.genre}
                onChange={(e) => setNewBook({...newBook, genre: e.target.value})}
                required
              />
              <input
                type="number"
                placeholder="Rating (0-5)"
                className="w-full p-2 border rounded-lg"
                value={newBook.rating}
                onChange={(e) => setNewBook({...newBook, rating: e.target.value})}
                min="0"
                max="5"
                step="0.1"
                required
              />
              <select
                placeholder="Status"
                className="w-full p-2 border rounded-lg"
                value={newBook.status}
                onChange={(e) => setNewBook({...newBook, status: e.target.value})}
              >
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
              </select>
              <input
                type="text"
                placeholder="Published Date"
                className="w-full p-2 border rounded-lg"
                value={newBook.publishedDate}
                onChange={(e) => setNewBook({...newBook, publishedDate: e.target.value})}
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Add Book
            </button>
          </form>
        </div>
      )}

      {/* Books Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Genre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Published</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredBooks.map((book) => (
              <tr key={book.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{book.title}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{book.author}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{book.genre}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <LuStar className="text-yellow-400 mr-1" size={16} />
                    <span className="text-sm text-gray-500">{book.rating}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${book.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {book.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{book.publishedDate}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={() => handleEdit(book)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaEdit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(book.id)}
                      className="text-red-600 hover:text-red-800"
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
  );
}