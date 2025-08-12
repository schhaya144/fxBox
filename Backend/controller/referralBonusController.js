// controllers/settingsController.js
const SettingsModel = require("../models/referralBonus");

const updateReferralPercentages = async (req, res) => {
  try {
    const { level1Percentage, level2Percentage, level3Percentage } = req.body;

    // Ensure all percentages are provided
    if (level1Percentage == null || level2Percentage == null || level3Percentage == null) {
      return res.status(400).json({ message: "Please provide all percentage values." });
    }

    // Update or create the settings
    const settings = await SettingsModel.findOne();
    if (settings) {
      settings.level1Percentage = level1Percentage;
      settings.level2Percentage = level2Percentage;
      settings.level3Percentage = level3Percentage;
      await settings.save();
    } else {
      const newSettings = new SettingsModel({
        level1Percentage,
        level2Percentage,
        level3Percentage,
      });
      await newSettings.save();
    }

    return res.status(200).json({ message: "Referral percentages updated successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error updating referral percentages" });
  }
};


const getReferralPercentages = async (req, res) => {
    try {
      // Assuming referral percentages are stored in a `Settings` collection
      const settings = await SettingsModel.findOne(); // Replace with your actual model or data source
  
      if (!settings) {
        return res.status(404).json({ message: "Referral settings not found" });
      }
  
      return res.status(200).json({
        level1Percentage: settings.level1Percentage || 5,
        level2Percentage: settings.level2Percentage || 3,
        level3Percentage: settings.level3Percentage || 2,
      });
    } catch (error) {
      console.error("Error fetching referral percentages:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };
  

  
  


module.exports = { 
    updateReferralPercentages,
    getReferralPercentages,
};
