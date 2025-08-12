const mongoose = require('mongoose');

const browsWithdraw = new mongoose.Schema({
  u_id: {
    type: Number, // Assuming `u_id` is a Number, but if it’s an ObjectId, you should use `type: mongoose.Schema.Types.ObjectId`
    ref: 'Alluser', // Reference to the 'Alluser' collection
    required: true,
  },
  withdrawAmount: {
    type: Number,
    required: true,
  },
  totalBalance: {
    type: Number,
    default: 0.0,
  },
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending',
  },
  withdrawTime: {
    type: Date,
    default: Date.now,
  },
  withdrawMode: {
    type: String,
    enum: ['bankCard', 'upi'], // Enforcing the withdrawal mode to be either "bankCard" or "upi"
    required: true,
  },
  upiId: {
    type: String,
    validate: {
      validator: function (value) {
        // Only validate if withdrawMode is "upi"
        return (
          this.withdrawMode !== 'upi' || (value && value.trim().length > 0)
        );
      },
      message: 'UPI ID is required when withdraw mode is UPI.',
    },
  },
});

// module.exports = mongoose.model('browsWithdraw', browsWithdraw);
const BrowsWithdrawModel = mongoose.model('BrowsWithdrawModel', browsWithdraw);

module.exports = BrowsWithdrawModel;
