const User = require('./models/User');
const Transaction = require('../models/transaction');

// Constants for commission percentages
const COMMISSION_RATES = {
    level1: 10, // Commission for level 1 (parent)
    level2: 5,  // Commission for level 2 (grandparent)
    level3: 2   // Commission for level 3 (great-grandparent)
};

async function handleDeposit(userId, depositAmount) {
    try {
        // Fetch the user and their parent hierarchy
        const user = await User.findById(userId).populate('parentId');
        if (!user) throw new Error('User not found');

        // Save the deposit transaction
        const depositTransaction = new Transaction({
            userId,
            amount: depositAmount,
            type: 'deposit'
        });
        await depositTransaction.save();

        // Calculate commissions for the hierarchy
        let currentParent = user.parentId;
        let level = 1;

        while (currentParent && level <= 3) {
            const commissionRate = COMMISSION_RATES[`level${level}`];
            const commissionAmount = (depositAmount * commissionRate) / 100;

            // Update the parent's wallet with the commission amount
            currentParent.wallet += commissionAmount;
            await currentParent.save();

            // Log the commission transaction
            const commissionTransaction = new Transaction({
                userId,
                amount: commissionAmount,
                type: 'commission',
                level,
                parentId: currentParent._id
            });
            await commissionTransaction.save();

            // Move up the hierarchy for the next level
            currentParent = await User.findById(currentParent.parentId);
            level++;
        }
    } catch (error) {
        console.error('Error handling deposit:', error);
        throw error;
    }
}

module.exports = { handleDeposit };
