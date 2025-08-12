import React, { useEffect, useState } from 'react';
import axios from 'axios';
import droneImage from '../assets/drone.png';
import SummaryApi from '../common/SummaryApi.jsx';

const EnrolledPackages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEnrolledPackages = async () => {
      try {
        const response = await axios.get(SummaryApi.investedPackages.url, {
          withCredentials: true,
        });
        if (response.data.success) {
          setPackages(response.data.data);
        } else {
          setError(response.data.message);
        }
      } catch (err) {
        console.log('Failed to fetch packages. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchEnrolledPackages();
  }, []);

  if (loading) {
    return <div className="text-center text-white">Loading packages...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div>
      {packages.length > 0 ? (
        <div className="p-4 space-y-6">
          <h2 className="text-xl font-semibold text-center  text-white underline">
            Your Enrolled Packages
          </h2>
          {packages.map((pkg) => (
            <div key={pkg._id} className="">
              <div className="relative border-2 border-neon rounded-xl shadow-lg p-4 overflow-hidden">
                <div className="absolute inset-0 blur-md opacity-50 rounded-xl"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-white">
                      {pkg.packageTitle}
                    </h2>
                    <span className="bg-gray-700 px-2 py-1 text-sm rounded-md text-white">
                      Quota {pkg.investedUsers || 0} / 1
                    </span>
                  </div>
                  <div className="flex justify-around gap-4 mt-3">
                    <img src={droneImage} alt="Package" className="w-16 h-16" />
                    <div>
                      <div className="flex justify-around gap-4 text-xs mt-2">
                        <span className="bg-gray-400 rounded-3xl px-1">
                          Share Power
                        </span>
                        <span className="bg-gray-400 rounded-3xl px-1">
                          Share Income
                        </span>
                        <span className="bg-gray-400 rounded-3xl px-1">
                          200 Days
                        </span>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div>
                          <p className="text-orange text-lg font-bold">
                            {pkg.packageInterest} %
                          </p>
                          <p className="text-sm text-gray-400">
                            Daily Interest
                          </p>
                        </div>
                        <div>
                          <p className="text-orange text-lg font-bold">
                            ₹{pkg.packageAmount}
                          </p>
                          <p className="text-sm text-gray-400">
                            Package Amount
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-400">
       
        </div>
      )}
    </div>
  );
};

export default EnrolledPackages;
