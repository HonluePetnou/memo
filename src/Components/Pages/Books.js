import React, { useState } from 'react';
import { LuStar, LuSearch } from 'react-icons/lu';

export default function Books() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    genre: '',
    rating: '',
    status: 'Available',
    publishedDate: ''
  });

  const books = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Classic',
      rating: 4.5,
      status: 'Available',
      publishedDate: '1925'
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
      genre: 'Science Fiction',
      rating: 4.7,
      status: 'Available',
      publishedDate: '1949'
    },
    {
      id: 3,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      genre: 'Romance',
      rating: 4.4,
      status: 'Unavailable',
      publishedDate: '1813'
    },
    {
      id: 4,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: 'Classic',
      rating: 4.8,
      status: 'Available',
      publishedDate: '1960'
    },
    {
      id: 5,
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      genre: 'Fantasy',
      rating: 4.6,
      status: 'Available',
      publishedDate: '1937'
    },
    {
      id: 6,
      title: 'Dune',
      author: 'Frank Herbert',
      genre: 'Science Fiction',
      rating: 4.5,
      status: 'Unavailable',
      publishedDate: '1965'
    },
    {
      id: 7,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      genre: 'Classic',
      rating: 4.2,
      status: 'Available',
      publishedDate: '1951'
    },
    {
      id: 8,
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      genre: 'Fantasy',
      rating: 4.9,
      status: 'Available',
      publishedDate: '1954'
    },
    {
      id: 9,
      title: 'Brave New World',
      author: 'Aldous Huxley',
      genre: 'Science Fiction',
      rating: 4.3,
      status: 'Unavailable',
      publishedDate: '1932'
    },
    {
      id: 10,
      title: 'Jane Eyre',
      author: 'Charlotte Brontë',
      genre: 'Romance',
      rating: 4.4,
      status: 'Available',
      publishedDate: '1847'
    },
    {
      id: 11,
      title: 'The Handmaid\'s Tale',
      author: 'Margaret Atwood',
      genre: 'Science Fiction',
      rating: 4.6,
      status: 'Available',
      publishedDate: '1985'
    },
    {
      id: 12,
      title: 'The Picture of Dorian Gray',
      author: 'Oscar Wilde',
      genre: 'Classic',
      rating: 4.3,
      status: 'Available',
      publishedDate: '1890'
    }
  ];

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddBook = (e) => {
    e.preventDefault();
    const bookToAdd = {
      ...newBook,
      id: books.length + 1,
      rating: Number(newBook.rating)
    };
    books.push(bookToAdd);
    setNewBook({
      title: '',
      author: '',
      genre: '',
      rating: '',
      status: 'Available',
      publishedDate: ''
    });
    setShowAddForm(false);
  };

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

      {/* Table */}
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
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
                  <button
                    className="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                    onClick={() => console.log('Read book:', book.title)}
                  >
                    Read Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}