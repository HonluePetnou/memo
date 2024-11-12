import { useContext, createContext, useState } from "react";
import { LuHome, LuBook, LuLineChart, LuUser, LuSettings, LuChevronFirst, LuChevronLast, LuMoreVertical } from 'react-icons/lu';

const SidebarContext = createContext();

export default function Sidebar({ onNavigate, currentPage }) {
  const [expanded, setExpanded] = useState(true);
  
  const menuItems = [
    { id: 'home', icon: <LuHome size={20} />, text: 'Home' },
    { id: 'books', icon: <LuBook size={20} />, text: 'Books', alert: true },
    { id: 'users', icon: <LuUser size={20} />, text: 'Users' },
    { id: 'analytics', icon: <LuLineChart size={20} />, text: 'Analytics' },
    { id: 'settings', icon: <LuSettings size={20} />, text: 'Settings' }
  ];

  return (
    <aside className="sticky top-0 h-screen ">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm dark:bg-indigo-600 dark:text-white">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-500 text-white hover:bg-gray-800"
          >
            {expanded ? <LuChevronFirst size={20} /> : <LuChevronLast size={20} />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3 ">
            {menuItems.map((item) => (
              <SidebarItem
                key={item.id}
                icon={item.icon}
                text={item.text}
                active={currentPage === item.id}
                alert={item.alert}
                onClick={() => onNavigate(item.id)}
              />
            ))}
          </ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold text-gray-600">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <LuMoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

function SidebarItem({ icon, text, active, alert, onClick }) {
  const { expanded } = useContext(SidebarContext);
  
  return (
    <li
      onClick={onClick}
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group dark:text-indigo-100 dark:hover:bg-indigo-700
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100"
            : "hover:bg-indigo-50 text-gray-600 dark:hover:bg-indigo-700" 
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
