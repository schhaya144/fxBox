import React, { useState } from 'react';
import axios from 'axios';

function EmailVerificationForm() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const sendOtp = async () => {
    try {
      await axios.post('/api/auth/send-otp', { email });
      setOtpSent(true);
      alert('OTP sent to your email');
    } catch (err) {
      alert('Error sending OTP');
    }
  };

  const verifyOtp = async () => {
    try {
      await axios.post('/api/auth/verify-otp', { email, otp });
      setOtpVerified(true);
      alert('OTP verified');
    } catch (err) {
      alert('Invalid OTP');
    }
  };

  const registerUser = async () => {
    try {
      await axios.post('/api/auth/register', { name, email, password });
      alert('Registration successful, welcome email sent');
    } catch (err) {
      alert('Error during registration');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      {!otpSent ? (
        <>
          <input
            type="email"
            placeholder="Enter Email"
            className="border p-2 w-full mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-blue-500 text-white p-2 w-full" onClick={sendOtp}>
            Send OTP
          </button>
        </>
      ) : !otpVerified ? (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            className="border p-2 w-full mb-2"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button className="bg-green-500 text-white p-2 w-full" onClick={verifyOtp}>
            Verify OTP
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Name"
            className="border p-2 w-full mb-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 w-full mb-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-purple-500 text-white p-2 w-full" onClick={registerUser}>
            Register
          </button>
        </>
      )}
    </div>
  );
}

export default EmailVerificationForm;
