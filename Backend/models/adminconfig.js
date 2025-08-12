const mongoose = require('mongoose');

const adminConfigSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    unique: true,
  },
  value: {
    type: mongoose.Schema.Types.Mixed, // Can store date, string, number, etc.
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('AdminConfig', adminConfigSchema);
