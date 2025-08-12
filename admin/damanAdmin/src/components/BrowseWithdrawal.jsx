import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SummaryApi from '../common/AdminSummaryApi';

const BrowseWithdrawal = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [withdrawals, setWithdrawals] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // Fetch data on initial load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          SummaryApi.browsWithdrawGet.url
        );
        const sortedData = response.data.sort(
          (a, b) => new Date(b.withdrawTime) - new Date(a.withdrawTime)
        );
        setWithdrawals(sortedData); // Save sorted withdrawals
        setFilteredData(
          sortedData.filter((record) => record.status === 'Pending')
        ); // Only show pending withdrawals
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // Re-filter withdrawals when searchQuery or withdrawals change
  useEffect(() => {
    const filtered = withdrawals
      .filter((record) => record.status === 'Pending') // Filter pending only
      .filter((record) =>
        record.userDetails?.phone?.toString().includes(searchQuery)
      );
    setFilteredData(filtered);
  }, [searchQuery, withdrawals]);

  const handleApprove = async (id) => {
    try {
      await axios.put(SummaryApi.browsWithdrawApprove.url.replace(":id",id));
      setWithdrawals((prevWithdrawals) => {
        return prevWithdrawals.map((record) =>
          record._id === id ? { ...record, status: 'Approved' } : record
        );
      });
      setFilteredData((prevFilteredData) =>
        prevFilteredData.filter((record) => record.status === 'Pending')
      );
    } catch (error) {
      console.error('Error approving transaction:', error);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.put(SummaryApi.browsWithdrawReject.url.replace(":id",id));
      setWithdrawals((prevWithdrawals) => {
        return prevWithdrawals.map((record) =>
          record._id === id ? { ...record, status: 'Rejected' } : record
        );
      });
      setFilteredData((prevFilteredData) =>
        prevFilteredData.filter((record) => record.status === 'Pending')
      );
    } catch (error) {
      console.error('Error rejecting transaction:', error);
    }
  };

  return (
    <div className="min-h-screen p-4 mt-0 bg-gray-600">
      <h1 className="mt-10 mb-4 text-2xl font-semibold text-black">
        Browse Withdrawal List
      </h1>

      <div className="p-4 bg-gray-200 rounded shadow-md">
        <div className="overflow-x-auto">
          {' '}
          {/* Add this for horizontal scroll */}
          <table className="min-w-full  border-collapse">
            <thead className=''>
              <tr>
                <th className="px-4 py-2 font-bold text-center border-b border-gray-300">
                  S.no
                </th>
                <th className="px-4 py-2 font-bold text-center border-b border-gray-300">
                  U_Id
                </th>
                <th className="px-4 py-2 font-bold text-center border-b border-gray-300">
                  Name
                </th>
               
                <th className="px-4 py-2 font-bold text-center border-b border-gray-300">
                  Phone
                </th>
                <th className="px-4 py-2 font-bold text-center border-b border-gray-300">
                  Amount
                </th>
                <th className="px-4 py-2 font-bold text-center border-b border-gray-300">
                  Bank
                </th>
                <th className="px-4 py-2 font-bold text-center border-b border-gray-300">
                  Account
                </th>
                <th className="px-4 py-2 font-bold text-center border-b border-gray-300">
                  IFSC Code
                </th>
                <th className="px-4 py-2 font-bold text-center border-b border-gray-300">
                  Date
                </th>
                <th className="px-4 py-2 font-bold text-center border-b border-gray-300">
                  Bank Card/UPI
                </th>
                <th className="px-4 py-2 font-bold text-center border-b border-gray-300">
                  Status
                </th>
                <th className="px-4 py-2 font-bold text-center border-b border-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((record, index) => (
                  <tr
                    key={record._id}
                    className={`text-center ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <td className="px-4 py-2 border-b border-gray-300">
                      {index + 1}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      {record.u_id}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      {record.userDetails?.name || 'N/A'}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      {record.userDetails?.phone || 'N/A'}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      {record.withdrawAmount}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      {record.bankDetails?.bank || 'N/A'}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      {record.bankDetails?.accountNumber || 'N/A'}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      {record.bankDetails?.ifscCode || 'N/A'}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      {new Date(record.withdrawTime).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      {record.withdrawMode === 'upi'
                        ? record.upiId
                        : 'Bank Card'}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      {record.status}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          className="px-3 py-1 font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600"
                          onClick={() => handleApprove(record._id)}
                          disabled={record.status === 'Approved'}
                        >
                          Approve 
                        </button>
                        <button
                          className="px-3 py-1 font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600"
                          onClick={() => handleReject(record._id)}
                          disabled={record.status === 'Rejected'}
                        >
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10" className="px-4 py-2 text-center">
                    No results found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BrowseWithdrawal;
