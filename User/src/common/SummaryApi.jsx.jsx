// const backendDomain = 'https://trademyindiabackend.onrender.com';
const backendDomain = 'http://localhost:8077';

const SummaryApi = {
  createBankDetails: {
    url: `${backendDomain}/api/createBankDetails`,
    method: 'post',
  },
   sendOtp: {
    // New endpoint for sending the OTP
    url: `${backendDomain}/api/register/send-otp`,
    method: "post"
  },
  AddBankDetails: {
    url: `${backendDomain}/api/add-bank-details`,
    method: 'post',
  },
  GetBankDetails: {
    url: `${backendDomain}/api/getBankDetails`,
    method: 'get',
  },
  GetCurrentUserBankDetail: {
    url: `${backendDomain}/api/getBankDetail`,
    method: 'get',
  },

  updateBankDetails: {
    url: `${backendDomain}/api/updateBankDetails`,
    method: 'put',
  },
  current_user: {
    url: `${backendDomain}/api/currentUser`,
    method: 'get',
  },
  update_current_user: {
    url: `${backendDomain}/api/update-singleuser/:id`,
    method: 'put',
  },
  logout_current_user: {
    url: `${backendDomain}/api/userLogout`,
    method: 'get',
  },
  GetDepositData: {
    url: `${backendDomain}/api/get-deposite-data`,
    method: 'get',
  },
  GetGiftCode: {
    url: `${backendDomain}/api/get-giftcode`,
    method: 'get',
  },
  GetRandomUPI: {
    url: `${backendDomain}/api/getRandomUPI`,
    method: 'get',
  },
  SubmitTransaction: {
    url: `${backendDomain}/api/submit-transaction`,
    method: 'post',
  },
  GetWithdrawHistory: {
    url: `${backendDomain}/api/getWithdrawHistory`,
    method: 'get',
  },
  GetDepositHistody: {
    url: `${backendDomain}/api/get-deposite-data`,
    method: 'get',
  },
  Signup: {
    url: `${backendDomain}/api/signup`,
    method: 'post',
  },
  Login: {
    url: `${backendDomain}/api/login`,
    method: 'post',
  },
  Forgetuserpassword: {
    url: `${backendDomain}/api/forgetuserpassword`,
    method: 'post',
  },
  Changeuserpassword: {
    url: `${backendDomain}/api/changeuserpassword`,
    method: 'post',
  },
  investedPackages: {
    url: `${backendDomain}/api/invested-packages`,
    method: 'get',
  },
  createbrowsWithdraw: {
    url: `${backendDomain}/api/createbrowsWithdraw`,
    method: 'post',
  },
  getPackages: {
    url: `${backendDomain}/api/get-packages`,
    method: 'get',
  },
  GetCompanyCapital: {
    url: `${backendDomain}/api/getCompanyCapital`,
    method: 'get',
  },
  investers: {
    url: `${backendDomain}/api/investers`,
    method: 'post',
  },
  VerifyOtp: {
    url: `${backendDomain}/api/verifyOtp`,
    method: 'post',
  },
  GetOtp: {
    url: `${backendDomain}/api/sendOtp`,
    method: 'post',
  },
  GetCompanyCapital: {
    url: `${backendDomain}/api/GetCompanyCapital`,
    method: 'get',
  },
  depositReward: {
    url: `${backendDomain}/api/getrewardedAmount`,
  },
  investmentsLog: {
    url: `${backendDomain}/api/investments`,
    method: 'get',
  },
  commission: {
    url: `${backendDomain}/api/commission`,
    method: 'get',
  },
 
};

export default SummaryApi;
