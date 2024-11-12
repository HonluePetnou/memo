import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import SignIn from './Components/SignIn.js'
import Dashboard from './Components/Dashboard.js'
import { UserProvider } from './context/UserContext.js'

export default function App() {


  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </UserProvider>
  )
} 