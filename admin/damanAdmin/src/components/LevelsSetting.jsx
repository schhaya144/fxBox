


import React, { useState, useEffect } from "react";
import axios from "axios";
import SummaryApi from "../common/AdminSummaryApi";

const LevelsSetting = () => {
  const [settings, setSettings] = useState({
    level1Percentage: 0,
    level2Percentage: 0,
    level3Percentage: 0,
  });
  const [loading, setLoading] = useState({
    level1Percentage: false,
    level2Percentage: false,
    level3Percentage: false,
  });
  const [fetching, setFetching] = useState(true);


  // Fetch current referral percentages
  useEffect(() => {
    const fetchSettings = async () => {
      setFetching(true);
      try {
        const response = await axios.get(SummaryApi.getReferralPercentages.url);
        if (response.status === 200) {
          setSettings({
            level1Percentage: response.data.level1Percentage,
            level2Percentage: response.data.level2Percentage,
            level3Percentage: response.data.level3Percentage,
          });
        }
      } catch (error) {
        console.error("Error fetching referral percentages:", error);
        alert("Failed to fetch referral percentages.");
      }
      setFetching(false);
    };

    fetchSettings();
  }, []);

  // Handle update for a specific field
  const handleUpdate = async (field) => {
    setLoading((prevLoading) => ({ ...prevLoading, [field]: true }));
    try {
      const updatedSettings = {
        ...settings,
        [field]: settings[field], // Update only the specific field
      };

      const response = await axios.put(SummaryApi.updateReferralPercentages.url, updatedSettings);

      if (response.status === 200) {
        alert(`${field} updated successfully!`);
      } else {
        alert(`Failed to update ${field}.`);
      }
    } catch (error) {
      console.error(`Error updating ${field}:`, error);
      alert(`Failed to update ${field}. Please try again.`);
    }
    setLoading((prevLoading) => ({ ...prevLoading, [field]: false }));
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: parseFloat(value),
    }));
  };

  return (
    <div className="p-6 font-sans bg-gray-100 min-h-screen mt-8">
      <h2 className="text-2xl font-bold mb-6">Update Referral Percentages</h2>
      {fetching ? (
        <p className="text-gray-600">Loading settings...</p>
      ) : (
        <div className="space-y-4">
          {/* Level 1 */}
          <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-md">
            <label htmlFor="level1Percentage" className="font-medium">
              Level 1 Percentage (%):
            </label>
            <input
              type="number"
              id="level1Percentage"
              name="level1Percentage"
              value={settings.level1Percentage}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-20 text-center"
            />
            <button
              onClick={() => handleUpdate("level1Percentage")}
              disabled={loading.level1Percentage}
              className={`ml-4 px-4 py-2 text-white font-medium rounded-md ${
                loading.level1Percentage ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {loading.level1Percentage ? "Updating..." : "Update"}
            </button>
          </div>

          {/* Level 2 */}
          <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-md">
            <label htmlFor="level2Percentage" className="font-medium">
              Level 2 Percentage (%):
            </label>
            <input
              type="number"
              id="level2Percentage"
              name="level2Percentage"
              value={settings.level2Percentage}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-20 text-center"
            />
            <button
              onClick={() => handleUpdate("level2Percentage")}
              disabled={loading.level2Percentage}
              className={`ml-4 px-4 py-2 text-white font-medium rounded-md ${
                loading.level2Percentage ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {loading.level2Percentage ? "Updating..." : "Update"}
            </button>
          </div>

          {/* Level 3 */}
          <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-md">
            <label htmlFor="level3Percentage" className="font-medium">
              Level 3 Percentage (%):
            </label>
            <input
              type="number"
              id="level3Percentage"
              name="level3Percentage"
              value={settings.level3Percentage}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-20 text-center"
            />
            <button
              onClick={() => handleUpdate("level3Percentage")}
              disabled={loading.level3Percentage}
              className={`ml-4 px-4 py-2 text-white font-medium rounded-md ${
                loading.level3Percentage ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {loading.level3Percentage ? "Updating..." : "Update"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LevelsSetting;
