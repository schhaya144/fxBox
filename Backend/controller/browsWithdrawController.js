const mongoose = require('mongoose');
const UserModel = require('../models/users');
const BrowsWithdrawModel = require('../models/browsWithdraw');
const jwt = require('jsonwebtoken');
const authToken = require('../middleware/auth');
const browsRechargemodel = require('../models/browsRecharge');
const BankDetails = require('../models/BankDetails');
const browsTransaction = require('../models/browsTransaction');

// Create a new withdrawal request

const createbrowsWithdraw = async (req, res) => {
  try {
    if (!req.session || !req.session.user || !req.session.user.u_id) {
      return res
        .status(401)
        .json({ message: 'Unauthorized: User not logged in' });
    }

    const { withdrawAmount, upiId, withdrawMode } = req.body;
    const u_id = req.session.user.u_id;

    if (!withdrawAmount || !withdrawMode) {
      return res
        .status(400)
        .json({ message: 'Amount and withdrawal mode are required' });
    }

    if (withdrawMode === 'upi' && !upiId) {
      return res
        .status(400)
        .json({ message: 'UPI ID is required for UPI withdrawals' });
    }
    if (withdrawMode === 'bankCard' && upiId) {
      return res.status(400).json({
        message: 'UPI ID should not be provided for bank card withdrawals',
      });
    }

    const user = await UserModel.findOne({ u_id });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Calculate the available balance for withdrawal
    const availableForWithdrawal =
      user.investedEarnings + user.depositRewardAmount + user.totalBalance; // Including totalBalance

    if (withdrawAmount > availableForWithdrawal) {
      return res.status(400).json({
        message: `Insufficient balance. You can withdraw up to ₹${availableForWithdrawal}.`,
      });
    }

    // Create the withdrawal request (no balance deduction here)
    const transaction = new BrowsWithdrawModel({
      u_id,
      withdrawAmount,
      status: 'Pending',
      withdrawTime: Date.now(),
      withdrawMode,
      totalBalance: user.totalBalance, // Reflect the current balance
      upiId: withdrawMode === 'upi' ? upiId : undefined,
    });

    await transaction.save();

    res
      .status(201)
      .json({
        message: 'Withdrawal request created successfully!',
        data: transaction,
      });
  } catch (error) {
    console.error('Error processing withdrawal:', error);
    res.status(500).json({ message: 'Error processing withdrawal', error });
  }
};

// Retrieve all withdrawals
const browsWithdrawGet = async (req, res) => {
  try {
    const withdrawals = await BrowsWithdrawModel.find();
    const userIds = withdrawals.map((withdraw) => withdraw.u_id);

    // Fetch user details
    const users = await UserModel.find({ u_id: { $in: userIds } }).select(
      'name email phone u_id'
    );

    // Fetch bank details
    const bankDetails = await BankDetails.find({
      u_id: { $in: userIds },
    }).select('u_id accountNumber ifscCode bank');

    // Combine data
    const result = withdrawals.map((withdraw) => {
      const user = users.find((u) => u.u_id === withdraw.u_id);
      const bankDetail = bankDetails.find((b) => b.u_id === withdraw.u_id);
      return {
        ...withdraw._doc,
        userDetails: user || null,
        bankDetails: bankDetail || null,
      };
    });

    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching withdrawals:', error);
    res.status(500).json({ message: 'Error fetching data', error });
  }
};

const browsWithdrawalHistory = async (req, res) => {
  try {
    // Ensure `u_id` is available in the request from the auth middleware
    const userId = req.u_id;
    if (!userId) {
      return res.status(401).json({
        message: 'Unauthorized: User ID not found',
        error: true,
        success: false,
      });
    }

    // Fetch browse recharge data for the logged-in user
    const rechargeData = await BrowsWithdrawModel.find({ u_id: userId });
    console.log('rechargeData', rechargeData);
    if (!rechargeData || rechargeData.length === 0) {
      return res.status(404).json({
        message: 'No recharge data found for the user',
        data: [],
        error: false,
        success: true,
      });
    }

    // Respond with the user's browse recharge data
    res.status(200).json({
      message: 'Recharge data retrieved successfully',
      data: rechargeData,
      error: false,
      success: true,
    });
  } catch (error) {
    console.error(
      'Error fetching browse recharge data:',
      error.message || error
    );
    res.status(500).json({
      message: 'Internal server error',
      error: true,
      success: false,
    });
  }
};

