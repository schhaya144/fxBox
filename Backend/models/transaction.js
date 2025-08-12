const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    type: { type: String, enum: ['deposit', 'commission'], required: true },
    level: { type: Number }, // Level for commissions (1 = parent, 2 = grandparent, 3 = great-grandparent)
    p_Id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Who earned the commission
    createdAt: { type: Date, default: Date.now }
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
