import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SummaryApi from '../common/AdminSummaryApi';

const WithdrawalApproved = () => {
  const [withdrawals, setWithdrawals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchWithdrawals = async () => {
      try {
        const response = await axios.get(SummaryApi.getProcessedWithdrawals.url);
        // Reverse the array to display the latest withdrawal first
        setWithdrawals(response.data.reverse());
      } catch (error) {
        console.error('Error fetching processed withdrawals:', error);
      }
    };
    fetchWithdrawals();
  }, []);

  // Calculate start and end indexes for slicing data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedWithdrawals = withdrawals.slice(startIndex, endIndex);

  // Handlers for page navigation
  const handleNext = () => {
    if (currentPage < Math.ceil(withdrawals.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen p-4 bg-gray-600">
      <h1 className="mt-10 mb-4 text-2xl font-semibold text-black">
        Processed Withdrawal Requests
      </h1>

      <div className="p-4 bg-gray-200 rounded shadow-md">
        <div className="overflow-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 font-bold text-center border-b border-gray-300">S.no</th>
                <th className="px-4 py-2 font-bold text-center border-b border-gray-300">U_Id</th>
                <th className="px-4 py-2 font-bold text-center border-b border-gray-300">Phone</th>
                <th className="px-4 py-2 font-bold text-center border-b border-gray-300">Amount</th>
                <th className="px-4 py-2 font-bold text-center border-b border-gray-300">Date</th>
                <th className="px-4 py-2 font-bold text-center border-b border-gray-300">Bank Card/UPI</th>
                <th className="px-4 py-2 font-bold text-center border-b border-gray-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {paginatedWithdrawals.length > 0 ? (
                paginatedWithdrawals.map((record, index) => (
                  <tr
                    key={record._id}
                    className={`text-center ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <td className="px-4 py-2 border-b border-gray-300">
                      {startIndex + index + 1}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">{record.u_id}</td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      {record.userDetails?.phone || 'N/A'}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">{record.withdrawAmount}</td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      {new Date(record.withdrawTime).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      {record.withdrawMode === 'upi' ? record.upiId : 'Bank Card'}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      <span
                        className={`font-semibold ${
                          record.status === 'Approved'
                            ? 'text-green-500'
                            : record.status === 'Rejected'
                            ? 'text-red-500'
                            : 'text-gray-600'
                        }`}
                      >
                        {record.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="px-4 py-2 text-center">
                    No processed requests found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`px-4 py-2 text-white bg-blue-500 rounded ${
              currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
            }`}
          >
            Previous
          </button>
          <span className="self-center">
            Page {currentPage} of {Math.ceil(withdrawals.length / itemsPerPage)}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === Math.ceil(withdrawals.length / itemsPerPage)}
            className={`px-4 py-2 text-white bg-blue-500 rounded ${
              currentPage === Math.ceil(withdrawals.length / itemsPerPage)
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-blue-600'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalApproved;
