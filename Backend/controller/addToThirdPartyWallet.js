const UserModel = require('../models/users'); // Assuming the UserModel exists

const addToThirdPartyWallet = async (req, res) => {
  try {
    // Check if session exists and get user ID from session
    if (!req.session || !req.session.user || !req.session.user.u_id) {
      return res.status(401).json({ message: 'Unauthorized, please log in first.' });
    }

    const { amount } = req.body;
    const u_id = req.session.user.u_id; // Retrieve user ID from session

    // Validate the required amount field
    if (!amount) {
      return res.status(400).json({ message: 'Amount is required.' });
    }

    // Fetch user from the UserModel
    const user = await UserModel.findOne({ u_id });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Update the thirdPartyWallet
    user.thirdPartyWallet = (user.thirdPartyWallet || 0) + amount;

    // Save the updated user data
    await user.save();

    return res.status(200).json({
      message: 'Amount added to third-party wallet successfully.',
      updatedWallet: user.thirdPartyWallet,
    });
  } catch (error) {
    console.error('Error adding amount to third-party wallet:', error);
    return res.status(500).json({ message: 'Internal server error.', error: error.message });
  }
};



 



module.exports = {
  addToThirdPartyWallet,
};
