const mongoose = require('mongoose');

const giftcodeSchema = new mongoose.Schema(
  {
    giftcodeAmount: {
      type: Number,
      required: true,
    },
    noOfUsers: {
      type: Number,
      required: true,
    },
    giftcodeId: {
      type: String,
      required: true,
      unique: true,
    },
    giftcodeStatus: {
      type: String,
      enum: ['redeem', 'not redeem'],
      default: 'not redeem',
    },
    redeemedUsers: {
      type: Number,
      default: 0,
    },
    redeemedBy: {
      type: [String],
      default: [],
    },
    expiryDate: {
      type: Date,
      default: null,
    },
    distributingAmount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// module.exports = mongoose.model('Giftcode', giftcodeSchema);

const UsergiftcodeSchema = mongoose.model('Giftcode', giftcodeSchema);

module.exports = UsergiftcodeSchema;
