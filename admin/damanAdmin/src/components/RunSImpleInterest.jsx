// import React from "react";
// import axios from "axios";
// import SummaryApi from "../common/AdminSummaryApi";
// import LogsComponent from "./CroneLogs";

// const RunSimpleInterest = () => {
//   const runCronJob = async () => {
//     try {
//       const response = await axios.post(SummaryApi.dailyInterest.url);
//       alert(response.data.message);
//     } catch (error) {
//       console.error("Error running cron job:", error);
//       alert("Failed to run cron job.");
//     }
//   };

//   return (
//     <div className="pt-16 ">
//      <div className="flex justify-center">
//      <div className="bg-white p-6 rounded-lg shadow-lg mx-6 inline-block">
//         <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
//           Distribute Daily Income
//         </h1>
//         <div className="flex justify-center mb-6">
//           <button
//             onClick={runCronJob}
//             className="px-8 py-4 bg-green-500 text-white text-xl font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
//           >
//             Run Distribution
//           </button>
//         </div>
//       </div>
//      </div>

//       <div className="mt-8">
//         <LogsComponent />
//       </div>
//     </div>
//   );
// };

// export default RunSimpleInterest;



import React, { useEffect, useState } from "react";
import axios from "axios";
import SummaryApi from "../common/AdminSummaryApi";
import LogsComponent from "./CroneLogs";

const RunSimpleInterest = () => {
  const [lastRunDate, setLastRunDate] = useState(null);
  const [nextRunDate, setNextRunDate] = useState(null);
  const [today, setToday] = useState(new Date().toDateString());
  const [loading, setLoading] = useState(false);

  // Format date to readable string
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const fetchLastRunDate = async () => {
    try {
      const response = await axios.get(SummaryApi.getLastCronDate.url);
      const last = new Date(response.data.lastRunDate);
      setLastRunDate(last.toDateString());

      // Calculate next run date
      const next = new Date(last);
      next.setDate(next.getDate() + 1);
      setNextRunDate(next.toDateString());
    } catch (err) {
      console.error("Error fetching last run date:", err);
    }
  };

  const runCronJob = async () => {
    try {
      setLoading(true);
      const response = await axios.post(SummaryApi.dailyInterest.url);
      alert(response.data.message);
      await fetchLastRunDate(); // Refresh dates after running
    } catch (error) {
      console.error("Error running cron job:", error);
      alert("Failed to run cron job.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLastRunDate();
  }, []);

  const canRunToday = lastRunDate !== today;

  return (
    <div className="pt-16">
      <div className="flex justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg mx-6 inline-block">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
            Distribute Daily Income
          </h1>

          {lastRunDate && (
            <p className="text-center text-gray-600 mb-2">
              Last Distribution Run:{" "}
              <span className="font-semibold">{formatDate(lastRunDate)}</span>
            </p>
          )}

          {nextRunDate && (
            <p className="text-center text-gray-600 mb-4">
              You can run this again on:{" "}
              <span className="font-semibold">{formatDate(nextRunDate)}</span>
            </p>
          )}

          <div className="flex justify-center mb-6">
            <button
              onClick={runCronJob}
              disabled={!canRunToday || loading}
              className={`px-8 py-4 text-white text-xl font-semibold rounded-md transition duration-300 ${
                canRunToday && !loading
                  ? "bg-green-500 hover:bg-green-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {loading ? "Processing..." : "Run Distribution"}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <LogsComponent />
      </div>
    </div>
  );
};

export default RunSimpleInterest;
