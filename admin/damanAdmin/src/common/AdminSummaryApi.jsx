const backendDomain = 'http://localhost:8077';
// const backendDomain = 'https://trademyindiabackend.onrender.com'

const SummaryApi = {
  DeleteUpi: {
    url: `${backendDomain}/api/deleteUPI/:id`,
    method: 'delete',
  },
  getLastCronDate: {
    url: `${backendDomain}/api/get-last-cron-date`,
  },
  GetPackages: {
    url: `${backendDomain}/api/get-packages`,
    method: 'get',
  },
  DeleteGiftcode: {
    url: `${backendDomain}/api/delete-giftcode`,
    method: 'delete',
  },
  getextraAmounts: {
    url: `${backendDomain}/api/getrewardedAmount`,
    method: 'get',
  },
  updateextraAmounts: {
    url: `${backendDomain}/api/update-extraamount`, // Base URL for dynamic ID
    method: 'put',
  },
  adminlogin: {
    url: `${backendDomain}/api/adminlogin`,
    method: 'post',
  },
  dailyInterest: {
    url: `${backendDomain}/api/run-simple-interest`,
    method: 'post',
  },
  createPackage: {
    url: `${backendDomain}/api/create-packages`,
    method: 'post',
  },
  deletePackage: {
    url: `${backendDomain}/api/delete-packases/:id`,
    method: 'delete',
  },
  updatePackage: {
    url: `${backendDomain}/api/update-packages/:id`,
    method: 'put',
  },
  recharges: {
    url: `${backendDomain}/api/recharges`,
    method: 'get',
  },
  rechargesApprove: {
    url: `${backendDomain}/api/rechargesApprove/:id`,
    method: 'put',
  },
  rechargesReject: {
    url: `${backendDomain}/api/rechargesReject/:id`,
    method: 'put',
  },
  browsWithdrawGet: {
    url: `${backendDomain}/api/browsWithdrawGet`,
    method: 'get',
  },
  browsWithdrawApprove: {
    url: `${backendDomain}/api/browsWithdrawApprove/:id`,
    method: 'put',
  },
  browsWithdrawReject: {
    url: `${backendDomain}/api/browsWithdrawReject/:id`,
    method: 'put',
  },
  giftcode: {
    url: `${backendDomain}/api/giftcode`,
    method: 'post',
  },
  getAllUPIs: {
    url: `${backendDomain}/api/getAllUPIs`,
    method: 'get',
  },
  updateUPI: {
    url: `${backendDomain}/api/updateUPI`,
    method: 'put',
  },
  getAllusers: {
    url: `${backendDomain}/api/get-allusers`,
    method: 'get',
  },
  processedRecharges: {
    url: `${backendDomain}/api/processedRecharges`,
    method: 'get',
  },
  deleteGiftcode: {
    url: `${backendDomain}/api/delete-giftcode`,
    method: 'delete',
  },
  getProcessedWithdrawals: {
    url: `${backendDomain}/api/getProcessedWithdrawals`,
    method: 'get',
  },
  EditEarningRewards: {
    url: `${backendDomain}/api/editEarningRewards/:id`,
    method: 'put',
  },
  DeleteUserData: {
    url: `${backendDomain}/api/deleteUserData/:id`,
    method: 'delete',
  },
  updateReferralPercentages: {
    url: `${backendDomain}/api/updateReferralPercentages`,
    method: 'put',
  },
  getReferralPercentages: {
    url: `${backendDomain}/api/getReferralPercentages`,
    method: 'get',
  },
  getCronLog: {
    url: `${backendDomain}/api/cron-log`,
    method: 'get',
  },
}
export default SummaryApi
