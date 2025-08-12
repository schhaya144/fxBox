import React, { useEffect, useState } from 'react';
import axios from 'axios';
import droneImage from '../assets/drone.png';
import UserDetail from './Tapbar/wallet/UserDetail';
import EnrolledPackages from './EnrolledPackages';
import SummaryApi from '../common/SummaryApi.jsx';
import CountdownTimer from './fxbot/Countdown.jsx';
import { useSelector } from 'react-redux';

const Home = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [companyCapital, setCompanyCapital] = useState(null); // State for company capital
const user = useSelector((state) => state.user.user);
  // Fetch company capital and packages on component mount
  useEffect(() => {
    const fetchCompanyCapital = async () => {
      try {
        const response = await axios.get(SummaryApi.GetCompanyCapital.url); // Replace with your actual endpoint
        setCompanyCapital(response.data.companyCapital);
      } catch (error) {
        console.error('Error fetching company capital:', error);
      }
    };

    const fetchPackages = async () => {
      try {
        const response = await axios.get(SummaryApi.getPackages.url);
        setPackages(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching packages:', error);
        setLoading(false);
      }
    };

    fetchCompanyCapital();
    fetchPackages();
  }, []);

  const handleInvest = async (packageId) => {
    try {
      const response = await axios.post(
        SummaryApi.investers.url,
        { packageId },
        { withCredentials: true }
      );

      if (response.data.success) {
        alert('Investment successful!');
        setPackages((prevPackages) =>
          prevPackages.map((pkg) =>
            pkg._id === packageId
              ? { ...pkg, investedUsers: pkg.investedUsers + 1 }
              : pkg
          )
        );
      } else {
        alert(response.data.message || 'Investment failed!');
      }
    } catch (error) {
      console.error('Error during investment:', error);
      alert('An error occurred during the investment process.');
    }
  };

  if (loading) {
    return <div className="mt-10 text-lg text-center text-white">Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen w-full pb-4">
      <div className="drone-image">
        <div className="m-4 mt-32 border border-neon rounded-2xl text-center">
          <h2 className="text-2xl pt-5 text-white font-semibold font-inter">
            Company Capital
          </h2>
          {/* Display company capital fetched from the API */}
          <h2 className="mb-5 text-white font-bold font-inter">
            {companyCapital !== null ? `USD ${companyCapital.toLocaleString()}` : 'Loading Capital...'}
          </h2>
        </div>
      </div>
 
      <UserDetail />
      <EnrolledPackages />
      <div className="p-4 space-y-6">
        <h2 className="text-xl font-semibold text-center text-white underline">Our Packages</h2>
        {packages.map((pkg) => (
          <div
            key={pkg._id}
            className="relative border-2 border-neon rounded-xl shadow-lg p-4 overflow-hidden"
          >
            <div className="absolute inset-0 blur-md opacity-50 rounded-xl"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-white">{pkg.packageTitle}</h2>
                <span className="bg-gray-700 px-2 py-1 text-sm rounded-md text-white">
                  Quota {pkg.investedUsers || 0} / 1
                </span>
              </div>
              <div className="flex justify-around gap-4 mt-3">
                <img src={droneImage} alt="Package" className="w-16 h-16" />
                <div className="">
                  <div className="flex justify-around gap-4 text-xs mt-2">
                    <span className="bg-gray-400 rounded-3xl px-1">Share Power</span>
                    <span className="bg-gray-400 rounded-3xl px-1">Share Income</span>
                    <span className="bg-gray-400 rounded-3xl px-1">17 month</span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <p className="text-yellow-500 text-lg font-bold">{pkg.packageInterest} %</p>
                      <p className="text-sm text-gray-400">Monthly Interest</p>
                    </div>
                    <div>
                      <p className="text-yellow-500 text-lg font-bold"> $ {pkg.packageAmount}</p>
                      <p className="text-sm text-gray-400">Package Amount</p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleInvest(pkg._id)}
                className="w-full mt-4 py-2 border-2 border-neon text-white font-semibold rounded-3xl bg-gradient-to-r from-[#1A4C78] to-[#2BC6FF] hover:from-[#2BC6FF] hover:to-[#1A4C78] transition-colors duration-300"
              >
                Invest Now
              </button>
            </div>
          </div>
        ))}
        <div>
      <h2 className="text-white text-xl text-center font-bold">Welcome, {user?.name}</h2>
      <CountdownTimer registrationDate={user?.createdAt} />
    </div>
      </div>
    </div>
  );
};

export default Home;
