import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CopyIcon2 from "../../../Svg/CopyIcon2";
import axios from "axios";
import SummaryApi from "../../../common/SummaryApi.jsx";
import { GiCheckMark } from "react-icons/gi";

const DepositHistoryTable = () => {
  const [rechargeData, setRechargeData] = useState([]);
  const [error, setError] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const handleCopy = (transactionID) => {
    navigator.clipboard
      .writeText(transactionID)
      .then(() => {
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 2000);
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  useEffect(() => {
    const fetchRechargeData = async () => {
      try {
        const response = await axios.get(SummaryApi.GetDepositHistody.url, {
          withCredentials: true,
        });
  
        // Sort data by depositTime in descending order
        const sortedData = response.data.data.sort((a, b) => 
          new Date(b.depositTime) - new Date(a.depositTime)
        );
  
        setRechargeData(sortedData);  // Set the sorted data
  
      } catch (err) {
        setError(
          err.response?.data?.message || "Failed to fetch recharge data"
        );
      }
    };
    fetchRechargeData();
  }, []);
  
  const getStatusClass = (status) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return "text-orange-500";
      case "approved":
        return "text-green-500";
      case "rejected":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="min-h-screen p-4">
      <div className="container mx-auto">
        {rechargeData.length > 0 ? (
          rechargeData.map((item, index) => (
            <div
              key={index}
              className="mb-6 overflow-hidden bg-white rounded-lg shadow-lg glowing-border-white"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between px-6 py-4 text-white bg-primary">
                <label className="text-sm">Order Number :</label>
                <span className="ml-2 text-sm font-semibold">{item.transactionID}</span>

                {/* <span
                    className="ml-4 cursor-pointer"
                    onClick={() => handleCopy(item.transactionID)}
                  >
                    <CopyIcon2 />
                  </span> */}
              </div>

              {/* Card Content */}
              <div className="px-4 py-2 text-sm text-gray-600">
                {/* <div className="mb-4">
                  <label className="text-gray-500">Phone:</label>
                  <span className="ml-2">{item.phone}</span>
                </div> */}
                <div className="flex justify-between mb-4">
                  <label className="text-gray-500">Amount:</label>
                  <span className="ml-2 font-semibold text-red-500">
                    ₹ {item.selectedAmount}
                  </span>
                </div>

                <div className="flex justify-between mb-4">
                  <span className="text-sm text-gray-500">Deposit</span>
                  <span className={`text-sm font-bold ${getStatusClass(item.status)}`}>
                    {item.status}
                  </span>
                </div>
                <div className="flex justify-between mb-4">
                  <label className="text-gray-500">Deposit Time:</label>
                  <span className="ml-2">
                    {new Date(item.depositTime).toLocaleString()}
                  </span>
                </div>

                <div className="text-center">
                  <Link
                    to="/submitUTR"
                    className="inline-block w-full py-2 text-sm text-white rounded-md bg-primary"
                  >
                    Submit UTR
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="py-4 text-center text-gray-500">
            No deposit history available.
          </div>
        )}
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div
          className="fixed px-6 py-5 text-white transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-lg shadow bg-opacity-80 top-1/2 left-1/2"
          style={{ zIndex: 9999 }}
        >
          <div className="flex flex-col items-center">
            <GiCheckMark className="text-3xl text-green-500" />
            <span className="mt-2">Copy Successful</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DepositHistoryTable;
