import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Login from '../Admin_Login/Login';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import LevelsSetting from '../components/LevelsSetting';
import WithdrawalApproved from '../components/WithdrawalApproved';
import CreatedSalary from '../components/CreatedSalary';
import RechargeList from '../components/RechargeList';
import CreateGiftcode from '../components/CreateGiftcode';
import Members from '../components/Members';
import ManageUpi from '../components/ManageUpi';
import BrowseRecharge from '../components/BrowseRecharge';
import BrowseWithdrawal from '../components/BrowseWithdrawal';
import Packages from '../components/Packages';
import DepositReward from '../components/DepositReward';
import UserWallet from '../components/UserWallet';
import RunSimpleInterest from '../components/RunSImpleInterest';





export const router = createBrowserRouter([
    {
        path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/',
        element: <Sidebar />,
        children: [
          {
            path: 'dashboard',
            element: <Dashboard />,
          },
                   
                    {
                        path: '/members',
                        element: <Members/>,
                    },
                    {
                        path: '/browse-recharge',
                        element: <BrowseRecharge/>,
                    },
                    {
                        path: '/browse-withdrawal',
                        element: <BrowseWithdrawal/>,
                    },
                    {
                        path: '/levels-setting',
                        element: <LevelsSetting />,
                    },
                    {
                        path: '/withdrawal-approved',
                        element: <WithdrawalApproved/>,
                    },
                    {
                        path: '/created-salary',
                        element: <CreatedSalary/>,
                    },
                    {
                        path: '/recharge-approved',
                        element: <RechargeList/>,
                    },
                    {
                        path: '/create-giftcode',
                        element: <CreateGiftcode/>,
                    },
                    {
                        path: 'manageUPI',
                        element: <ManageUpi/>,
                    },
                    {
                        path: '/create-package',
                        element: <Packages/>,
                    },
                    {
                        path: '/deposit-reward',
                        element: <DepositReward/>,
                    },
                    {
                        path: '/user-wallet',
                        element: <UserWallet/>,
                    },
                    {
                        path: '/user-wallet',
                        element: <UserWallet/>,
                    },
                    {
                        path: '/calculate-interest',
                        element: <RunSimpleInterest/>,
                    },
                ],
            },
        ],
    },
]);