import React, { useState, useEffect } from "react";
import WithdrawalCard from "./WithdrawalCard";
import axios from "axios";
import SummaryApi from "../../../common/SummaryApi.jsx";

const WithdrawHistoryTable = () => {
  const [rechargeData, setRechargeData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRechargeData = async () => {
      try {
        const response = await axios.get(SummaryApi.GetWithdrawHistory.url, {
          withCredentials: true,
        });

        console.log(response.data);

        const sortedData = response.data.data.sort(
          (a, b) => new Date(b.withdrawTime) - new Date(a.withdrawTime)
        );

        setRechargeData(sortedData);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch recharge data");
      }
    };

    fetchRechargeData();
  }, []);

  const approved = rechargeData.filter(item => item.status.toLowerCase() === "approved");
  const pending = rechargeData.filter(item => item.status.toLowerCase() === "pending");
  const rejected = rechargeData.filter(item => item.status.toLowerCase() === "rejected");

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
    <div className="p-4 min-h-screen">
      <div className="container mx-auto">
        {/* Approved Withdrawals */}
        {approved.length > 0 && (
          <div className="my-4">
            <h3 className="mb-2 text-lg font-semibold text-primary">Approved Withdrawals</h3>
            <div className="grid grid-cols-1 gap-4">
              {approved.map((withdrawal) => (
                <div
                  key={withdrawal._id}
                  className="  "
                >
                  <WithdrawalCard
                    withdrawal={withdrawal}
                    statusClass={getStatusClass(withdrawal.status)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pending Withdrawals */}
        {pending.length > 0 && (
          <div className="my-4">
            <h3 className="mb-2 text-lg font-semibold text-primary">Pending Withdrawals</h3>
            <div className="grid grid-cols-1 gap-4">
              {pending.map((withdrawal) => (
                <div
                  key={withdrawal._id}
                  className=""
                >
                  <WithdrawalCard
                    withdrawal={withdrawal}
                    statusClass={getStatusClass(withdrawal.status)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Rejected Withdrawals */}
        {rejected.length > 0 && (
          <div className="my-4">
            <h3 className="mb-2 text-lg font-semibold text-primary">Rejected Withdrawals</h3>
            <div className="grid grid-cols-1 gap-4">
              {rejected.map((withdrawal) => (
                <div
                  key={withdrawal._id}
                  className=""
                >
                  <WithdrawalCard
                    withdrawal={withdrawal}
                    statusClass={getStatusClass(withdrawal.status)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No Withdrawals Found */}
        {approved.length === 0 && pending.length === 0 && rejected.length === 0 && (
          <div className="text-center text-gray-500 py-4">
            No withdrawal requests found.
          </div>
        )}
      </div>
    </div>
  );
};

export default WithdrawHistoryTable;
