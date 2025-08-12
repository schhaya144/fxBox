const UserModel = require('../models/users');
const fast2sms = require('fast-two-sms');
const API_KEY = '3I6ynZKbz0julRSHvONqV2a9FfLkemi1dUwEsA7hCxQXWBTY5o27Ft3gnkvHCr5qS9p86K4UudLlVs1A'; // Replace with your API key

const sendOtp = async (req, res) => {
  const { phone } = req.body;

  if (!phone) {
    return res.status(400).json({ message: 'Phone number is required.' });
  }

  const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
  const otpExpiresAt = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes

  try {
    // Send OTP via SMS
    const response = await fast2sms.sendMessage({
      authorization: API_KEY,
      message: `Your OTP is ${otp}`,
      numbers: [phone],
    });

    if (!response.return) {
      throw new Error(response.message);
    }

    // Save OTP in database
    await UserModel.findOneAndUpdate(
      { phone },
      { otp, otpExpiresAt },
      { upsert: true }
    );

    res.status(200).json({ message: 'OTP sent successfully.' });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ message: 'Error sending OTP.' });
  }
};



const verifyOtp = async (req, res) => {
    const { phone, otp } = req.body;
  
    try {
      const user = await UserModel.findOne({ phone });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }
  
      if (user.otp !== otp) {
        return res.status(400).json({ message: 'Invalid OTP.' });
      }
  
      if (user.otpExpiresAt < Date.now()) {
        return res.status(400).json({ message: 'OTP has expired.' });
      }
  
      // OTP is valid, clear OTP fields
      user.otp = null;
      user.otpExpiresAt = null;
      await user.save();
  
      res.status(200).json({ message: 'OTP verified successfully.' });
    } catch (error) {
      console.error('Error verifying OTP:', error);
      res.status(500).json({ message: 'Error verifying OTP.' });
    }
  };
  


  module.exports = { verifyOtp, sendOtp};
