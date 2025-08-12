import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import SummaryApi from "../common/AdminSummaryApi";

const Members = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");
  const [editData, setEditData] = useState({}); // Store edited data
  const [editMode, setEditMode] = useState(null); // Track which member is in edit mode
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  // Handle "Save" functionality
  // const updateData = async (id) => {
  //   try {
  //     await axios({
  //       ...SummaryApi.EditEarningRewards,
  //       url: SummaryApi.EditEarningRewards.url.replace(':id', id),
  //       data: editData[id],
  //     });
  //     setEditMode(null);
  //     setData((prevData) =>
  //       prevData.map((item) => (item._id === id ? editData[id] : item))
  //     );
  //     setEditData({}); // Reset editData
  //   } catch (error) {
  //     console.error('Error updating form:', error);
  //   }
  // };
  const updateData = async (id) => {
    try {
      // Add password field to edit data
      const updatedData = { ...editData[id], password: editData[id].password };

      await axios({
        ...SummaryApi.EditEarningRewards,
        url: SummaryApi.EditEarningRewards.url.replace(":id", id),
        data: updatedData,
      });

      setEditMode(null);
      setData((prevData) =>
        prevData.map((item) => (item._id === id ? updatedData : item))
      );
      setEditData({}); // Reset editData
    } catch (error) {
      console.error("Error updating form:", error);
    }
  };

  const toggleEditMode = (id) => {
    setEditMode(id);
    const selectedData = data.find((data) => data._id === id);
    setEditData({ [id]: selectedData });
  };

  const fetchMemberData = async () => {
    try {
      const response = await axios.get(SummaryApi.getAllusers.url);
      setData(response.data); // Update state with fetched data
    } catch (error) {
      setError("Error fetching members data");
      console.error("Error fetching member data:", error);
    }
  };

  useEffect(() => {
    fetchMemberData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter data based on search query, handling undefined or missing name fields
  const filteredData = data.filter((member) => {
    const name = member.name ? member.name.toLowerCase() : "";
    const number = member.number ? member.number : "";
    return (
      name.includes(searchQuery.toLowerCase()) || number.includes(searchQuery)
    );
  });

  const handleInputChange = (e, memberId) => {
    setEditData({
      ...editData,
      [memberId]: {
        ...editData[memberId],
        [e.target.name]: e.target.value,
      },
    });
  };

  // delete the data
  const deleteData = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this member?"
    );

    if (!confirmed) {
      return; // If user cancels, do nothing
    }
    try {
      await axios({
        ...SummaryApi.DeleteUserData,
        url: SummaryApi.DeleteUserData.url.replace(":id", id),
      });
      setData(data.filter((data) => data._id !== id));
    } catch (error) {
      console.error("Error deleting form:", error);
    }
  };

  // next and previou pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  const handleNext = () => {
    if (currentPage < Math.ceil(filteredData.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="min-h-screen p-4 mt-0 bg-gray-600 ">
      {/* Page Header */}
      <h1 className="mt-10 mb-4 text-2xl font-semibold text-">Members List</h1>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter The Name or Number You Want To Search"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full p-2 border border-gray-300 rounded bg-gray-200"
        />
      </div>

      {/* Error Message */}
      {error && <div className="text-red-500 mb-4">{error}</div>}

      {/* Members Records Table */}
      <div className="p-4 bg-gray-200 rounded shadow-md">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">
          Recharge List
        </h2>
        <div className="overflow-auto">
          <table className="min-w-full bg-gray-200">
            <thead>
              <tr>
                <th className="px-4  py-2 font-medium text-left text-gray-600 border-b border-teal-600">
                  S_No
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-600 border-b border-teal-600">
                  Use Id
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-600 border-b border-teal-600">
                  Referral Code
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-600 border-b border-teal-600">
                  Name
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-600 border-b border-teal-600">
                  Number
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-600 border-b border-teal-600">
                  Total Deposit Amount
                </th>
                {/* <th className="px-4 py-2 font-medium text-left text-gray-600 border-b border-teal-600">
                Recieved Package Interest
                </th> */}
                <th className="px-4 py-2 font-medium text-left text-gray-600 border-b border-teal-600">
                  Password
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-600 border-b border-teal-600">
                  Parent_ID
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-600 border-b border-teal-600">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((member, index) => (
                <tr key={member._id}>
                  <td className="px-4 py-2 border-b border-teal-600">
                    {startIndex + index + 1}
                  </td>
                  <td className="px-4 py-2 border-b border-teal-600">
                    {member.u_id}
                  </td>
                  <td className="px-4 py-2 border-b border-teal-600">
                    {member.referralCode}
                  </td>
                  <td className="px-4 py-2 border-b border-teal-600">
                    {editMode === member._id ? (
                      <input
                        type="text"
                        value={editData[member._id]?.name || ""}
                        name="name"
                        onChange={(e) => handleInputChange(e, member._id)}
                        className="border rounded p-1 w-full"
                      />
                    ) : (
                      member.name
                    )}
                  </td>
                  <td className="px-4 py-2 border-b border-teal-600">
                    {editMode === member._id ? (
                      <input
                        type="number"
                        value={editData[member._id]?.phone || ""}
                        name="phone"
                        onChange={(e) => handleInputChange(e, member._id)}
                        className="border rounded p-1 w-full"
                      />
                    ) : (
                      member.phone
                    )}
                  </td>
                  <td className="px-4 py-2 border-b border-teal-600">
                    {editMode === member._id ? (
                      <input
                        type="number"
                        value={editData[member._id]?.totalBalance || ""}
                        name="totalBalance"
                        onChange={(e) => handleInputChange(e, member._id)}
                        className="border rounded p-1 w-full"
                      />
                    ) : (
                      member.totalBalance
                    )}
                  </td>
                  {/* <td className="px-4 py-2 border-b border-teal-600">
                    {editMode === member._id ? (
                      <input
                        type="number"
                        value={editData[member._id]?.investedEarnings || ''}
                        name="investedEarnings"
                        onChange={(e) => handleInputChange(e, member._id)}
                        className="border rounded p-1 w-full"
                      />
                    ) : (
                      member.investedEarnings
                    )}
                  </td> */}
                  <td className="px-4 py-2 border-b border-teal-600">
                    {editMode === member._id ? (
                      <input
                        type="password"
                        value={editData[member._id]?.password || ""}
                        name="password"
                        onChange={(e) => handleInputChange(e, member._id)}
                        className="border rounded p-1 w-full"
                      />
                    ) : (
                      "******" // Always show masked password in the table view
                    )}
                  </td>

                  <td className="px-4 py-2 border-b border-teal-600">
                    {member.p_id}
                  </td>
                  <td className="py-2 px-4">
                    {editMode === member._id ? (
                      <>
                        <button
                          onClick={() => updateData(member._id)}
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => {
                            setEditMode(null);
                            setEditData({});
                          }}
                          className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-700"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <div className="flex gap-2">
                        <button
                          onClick={() => toggleEditMode(member._id)}
                          className="bg-blue-500 text-white p-1 rounded hover:bg-blue-700"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => deleteData(member._id)}
                          className="bg-red-500 text-white p-1 rounded hover:bg-red-700"
                        >
                          <FaTrashAlt />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination Controls */}
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="self-center">
            Page {currentPage} of{" "}
            {Math.ceil(filteredData.length / itemsPerPage)}
          </span>
          <button
            onClick={handleNext}
            disabled={
              currentPage === Math.ceil(filteredData.length / itemsPerPage)
            }
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Members;
