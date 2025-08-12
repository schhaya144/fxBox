const UserModel = require('../models/users'); // Assuming your User model is in this location

const getSubordinateData = async (req, res) => {
  try {
    const userid = req.u_id; // Extracted from the auth token (make sure this is passed properly)
    console.log('User ID:', userid);

    // Fetch user by u_id
    const user = await UserModel.findOne({ u_id: userid });
    console.log('User:', user);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Fetch subordinate data for each level
    // Level 1: Direct subordinates (users whose `p_id` matches the user's `u_id`)
    const level1Subordinates = await UserModel.find({ p_id: userid });

    // Level 2: Subordinates of Level 1 (users whose `p_id` is any of the Level 1 `u_id`)
    const level2Subordinates = await UserModel.find({ p_id: { $in: level1Subordinates.map(sub => sub.u_id) } });

    // Level 3: Subordinates of Level 2 (users whose `p_id` is any of the Level 2 `u_id`)
    const level3Subordinates = await UserModel.find({ p_id: { $in: level2Subordinates.map(sub => sub.u_id) } });

    // Get the referral earnings directly from the user's data
    const referralEarnings = user.referralEarnings || { level1: 0, level2: 0, level3: 0 };

    // Calculate the total referral earnings for each level from subordinates
    const totalReferralEarningsLevel1 = level1Subordinates.reduce((sum, sub) => sum + (sub.referralEarnings?.level1 || 0), 0);
    const totalReferralEarningsLevel2 = level2Subordinates.reduce((sum, sub) => sum + (sub.referralEarnings?.level2 || 0), 0);
    const totalReferralEarningsLevel3 = level3Subordinates.reduce((sum, sub) => sum + (sub.referralEarnings?.level3 || 0), 0);

    // Return the subordinate count and referral earnings data for each level
    return res.status(200).json({
      referralEarnings: {
        level1: referralEarnings.level1 + totalReferralEarningsLevel1,
        level2: referralEarnings.level2 + totalReferralEarningsLevel2,
        level3: referralEarnings.level3 + totalReferralEarningsLevel3,
      },
      subordinatesCount: {
        level1: level1Subordinates.length,
        level2: level2Subordinates.length,
        level3: level3Subordinates.length,
      },
    });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { getSubordinateData };
