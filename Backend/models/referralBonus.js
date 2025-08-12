// models/settings.js
const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema({
  level1Percentage: {
    type: Number,
    default: 5, // Default percentage is 5% for level 1
  },
  level2Percentage: {
    type: Number,
    default: 3, // Default percentage is 3% for level 2
  },
  level3Percentage: {
    type: Number,
    default: 2, // Default percentage is 2% for level 3
  },
});

const referralBonusSchema = mongoose.model("Settings", settingsSchema)

module.exports = referralBonusSchema
