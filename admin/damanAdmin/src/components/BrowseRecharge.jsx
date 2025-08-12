import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SummaryApi from '../common/AdminSummaryApi';

const BrowseRecharge = () => {
  const [rechargeData, setRechargeData] = useState([]);
  const [extraAmount, setExtraAmount] = useState(0); // State for extra amount
  const [message, setMessage] = useState(''); // State for error/success messages
  const [loading, setLoading] = useState(true);

  // Function to fetch recharge data
  useEffect(() => {
    const fetchRechargeData = async () => {
      try {
        const response = await axios.get(SummaryApi.recharges.url);
        console.log(response);

        const sortedData = response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        setRechargeData(sortedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recharge data:', error);
        setLoading(false);
      }
    };

    fetchRechargeData();
  }, []);

  // Function to fetch extra amount
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

  // Fetch extra amount on component mount
  useEffect(() => {
    fetchExtraAmount();
  }, []);

  const handleApprove = async (id) => {
    try {
      await axios.put(SummaryApi.rechargesApprove.url.replace(':id', id));
      setRechargeData((prevData) =>
        prevData.filter((record) => record._id !== id)
      );
    } catch (error) {
      console.error('Error approving recharge:', error);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.put(SummaryApi.rechargesReject.url.replace(':id', id));
      setRechargeData((prevData) =>
        prevData.filter((record) => record._id !== id)
      );
    } catch (error) {
      console.error('Error rejecting recharge:', error);
    }
  };

  if (loading) {
    return <div className="mt-10 text-lg text-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen p-6 bg-gray-600">
      <h1 className="mt-4 mb-6 text-3xl font-bold text-black">
        Browse Recharge List
      </h1>
      <div className="mb-4 text-lg text-white">
        Rewarded Amount: <span className="font-bold">{extraAmount}</span>
      </div>
      {message && <div className="mb-4 text-red-500">{message}</div>}

      <div className="overflow-hidden p-4 bg-gray-200 rounded-lg shadow-md">
        <table className="min-w-full border border-collapse bg-gray-200 border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-center border-b border-gray-300">#</th>
              <th className="px-4 py-2 text-center border-b border-gray-300">User Id</th>
              <th className="px-4 py-2 text-center border-b border-gray-300">Number</th>
              <th className="px-4 py-2 text-center border-b border-gray-300">Amount</th>
              <th className="px-4 py-2 text-center border-b border-gray-300">Deposit Reward</th>
              <th className="px-4 py-2 text-center border-b border-gray-300">Transaction Id</th>
              <th className="px-4 py-2 text-center border-b border-gray-300">Status</th>
              <th className="px-4 py-2 text-center border-b border-gray-300">Action</th>
              {/* <th className="px-4 py-2 text-center border-b border-gray-300">Deposit Reward</th> */}
            </tr>
          </thead>
          <tbody>
            {rechargeData
              .filter((record) => record.status === 'Pending')
              .map((record, index) => (
                <tr
                  key={record._id}
                  className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                >
                  <td className="px-4 py-2 text-center border-b border-gray-300">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 text-center border-b border-gray-300">
                    {record.u_id}
                  </td>
                  <td className="px-4 py-2 text-center border-b border-gray-300">
                    {record.phone}
                  </td>
                  <td className="px-4 py-2 text-center border-b border-gray-300">
                    {record.selectedAmount}
                  </td>
                  <td className="px-4 py-2 text-center border-b border-gray-300">
                    {record.rewardedAmount || 'null'} 
                  </td>
                  <td className="px-4 py-2 text-center border-b border-gray-300">
                    {record.utr}
                  </td>
                  <td className="px-4 py-2 text-center border-b border-gray-300">
                    {record.status || 'Pending'}
                  </td>
                  <td className="px-4 py-2 text-center border-b border-gray-300">
                    <button
                      className="px-3 py-1 mr-2 text-center text-white bg-green-500 rounded hover:bg-green-600"
                      onClick={() => handleApprove(record._id)}
                    >
                      Approve
                    </button>
                    <button
                      className="px-3 py-1 text-center text-white bg-red-500 rounded hover:bg-red-600"
                      onClick={() => handleReject(record._id)}
                    >
                      Reject
                    </button>
                  </td>
                 
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseRecharge;
