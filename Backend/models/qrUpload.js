const mongoose = require('mongoose');

const UPISchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  upi_id: {
    type: String,
    required: true,
    unique: true,
  },
  qr_image: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
    required: true,
  },
});

module.exports = mongoose.model('UPI', UPISchema);
