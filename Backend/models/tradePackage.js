const mongoose = require('mongoose');

const tradePachageSchema = new mongoose.Schema(
  {
    packageTitle: { type: String, required: true },
    packageAmount: { type: Number, required: true },
    packageInterest: { type: Number, min: 0, required: true },
    PackMaturity: { type: Number, min: 200,  },
    investedUsers: { type: Number, default: 0 },
    InvestedBy: [
      {
        userId: { type: Number, required: true },
        dateInvested: { type: Date, default: Date.now },
        dateLastUpdated: { type: Date, default: Date.now },
        status: {
          type: String,
          enum: ['invested', 'not invested', 'completed', 'matured'],
          default: 'not invested',
        },
        incrementedAmount: { type: Number, default: 0 },
        totalAmount: { type: Number, default: 0 },
        dailyIncrementHistory: [
          {
            date: { type: Date, required: true },
            incrementedAmount: { type: Number, required: true },
          },
        ],
        lockPeriod: { type: Number, default: 200 }, 
        matured: { type: Boolean, default: false },
      },
    ],
  },
  { timestamps: true }
);

const tradePachageModel = mongoose.model('tradepackages', tradePachageSchema);
module.exports = tradePachageModel;
