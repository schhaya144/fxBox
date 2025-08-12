import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SummaryApi from '../common/AdminSummaryApi';

const RechargeList = () => {
  const [rechargeData, setRechargeData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Number of items per page

  useEffect(() => {
    const fetchProcessedRecharges = async () => {
      try {
        const response = await axios.get(SummaryApi.processedRecharges.url);
        setRechargeData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching processed recharges:', error);
        setLoading(false);
      }
    };

    fetchProcessedRecharges();
  }, []);

  if (loading) return <div>Loading...</div>;

  // Calculate start and end index of data for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = rechargeData.slice().reverse().slice(startIndex, endIndex);

  // Change Page
  const goToNextPage = () => {
    if (currentPage < Math.ceil(rechargeData.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-h-screen p-4 bg-gray-600">
      {/* Page Header */}
      <h1 className="mt-10 mb-4 text-2xl font-semibold text-black">
        Processed Recharge List
      </h1>

      {/* Recharge Records Table */}
      <div className="p-4 bg-gray-200 rounded shadow-md">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">Recharges</h2>
        <div className="overflow-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-4 py-2 font-medium text-center  border-b">S.no.</th>
                <th className="px-4 py-2 font-medium text-center  border-b">User Id</th>
                <th className="px-4 py-2 font-medium text-center border-b">Number</th>
                <th className="px-4 py-2 font-medium text-center  border-b">Amount</th>
                <th className="px-4 py-2 font-medium text-center  border-b">Transaction Id</th>
                <th className="px-4 py-2 font-medium text-center border-b">Time</th>
                <th className="px-4 py-2 font-medium text-center border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((record, index) => (
                <tr
                  key={record._id}
                  className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                >
                  <td className="px-4 py-2 text-center border-b">{startIndex + index + 1}</td>
                  <td className="px-4 py-2 text-center border-b">{record.u_id}</td>
                  <td className="px-4 py-2 text-center border-b">{record.phone}</td>
                  <td className="px-4 py-2 text-center border-b">{record.selectedAmount}</td>
                  <td className="px-4 py-2 text-center border-b">{record.utr || 'N/A'}</td>
                  <td className="px-4 py-2 text-center border-b">
                    {new Date(record.depositTime).toLocaleString()}
                  </td>
                  <td
                    className={`px-4 py-2 font-semibold text-center border-b ${
                      record.status === 'Approved' ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {record.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-between mt-4">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 ${
              currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Previous
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: Math.ceil(rechargeData.length / itemsPerPage) }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => goToPage(i + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? 'bg-blue-700 text-white'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={goToNextPage}
            disabled={currentPage === Math.ceil(rechargeData.length / itemsPerPage)}
            className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 ${
              currentPage === Math.ceil(rechargeData.length / itemsPerPage)
                ? 'opacity-50 cursor-not-allowed'
                : ''
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default RechargeList;
