import { useState } from 'react';
import { LuStar, LuHeart, LuThumbsUp, LuX } from 'react-icons/lu';

// Import book cover images
import book1 from '../../assets/book1.jpg';
import book2 from '../../assets/book2.jpg';
import book3 from '../../assets/book3.jpg';
import book4 from '../../assets/book4.jpg';
import book5 from '../../assets/book5.jpg';
import book6 from '../../assets/book6.jpg';
import book7 from '../../assets/book7.jpg';
import book8 from '../../assets/book8.jpg';
import book9 from '../../assets/book9.jpg';
import book10 from '../../assets/book10.jpg';
import book11 from '../../assets/book11.jpg';
import book12 from '../../assets/book12.jpg';

export default function Home() {
  const sections = [
    {
      id: 'recommended',
      title: 'Recommended for You',
      icon: LuStar,
      books: [
        {
          id: 1,
          title: 'The Great Gatsby',
          author: 'F. Scott Fitzgerald',
          rating: 4.5,
          cover: book1
        },
        {
          id: 2,
          title: '1984',
          author: 'George Orwell',
          rating: 4.7,
          cover: book2
        },
        {
          id: 3,
          title: 'Pride and Prejudice',
          author: 'Jane Austen',
          rating: 4.4,
          cover: book3
        },
        {
          id: 4,
          title: 'To Kill a Mockingbird',
          author: 'Harper Lee',
          rating: 4.8,
          cover: book4
        }
      ]
    },
    {
      id: 'mostLiked',
      title: 'Most Liked',
      icon: LuHeart,
      books: [
        {
          id: 5,
          title: 'The Hobbit',
          author: 'J.R.R. Tolkien',
          rating: 4.6,
          cover: book5
        },
        {
          id: 6,
          title: 'Dune',
          author: 'Frank Herbert',
          rating: 4.5,
          cover: book6
        },
        {
          id: 7,
          title: 'The Catcher in the Rye',
          author: 'J.D. Salinger',
          rating: 4.3,
          cover: book7
        },
        {
          id: 8,
          title: 'Lord of the Flies',
          author: 'William Golding',
          rating: 4.4,
          cover: book8
        }
      ]
    },
    {
      id: 'topRated',
      title: 'Top Rated',
      icon: LuThumbsUp,
      books: [
        {
          id: 9,
          title: 'One Hundred Years of Solitude',
          author: 'Gabriel García Márquez',
          rating: 4.9,
          cover: book9
        },
        {
          id: 10,
          title: 'Brave New World',
          author: 'Aldous Huxley',
          rating: 4.8,
          cover: book10
        },
        {
          id: 11,
          title: 'The Divine Comedy',
          author: 'Dante Alighieri',
          rating: 4.7,
          cover: book11
        },
        {
          id: 12,
          title: 'Crime and Punishment',
          author: 'Fyodor Dostoevsky',
          rating: 4.8,
          cover: book12
        }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {sections.map(section => (
        <BookSection
          key={section.id}
          title={section.title}
          icon={section.icon}
          books={section.books}
        />
      ))}
    </div>
  );
}

function BookSection({ title, icon: Icon, books }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center mb-6">
        <Icon className="text-indigo-600 mr-2" size={24} />
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

function BookCard({ book }) {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <div 
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer"
        onClick={() => setShowPreview(true)}
      >
        <div className="aspect-w-2 aspect-h-2">
          <img 
            src={book.cover}
            alt={book.title}
            className="w-full h-[180px] object-cover"
          />
        </div>
        <div className="p-2">
          <h3 className="font-semibold text-gray-800 text-sm mb-1">{book.title}</h3>
          <p className="text-gray-600 text-xs">{book.author}</p>
          <div className="mt-2 flex items-center">
            <LuStar className="text-yellow-400" size={14} />
            <span className="ml-1 text-xs text-gray-600">{book.rating}/5</span>
          </div>
        </div>
      </div>

      {showPreview && (
        <PreviewModal book={book} onClose={() => setShowPreview(false)} />
      )}
    </>
  );
}

function PreviewModal({ book, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <LuX size={24} />
        </button>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3">
            <img 
              src={book.cover}
              alt={book.title}
              className="w-full h-[300px] object-cover rounded-lg"
            />
          </div>
          
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{book.title}</h2>
            <p className="text-gray-600 mb-4">{book.author}</p>
            
            <div className="flex items-center mb-4">
              <LuStar className="text-yellow-400" size={18} />
              <span className="ml-1 text-gray-600">{book.rating}/5</span>
            </div>

            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <button 
              onClick={() => {
                // Add your read now functionality here
                console.log('Read Now clicked for:', book.title);
                onClose();
              }}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 
                         transition-colors duration-200"
            >
              Read Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ... rest of the components remain the same 