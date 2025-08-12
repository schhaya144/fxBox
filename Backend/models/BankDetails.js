

const mongoose = require('mongoose');

const AddBankNoSchema = new mongoose.Schema(
  {
    u_id: {
      type: Number, // Assuming `u_id` is a Number, but if it’s an ObjectId, you should use `type: mongoose.Schema.Types.ObjectId`
      ref: 'Alluser', // Reference to the 'Alluser' collection
      required: true,
    },
    bank: {
      type: String,
      required: [true, 'Bank name is required'],
    },
    recipientName: {
      type: String,
      required: [true, 'Recipient name is required'],
      match: [
        /^[a-zA-Z\s]*$/,
        'Recipient name can only contain letters and spaces',
      ],
      minlength: [3, 'Recipient name must be at least 3 characters long'],
    },
    accountNumber: {
      type: String,
      required: [true, 'Account number is required'],
      match: [/^\d+$/, 'Account number must be numeric'],
      minlength: [9, 'Account number must be at least 9 digits long'],
      maxlength: [18, 'Account number must not exceed 18 digits'],
    },
    phoneNumber: {
      type: String,
      required: [true, 'Phone number is required'],
      match: [/^\d{10}$/, 'Phone number must be exactly 10 digits'],
    },
    ifscCode: {
      type: String,
      required: [true, 'IFSC code is required'],
      // match: [/^[A-Z]{4}0[A-Z0-9]{6}$/, 'Invalid IFSC code format'],
    },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
  }
);


const BankDetails = mongoose.model('BankDetails', AddBankNoSchema);

module.exports = BankDetails;

