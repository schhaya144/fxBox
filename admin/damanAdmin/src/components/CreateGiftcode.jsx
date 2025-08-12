import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SummaryApi from '../common/AdminSummaryApi';
import { MdDeleteOutline } from 'react-icons/md';

function CreateGiftcode() {
  const [formData, setFormData] = useState({
    giftcodeAmount: '',
    noOfUsers: '',
  });

  const [giftData, setGiftData] = useState([]);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(SummaryApi.giftcode.url, {
        method: SummaryApi.giftcode.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage({ type: 'success', text: 'Giftcode created successfully!' });
        setFormData({ giftcodeAmount: '', noOfUsers: '' });
        fetchGiftData();
      } else {
        setMessage({
          type: 'error',
          text: result.message || 'Something went wrong!',
        });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to connect to the server.' });
    }
  };

  const fetchGiftData = async () => {
    try {
      const response = await axios.get(SummaryApi.GetGiftcode.url); // Correct API endpoint
      setGiftData(response.data);
    } catch (error) {
      console.error('Error fetching gift code data:', error);
    }
  };

  useEffect(() => {
    fetchGiftData();
  }, []);

  // delete data
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        SummaryApi.deleteGiftcode.url.replace("id",id),
        {
          method: 'DELETE',
        }
      );
      if (response.ok) {
        setMessage({ type: 'success', text: 'Giftcode deleted successfully!' });
        fetchGiftData();
      } else {
        setMessage({
          type: 'error',
          text: 'Failed to delete the gift code.',
        });
      }
    } catch (error) {
      console.error('Error deleting gift code:', error);
    }
  };
  return (
    <div className="min-h-screen p-4 bg-gray-200">
      {/* Header */}
      <h2 className="mt-10 mb-6 text-2xl font-semibold">Giftcode</h2>

      {/* Form Section */}
      <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div>
              <label className="block mb-1 text-base font-semibold text-gray-800">
                Giftcode Amount
              </label>
              <input
                type="number"
                name="giftcodeAmount"
                placeholder="Enter the amount"
                value={formData.giftcodeAmount}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-base font-semibold text-gray-800">
                Number of Users
              </label>
              <input
                type="number"
                name="noOfUsers"
                placeholder="Enter the number of users"
                value={formData.noOfUsers}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
          >
            Create
          </button>
        </form>

        {/* Display Message */}
        {message && (
          <p
            className={`mt-4 text-center text-lg ${
              message.type === 'success' ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {message.text}
          </p>
        )}
      </div>

      {/* Table Section */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <p className="mb-4 font-semibold text-gray-800">Gift codes created</p>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="pt-10 text-center bg-gray-200">
                <th className="p-3 border-b">ID</th>
                <th className="p-3 border-b">Creator</th>
                <th className="p-3 border-b">Giftcode Amount</th>
                <th className="p-3 border-b">Users</th>
                <th className="p-3 border-b">Already Used</th>
                <th className="p-3 border-b">Time</th>
                <th className="p-3 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {giftData.length > 0 ? (
                giftData.map((gift, i) => (
                  <tr
                    key={gift.giftcodeId}
                    className="text-center odd:bg-gray-100 even:bg-white"
                  >
                    <td className="p-3 border-b">{i + 1}</td>
                    <td className="p-3 border-b">{gift.giftcodeId}</td>
                    {/* <td className="p-3 text-blue-500 border-b">{gift.creator}</td> */}
                    <td className="p-3 text-red-600 border-b">
                      {gift.giftcodeAmount}
                    </td>
                    <td className="p-3 border-b">{gift.noOfUsers}</td>
                    <td className="p-3 border-b">
                      <span
                        className={`px-2 py-1 text-sm font-medium text-white rounded-lg ${
                          gift.isUsed ? 'bg-green-500' : 'bg-yellow-400'
                        }`}
                      >
                        {gift.isUsed ? 'Used' : 'Not Used'}
                      </span>
                    </td>
                    <td className="p-3 border-b">{gift.createdAt}</td>
                    <td className="p-3 border-b">
                      <button
                        onClick={() => handleDelete(gift._id)}
                        className="px-2 py-1 text-white bg-red-500 rounded-lg hover:bg-red-600"
                      >
                        <MdDeleteOutline />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="p-3 text-center text-gray-500 border-b"
                  >
                    No gift codes found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CreateGiftcode;
