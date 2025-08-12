import React, { useEffect, useState } from 'react';
import { fetchUserInvestments } from '../FetchInterestLog';

const UserInvestments = () => {
  const [investments, setInvestments] = useState([]);
  const [loading, setLoading] = useState(true);

  const calculateEndDate = (startDate, lockPeriod) => {
    const date = new Date(startDate);
    if (isNaN(date.getTime())) return 'Invalid Date';
    date.setDate(date.getDate() + lockPeriod);
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  useEffect(() => {
    const getInvestments = async () => {
      setLoading(true);
      const result = await fetchUserInvestments();
      if (result.success) {
        setInvestments(result.data);
      } else {
        console.error(result.message);
      }
      setLoading(false);
    };

    getInvestments();

    const intervalId = setInterval(getInvestments, 60000);
    return () => clearInterval(intervalId);
  }, []);

  if (loading) return <div className="text-center text-white text-lg">Loading investments...</div>;

  return (
    <div className="text-white mx-auto max-w-3xl mt-10">
      <ul className="space-y-6">
        {investments.map((investment, index) => (
          <li
            key={index}
            className="min-w-full px-6 py-4 border-collapse rounded-lg table-auto mt-9 glowing-border-white"
          >
            <h3 className="text-lg font-medium">{investment.packageTitle}</h3>
            <p className="text-gray-500">Total Amount: ₹{investment.totalAmount.toFixed(2)}</p>
            <p className="text-gray-500">Total Incremented Amount: ₹{investment.incrementedAmount.toFixed(2)}</p>
            <p className="text-gray-500">
              Start Date: {new Date(investment.dateInvested).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <p className="text-gray-500">
              End Date: {calculateEndDate(investment.dateInvested, investment.lockPeriod || 200)}
            </p>
            <p className="text-gray-500">
              Last Updated: {new Date(investment.dateLastUpdated).toLocaleDateString()}
            </p>
            <h4 className="mt-4 font-semibold">Daily Increment History:</h4>
            <ul className="list-disc ml-6">
              {investment.dailyIncrementHistory.map((entry, idx) => (
                <li key={idx} className="text-gray-500">
                  <span className="font-semibold ">
                    {new Date(entry.date).toLocaleDateString()}:
                  </span>{' '}
                  ₹{entry.incrementedAmount.toFixed(2)}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserInvestments;
