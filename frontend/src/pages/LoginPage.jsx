import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

export default function LoginPage() {
  const { login } = useAuth();

  const handleGoogleLogin = async () => {
    try {
      /* 
      For demo, use Google OAuth popup or Google Identity Services.
      Here, we simulate by prompting for a tokenId.
      In production, integrate Google Sign-In SDK.
      */
      const tokenId = prompt('Paste Google ID Token here (simulate)');
      if (!tokenId) return;

      const res = await axios.post('http://localhost:5000/api/auth/google', { tokenId });
      login(res.data.token, res.data.user);
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow text-center">
      <h1 className="text-2xl font-bold mb-6">Login to JodoAlumni</h1>
      <button
        onClick={handleGoogleLogin}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Login with Google
      </button>
      <p className="mt-4 text-gray-500">* LinkedIn login coming soon</p>
    </div>
  );
}