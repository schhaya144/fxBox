import React, { useState } from 'react';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai'; // Icons for user and password
import { HiEye, HiEyeOff } from 'react-icons/hi'; // Icons for show/hide password
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SummaryApi from '../common/AdminSummaryApi';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Toggle for password visibility
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        SummaryApi.adminlogin.url,
        { username, password }
      );
      if (response.data.success) {
        localStorage.setItem('adminToken', response.data.token);
        navigate('/dashboard');
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError('An error occurred during login');
      console.log(err);
    }
  };

  return (
    <div className="relative flex items-center justify-center w-full min-h-screen shadow-md bg-bodyCustom shadow-zinc-300">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md aspect-square">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Admin Login
        </h2>

        {/* Username Field */}
        <div className="relative">
          <AiOutlineUser
            className="absolute text-gray-400 top-3 left-3"
            size={20}
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-10 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Password Field */}
        <div className="relative">
          <AiOutlineLock
            className="absolute text-gray-400 top-3 left-3"
            size={20}
          />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-10 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-2.5 right-3 text-gray-500"
          >
            {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
          </button>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Login
        </button>

        {/* Error Message */}
        {error && <p className="text-sm text-center text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
