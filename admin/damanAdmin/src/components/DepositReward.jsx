import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SummaryApi from '../common/AdminSummaryApi'; // Ensure this matches your API configuration

const DepositReward = () => {
  const [extraAmount, setExtraAmount] = useState(null); // State to store `extraamount`
  const [newExtraAmount, setNewExtraAmount] = useState(''); // State for input value
  const [message, setMessage] = useState(''); // State for success/error messages

  // Fetch the current `extraamount` value
  const fetchExtraAmount = async () => {
    try {
      const response = await axios.get(SummaryApi.getextraAmounts.url); // Ensure URL is correct
      if (response.data.success) {
        setExtraAmount(response.data.extraamount); // Update state with `extraamount`
        setMessage('');
      } else {
        setMessage('Failed to fetch extra amount.');
      }
    } catch (error) {
      console.error('Error fetching extraamount:', error);
      setMessage('Error fetching extra amount.');
    }
  };

  // Update the `extraamount` value
  const updateExtraAmount = async () => {
    if (!newExtraAmount || isNaN(newExtraAmount) || newExtraAmount < 0) {
      setMessage('Please enter a valid non-negative number.');
      return;
    }

    try {
      // Update request to backend to set new extra amount
      const response = await axios.put(SummaryApi.updateextraAmounts.url, {
        extraamount: Number(newExtraAmount),
      });

      if (response.data.success) {
        setMessage(response.data.message); // Set success message
        fetchExtraAmount(); // Refresh the displayed `extraamount`
      } 
    } catch (error) {
      console.error('Error updating extraamount:', error);
      setMessage('Error updating extra amount.');
    }
  };

  // Fetch `extraamount` on component mount
  useEffect(() => {
    fetchExtraAmount();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-600 p-6">
      <div className="bg-gray-300 shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Deposit Reward
        </h2>

        {/* Display current extraamount */}
        <div className="mb-4 text-center">
          <strong className="text-lg text-gray-700">
            Current Extra Amount (in %):
          </strong>
          <span className="text-xl font-bold text-teal-600 ml-2">
            {extraAmount !== null ? `${extraAmount}%` : 'Loading...'}
          </span>
        </div>

        {/* Input for updating extraamount */}
        <div className="flex flex-col gap-4">
          <input
            type="tel"
            placeholder="Enter new extra amount"
            value={newExtraAmount}
            onChange={(e) => setNewExtraAmount(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            onClick={updateExtraAmount}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-lg transition-all"
          >
            Update Extra Amount
          </button>
        </div>

        {/* Message for success or error */}
        {message && (
          <div
            className={`mt-4 text-center font-semibold ${
              message.includes('Error') ? 'text-red-500' : 'text-green-500'
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default DepositReward;
