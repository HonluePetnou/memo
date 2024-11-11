import React from 'react';
import { 
  LineChart, Line, BarChart, Bar, 
  XAxis, YAxis, CartesianGrid, Tooltip, 
  Legend, ResponsiveContainer, PieChart, Pie, 
  Cell 
} from 'recharts';

function AnalyticsCharts() {
  // Sample data for charts
  const lineData = [
    { month: 'Jan', users: 4000, sessions: 2400 },
    { month: 'Feb', users: 3000, sessions: 1398 },
    { month: 'Mar', users: 2000, sessions: 9800 },
    { month: 'Apr', users: 2780, sessions: 3908 },
    { month: 'May', users: 1890, sessions: 4800 },
    { month: 'Jun', users: 2390, sessions: 3800 },
  ];

  const barData = [
    { name: 'Monday', visits: 4000 },
    { name: 'Tuesday', visits: 3000 },
    { name: 'Wednesday', visits: 2000 },
    { name: 'Thursday', visits: 2780 },
    { name: 'Friday', visits: 1890 },
    { name: 'Saturday', visits: 2390 },
    { name: 'Sunday', visits: 3490 },
  ];

  const pieData = [
    { name: 'Desktop', value: 400 },
    { name: 'Mobile', value: 300 },
    { name: 'Tablet', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6 text-gray-600">Analytics Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Activity Line Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-medium mb-4">User Activity</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="users" 
                stroke="#8884d8" 
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="sessions" 
                stroke="#82ca9d" 
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Daily Visits Bar Chart */}
        <div className="bg-white p-4 rounded-lg shadow text-gray-600">
          <h2 className="text-lg font-medium mb-4">Daily Visits</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar 
                dataKey="visits" 
                fill="#8884d8"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Device Distribution Pie Chart */}
        <div className="bg-white p-4 rounded-lg text-gray-600 shadow">
          <h2 className="text-lg font-medium mb-4">Device Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Stats Summary */}
        <div className="bg-white p-4 text-gray-600 rounded-lg shadow">
          <h2 className="text-lg font-medium mb-4">Summary</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-600">Total Users</p>
              <p className="text-2xl font-semibold">15,890</p>
              <p className="text-sm text-green-600">↑ 12% increase</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-600">Active Sessions</p>
              <p className="text-2xl font-semibold">1,234</p>
              <p className="text-sm text-green-600">↑ 8% increase</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="text-sm text-purple-600">Avg. Session Duration</p>
              <p className="text-2xl font-semibold">5m 32s</p>
              <p className="text-sm text-red-600">↓ 3% decrease</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg ">
              <p className="text-sm text-orange-600">Bounce Rate</p>
              <p className="text-2xl font-semibold">42.3%</p>
              <p className="text-sm text-green-600">↑ 2% improvement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsCharts; 