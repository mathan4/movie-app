import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (username.trim() !== '') {
      localStorage.setItem('username', username);
      alert(`Logged in as ${username}`);
      navigate('/Movies');
    } else {
      alert('Please enter a username.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 px-4">
      <div className="bg-white p-8 sm:p-10 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
          Welcome Back
        </h2>
        <div className="mb-4 sm:mb-6">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter your username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="mb-6 sm:mb-8">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 sm:py-3 rounded-lg focus:outline-none focus:shadow-outline"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;