const mongoose = require('mongoose');

const interestCalculationLogSchema = new mongoose.Schema(
  {
    status: { type: String, required: true }, // e.g., "success" or "failure"
    message: { type: String }, // Additional details about the run
    timestamp: { type: Date, default: Date.now }, // Time of the run
  },
  { timestamps: true }
);

const InterestCalculationLog = mongoose.model('InterestCalculationLog', interestCalculationLogSchema);
module.exports = InterestCalculationLog;
