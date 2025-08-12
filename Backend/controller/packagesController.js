const tradePachageModel = require('../models/tradePackage');
const UserModel = require('../models/users');
const { updateReferralEarnings } = require("../utils/referralHelper"); // Adjust path accordingly

// Create a new package
const createPackages = async (req, res) => {
  try {
    const { packageTitle, packageAmount, packageInterest , PackMaturity} = req.body;

    if (!packageTitle || packageAmount <= 0 || packageInterest <= 0 || !PackMaturity) {
      return res.status(400).json({ message: 'Invalid package details' });
    }

    const newPackage = new tradePachageModel({
      packageTitle,
      packageAmount,
      packageInterest,
      PackMaturity,
    });

    const savedPackage = await newPackage.save();
    res.status(201).json({ message: 'Package created successfully', data: savedPackage });
  } catch (error) {
    console.error('Error creating package:', error.message);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

// Get all packages
const getPackagesData = async (req, res) => {
  try {
    const packageData = await tradePachageModel.find();
    res.status(200).json(packageData);
  } catch (error) {
    console.error('Error fetching packages:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete a package
const deletePackages = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPackage = await tradePachageModel.findByIdAndDelete(id);

    if (!deletedPackage) {
      return res.status(404).json({ message: 'Package not found' });
    }

    res.status(200).json({ message: 'Package deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

// Update a package
const updatePackage = async (req, res) => {
  try {
    const { id } = req.params;
    const { packageTitle, packageAmount, packageInterest, PackMaturity } = req.body;

    if (!packageTitle || !packageAmount || !packageInterest || !PackMaturity) {
      return res.status(400).json({
        message: 'All fields (packageTitle, packageAmount, packageInterest, PackMaturity) are required',
      });
    }

    const updatedPackage = await tradePachageModel.findByIdAndUpdate(
      id,
      { packageTitle, packageAmount, packageInterest, PackMaturity },
      { new: true }
    );

    if (!updatedPackage) {
      return res.status(404).json({ message: 'Package not found' });
    }

    res.status(200).json({ message: 'Package updated successfully', data: updatedPackage });
  } catch (error) {
    console.error('Error updating package:', error.message);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

// Invest in a package

const investedByController = async (req, res) => {
  try {
    const { packageId } = req.body;
    const userId = req.u_id;

    if (!packageId) {
      return res.status(400).json({ message: 'Package ID is required' });
    }

    // Find the package
    const tradePackage = await tradePachageModel.findById(packageId);
    if (!tradePackage) {
      return res.status(404).json({ message: 'Package not found' });
    }

    // Find the investing user
    const user = await UserModel.findOne({ u_id: userId });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if user already invested
    if (tradePackage.InvestedBy.some((inv) => inv.userId === userId)) {
      return res.status(400).json({ message: 'You have already invested in this package' });
    }

    // Check user's balance
    if (user.totalBalance < tradePackage.packageAmount) {
      return res.status(400).json({ message: 'Insufficient balance to invest in this package' });
    }

    // Deduct package amount from user's balance
    user.totalBalance -= tradePackage.packageAmount;

    // Record the investment
    const now = new Date();
    tradePackage.InvestedBy.push({
      userId,
      dateInvested: now,
      dateLastUpdated: now,
      status: 'invested',
      incrementedAmount: 0,
      totalAmount: tradePackage.packageAmount,
      lockPeriod: 200,
    });

    // Increment package investment stats
    tradePackage.investedUsers += 1;

    // Update user's investment stats
    user.totalInvestedAmount += tradePackage.packageAmount;
    user.totalInvestedPackages += 1;

    // Update referral earnings
    await updateReferralEarnings(userId, tradePackage.packageAmount);

    // Save user and package changes
    await user.save();
    await tradePackage.save();

    res.status(200).json({ message: 'Investment successful', success: true });
  } catch (err) {
    console.error('Error during investment:', err.message);
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
};

// Fetch all invested packages for a user
const getAllInvestedPackage = async (req, res) => {
  try {
    const userId = req.u_id;
    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized: User ID not found' });
    }

    const investedPackages = await tradePachageModel.find({ 'InvestedBy.userId': userId });
    if (!investedPackages || investedPackages.length === 0) {
      return res.status(404).json({ message: 'No invested packages found for the user' });
    }

    const enrichedPackages = investedPackages.map((pkg) => {
      const userInvestment = pkg.InvestedBy.find((inv) => inv.userId === userId);
      const dailyInterest = pkg.packageInterest / 100;
      const incrementedAmount = pkg.packageAmount * dailyInterest;
      const totalAmount =
        pkg.packageAmount +
        incrementedAmount *
          ((Date.now() - new Date(userInvestment.dateInvested)) / (1000 * 60 * 60 * 24));

      return { ...pkg._doc, incrementedAmount, totalAmount };
    });

    res.status(200).json({ message: 'Invested packages retrieved successfully', data: enrichedPackages });
  } catch (error) {
    console.error('Error fetching invested packages:', error.message);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

// Get daily incremented amounts
const getDailyInvestedAmounts = async (req, res) => {
  try {
    const userId = req.u_id;
    const investments = await tradePachageModel.find({ 'InvestedBy.userId': userId });

    if (!investments || investments.length === 0) {
      return res.status(404).json({ message: 'No investments found for the user' });
    }

    const dailyAmounts = [];
    investments.forEach((investment) => {
      investment.InvestedBy.forEach((entry) => {
        if (entry.userId === userId) {
          dailyAmounts.push({
            date: new Date(entry.dateLastUpdated).toISOString().split('T')[0],
            incrementedAmount: entry.incrementedAmount,
          });
        }
      });
    });

    res.status(200).json({
      message: 'Daily incremented amounts fetched successfully',
      data: dailyAmounts,
    });
  } catch (err) {
    console.error('Error fetching daily incremented amounts:', err.message);
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
};



module.exports = {
  createPackages,
  getPackagesData,
  deletePackages,
  updatePackage,
  investedByController,
  getAllInvestedPackage,
  getDailyInvestedAmounts,
};
