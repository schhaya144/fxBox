import React, { useState, useEffect } from "react";
import axios from "axios";
import SummaryApi from "../common/AdminSummaryApi";

const UserWallet = () => {
  const [data, setData] = useState([]); 
  const [error, setError] = useState("");
  const [editingRow, setEditingRow] = useState(null); 
  const [editedValue, setEditedValue] = useState(""); 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; 

  // Fetch user data
  const fetchMemberData = async () => {
    try {
      const response = await axios.get(SummaryApi.getAllusers.url);
      setData(response.data);
    } catch (error) {
      setError("Error fetching members data");
      console.error("Error fetching member data:", error);
    }
  };

  const handleSave = async (id) => {
    try {
      await axios.put(SummaryApi.EditEarningRewards.url.replace(":id", id), {
        investedEarnings: editedValue,
      });
      alert("Invested earnings updated successfully!");
      fetchMemberData(); 
      setEditingRow(null); 
    } catch (error) {
      console.error("Error updating invested earnings:", error);
      alert("Failed to update invested earnings.");
    }
  };

  const handleCancel = () => {
    setEditingRow(null);
    setEditedValue("");
  };

  const handleEdit = (id, currentValue) => {
    setEditingRow(id);
    setEditedValue(currentValue);
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) =>
      Math.min(prev + 1, Math.ceil(data.length / itemsPerPage))
    );
  };

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  };

  useEffect(() => {
    fetchMemberData();
  }, []);

  return (
    <div>
      <div className="p-6 bg-white shadow rounded mt-10">
        <h3 className="text-xl font-semibold mb-4">Wallet Summary</h3>
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">S.No.</th>
              <th className="p-2 border">U_ID</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Number</th>
              <th className="p-2 border">Received Package Interest</th>
              {/* <th className="p-2 border">Recieved Deposit Reward</th> */}
              <th className="p-2 border">Received Referral Commission</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {getCurrentPageData().map((pkg, i) => (
              <tr key={pkg._id} className="text-center">
                <td className="p-2 border">{(currentPage - 1) * itemsPerPage + i + 1}</td>
                <td className="p-2 border">{pkg.u_id}</td>
                <td className="p-2 border">{pkg.name}</td>
                <td className="p-2 border">{pkg.phone}</td>
                <td className="p-2 border">
                  {editingRow === pkg._id ? (
                    <input
                      type="number"
                      value={editedValue}
                      onChange={(e) => setEditedValue(Number(e.target.value))}
                      className="border rounded p-1 w-full"
                    />
                  ) : (
                    pkg.investedEarnings
                  )}
                </td>
                {/* <td className="p-2 border">{pkg.depositReward}</td> */}
                <td className="p-2 border">{pkg.referralWarning}</td>
                <td className="p-2 border">
                  {editingRow === pkg._id ? (
                    <>
                      <button
                        onClick={() => handleSave(pkg._id)}
                        className="px-2 py-1 bg-green-500 text-white rounded mr-2"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancel}
                        className="px-2 py-1 bg-red-500 text-white rounded"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() =>
                        handleEdit(pkg._id, pkg.investedEarnings)
                      }
                      className="px-2 py-1 bg-yellow-400 text-white rounded"
                    >
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded ${
              currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white"
            }`}
          >
            Previous
          </button>
          <span className="px-4 py-2">
            Page {currentPage} of {Math.ceil(data.length / itemsPerPage)}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
            className={`px-4 py-2 rounded ${
              currentPage === Math.ceil(data.length / itemsPerPage)
                ? "bg-gray-300"
                : "bg-blue-500 text-white"
            }`}
          >
            Next
          </button>
        </div>
      </div>
      {error && <div className="text-red-500 mt-4">{error}</div>}
    </div>
  );
};

export default UserWallet;
