const mongoose = require('mongoose');

const wingoGameSchema = new mongoose.Schema(
  {
    gameId: {
      type: String,
      required: true,
      unique: true,
    },
    timeSpan: {
      type: String,
      enum: ['30sec', '1min', '3min', '5min'],
      required: true,
    },
    totalBalance: {
      type: Number,
    },
    closingBalance: { type: Number },
    entries: [
      {
        u_id: {
          type: Number,
          ref: 'Alluser',
          required: true,
        },
        wingoBets: {
          type: [Array],
        },
        betAmount: {
          type: Number,
          required: true,
        },
        periodId: {
          type: Number,
        },
        entryTime: {
          type: Date,
          default: Date.now,
        },
        resultStatus: {
          type: String,
          enum: ['win', 'lose', 'pending'],
          default: 'pending',
        },
      },
    ],
    gameResult: {
      winningColor: {
        type: String,
        enum: ['red', 'violet', 'green', 'red violet', 'green violet'],
      },
      winningNumber: {
        type: Number,
        min: 0,
        max: 9,
      },
      winningSize: {
        type: String,
        enum: ['Big', 'Small'],
      },
      resultTime: {
        type: Date,
      },
      adjustmentNote: {
        type: String,
        default: '',
      },
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ['Pending', 'completed', 'cancelled'],
      default: 'Pending',
    },
  },
  {
    timestamps: true,
  }
);

const WingoGameModel = mongoose.model('WingoGameModel', wingoGameSchema);

module.exports = WingoGameModel;