const browsWithdrawUpdate = async (req, res) => {
  try {
    console.log('Request params:', req.params);

    const withdrawal = await BrowsWithdrawModel.findById(req.params.id);
    if (!withdrawal) {
      return res.status(404).json({ message: 'Withdrawal request not found' });
    }

    if (withdrawal.status === 'Approved') {
      return res
        .status(400)
        .json({ message: 'Withdrawal request is already approved' });
    }

    const user = await UserModel.findOne({ u_id: withdrawal.u_id });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const availableBalance =
      user.investedEarnings + user.depositRewardAmount + user.totalBalance;

    if (withdrawal.withdrawAmount > availableBalance) {
      return res.status(400).json({
        message: `Insufficient balance. Available for withdrawal: ${availableBalance}`,
      });
    }

    let remainingAmount = withdrawal.withdrawAmount;

    // Deduct from totalBalance first
    if (remainingAmount <= user.totalBalance) {
      user.totalBalance -= remainingAmount;
      remainingAmount = 0;
    } else {
      remainingAmount -= user.totalBalance;
      user.totalBalance = 0;
    }

    if (remainingAmount > 0 && remainingAmount <= user.investedEarnings) {
      user.investedEarnings -= remainingAmount;
      remainingAmount = 0;
    } else if (remainingAmount > 0) {
      remainingAmount -= user.investedEarnings;
      user.investedEarnings = 0;
    }

    if (remainingAmount > 0) {
      user.depositRewardAmount -= remainingAmount;
      remainingAmount = 0;
    }

    if (remainingAmount > 0) {
      return res.status(400).json({
        message: `Error processing withdrawal. Unable to deduct sufficient balance.`,
      });
    }

    await user.save();

    withdrawal.status = 'Approved';
    withdrawal.totalBalance = user.totalBalance;
    await withdrawal.save();

    const transactionRecord = new browsTransaction({
      u_id: withdrawal.u_id,
      phone: user.phone,
      utr: Math.floor(Math.random() * 1000000000),
      amount: withdrawal.withdrawAmount,
      transactionType: 'Withdrawal',
      totalBalanceAfterTransaction: user.totalBalance,
      transactionTime: Date.now(),
    });

    await transactionRecord.save();

    res
      .status(200)
      .json({ message: 'Withdrawal approved successfully', withdrawal });
  } catch (error) {
    console.error('Error approving withdrawal:', error);
    res
      .status(500)
      .json({
        message: 'Error approving withdrawal',
        error: error.message || error,
      });
  }
};
// const browsWithdrawUpdate = async (req, res) => {
//   try {
//     console.log('Request params:', req.params);

//     const withdrawal = await BrowsWithdrawModel.findById(req.params.id);
//     if (!withdrawal) {
//       return res.status(404).json({ message: 'Withdrawal request not found' });
//     }

//     if (withdrawal.status === 'Approved') {
//       return res
//         .status(400)
//         .json({ message: 'Withdrawal request is already approved' });
//     }

//     const user = await UserModel.findOne({ u_id: withdrawal.u_id });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Calculate available balance for withdrawal (total balance, invested earnings, deposit reward)
//     const availableBalance =
//       user.investedEarnings + user.depositRewardAmount + user.totalBalance;

//     if (withdrawal.withdrawAmount > availableBalance) {
//       return res.status(400).json({
//         message: `Insufficient balance. Available for withdrawal: ${availableBalance}`,
//       });
//     }

//     // Deduct the withdrawal amount from the user's balance (prioritize totalBalance, then investedEarnings, then depositRewardAmount)
//     let remainingAmount = withdrawal.withdrawAmount;

//     // Deduct from totalBalance first
//     if (remainingAmount <= user.totalBalance) {
//       user.totalBalance -= remainingAmount;
//       remainingAmount = 0;
//     } else {
//       remainingAmount -= user.totalBalance;
//       user.totalBalance = 0;
//     }

