import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../Login_registration/Login';
import DisclosureAgreement from '../Login_registration/DisclosureAgreement';
import DisclosureAgreementAbout from '../components/Setting panel/DisclosureAgreementAbout.jsx';
import Home from '../components/Home';
import Settingpanel from '../components/Setting panel/Settingpanel';
import NotificationSP from '../components/Setting panel/NotificationSP';
import BeginnerGuide from '../components/Setting panel/BeginnerGuide';
import Aboutus from '../components/Setting panel/Aboutus';
import CoustomerService from '../components/Setting panel/CoustomerService';
import Account from '../components/Tapbar/Account';
import Language from '../components/Setting panel/Language';
import ActivityPanel from '../components/Tapbar/ActivityPanel';
import WalletMain from '../components/Tapbar/WalletMain';
import Pramotion from '../components/pramotion/Pramotion';
import InvitationRules from '../components/pramotion/InvitationRules';
import CommitionDetails from '../components/pramotion/CommitionDetails';
import SubordinateData from '../components/pramotion/SubordinateData';
import InvitationBonus from '../components/Tapbar/Activity/InvitationBonus';
import BettingRebate from '../components/Tapbar/Activity/BettingRebate';
import SuperJackpot from '../components/Tapbar/Activity/SuperJackpot';
import NewMember from '../components/Tapbar/Activity/NewMember';
import RebatePramotion from '../components/pramotion/RebatePramotion';
import Deposit from '../components/Tapbar/wallet/Deposit';
import DepositHT from '../components/Tapbar/wallet/DepositHT';
import Withdrawl from '../components/Tapbar/wallet/Withdrawl';
import WithdrawalHT from '../components/Tapbar/wallet/WithdrawalHT.jsx';
import AttendanceBonus from '../components/Tapbar/Activity/AttendanceBonus';
import AcoountNotification from '../components/Account/AcoountNotification';
import GameStatistics from '../components/Account/GameStatistics.jsx';
import Feedback from '../components/Setting panel/Feedback';
import GiftActivity from '../components/Tapbar/Activity/GiftActivity.jsx';
import RegisterForm from '../Login_registration/Register.jsx';
import AccountSetting from '../components/Account/AccountSetting.jsx';
import ChangeAvatar from '../components/Account/ChangeAvatar.jsx';
import SplashDaman from '../components/SplashDaman.jsx';
import NewSubordinates from '../components/pramotion/NewSubordinates.jsx';
import WheelGame from '../components/WheelGame/WheelGame.jsx';
import AttendanceGameRules from '../components/Tapbar/Activity/AttendanceGameRules.jsx';
import InvitationRewardRule from '../components/Tapbar/Activity/InvitationRewardRule.jsx';
import JackpotRules from '../components/Tapbar/Activity/JackpotRules';
import EventDescription from '../components/WheelGame/EventDescription.jsx';
import EventDetails from '../components/WheelGame/EventDetails.jsx';
import AcitivityRules from '../components/WheelGame/AcitivityRules.jsx';
import BankAccount from '../components/Tapbar/wallet/BankAccount.jsx';
import GameHistory from '../components/Tapbar/AccountHistory/GameHistory.jsx';
import TransactionHistory from '../components/Tapbar/AccountHistory/TransactionHistory.jsx';
import ChangeLogPassword from '../components/Account/ChangeLogPassword.jsx';
import AddBankNo from '../components/Tapbar/wallet/AddBankNo.jsx';
import ChooseBank from '../components/Tapbar/wallet/ChooseBank.jsx';
import SubmitUTR from '../components/Tapbar/wallet/SubmitUTR.jsx';
import DamanDownload from '../components/Setting panel/DamanDownload.jsx';
import DepositIssueHelp from '../components/Tapbar/wallet/UserGuid.jsx';
import ConfidencialAgreement from '../components/Setting panel/ConfidencialAgreement.jsx';
import Sidebar from '../../../admin/damanAdmin/src/components/Sidebar.jsx';
import Dashboard from '../../../admin/damanAdmin/src/components/Dashboard.jsx';
import QrScreen from '../components/Tapbar/wallet/QrScreen.jsx';
import Profile from '../Login_registration/Profile.jsx';
import BankDetails from '../components/Tapbar/wallet/BankDetails.jsx';

