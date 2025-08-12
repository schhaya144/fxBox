


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaChevronLeft } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import SummaryApi from '../../common/SummaryApi.jsx';
import logo from '../../assets/fxlogo.webp';
import UserInvestments from './DailyInterest.jsx';

const ActivityPanel = () => {
  const currentUser = useSelector((state) => state?.user?.user);
  const [activeTab, setActiveTab] = useState('deposits'); // Tab state
  const [rechargeData, setRechargeData] = useState([]);
  const [withdrawalData, setWithdrawalData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRechargeData = async () => {
      try {
        const response = await axios.get(SummaryApi.GetDepositHistody.url, {
          withCredentials: true,
        });

        // Sort data by depositTime in descending order
        const sortedData = response.data.data.sort(
          (a, b) => new Date(b.depositTime) - new Date(a.depositTime)
        );
        setRechargeData(sortedData); // Set the sorted data
        setLoading(false);
      } catch (err) {
        setError(
          err.response?.data?.message || 'Failed to fetch recharge data'
        );
        setLoading(false);
      }
    };
    // withdrawal amount 
    const fetchWithdrawalData = async () => {
      try {
        const response = await axios.get(SummaryApi.GetWithdrawHistory.url, {
          withCredentials: true,
        });

        // Filter data where status is "Accepted"
        const acceptedWithdrawals = response.data.data.filter(
          (item) => item.status === 'Approved'
        );
        setWithdrawalData(acceptedWithdrawals);
      } catch (err) {
        setError(
          err.response?.data?.message || 'Failed to fetch withdrawal data'
        );
      } finally {
        setLoading(false);
      }
    };
    fetchRechargeData();
    fetchWithdrawalData();
  }, []);

  const renderTableContent = () => {
    if (loading) return <p className="text-white">Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
    const filteredData = rechargeData.filter((item) => item.status === 'Approved');
    switch (activeTab) {
      case 'deposits':
        return (
          <table className="min-w-full px-6 py-4 border-collapse rounded-lg table-auto glowing-border-white">
            <thead>
              <tr>
                <th className="px-4 py-2 font-semibold text-left text-white bg-primary">Transaction Type</th>
                <th className="px-4 py-2 font-semibold text-left text-white bg-primary">Deposit Reward</th>
                <th className="px-4 py-2 font-semibold text-left text-white bg-primary">Amount</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 text-gray-500">Deposit</td>
                  <td className="px-4 py-2">
                    <span className="text-fxbt-blue">+</span>
                    <span className="text-gray-500">{item.rewardedAmount}</span>
                    <span className="text-gray-500">₹</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-fxbt-blue">+</span>
                    <span className="text-gray-500">{item.selectedAmount}</span>
                    <span className="text-gray-500">₹</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        );

      case 'withdrawals':
        return (
          <table className="min-w-full px-6 py-4 border-collapse rounded-lg table-auto glowing-border-white">
            <thead>
              <tr>
                <th className="px-4 py-2 font-semibold text-left text-white bg-primary">Transaction Type</th>
                <th className="px-4 py-2 font-semibold text-left text-white bg-primary">Amount</th>
              </tr>
            </thead>
            <tbody>
              {withdrawalData.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 text-gray-500">Withdraw</td>
                  <td className="px-4 py-2">
                    <span className="text-red-500">-</span>
                    <span className="text-gray-500">{item.withdrawAmount}</span>
                    <span className="text-gray-500">₹</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        );

      case 'interest':
        return (
<UserInvestments/>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pb-6 bg-black">
      {/* Header */}
      <div className="fixed top-0 lg:w-6/12 xl:w-[400px] sm:w-8/12 w-full flex justify-between items-center bg-fxbt-gradient z-10">
        <div className="pb-1 text-black cursor-pointer ps-3">
          <FaChevronLeft className="mt-1" />
        </div>

        <div className="flex items-center justify-center">
          <img
            src={logo}
            className="sm:w-[120px]  w-[140px]  my-2 object-contain"
            alt=""
          />
        </div>
        <div className="w-10"></div>
      </div>

      <div className="min-h-screen mt-36 overflow-hidden shadow-lg">
        {/* Tabs */}
        <div className="flex justify-around mb-6 ">
          <button
            className={`px-4 py-2 rounded-lg font-semibold text-white ${
              activeTab === 'deposits' ? 'bg-fxbt-gradient' : 'bg-gray-700'
            }`}
            onClick={() => setActiveTab('deposits')}
          >
            Deposits
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-semibold text-white ${
              activeTab === 'withdrawals' ? 'bg-fxbt-gradient' : 'bg-gray-700'
            }`}
            onClick={() => setActiveTab('withdrawals')}
          >
            Withdrawals
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-semibold text-white ${
              activeTab === 'interest' ? 'bg-fxbt-gradient' : 'bg-gray-700'
            }`}
            onClick={() => setActiveTab('interest')}
          >
            Interest
          </button>
        </div>

        {/* Table Content */}
        {renderTableContent()}
      </div>
    </div>
  );
};

export default ActivityPanel;
