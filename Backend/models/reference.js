const mongoose = require('mongoose');

const referenceSchema = new mongoose.Schema(
  {
    // user unique id
    u_id: {
      type: Number,
      unique: true,
      required: true,
    },
    // parent id
    p_id: {
      type: Number,
      ref: 'User', // Refers to the User who is the parent
    },
    referredBy: { type: Number, ref: 'User' },
    levelOneReferrals: [{ type: Number, ref: 'User' }],
    levelTwoReferrals: [{ type: Number, ref: 'User' }],
    levelThreeReferrals: [{ type: Number, ref: 'User' }],
  },
  {
    timestamps: true,
  }
);

const UserReferenceModel = mongoose.model('References', referenceSchema);

module.exports = UserReferenceModel;
