import React, { useState } from 'react';
import { IoNotificationsOutline } from 'react-icons/io5';

function NotificationBell() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications] = useState([
    { id: 1, text: 'New message received', time: '5m ago' },
    { id: 2, text: 'Your post was liked', time: '1h ago' },
  ]);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative"
      >
        <IoNotificationsOutline size={24} className="text-gray-700" />
        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="p-4">
            <h3 className="text-sm font-medium text-gray-900">Notifications</h3>
            <div className="mt-2 space-y-2">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <p className="text-sm text-gray-900">{notification.text}</p>
                  <p className="text-xs text-gray-600 mt-1">{notification.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NotificationBell; 