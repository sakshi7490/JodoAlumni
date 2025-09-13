import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">JodoAlumni</Link>
      {user ? (
        <div className="flex items-center space-x-4">
          <Link to="/directory" className="hover:text-blue-600">Directory</Link>
          <Link to="/events" className="hover:text-blue-600">Events</Link>
          <Link to="/mentorship" className="hover:text-blue-600">Mentorship</Link>
          {user.role === 'admin' && <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>}
          <button onClick={handleLogout} className="text-red-500 hover:text-red-700">Logout</button>
        </div>
      ) : (
        <Link to="/login" className="hover:text-blue-600">Login</Link>
      )}
    </nav>
  );
}