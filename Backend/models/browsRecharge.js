const mongoose = require('mongoose');

// Brows Recharge Schema
const browsRecharge = new mongoose.Schema(
  {
    u_id: {
      type: Number, // Change to ObjectId if `u_id` references another model
      ref: 'Alluser',
      required: true,
    },
    phone: {
      type: Number,
      ref: 'Alluser',
      required: true,
    },
    utr: {
      type: Number,
      unique: true,
      required: true,
    },
    selectedAmount: {
      type: Number,
      required: true,
    },
    totalBalance: {
      type: Number,
      default: 0.0,
    },
    extraAmount: {
      type: Number,
      default: 0, // Default percentage for rewards
    },
    rewardedAmount: {
      type: Number, // Separate field to store reward amount
      default: 0,
    },

    selectedOption: {
      type: String,
    },
    transactionID: {
      type: String,
    },
    depositOrderNo: {
      type: String,
    },
    depositTime: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ['Pending', 'Approved', 'Rejected'],
      default: 'Pending',
    },
  },
  {
    timestamps: true, // Automatically handles createdAt and updatedAt
  }
);

// Middleware to calculate reward only during document creation
browsRecharge.pre('save', function (next) {
  if (this.isNew) {
    // Calculate reward only if the document is new
    if (this.selectedAmount && this.extraAmount > 0) {
      const reward = (this.selectedAmount * this.extraAmount) / 100; // Calculate reward
      this.rewardedAmount = reward; // Store the reward separately
      this.selectedAmount += reward; // Add reward to selectedAmount
    }
  }
  next();
});

const browsRechargemodel = mongoose.model('browsRecharge', browsRecharge);
module.exports = browsRechargemodel;
