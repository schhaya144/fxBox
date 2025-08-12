import React from 'react';

const CreatedSalary = () => {
  return (
    <div className="min-h-screen p-4 mt-0 bg-gray-200">
      {/* Page Header */}
      <h1 className="mt-10 mb-4 text-2xl font-semibold text-gray-700">Created Salary Record</h1>

      {/* Salary Creation Form */}
      <div className="p-4 mb-8 bg-white rounded shadow-md">
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-600">Phone Number</label>
            <input
              type="text"
              placeholder="Enter phone number"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-600">Amount</label>
            <input
              type="number"
              placeholder="Enter amount"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-600">Type</label>
            <select className="w-full p-2 border border-gray-300 rounded">
              <option>Select Type</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>

          <button type="submit" className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>

      {/* Salary Records Table */}
      <div className="p-4 bg-white rounded shadow-md">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">Salary Records Table</h2>
        <div className="overflow-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-4 py-2 font-medium text-left text-gray-600 border-b">Number</th>
                <th className="px-4 py-2 font-medium text-left text-gray-600 border-b">Amount</th>
                <th className="px-4 py-2 font-medium text-left text-gray-600 border-b">Type</th>
                <th className="px-4 py-2 font-medium text-left text-gray-600 border-b">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b">9876543210</td>
                <td className="px-4 py-2 border-b">1250</td>
                <td className="px-4 py-2 border-b">Daily</td>
                <td className="px-4 py-2 border-b">12/23/2023, 02:32:04 PM</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">7303014951</td>
                <td className="px-4 py-2 border-b">500</td>
                <td className="px-4 py-2 border-b">Daily</td>
                <td className="px-4 py-2 border-b">12/22/2023, 05:18:40 PM</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">8888888888</td>
                <td className="px-4 py-2 border-b">1234</td>
                <td className="px-4 py-2 border-b">Weekly</td>
                <td className="px-4 py-2 border-b">12/22/2023, 04:55:23 PM</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">1111111111</td>
                <td className="px-4 py-2 border-b">1010</td>
                <td className="px-4 py-2 border-b">Daily</td>
                <td className="px-4 py-2 border-b">12/22/2023, 03:23:18 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreatedSalary;
