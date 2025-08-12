const { VirtualType } = require('mongoose');
const WingoGameModel = require('../models/Wingo');
const UserModel = require('../models/users');
const server = require('../index');
var multiplayer = [2, 4.5, 2, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 2, 2];
var ColIndexInNum = [[2, 1], [0], [2], [0], [2], [0, 1], [2], [0], [2], [0]];
var bets30s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var bets1min = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var bets3min = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var bets5min = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var periodID_30s = 0;
var periodID_1min = 0;
var periodID_3min = 0;
var periodID_5min = 0;

const wingobetfunction = async (req, res) => {
  // console.log('Request Body:', req.body);
  // if (!req.session.user || !req.session.user.u_id) {
  //   return res
  //     .status(401)
  //     .json({ message: 'Unauthorized: User not logged in' });
  // }
  // const { timertype, betAmount, wingoBets } = req.body;
  // const u_id = req.session.user.u_id;
  // try {
  //   console.log(req.body);
  //   // Check if required fields are provided
  //   if (!betAmount || !wingoBets) {
  //     console.error('Validation failed: Missing required fields.', req.body);
  //     throw new Error('Please provide all required fields.');
  //   }

  //   const existingUser = await UserModel.findOne({ u_id: user.entries.u_id });
  //   if (!existingUser) {
  //     console.error('Validation failed: User not found.');
  //     throw new Error('User not found.');
  //   }

  //   if (existingUser.totalBalance < betAmount) {
  //     console.error('Validation failed: Insufficient balance.', {
  //       userBalance: existingUser.totalBalance,
  //       betAmount,
  //     });
  //     throw new Error('Insufficient balance.');
  //   }
  //   await existingUser.save();
  //   // Prepare new user data
  //   // const newWingoGame = new WingoGameModel({
  //   //   closingBalance: afterDeductionAmount,
  //   //   resultTime: Date.now(),
  //   // });

  //   const newWingoGame = new WingoGameModel({
  //     gameId: 'someGameIddddddlz',
  //     timeSpan: '30sec',
  //     totalBalance: existingUser.totalBalance,
  //     closingBalance: 2000,
  //     entries: [
  //       {
  //         u_id: u_id,
  //         wingoBets: wingoBets,
  //         betAmount,
  //       },
  //     ],
  //     resultTime: Date.now(),
  //   });

  //   // Save new user to the database
  //   const savedWingoGame = await newWingoGame.save();
  //   // for (i = 0; i <= 15; i++) {
  //   //   bets[i] += res.bets[i] - (res.bets[i] * 2) / 100;
  //   // }

  //   for (let i = 0; i <= 15; i++) {
  //     if (timertype === '30s') {
  //       bets30s[i] += wingoBets[i];
  //     } else if (timertype === '1min') {
  //       bets1min[i] += wingoBets[i];
  //     } else if (timertype === '3min') {
  //       bets3min[i] += wingoBets[i];
  //     } else if (timertype === '5min') {
  //       bets5min[i] += wingoBets[i];
  //     }
  //   }
  //   declareWingoresult();
  //   return res.status(201).json({
  //     data: savedWingoGame,
  //     success: true,
  //     message: 'Bet played successfully!',
  //   });
  //   console.log('sucess');
  // } catch (err) {
  //   console.log(err);
  //   res.status(400).json({
  //     message: err.message || 'An error occurred',
  //     success: false,
  //   });
  // }
};

