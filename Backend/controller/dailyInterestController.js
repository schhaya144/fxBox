
// const tradePackageModel = require('../models/tradePackage');
// const UserModel = require('../models/users');

// /**
//  * Controller to fetch and display investment interest logs for a user.
//  */
// const getDailyInterestLogController = async (req, res) => {
//   try {
//     const userId = req.u_id;

//     const user = await UserModel.findOne({ u_id: userId });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found', success: false });
//     }

//     const userPackages = await tradePackageModel.find({
//       'InvestedBy.userId': userId,
//     }).select('packageTitle InvestedBy');

//     const investments = userPackages.map(pkg => {
//       const userInvestment = pkg.InvestedBy.find(inv => inv.userId === userId);
//       return {
//         packageTitle: pkg.packageTitle,
//         incrementedAmount: userInvestment.incrementedAmount,
//         totalAmount: userInvestment.totalAmount,
//         dateLastUpdated: userInvestment.dateLastUpdated,
//         dateInvested: userInvestment.dateInvested,
//         dailyIncrementHistory: userInvestment.dailyIncrementHistory,
//       };
//     });

//     res.status(200).json({
//       success: true,
//       data: investments,
//     });
//   } catch (error) {
//     console.error('Error fetching user investments:', error.message);
//     res.status(500).json({ message: 'Internal server error', success: false });
//   }
// };


// module.exports = getDailyInterestLogController;






const tradePackageModel = require('../models/tradePackage');
const UserModel = require('../models/users');

const getDailyInterestLogController = async (req, res) => {
  try {
    const userId = req.u_id;

    const user = await UserModel.findOne({ u_id: userId });
    if (!user) {
      return res.status(404).json({ message: 'User not found', success: false });
    }

    const userPackages = await tradePackageModel.find({
      'InvestedBy.userId': userId,
    });

    const today = new Date().toDateString(); // only date part for comparison

    const investments = [];

    for (const pkg of userPackages) {
      const userInvestment = pkg.InvestedBy.find(inv => inv.userId === userId);

      if (!userInvestment) continue;

      const lastUpdateDate = new Date(userInvestment.dateLastUpdated).toDateString();

      // Prevent duplicate daily updates
      if (lastUpdateDate === today) {
        investments.push({
          packageTitle: pkg.packageTitle,
          incrementedAmount: userInvestment.incrementedAmount,
          totalAmount: userInvestment.totalAmount,
          dateLastUpdated: userInvestment.dateLastUpdated,
          dateInvested: userInvestment.dateInvested,
          dailyIncrementHistory: userInvestment.dailyIncrementHistory,
        });
        continue;
      }

      const dailyInterestRate = 0.06 / 12 / 22; // 6% annually, 0.5% monthly, over 22 working days

      const increment = userInvestment.totalAmount * dailyInterestRate;

      userInvestment.incrementedAmount += increment;
      userInvestment.totalAmount += increment;
      userInvestment.dateLastUpdated = new Date();

      // Log history
      userInvestment.dailyIncrementHistory.push({
        date: new Date(),
        increment: increment.toFixed(2),
        totalAmount: userInvestment.totalAmount.toFixed(2),
      });

      await pkg.save();

      investments.push({
        packageTitle: pkg.packageTitle,
        incrementedAmount: userInvestment.incrementedAmount,
        totalAmount: userInvestment.totalAmount,
        dateLastUpdated: userInvestment.dateLastUpdated,
        dateInvested: userInvestment.dateInvested,
        dailyIncrementHistory: userInvestment.dailyIncrementHistory,
      });
    }

    res.status(200).json({
      success: true,
      data: investments,
    });

  } catch (error) {
    console.error('Error fetching user investments:', error.message);
    res.status(500).json({ message: 'Internal server error', success: false });
  }
};

module.exports = getDailyInterestLogController;
