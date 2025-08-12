import React, { useState, useEffect } from 'react';
import atmcard from '../../../assets/wallet/atm-card.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BankAccount from './BankAccount';
import SummaryApi from '../../../common/SummaryApi.jsx';

const WithdrawTransaction = () => {
  const [active, setActive] = useState('bankCard');
  const [amount, setAmount] = useState('');
  const [upiId, setUpiId] = useState('');
  const [message, setMessage] = useState('');
  const [loadingRequest, setLoadingRequest] = useState(false);
  const [hasBankAccount, setHasBankAccount] = useState(false);
  const [loadingBankAccount, setLoadingBankAccount] = useState(true);

  const handleClick = (id) => {
    setActive(id);
  };

  // Check if bank account exists
  const checkBankAccount = async () => {
    try {
      const response = await axios.get(SummaryApi.GetCurrentUserBankDetail.url, { withCredentials: true });
      setHasBankAccount(response.data.data.length > 0);
    } catch (error) {
      console.error('Error checking bank account:', error);
    } finally {
      setLoadingBankAccount(false);
    }
  };

  const handleWithdraw = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      setMessage('Please enter a valid withdrawal amount');
      return;
    }

    setLoadingRequest(true);
    setMessage('');

    const withdrawData = {
      withdrawAmount: amount,
      upiId: active === 'upi' ? upiId : null,
      withdrawMode: active,
    };

    try {
      const response = await axios.post(SummaryApi.createbrowsWithdraw.url, withdrawData, { withCredentials: true });
      setMessage(response.data.message || 'Withdrawal request successful');
      setAmount('');
      setUpiId('');
    } catch (error) {
      setMessage('Failed to process withdrawal request');
      console.error('Error:', error);
    } finally {
      setLoadingRequest(false);
    }
  };

  useEffect(() => {
    checkBankAccount();
  }, []);

  if (loadingBankAccount) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Card Selection */}
      <div className="inline-flex px-3">
        <section className="px-1 mx-auto mt-4 mb-3">
          <div
            onClick={() => handleClick('bankCard')}
            className={`inline-block rounded-md text-center p-3 px-5 transition-colors duration-300 ${
              active === 'bankCard' ? 'bg-fxbt-gradient text-white' : 'bg-gray-800 text-white'
            }`}
          >
            <img src={atmcard} alt="ATM Card" className="mx-auto mb-2 w-9" />
            <p className="text-xs font-inter">BANK CARD</p>
          </div>
        </section>
      </div>

      {/* Bank Details */}
      <BankAccount />

      {/* Withdraw Section */}
    
        <section className="flex justify-center w-full my-4">
          <div className="py-5 bg-gray-800 rounded-lg px-14">
            {/* Enter Amount */}
            <div className="flex items-center w-full mx-auto mb-4 bg-gray-300 border-b border-gray-300 rounded-full pe-5">
              <span className="text-orange-500 text-[21.8px] font-inter mt-1 ps-5 pe-9">₹</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full p-2 text-sm bg-transparent focus:outline-none"
                placeholder="Enter the amount"
              />
            </div>

            <div className="flex items-center justify-between my-3">
              <span className="text-white text-[11.4px] font-inter">
                Withdrawable balance
                <span className="text-orange-500 text-[11.4px] ps-1"> ₹ 0.00</span>
              </span>
              <span className="text-yellow-500 border border-yellow-500 px-8 text-[11.4px] font-inter rounded-md">All</span>
            </div>
            <div className="flex items-center justify-between my-3">
              <span className="text-white text-[11.4px] font-inter">Withdraw amount received</span>
              <span className="text-yellow-500 font-roboto text-[15.6px]">₹ 0.00</span>
            </div>

            {/* Display Message */}
            {message && (
              <div className="my-3 text-sm text-center text-red-500 font-inter">{message}</div>
            )}

            {/* Withdraw Button */}
            <div className="flex justify-center w-full mt-6">
            {hasBankAccount ? (
              <button
                onClick={handleWithdraw}
                className="bg-fxbt-gradient text-gray-900 font-semibold py-2 px-10 rounded-full w-full text-[14.5px] font-inter"
                disabled={loadingRequest}
              >
                {loadingRequest ? 'Processing...' : 'Withdraw'}
              </button>
                ) : (
                  <div className="text-center text-red-500 mt-6">
                    Please add a bank account to enable withdrawals.
                  </div>
                )}
            </div>
          </div>
        </section>
    
    </>
  );
};

export default WithdrawTransaction;
