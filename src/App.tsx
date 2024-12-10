import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { FaceDetection } from './pages/FaceDetection';
import { Dashboard } from './pages/Dashboard';
import { Settings } from './pages/Settings';
import { Navbar } from './components/layout/Navbar';

const mockUser = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  role: 'admin' as const,
};

function App() {
  const handleLogout = () => {
    // Handle logout logic
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/app"
          element={
            <>
              <Navbar user={mockUser} onLogout={handleLogout} />
              <FaceDetection />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <Navbar user={mockUser} onLogout={handleLogout} />
              <Dashboard />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <Navbar user={mockUser} onLogout={handleLogout} />
              <Settings />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;