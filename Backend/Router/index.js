const express = require('express');
const router = express.Router();
// const { upload } = require('../config/cloudinaryMulter'); 
const qrUploadController = require('../controller/qrUploadController');

// const userRegisterationController = require('../controller/userRegistration');
const userLoginController = require('../controller/userlogin');

const {
  browsRechargemain,
  browsRechargeget,
  browsRechargeupdate,
  browsRechargereject,
  getprocessedRecharges,
  getALlBrouseRechargeData,
  getAllExtraAmounts,
  updateAllExtraAmounts,
} = require('../controller/BrowsRechargecontroller');

// adminlogin

const adminLogin = require('../controller/adminController/AdminLoginController');
const {
  userRegisterationController,
  getAllUsersController,
  sentEmailOtp,
  verifyEmailOtp,
} = require('../controller/userRegistration');
// routs for bank details data

const {
  createbrowsWithdraw,
  browsWithdrawGet,
  browsWithdrawUpdate,
  browsWithdrawReject,
  getProcessedWithdrawals,
  browsWithdrawalHistory,
} = require('../controller/browsWithdrawController');
const { getCurrentUser } = require('../controller/currentUserController');
const userLogout = require('../controller/userLogout');
const { createGiftcode, getGiftcode, deleteGiftcode, redeemGiftCode, getDistributingAmount } = require('../controller/giftcodeController');
const authToken = require('../middleware/auth');
const { addBankDetails, getBankDetailsController, getCurrentUserBankDetails } = require('../controller/BankDetailsController');


const { addToThirdPartyWallet } = require('../controller/addToThirdPartyWallet');
const { createPackages, getPackagesData, deletePackages, updatePackage, investedByController, getAllInvestedPackage } = require('../controller/packagesController');
const { sendOtp, verifyOtp } = require('../controller/otpVerification');
const { getCompanyCapital } = require('../controller/companyCapital');
const {getrewardedAmount, updateExtraAmount } = require('../controller/extraRewardAmountController');
const getDailyInterestController = require('../controller/dailyInterestController');
const { updateDepositRewardAmount } = require('../controller/depositRewardAmount');
const { editEarningRewards, deleteUserDetails } = require('../controller/editEarningRewands');
const { updateReferralPercentages, getReferralPercentages } = require('../controller/referralBonusController');
const { getSubordinateData } = require('../controller/SubordinateData');
const { runSimpleInterest, getInterestCalculationLogs, getLastCronDate } = require('../controller/runSimpleInterest');
const { upload } = require('../middleware/cloudinaryMulter');


router.post('/signup', userRegisterationController);
router.get('/currentUser', authToken, getCurrentUser);
// hgfyf
router.post('/login', userLoginController);
router.get('/userLogout', userLogout);
router.get('/get-allusers', getAllUsersController);
//adminlogin
router.post('/adminlogin', adminLogin.adminLogin);

// routs for bank details data
router.post('/add-bank-details', authToken, addBankDetails);
// router.put('/createBankDetails',authToken, createBankDetails);
router.get('/getBankDetails',  getBankDetailsController);
router.get('/getBankDetail',authToken,  getCurrentUserBankDetails);

// updateDepositRewardAmount
router.post("/updateDepositRewardAmount",authToken, updateDepositRewardAmount);

// routes for browswithdraw
router.post('/createbrowsWithdraw', authToken, createbrowsWithdraw);
router.get('/browsWithdrawGet', browsWithdrawGet);
router.put('/browsWithdrawApprove/:id', browsWithdrawUpdate);
router.put('/browsWithdrawReject/:id', browsWithdrawReject);
router.get('/getProcessedWithdrawals', getProcessedWithdrawals);
//route for Withdraw history
router.get('/getWithdrawHistory', authToken, browsWithdrawalHistory);
//browsRechargemain
router.post('/submit-transaction', authToken, browsRechargemain);
router.get('/recharges', browsRechargeget);
router.put('/rechargesApprove/:id', browsRechargeupdate);
router.put('/rechargesReject/:id', browsRechargereject);
router.get('/processedRecharges', getprocessedRecharges);
// user side
router.get('/get-deposite-data', authToken, getALlBrouseRechargeData);


// extraRewardAmount

router.get('/getrewardedAmount', getrewardedAmount);
router.put('/update-extraamount',updateExtraAmount);
// router.post('/postRewardedAmount', postRewardedAmount);

// referral Bonus
router.put("/updateReferralPercentages", updateReferralPercentages);
router.get("/getReferralPercentages", getReferralPercentages);
router.get('/commission', authToken, getSubordinateData);




// Route to update UPI entry by ID with file upload
router.put(
  '/updateUPI/:id',
  upload.single('qr_image'), // ✅ should work now
  qrUploadController.updateUPI
);
router.get('/getAllUPIs', qrUploadController.getAllUPIs);

router.get('/getRandomUPI', qrUploadController.getRandomUPI);

// gift code
router.post('/giftcode', createGiftcode);
router.get('/get-giftcode', getGiftcode);
router.post('/redeem-giftcode', authToken, redeemGiftCode);
router.delete('/delete-giftcode/:id', deleteGiftcode);
router.get('/giftcode/:id', getDistributingAmount);




router.post('/add-to-wallet',authToken, addToThirdPartyWallet);

// /otp

router.post('/sendOtp', sendOtp);
router.post('/verifyOtp',authToken, verifyOtp);


// create package 
router.post('/create-packages', createPackages);
router.get('/get-packages', getPackagesData);
router.delete('/delete-packases/:id', deletePackages);
router.put("/update-packages/:id", updatePackage);
router.post("/investers",authToken, investedByController);
router.get("/invested-packages",authToken, getAllInvestedPackage);
router.get("/getCompanyCapital", getCompanyCapital);
router.get("/investments",authToken, getDailyInterestController);


// edit earning rewards
router.put("/editEarningRewards/:id",editEarningRewards)
router.delete("/deleteUserData/:id",deleteUserDetails)
router.post("/run-simple-interest",runSimpleInterest)
router.get("/cron-log",getInterestCalculationLogs)
router.get("/get-last-cron-date",getLastCronDate)

// mailer  
router.post('/send-otp',sentEmailOtp)
router.post('/verify-otp',verifyEmailOtp)
module.exports = router;
