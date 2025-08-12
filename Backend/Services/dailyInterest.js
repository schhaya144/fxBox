const cron = require('node-cron');
const tradePachageModel = require('../models/tradePackage');
const UserModel = require('../models/users');

const calculateSimpleInterest = () => {
  cron.schedule('0 30 7 * * *', async () => {
    
    try {
      console.log('Starting daily simple interest calculation...');

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

          if (investmentAge >= investment.lockPeriod) {
            investment.status = 'matured';
            investment.matured = true;

            // Unlock the user's invested amount
            const user = await UserModel.findOne({ u_id: investment.userId });
            if (user) {
              user.totalBalance += investment.totalAmount;
              user.totalInvestedAmount -= investment.totalAmount;
              await user.save();
            }
          }

          if (
            investment.status === 'invested' &&
            tradePackage.packageInterest &&
            investmentAge < investment.lockPeriod
          ) {
            const dailyInterest =
              (tradePackage.packageInterest / 100) * tradePackage.packageAmount;

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
          console.log(
            `Package ${tradePackage.packageTitle} updated successfully.`
          );
        }
      }

      console.log('Daily simple interest calculation completed.');
    } catch (error) {
      console.error(
        'Error during daily simple interest calculation:',
        error.message
      );
    }
  });
};

module.exports = calculateSimpleInterest;