export const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '',
        element: <Login />,
      },

      {
        path: 'SplashDaman',
        element: <SplashDaman />,
      },
      {
        path: 'signup',
        element: <RegisterForm />,
      },

      {
        path: 'DisclosureAgreement',
        element: <DisclosureAgreement />,
      },
      {
        path: 'home',
        element: <Home />,
      },
  
      
    
      {
        path: 'home/settingpanel',
        element: <Settingpanel />,
      },
      {
        path: 'notification',
        element: <NotificationSP />,
      },
      {
        path: 'WheelGame',
        element: <WheelGame />,
      },
      {
        path: 'EventDescription',
        element: <EventDescription />,
      },
      {
        path: 'EventDetails',
        element: <EventDetails />,
      },
      {
        path: 'AcitivityRules',
        element: <AcitivityRules />,
      },
      {
        path: 'AcitivityRules',
        element: <AcitivityRules />,
      },
      {
        path: 'beginner-guide',
        element: <BeginnerGuide />,
      },
      {
        path: 'about-us',
        element: <Aboutus />,
      },
      {
        path: 'customer-service',
        element: <CoustomerService />,
      },
      {
        path: 'Language',
        element: <Language />,
      },
      {
        path: 'Account',
        element: <Account />,
      },
      {
        path: 'DisclosureAgreementAbout',
        element: <DisclosureAgreementAbout />,
      },
      {
        path: 'ActivityPanel',
        element: <ActivityPanel />,
      },
      {
        path: 'ChangeLoginPassword',
        element: <ChangeLogPassword />,
      },
      {
        path: 'promotion-panel',
        element: <Pramotion />,
      },
      {
        path: 'NewSubordinates',
        element: <NewSubordinates />,
      },
      {
        path: 'invitation-rule',
        element: <InvitationRules />,
      },
      {
        path: 'commission-details',
        element: <CommitionDetails />,
      },
      {
        path: 'subordinate-data',
        element: <SubordinateData />,
      },
      {
        path: 'invitation-bonus',
        element: <InvitationBonus />,
      },
      {
        path: 'betting-rebate',
        element: <BettingRebate />,
      },
      {
        path: 'super-jackpot',
        element: <SuperJackpot />,
      },
      {
        path: 'new-member-gift',
        element: <NewMember />,
      },
      {
        path: 'wallet',
        element: <WalletMain />,
      },

      {
        path: 'rebate-ratio',
        element: <RebatePramotion />,
      },
      {
        path: 'deposit',
        element: <Deposit />,
      },
      {
        path: 'depositHT',
        element: <DepositHT />,
      },
      {
        path: 'Withdrawl',
        element: <Withdrawl />,
      },
      {
        path: 'WithdrawalHT',
        element: <WithdrawalHT />,
      },
      {
        path: 'acoountNotification',
        element: <AcoountNotification />,
      },
      {
        path: 'gift',
        element: <GiftActivity />,
      },
      {
        path: 'attendance-bonus',
        element: <AttendanceBonus />,
      },
      {
        path: 'gameStatistics',
        element: <GameStatistics />,
      },
      {
        path: 'language',
        element: <Language />,
      },
      {
        path: 'feedback',
        element: <Feedback />,
      },
      {
        path: 'accountSetting',
        element: <AccountSetting />,
      },
      {
        path: 'changeAvatar',
        element: <ChangeAvatar />,
      },
      {
        path: 'language',
        element: <Language />,
      },
      {
        path: 'feedback',
        element: <Feedback />,
      },
      {
        path: 'bankAccount',
        element: <BankAccount />,
      },
      {
        path: 'bank-details',
        element: <BankDetails />,
      },
      {
        path: 'gameHistory',
        element: <GameHistory />,
      },
      {
        path: 'transactionHistory',
        element: <TransactionHistory />,
      },
      {
        path: 'jackpot-rules',
        element: <JackpotRules />,
      },
      {
        path: 'invitation-rewards-rules',
        element: <InvitationRewardRule />,
      },
      {
        path: 'attendance-game-rules',
        element: <AttendanceGameRules />,
      },
      {
        path: 'addBankNumber',
        element: <AddBankNo />,
      },
      {
        path: 'choose-bank',
        element: <ChooseBank />,
      },
      {
        path: 'submitUTR',
        element: <SubmitUTR />,
      },
      {
        path: 'download-Daman',
        element: <DamanDownload />,
      },
      {
        path: 'user-guid',
        element: <DepositIssueHelp />,
      },
      {
        path: 'confidencial-agreement',
        element: <ConfidencialAgreement />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
     
      
    ],
  },
  {
    path: 'qrScreen',
    element: <QrScreen/>,
  },
  // {
  //   path: '/admin',
  //   element: <Sidebar />,
  //   children: [
  //     { path: '', element: <Dashboard /> },
  //     { path: 'winGo', element: <WinGo /> },
  //   ],
  // },
]);
