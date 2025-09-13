import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import DirectoryPage from './pages/DirectoryPage';
import EventsPage from './pages/EventsPage';
import MentorshipPage from './pages/MentorshipPage';
import DashboardPage from './pages/DashboardPage';

import Navbar from './components/Navbar';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <main className="p-4 max-w-7xl mx-auto">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/directory" element={<PrivateRoute><DirectoryPage /></PrivateRoute>} />
            <Route path="/events" element={<PrivateRoute><EventsPage /></PrivateRoute>} />
            <Route path="/mentorship" element={<PrivateRoute><MentorshipPage /></PrivateRoute>} />
            <Route path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </main>
      </Router>
    </AuthProvider>
  );
}