const UserModel = require('../models/users');
const bcrypt = require('bcryptjs');

const editEarningRewards = async (req, res) => {
  try {
    const { id } = req.params;
    const { investedEarnings, name, phone, totalBalance, password } = req.body;

    // Hash password if provided
    let updatedPassword = password;
    if (password) {
      const salt = bcrypt.genSaltSync(10);
      updatedPassword = await bcrypt.hash(password, salt);
    }

    const user = await UserModel.findByIdAndUpdate(
      id,
      {
        investedEarnings,
        name,
        phone,
        totalBalance,
        password: updatedPassword || undefined, // Update password only if provided
      },
      { new: true, runValidators: true }
    );

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    res.status(200).json({
      message: 'User details updated successfully.',
      data: user,
    });
  } catch (error) {
    console.error('Error updating user details:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};



const deleteUserDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUserDetail = await UserModel.findByIdAndDelete(id);

    if (!deleteUserDetail) {
      return res.status(404).json({ message: 'user data not found' });
    }

    res.status(200).json({ message: 'user data deleted successfully' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};
module.exports = { editEarningRewards , deleteUserDetails};
