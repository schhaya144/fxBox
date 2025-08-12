const adminconfig = require("../models/adminconfig");
const InterestCalculationLog = require("../models/interestCalculationLog");
const tradePachageModel = require("../models/tradePackage");
const UserModel = require("../models/users");

const runSimpleInterest = async (req, res) => {
  try {
    console.log('Starting daily simple interest calculation...');

    const today = new Date().toDateString();

    // Prevent duplicate runs for the same day
    const existingConfig = await adminconfig.findOne({ key: "lastInterestRun" });
    if (existingConfig && new Date(existingConfig.value).toDateString() === today) {
      return res.status(400).json({ message: "Interest already distributed for today." });
    }

    const packages = await tradePachageModel.find({
      investedUsers: { $gt: 0 },
    });

    for (const tradePackage of packages) {
      let packageUpdated = false;

      for (const investment of tradePackage.InvestedBy) {
        const now = new Date();
        const investmentAge = Math.floor(
          (now - new Date(investment.dateInvested)) / (1000 * 60 * 60 * 24)
        );

        // 17-month lockPeriod = 374 working days
        investment.lockPeriod = 374;

        if (investmentAge >= investment.lockPeriod) {
          investment.status = 'matured';
          investment.matured = true;

          const user = await UserModel.findOne({ u_id: investment.userId });
          if (user) {
            user.totalBalance += investment.totalAmount;
            user.totalInvestedAmount -= investment.totalAmount;
            await user.save();
          }
        }

        // Daily interest update
        if (
          investment.status === 'invested' &&
          tradePackage.packageInterest &&
          investmentAge < investment.lockPeriod
        ) {
          const monthlyInterestRate = tradePackage.packageInterest / 100;
          const dailyInterestRate = monthlyInterestRate / 12 / 22;

          const principal = investment.totalAmount || tradePackage.packageAmount;
          const dailyInterest = principal * dailyInterestRate;

          if (!isNaN(dailyInterest)) {
            investment.incrementedAmount += dailyInterest;
            investment.totalAmount += dailyInterest;
            investment.dateLastUpdated = now;

            investment.dailyIncrementHistory.push({
              date: now,
              incrementedAmount: dailyInterest,
            });

            const user = await UserModel.findOne({ u_id: investment.userId });
            if (user) {
              user.investedEarnings += dailyInterest;
              await user.save();
            }
            packageUpdated = true;
          }
        }
      }

      if (packageUpdated) {
        await tradePackage.save();
        console.log(`Package ${tradePackage.packageTitle} updated successfully.`);
      }
    }

    // ✅ Save last run date to prevent repeat
    await adminconfig.findOneAndUpdate(
      { key: "lastInterestRun" },
      { value: new Date() },
      { upsert: true, new: true }
    );

    // Log success
    await InterestCalculationLog.create({
      status: "success",
      message: "Daily simple interest calculation completed.",
    });

    console.log('Daily simple interest calculation completed.');
    res.status(200).json({ message: 'Cron job executed successfully' });
  } catch (error) {
    console.error('Error during daily simple interest calculation:', error.message);

    // Log failure
    await InterestCalculationLog.create({
      status: "failure",
      message: error.message,
    });

    res.status(500).json({ error: error.message });
  }
};

   

const getInterestCalculationLogs = async (req, res) => {
  try {
    const logs = await InterestCalculationLog.find().sort({ timestamp: -1 });
    res.status(200).json(logs);
  } catch (error) {
    console.error("Error fetching logs:", error.message);
    res.status(500).json({ error: error.message });
  }
};





const getLastCronDate = async (req, res) => {
  try {
    const config = await adminconfig.findOne({ key: 'lastInterestRun' });
    res.status(200).json({
      lastRunDate: config?.value || null,
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch last run date', error: error.message });
  }
};
module.exports = { 
    runSimpleInterest, getInterestCalculationLogs, getLastCronDate
};







