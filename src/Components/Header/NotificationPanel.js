import { useState, useRef, useEffect } from 'react';
import { LuBell } from 'react-icons/lu';

export default function NotificationPanel() {
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef(null);
  const notifications = [
    { id: 1, text: 'New book added to your favorites', isRead: false, time: '2m ago' },
    { id: 2, text: 'Your book review was approved', isRead: true, time: '1h ago' },
    { id: 3, text: 'Someone commented on your review', isRead: false, time: '2h ago' },
    { id: 4, text: 'New book added to your favorites', isRead: false, time: '2m ago' },
    { id: 5, text: 'Your book review was approved', isRead: true, time: '1h ago' },
    { id: 6, text: 'Someone commented on your review', isRead: false, time: '2h ago' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={notificationRef}>
      <button
        onClick={() => setShowNotifications(!showNotifications)}
        className="p-2.5 rounded-full text-slate-600 hover:bg-gray-100 relative transition-colors"
      >
        <LuBell size={22} />
        {notifications.some(n => !n.isRead) && (
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
        )}
      </button>

      {showNotifications && (
        <div className="absolute right-0 mt-2 w-80 text-gray-700 bg-white rounded-lg shadow-lg border py-2">
          <div className="px-4 py-2 border-b">
            <h3 className="font-semibold">Notifications</h3>
          </div>
          {notifications.map(notification => (
            <div
              key={notification.id}
              className={`px-4 py-3 hover:bg-gray-50 flex items-start gap-3 
                ${notification.isRead ? 'opacity-60' : ''}`}
            >
              <div className={`w-2 h-2 rounded-full mt-2 
                ${notification.isRead ? 'bg-gray-300' : 'bg-indigo-500'}`} 
              />
              <div>
                <p className="text-sm">{notification.text}</p>
                <span className="text-xs text-gray-500">{notification.time}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 