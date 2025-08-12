const UserModel = require("../models/users");
const SettingsModel = require("../models/referralBonus");

const updateReferralEarnings = async (referrerId, referredAmount) => {
  // Fetch the referral percentages from the settings
  const settings = await SettingsModel.findOne();

  if (!settings) {
    throw new Error("Referral settings not found");
  }

  let referrer = await UserModel.findOne({ u_id: referrerId });

  if (!referrer) {
    throw new Error("Referrer not found");
  }

  // Level 1: Parent of the referrer (previously Level 2)
  if (referrer.p_id) {
    let parent = await UserModel.findOne({ u_id: referrer.p_id });
    if (parent) {
      const level1Bonus = referredAmount * (settings.level1Percentage / 100); // Use dynamic percentage
      parent.referralEarnings.level1 += level1Bonus;
      parent.totalBalance += level1Bonus;
      await parent.save();
    }
  }

  // Level 2: Grandparent of the referrer (previously Level 3)
  if (referrer.p_id) {
    let parent = await UserModel.findOne({ u_id: referrer.p_id });
    if (parent && parent.p_id) {
      let grandParent = await UserModel.findOne({ u_id: parent.p_id });
      if (grandParent) {
        const level2Bonus = referredAmount * (settings.level2Percentage / 100); // Use dynamic percentage
        grandParent.referralEarnings.level2 += level2Bonus;
        grandParent.totalBalance += level2Bonus;
        await grandParent.save();
      }
    }
  }

  // Level 3: Great-grandparent of the referrer (previously Level 4)
  if (referrer.p_id) {
    let parent = await UserModel.findOne({ u_id: referrer.p_id });
    if (parent && parent.p_id) {
      let grandParent = await UserModel.findOne({ u_id: parent.p_id });
      if (grandParent && grandParent.p_id) {
        let greatGrandParent = await UserModel.findOne({ u_id: grandParent.p_id });
        if (greatGrandParent) {
          const level3Bonus = referredAmount * (settings.level3Percentage / 100); // Use dynamic percentage
          greatGrandParent.referralEarnings.level3 += level3Bonus;
          greatGrandParent.totalBalance += level3Bonus;
          await greatGrandParent.save();
        }
      }
    }
  }
};

module.exports = { updateReferralEarnings };
