import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdatePackageModal from './UpdatePackageModal';
import SummaryApi from '../common/AdminSummaryApi';
const baseUrl = import.meta.env.VITE_BACKEND_URL;

const Packages = () => {
  const [formData, setFormData] = useState({
    packageTitle: '',
    packageAmount: '',
    packageInterest: '',
    PackMaturity: '',
  });
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [message, setMessage] = useState('');

  // Update this URL as per your backend setup

  // Fetch all packages
  const fetchPackages = async () => {
    try {
      const response = await axios.get(SummaryApi.GetPackages.url);
      setPackages(response.data);
    } catch (error) {
      console.error('Error fetching packages:', error);
    }
  };

  // Handle form submission to create a package
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(SummaryApi.createPackage.url, formData);
      setMessage('Package created successfully!');
      setFormData({ packageTitle: '', packageAmount: '', packageInterest: '' });
      fetchPackages();
    } catch (error) {
      setMessage('Failed to create package.');
      console.error(error);
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(SummaryApi.deletePackage.url.replace(':id',id));
      setMessage('Package deleted successfully!');
      fetchPackages();
    } catch (error) {
      setMessage('Failed to delete package.');
      console.error(error);
    }
  };

  // Open update modal
  const handleEdit = (pkg) => {
    setSelectedPackage(pkg);
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-6">Manage Packages</h2>
      
      {/* Form */}
      <div className="p-6 bg-white shadow rounded mb-6">
        <h3 className="text-xl font-semibold mb-4">Create Package</h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <input
              type="text"
              name="packageTitle"
              value={formData.packageTitle}
              onChange={(e) => setFormData({ ...formData, packageTitle: e.target.value })}
              placeholder="Enter Package Title"
              className="border px-4 py-2 rounded w-full"
            />
            <input
              type="number"
              name="packageAmount"
              value={formData.packageAmount}
              onChange={(e) => setFormData({ ...formData, packageAmount: e.target.value })}
              placeholder="Enter Package Amount"
              className="border px-4 py-2 rounded w-full"
            />
            <input
              type="number"
              name="packageInterest"
              value={formData.packageInterest}
              onChange={(e) => setFormData({ ...formData, packageInterest: e.target.value })}
              placeholder="Enter Package Interest"
              className="border px-4 py-2 rounded w-full"
            />
            <input
              type="number"
              name="PackMaturity"
              value={formData.PackMaturity}
              onChange={(e) => setFormData({ ...formData, PackMaturity: e.target.value })}
              placeholder="Enter Package Maturity Days"
              className="border px-4 py-2 rounded w-full"
            />
          </div>
          <button type="submit" className="px-4 py-2 bg-cyan-500 text-white rounded w-full">Create</button>
        </form>
      </div>

      {/* Package List */}
      <div className="p-6 bg-white shadow rounded">
        <h3 className="text-xl font-semibold mb-4">Package List</h3>
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">S.No.</th>
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Amount</th>
              <th className="p-2 border">Interest</th>
              <th className="p-2 border">Maturity Days</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg, i) => (
              <tr key={pkg._id} className="text-center">
                <td className="p-2 border">{i+1}</td>
                <td className="p-2 border">{pkg.packageTitle}</td>
                <td className="p-2 border">{pkg.packageAmount}</td>
                <td className="p-2 border">{pkg.packageInterest}</td>
                <td className="p-2 border">{pkg.PackMaturity}</td>
                <td className="p-2 border">
                  <button
                    onClick={() => handleEdit(pkg)}
                    className="px-2 py-1 bg-yellow-400 text-white rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(pkg._id)}
                    className="px-2 py-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update Modal */}
      {selectedPackage && (
        <UpdatePackageModal
          pkg={selectedPackage}
          onClose={() => setSelectedPackage(null)}
          onUpdate={fetchPackages}
        />
      )}
    </div>
  );
};

export default Packages;
