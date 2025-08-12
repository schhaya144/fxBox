
const browsRechargemodel = require("../models/browsRecharge");
const BrowsWithdrawModel = require("../models/browsWithdraw");

const getCompanyCapital = async (req, res) => {
  try {
    // Initialize the capital to 5 crores (50000000)
    let companyCapital = 50000000;

    // Fetch all approved recharges
    const approvedRecharges = await browsRechargemodel.find({
      status: 'Approved',
    });

    // Calculate the total amount added to the company capital from approved recharges
    approvedRecharges.forEach((recharge) => {
      companyCapital += recharge.selectedAmount; // Add the selectedAmount (including reward)
    });

    // Fetch all approved withdrawals
    const approvedWithdrawals = await BrowsWithdrawModel.find({
      status: 'Approved',
    });

    // Subtract the withdrawal amounts from the company capital for each approved withdrawal
    approvedWithdrawals.forEach((withdraw) => {
      companyCapital -= withdraw.withdrawAmount;
    });

    // Return the calculated company capital
    res.status(200).json({
      message: 'Company capital amount retrieved successfully',
      companyCapital,
    });
  } catch (error) {
    console.error('Error fetching company capital amount:', error);
    res.status(500).json({ message: 'Error fetching company capital amount', error });
  }
};
module.exports = { getCompanyCapital };