const mongoose = require('mongoose');
const browsRechargemodel = require('../models/browsRecharge');
const UserModel = require('../models/users');

const generateTransactionID = () => {
  return (
    Math.random().toString(36).substring(2) +
    Math.random().toString(36).substring(2, 15).toUpperCase()
  );
};

const browsRechargemain = async (req, res) => {

 

  if (!req.session.user || !req.session.user.u_id || !req.session.user.phone) {
    return res
      .status(401)
      .json({ message: 'Unauthorized: User not logged in' });
  }

  

  const { selectedAmount, selectedOption, utr , calculatedAmount} = req.body;
  const u_id = req.session.user.u_id;
  const phone = req.session.user.phone;

  console.log('Transaction data:', { u_id, phone, selectedAmount, utr, calculatedAmount });

  try {
    const user = await UserModel.findOne({ u_id, phone });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const selectedAmountNumber = parseFloat(selectedAmount);
    if (isNaN(selectedAmountNumber)) {
      return res
        .status(400)
        .json({ message: 'Invalid selectedAmount: must be a number' });
    }

    // Generate random transaction ID
    const transactionID = generateTransactionID();

    const transaction = new browsRechargemodel({
      phone,
      u_id,
      selectedAmount: selectedAmountNumber,
      selectedOption,
      rewardedAmount : calculatedAmount,
      utr,
      transactionID, 
      totalBalance: user.totalBalance || 0, 
      status: 'Pending', 
    });

    await transaction.save();

    // Include rewardedAmount in the response
    res.status(200).json({
      message: 'Transaction saved successfully and awaiting approval',
      transaction,
      rewardedAmount: (transaction.extraAmount * selectedAmountNumber) / 100, 
      totalBalance: user.totalBalance || 0,
    });
  } catch (error) {
    console.error('Error saving transaction:', error);
    res.status(500).json({
      message: 'Error saving transaction',
      error,
    });
  }
};

//  recharge approve controller 
const browsRechargeupdate = async (req, res) => {
  try {
    const recharge = await browsRechargemodel.findById(req.params.id);
    if (!recharge) {
      return res.status(404).json({ message: 'Record not found' });
    }
    // Update the status to 'Approved'
    recharge.status = 'Approved';
    await recharge.save();

    // Add `selectedAmount` to the user's totalBalance
    const user = await UserModel.findOne({ u_id: recharge.u_id });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.totalBalance = (user.totalBalance || 0) + recharge.selectedAmount;
    await user.save();

    res.status(200).json({
      message: 'Recharge approved, and amount added to user balance',
      recharge,
      totalBalance: user.totalBalance,
    });
  } catch (error) {
    console.error('Error approving record:', error);
    res.status(500).json({ message: 'Error approving record', error });
  }
};


const browsRechargereject = async (req, res) => {
  try {
    const recharge = await browsRechargemodel.findById(req.params.id);
    if (!recharge) {
      return res.status(404).json({ message: 'Record not found' });
    }

    // Update the status to 'Rejected'
    recharge.status = 'Rejected';
    await recharge.save();

    // Fetch the user's current balance without modification
    const user = await UserModel.findOne({ u_id: recharge.u_id });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      message: 'Recharge rejected, no changes made to user balance',
      recharge,
      totalBalance: user.totalBalance || 0,
    });
  } catch (error) {
    console.error('Error rejecting record:', error);
    res.status(500).json({ message: 'Error rejecting record', error });
  }
};

const browsRechargeget = async (req, res) => {
  try {
    const recharges = await browsRechargemodel.find();

    const userIds = recharges.map((recharge) => recharge.u_id);
    const users = await UserModel.find({ u_id: { $in: userIds } }).select(
      'name email phone u_id'
    );

    const result = recharges.map((recharge) => {
      const user = users.find((u) => u.u_id === recharge.u_id);
      return {
        ...recharge._doc,
        userDetails: user || null,
      };
    });

    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching recharges:', error.message);
    res
      .status(500)
      .json({ message: 'Error fetching data', error: error.message });
  }
};

const getprocessedRecharges = async (req, res) => {
  try {
    const processedRecharges = await browsRechargemodel.find({
      status: { $in: ['Approved', 'Rejected'] },
    });

    const userIds = processedRecharges.map((recharge) => recharge.u_id);
    const users = await UserModel.find({ u_id: { $in: userIds } }).select(
      'u_id name email phone'
    );

    const result = processedRecharges.map((recharge) => {
      const user = users.find((user) => user.u_id === recharge.u_id);
      return {
        ...recharge._doc,
        userDetails: user || null,
      };
    });

    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching processed recharges:', error);
    res
      .status(500)
      .json({ message: 'Error fetching processed recharges', error });
  }
};

const getALlBrouseRechargeData = async (req, res) => {
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
    const rechargeData = await browsRechargemodel.find({ u_id: userId });
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








module.exports = {
  browsRechargemain,
  browsRechargeget,
  browsRechargeupdate,
  browsRechargereject,
  getprocessedRecharges,
  getALlBrouseRechargeData,
};
