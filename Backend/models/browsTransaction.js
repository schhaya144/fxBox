const mongoose = require('mongoose');

const browsTransactionSchema = new mongoose.Schema(
  {
    u_id: {
      type: Number,
      ref: 'Alluser',
      required: true,
    },
    phone: {
      type: String,
    },
    utr: {
      type: String,
      unique: true,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    transactionType: {
      type: String,
      enum: ['Recharge', 'Withdrawal'],
      required: true,
    },
    totalBalanceAfterTransaction: {
      type: Number,
    },
    transactionTime: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('browsTransaction', browsTransactionSchema);
