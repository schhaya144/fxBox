import React, { useState } from 'react';
import axios from 'axios';
import SummaryApi from '../common/AdminSummaryApi';
const baseUrl = import.meta.env.VITE_BACKEND_URL;

const UpdatePackageModal = ({ pkg, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    packageTitle: pkg.packageTitle,
    packageAmount: pkg.packageAmount,
    packageInterest: pkg.packageInterest,
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use the API from SummaryApi to send the PUT request
      await axios({
        method: SummaryApi.updatePackage.method,
        url: SummaryApi.updatePackage.url.replace(':id', pkg._id),  // Replace the :id placeholder with the package id
        data: formData,  // Send the formData as the payload
      });
  
      // After the update, call the onUpdate function to refresh the package list
      onUpdate();
  
      // Close the modal after the update
      onClose();
    } catch (error) {
      console.error('Failed to update package:', error);
    }
  };
  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h3 className="text-xl font-semibold mb-4">Update Package</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              value={formData.packageTitle}
              onChange={(e) => setFormData({ ...formData, packageTitle: e.target.value })}
              className="w-full border px-4 py-2 rounded"
              placeholder="Package Title"
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              value={formData.packageAmount}
              onChange={(e) => setFormData({ ...formData, packageAmount: e.target.value })}
              className="w-full border px-4 py-2 rounded"
              placeholder="Package Amount"
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              value={formData.packageInterest}
              onChange={(e) => setFormData({ ...formData, packageInterest: e.target.value })}
              className="w-full border px-4 py-2 rounded"
              placeholder="Package Interest"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded mr-2"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePackageModal;
