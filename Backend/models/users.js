const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // user unique id
    u_id: {
      type: Number,
      unique: true,
      required: true,
    },
    // parent id
    p_id: {
      type: Number,
      ref: "User",
    },
    name: {
      type: String,
    },
    email: {
      type: String,
      lowercase: true,
    },
      otp: Number,
  otpExpiresAt: Date,
  isEmailVerified: { type: Boolean, default: false },
    avatar: {
      type: String,
    },
    phone: {
      type: Number,
    
    },
    password: {
      type: String,
     
    },
    roles: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    referralCode: {
      type: String,
      unique: true,
    },
    totalBalance: {
      type: Number,
      default: 0.0,
    },
    accountStatus: {
      type: String,
      enum: ["active", "block"],
      default: "active",
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    thirdPartyWallet: {
      type: Number,
    },
    investedEarnings: {
      type: Number,
      default: 0,
    },
    totalInvestedAmount: {
      type: Number,
      default: 0,
    },
    totalInvestedPackages: {
      type: Number,
      default: 0,
    },
    depositRewardAmount: {
      type: Number,
      default: 0,
    },
    privacyAgreement: { type: Boolean,  },

    // OTP fields
    otp: {
      type: Number,
    },
    otpExpiresAt: {
      type: Date,
    },

    referralEarnings: {
      level1: { type: Number, default: 0 },
      level2: { type: Number, default: 0 },
      level3: { type: Number, default: 0 },
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("allusers", userSchema);

module.exports = UserModel;
