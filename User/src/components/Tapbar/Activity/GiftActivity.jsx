import React, { useState, useEffect } from 'react';
import NavActivity from './NavActivity';
import banner from '../../../assets/gift.png';
import { IoCopyOutline } from 'react-icons/io5';
import axios from 'axios';
import SummaryApi from '../../../common/SummaryApi.jsx';

const GiftActivity = () => {
  const [giftData, setGiftData] = useState([]);
  const [giftCodeInput, setGiftCodeInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [distributingAmount, setDistributingAmount] = useState(null);
  const [message, setMessage] = useState('');

  // Fetch gift codes from API
  const fetchGiftData = async () => {
    try {
      const response = await axios.get(SummaryApi.GetGiftCode.url);
      setGiftData(response.data);
    } catch (error) {
      console.error('Error fetching gift code data:', error);
      setMessage('Failed to load gift data.');
    }
  };

  // UseEffect to fetch gift data on component mount
  useEffect(() => {
    fetchGiftData();
  }, []);

  const latestGift = giftData.length > 0 ? giftData[giftData.length - 1] : null;

  const handleRedeem = async () => {
    if (!giftCodeInput.trim()) {
      setMessage('Please enter a valid gift code.');
      return;
    }

    setLoading(true);
    setMessage(''); // Reset previous messages

    try {
      // Send gift code to backend API to redeem it
      const response = await axios.post(
        'https://trademyindiabackend.onrender.com/api/redeem-giftcode',
        { giftcodeId: giftCodeInput }, // Send gift code as payload
        {
          withCredentials: true, // Optional: Include cookies if needed
        }
      );

      const amount = response.data.data.distributingAmount;
      setDistributingAmount(amount); // Save distributing amount

      // Send the distributing amount to the backend to add to the third-party wallet
      const walletResponse = await axios.post(
        'https://trademyindiabackend.onrender.com/api/add-to-wallet',
        { amount }, // Send the amount received from the redeem API
        {
          withCredentials: true, // Optional: Include cookies if needed
        }
      );

      setMessage('Gift redeemed and amount added to wallet successfully!');
    } catch (error) {
      // Handle errors
      setMessage(
        error.response?.data?.message || 'Failed to redeem gift code.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <NavActivity heading={'Gift'} linkPath={'/ActivityPanel'} />
      <div
        className="bg-cover bg-no-repeat h-[180px]"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>

      <div className="mx-3 my-2 bg-white p-4 rounded-lg">
        <h6 className="text-gray-600 mb-1">Hi</h6>
        <div className="flex justify-between">
          <h4 className="text-gray-600">We have a gift for you</h4>
          {latestGift ? (
            <h4 className="text-gray-600 flex items-center">
              <span className="text-orange-500">{latestGift.giftcodeId}</span>{' '}
              <IoCopyOutline />
            </h4>
          ) : (
            'No gift available'
          )}
        </div>
        <h5 className="mt-5">Please enter the gift code below</h5>
        <input
          type="text"
          value={giftCodeInput}
          onChange={(e) => setGiftCodeInput(e.target.value)}
          placeholder="Please enter the gift code"
          className="px-5 py-3 my-5 rounded-full bg-gray-l3 w-full"
        />

        <div className="px-3 py-3 text-center mt-6 bg-timer-gradient rounded-full">
          <button
            className="text-white"
            onClick={handleRedeem}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Receive'}
          </button>
        </div>

        {distributingAmount !== null && (
          <div className="mt-5 bg-green-100 text-green-800 p-3 rounded-lg">
            <h5>Distributing Amount:</h5>
            <p>{distributingAmount}</p>
          </div>
        )}

        {message && (
          <div className="mt-5 text-center text-sm text-red-500">{message}</div>
        )}
      </div>
    </div>
  );
};

export default GiftActivity;
