const mongoose = require('mongoose');

const EmailOtpSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  otp: { type: String, required: true },
  otpExpiresAt: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model('EmailOtp', EmailOtpSchema);