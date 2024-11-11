import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import SignIn from './Components/SignIn.js'
import Dashboard from './Components/Dashboard.js'

export default function App() {


  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  )
} 