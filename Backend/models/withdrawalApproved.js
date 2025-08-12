const mongoose = require('mongoose');

const withdrawalSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    gameType: {
      type: String,
      enum: ['Wingo', '5D', 'K3'],
      required: true,
    },
    accountNumber: {
      type: String,
      required: true,
    },
    bank: {
      type: String,
      required: true,
    },
    upiId: {
      type: String,
    },
    amount: {
      type: Number,
      required: true,
    },
    transactionId: {
      type: String,
      unique: true,
      required: true,
    },
    transactionTime: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ['Pending', 'Success', 'Closed', 'Failed'],
      default: 'Pending',
    },
    processedByAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Admin',
    },
  },
  {
    timestamps: true,
  }
);

const WithdrawalModel = mongoose.model('Withdrawal', withdrawalSchema);

module.exports = WithdrawalModel;
