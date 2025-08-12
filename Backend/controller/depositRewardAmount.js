const UserModel = require("../models/users");

// Controller to add calculatedAmount to depositRewardAmount
const updateDepositRewardAmount = async (req, res) => {
  try {
    const { calculatedAmount } = req.body; // Extract calculatedAmount from the frontend
    const u_id = req.user.u_id; // Assuming u_id is extracted from authtoken middleware

    // Validation
    if (!calculatedAmount || typeof calculatedAmount !== "number") {
      return res.status(400).json({
        success: false,
        message: "calculatedAmount is required and must be a number",
      });
    }

    // Find user by u_id
    const user = await UserModel.findOne({ u_id });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Update depositRewardAmount
    user.depositRewardAmount += calculatedAmount;
    await user.save();

    // Send response
    return res.status(200).json({
      success: true,
      message: "Deposit reward amount updated successfully",
      data: {
      
        depositRewardAmount: user.depositRewardAmount,
      },
    });
  } catch (error) {
    console.error("Error updating depositRewardAmount:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = { updateDepositRewardAmount };
