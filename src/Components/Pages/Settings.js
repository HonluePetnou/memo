import React from 'react';
import { 
  IoPersonOutline, 
  IoDesktopOutline
} from 'react-icons/io5';
import { 
  MdOutlineColorLens,
  MdDevices 
} from 'react-icons/md';

const Settings = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-medium text-gray-900 mb-6">Settings</h1>

      {/* Profile Section */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-6 border-b">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <IoPersonOutline className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-medium text-gray-900">John Doe</h2>
              <p className="text-gray-600">john.doe@example.com</p>
            </div>
            <button className="ml-auto px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md">
              Manage your account
            </button>
          </div>
        </div>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {/* Appearance */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="flex items-center mb-6">
              <MdOutlineColorLens className="w-6 h-6 text-gray-500" />
              <h3 className="ml-3 text-lg font-medium">Appearance</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-900">Theme</p>
                  <p className="text-sm text-gray-500">Choose your preferred theme</p>
                </div>
                <select className="px-3 py-2 border rounded-md bg-white">
                  <option>Light</option>
                  <option>Dark</option>
                  <option>System</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-900">Compact Mode</p>
                  <p className="text-sm text-gray-500">Reduce spacing between items</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Devices & Sessions */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="flex items-center mb-6">
              <MdDevices className="w-6 h-6 text-gray-500" />
              <h3 className="ml-3 text-lg font-medium">Devices & Sessions</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <IoDesktopOutline className="w-5 h-5 text-gray-500 mr-3" />
                  <div>
                    <p className="text-gray-900">Windows PC - Chrome</p>
                    <p className="text-sm text-gray-500">Active</p>
                  </div>
                </div>
                <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md">
                  Manage
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 