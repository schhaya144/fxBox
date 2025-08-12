import React, { useEffect, useState } from "react";
import SummaryApi from "../common/AdminSummaryApi";

const LogsComponent = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of logs per page

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await fetch(SummaryApi.getCronLog.url);
        if (!response.ok) {
          throw new Error("Failed to fetch logs");
        }
        const data = await response.json();
        setLogs(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchLogs();
  }, []);

  // Calculate pagination data
  const totalPages = Math.ceil(logs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentLogs = logs.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  if (loading) {
    return <div className="text-center mt-10 text-lg font-semibold">Loading logs...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500 font-semibold">{error}</div>;
  }

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-300">Distribution Daily Income Logs</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left">Timestamp</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Message</th>
            </tr>
          </thead>
          <tbody>
            {currentLogs.map((log, index) => (
              <tr key={log._id} className="border-t border-gray-200 hover:bg-gray-100">
                <td className="py-2 px-4">{startIndex + index + 1}</td>
                <td className="py-2 px-4">{new Date(log.timestamp).toLocaleString()}</td>
                <td className={`py-2 px-4 font-medium ${log.status === "success" ? "text-green-600" : "text-red-600"}`}>
                  {log.status}
                </td>
                <td className="py-2 px-4">{log.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"}`}
        >
          Previous
        </button>
        <span className="text-lg font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LogsComponent;