//     // Deduct from investedEarnings if there's any remaining amount
//     if (remainingAmount > 0 && remainingAmount <= user.investedEarnings) {
//       user.investedEarnings -= remainingAmount;
//       remainingAmount = 0;
//     } else if (remainingAmount > 0) {
//       remainingAmount -= user.investedEarnings;
//       user.investedEarnings = 0;
//     }

//     // Deduct from depositRewardAmount if there's any remaining amount
//     if (remainingAmount > 0) {
//       user.depositRewardAmount -= remainingAmount;
//       remainingAmount = 0;
//     }

//     // If any remaining amount is still left (which shouldn't be the case if all deductions are correct)
//     if (remainingAmount > 0) {
//       return res.status(400).json({
//         message: `Error processing withdrawal. Unable to deduct sufficient balance.`,
//       });
//     }

//     await user.save();

//     // Approve withdrawal request
//     withdrawal.status = 'Approved';
//     withdrawal.totalBalance = user.totalBalance; // Updated balance
//     await withdrawal.save();

//     // Create recharge/transaction record for withdrawal approval
//     const rechargeRecord = new browsRechargemodel({
//       u_id: withdrawal.u_id,
//       phone: user.phone, // Assuming phone exists in UserModel
//       utr: Math.floor(Math.random() * 1000000000), // Generate a random UTR
//       selectedAmount: withdrawal.withdrawAmount,
//       transactionType: 'Withdrawal',
//       amount: withdrawal.withdrawAmount,
//       totalBalanceAfterTransaction: user.totalBalance,
//       transactionTime: Date.now(),
//     });

//     await rechargeRecord.save();

//     res
//       .status(200)
//       .json({ message: 'Withdrawal approved successfully', withdrawal });
//   } catch (error) {
//     console.error('Error approving withdrawal:', error);
//     res
//       .status(500)
//       .json({
//         message: 'Error approving withdrawal',
//         error: error.message || error,
//       });
//   }
// };


// Reject a withdrawal request (No need to update balances in this case)
const browsWithdrawReject = async (req, res) => {
  try {
    const withdrawal = await BrowsWithdrawModel.findByIdAndUpdate(
      req.params.id,
      { status: 'Rejected' },
      { new: true }
    );
    if (!withdrawal)
      return res.status(404).json({ message: 'Record not found' });
    res.status(200).json(withdrawal);
  } catch (error) {
    res.status(500).json({ message: 'Error rejecting record', error });
  }
};

// Retrieve processed withdrawals (approved or rejected)
const getProcessedWithdrawals = async (req, res) => {
  try {
    const processedWithdrawals = await BrowsWithdrawModel.find({
      status: { $in: ['Approved', 'Rejected'] },
    });
    const userIds = processedWithdrawals.map((withdraw) => withdraw.u_id);
    const users = await UserModel.find({ u_id: { $in: userIds } }).select(
      'u_id name email phone'
    );

    const result = processedWithdrawals.map((withdraw) => {
      const user = users.find((u) => u.u_id === withdraw.u_id);
      return { ...withdraw._doc, userDetails: user || null };
    });

    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching processed withdrawals:', error);
    res
      .status(500)
      .json({ message: 'Error fetching processed withdrawals', error });
  }
};

const getWithdrawHistory = async (req, res) => {
  try {
    const userId = req.userId;
    console.log('User ID:', userId); // Log userId to verify it's being set

    if (!userId) {
      return res.status(400).json({
        message: 'User ID not found',
        error: true,
        success: false,
      });
    }

    const withdrawals = await BrowsWithdrawModel.find({ userId: userId });

    return res.status(200).json(withdrawals);
  } catch (err) {
    console.error('Error fetching withdrawal data', err);
    return res.status(500).json({ message: 'Server error', error: err });
  }
};

module.exports = {
  createbrowsWithdraw,
  browsWithdrawGet,
  browsWithdrawUpdate,
  browsWithdrawReject,
  getProcessedWithdrawals,
  getWithdrawHistory,
  browsWithdrawalHistory,
};
