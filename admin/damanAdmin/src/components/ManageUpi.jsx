import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import SummaryApi from '../common/AdminSummaryApi';
const baseUrl = import.meta.env.VITE_BACKEND_URL;
const ManageUPI = () => {
  const [upiData, setUpiData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [newUpi, setNewUpi] = useState({
    title: '',
    upi_id: '',
    qr_image: null,
    notes: '',
    status: 'true',
  });

  useEffect(() => {
    fetchUPIData();
  }, []);

  const fetchUPIData = async () => {
    try {
      const response = await axios.get(SummaryApi.getAllUPIs.url);
      setUpiData(response.data);
    } catch (error) {
      console.error('Error fetching UPI data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUpi((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setNewUpi((prevData) => ({
      ...prevData,
      qr_image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedId) return;

    const formData = new FormData();
    formData.append('title', newUpi.title);
    formData.append('upi_id', newUpi.upi_id);
    formData.append('qr_image', newUpi.qr_image);
    formData.append('notes', newUpi.notes);
    formData.append('status', newUpi.status);

    try {
      await axios.put(
        `${baseUrl}/api/updateUPI/${selectedId}`,
        formData
      );
      fetchUPIData();
      resetForm();
    } catch (error) {
      console.error('Error updating UPI data:', error);
    }
  };

  const handleEdit = (upi) => {
    setNewUpi({
      title: upi.title,
      upi_id: upi.upi_id,
      notes: upi.notes,
      status: upi.status ? 'true' : 'false',
    });
    setSelectedId(upi._id);
  };

  const resetForm = () => {
    setNewUpi({
      title: '',
      upi_id: '',
      qr_image: null,
      notes: '',
      status: 'true',
    });
    setSelectedId(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-white m-5 text-3xl">Manage Wallet Address</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">
            {selectedId ? 'Edit UPI' : 'Select UPI to Edit'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="title" className="font-medium mb-1">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="border rounded-lg p-2"
                placeholder="Title"
                value={newUpi.title}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="upi_id" className="font-medium mb-1">
                Wallet  Deposit Addres
              </label>
              <input
                type="text"
                name="upi_id"
                id="upi_id"
                className="border rounded-lg p-2"
                placeholder="Enter UPI id"
                value={newUpi.upi_id}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="qr_image" className="font-medium mb-1">
                QR Code
              </label>
              <input
                type="file"
                name="qr_image"
                id="qr_image"
                className="border rounded-lg p-2"
                onChange={handleFileChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="notes" className="font-medium mb-1">
                Short Notes
              </label>
              <textarea
                name="notes"
                id="notes"
                className="border rounded-lg p-2"
                placeholder="Enter Note Here"
                value={newUpi.notes}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex flex-col">
              <label htmlFor="status" className="font-medium mb-1">
                Status
              </label>
              <select
                name="status"
                id="status"
                className="border rounded-lg p-2"
                value={newUpi.status}
                onChange={(e) =>
                  setNewUpi((prevData) => ({
                    ...prevData,
                    status: e.target.value === 'true',
                  }))
                }
              >
                <option value="true">Enable</option>
                <option value="false">Disable</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-fxbt-gradient text-white rounded-lg py-2 px-4 hover:bg-purple-600"
            >
              Update Wallet Address
            </button>
          </form>
        </div>

        <div className="col-span-2 bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">All Payment Method</h3>
          <table className="w-full border-collapse border border-gray-200 ">
            <thead>
              <tr>
                <th className="border border-gray-200 p-2 ">S.no</th>
                <th className="border border-gray-200 p-2">Title</th>
                <th className="border border-gray-200 p-2">Wallet Address</th>
                <th className="border border-gray-200 p-2">QR</th>
                <th className="border border-gray-200 p-2">Status</th>
                <th className="border border-gray-200 p-2">Actions</th>
              </tr>
            </thead>
            {/* updated qr image  */}
            <tbody>
              {upiData.slice(0, 6).map((upi, index) => (
                <tr key={upi._id}>
                  <td className="border border-gray-200 p-2">{index + 1}</td>
                  <td className="border border-gray-200 p-2">{upi.title}</td>
                  <td className="border border-gray-200 p-2">{upi.upi_id}</td>
                  <td className="border border-gray-200 p-1">
                    <img
                      src={upi.qr_image}
                      alt="QR"
                      className="w-16 h-16"
                    />
                  </td>
                  <td className="border border-gray-200 p-2">
                    {upi.status === true ? 'Enabled' : 'Disabled'}
                  </td>
                  <td className="border-t border-gray-200 pt-2 ps-7">
                    <FaRegEdit
                      className="cursor-pointer bg-blue-500 text-white font-bold px-1 text-2xl"
                      onClick={() => handleEdit(upi)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUPI;