function declareWingoresult(timertype = '') {
  // var totalmoney = 0;
  // let bets = bets30s;
  // for (i = 0; i < 15; i++) {
  //   totalmoney += bets[i];
  // }
  // console.log('total amt = ', totalmoney);
  // console.log('total array = ', bets);

  // // (current round total bet amount)
  // var allreturns = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  // for (i = 0; i < allreturns.length; i++) {
  //   allreturns[i] += bets[i + 3] * multiplayer[i + 3];

  //   // (+2 for offset, so get number index from bets) (add number return)

  //   for (j = 0; j < ColIndexInNum[i].length; j++) {
  //     allreturns[i] +=
  //       bets[ColIndexInNum[i][j]] * multiplayer[ColIndexInNum[i][j]];
  //     // (add color return)
  //   }

  //   if (i < 5) {
  //     // (add small-big returns)
  //     allreturns[i] += bets[15 - 1] * multiplayer[15 - 1];
  //   } else {
  //     allreturns[i] += bets[15 - 2] * multiplayer[15 - 2];
  //   }
  // }

  // var companyProfit = 0;
  // var remainingAmount = 0;
  // companyProfit = (totalmoney * 20) / 100.0;
  // remainingAmount = Math.floor(totalmoney - companyProfit);
  // console.log(companyProfit, 'is remain amt');
  // console.log(remainingAmount, 'is remain amt');
  // var remainindexs = [];

  // for (i = 0; i < allreturns.length; i++) {
  //   console.log(allreturns[i]);
  //   if (allreturns[i] <= remainingAmount) {
  //     remainindexs.push(i);
  //   }
  // }

  // bets = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  // if (timertype === '30s') {
  //   bets30s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  // } else if (timertype === '1min') {
  //   bets1min = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  // } else if (timertype === '3min') {
  //   bets3min = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  // } else if (timertype === '5min') {
  //   bets5min = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  // }
  // // (reset for next round)
  // var result = Math.random(remainindexs);
  // console.log('result of wingo game ', remainindexs);
  // let periodIDtemp;

  // if (timertype === '30s') {
  //   periodIDtemp = periodID_30s - 1;
  // } else if (timertype === '1min') {
  //   periodIDtemp = periodID_1min - 1;
  // } else if (timertype === '3min') {
  //   periodIDtemp = periodID_3min - 1;
  // } else if (timertype === '5min') {
  //   periodIDtemp = periodID_5min - 1;
  // }
  // wongoGameResult(result, periodIDtemp);
}

async function wongoGameResult(result, periodId) {
  // const users = await WingoGameModel.find({ periodId });
  // users.forEach(async (user) => {
  //   //Number result
  //   user.gameResult.winningNumber = result;
  //   //Color
  //   if (result === 0) {
  //     user.gameResult.winningColor = 'red violet';
  //   } else if (result === 5) {
  //     user.gameResult.winningColor = 'green violet';
  //   } else {
  //     user.gameResult.winningColor = result % 2;
  //     if (result % 2 === 0) {
  //       user.gameResult.winningNumber = 'red';
  //     } else {
  //       user.gameResult.winningNumber = 'green';
  //     }
  //   }
  //   //Small & Big
  //   if (result < 5) {
  //     user.gameResult.winningSize = 'Small';
  //   } else {
  //     user.gameResult.winningSize = 'Big';
  //   }
  //   //

  //   const existingUser = await UserModel.findOne(user.u_id);
  //   if (!existingUser) {
  //     throw new Error('User not found.');
  //   }
  //   // await existingUser.save();

  //   existingUser.totalBalance +=
  //     (wingoBets[result] - (wingoBets[result] * 2) / 100.0) *
  //     multiplayer[result];

  //   // (+2 for offset, so get number index from bets) (add number return)
  //   for (j = 0; j <= lengthOf(ColIndexInNum[result]); j++) {
  //     existingUser.totalBalance +=
  //       (wingoBets[ColIndexInNum[result][j]] -
  //         (wingoBets[ColIndexInNum[result][j]] * 2) / 100) *
  //       multiplayer[ColIndexInNum[result][j]];
  //   }

  //   if (i < 5) {
  //     // (add small-big returns)
  //     existingUser.totalBalance +=
  //       (wingoBets[15 - 1] - (wingoBets[15 - 1] * 2) / 100) *
  //       multiplayer[15 - 1];
  //   } else {
  //     existingUser.totalBalance +=
  //       (wingoBets[15 - 2] - (wingoBets[15 - 2] * 2) / 100) *
  //       multiplayer[15 - 2];
  //   }
  //   user.gameResult.status = 'completed';

  //   existingUser.save();
  //   wingoBets.save();
  // });
}

module.exports = {
  wingobetfunction,
  declareWingoresult,
  wongoGameResult,
  bets30s,
  bets1min,
  bets3min,
  bets5min,
  periodID_30s,
  periodID_1min,
  periodID_3min,
  periodID_5min,
};
