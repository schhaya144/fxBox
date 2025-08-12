import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import mobileimg from '../../../assets/wallet/bg.png';
import { IoCopyOutline } from 'react-icons/io5';
import SummaryApi from '../../../common/SummaryApi.jsx';
import qrscreen from '../../../assets/qrscreen.png';
const baseUrl = import.meta.env.VITE_BACKEND_URL;

const QrScreen = () => {
  const location = useLocation();
  const { selectedAmount, selectedOption } = location.state || {};

  const [utr, setUtr] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [upiData, setUpiData] = useState(null);
  const [extraAmount, setExtraAmount] = useState(null); // State to store `extraamount`
  const [calculatedAmount, setCalculatedAmount] = useState(null); 

  // Fetch random UPI data
  useEffect(() => {
    const fetchRandomUPI = async () => {
      try {
        const response = await axios.get(SummaryApi.GetRandomUPI.url);
        setUpiData(response.data);
      } catch (error) {
        console.error('Error fetching UPI data:', error);
      }
    };

    fetchRandomUPI();
  }, []);

  const handleUtrChange = (e) => {
    setUtr(e.target.value);
  };

  const handleSubmit = async () => {
    if (!utr || !selectedAmount || !selectedOption) {
      setResponseMessage('Please provide all required details.');
      return;
    }

    const numericAmount = parseFloat(selectedAmount);

    // Calculate the final amount based on extraAmount
    const calculatedAmount = (numericAmount * extraAmount) / 100;
    const finalAmount = numericAmount + calculatedAmount;
    setCalculatedAmount(calculatedAmount);
    // console.log(setFinalAmounts)
    // console.log(finalAmount)
    // Update selectedAmount with the finalAmount
    const updatedAmount = finalAmount.toFixed(2);  // Make sure it is 2 decimal places
    setResponseMessage(`Final amount to deposit: ₹${updatedAmount}`);

    try {
      const response = await axios.post(
        SummaryApi.SubmitTransaction.url,
        { 
          selectedAmount: updatedAmount, 
          selectedOption, 
          utr,
          calculatedAmount // Send the calculated amount here
        },
        { withCredentials: true }
      );

      // Conditional success message including calculatedAmount
      let successMessage = `Success: ${response.data.message}`;
      if (calculatedAmount) {
        successMessage += ` and you will receive an extra ₹${calculatedAmount.toFixed(2)} on this deposit.`;
      }
      setResponseMessage(successMessage);
    } catch (error) {
      setResponseMessage(
        `Error: ${error.response?.data?.message || 'Something went wrong!'}`,
      );
    }
  };

  // Fetch `extraamount` from the backend
  useEffect(() => {
    const fetchExtraAmount = async () => {
      try {
        const response = await axios.get(SummaryApi.depositReward.url);
        if (response.data.success) {
          setExtraAmount(response.data.extraamount);
        } else {
          console.error('Failed to fetch extraamount:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching extraamount:', error);
      }
    };
    fetchExtraAmount();
  }, []);

  return (
    <>
      <div className="flex justify-center gap-3 bg-black relative">
        {/* Top Left Image */}
        <img
          src={qrscreen}
          alt="QR Screen Decoration"
          className="absolute top-0 left-4 w-1/4 opacity-15"
        />


        <div className="flex flex-col items-center justify-center min-h-screen relative w-full">
          {/* Response Message at the Top */}
          {responseMessage && (
            <div
              className={`absolute top-4 left-1/2 transform -translate-x-1/2 p-2 rounded shadow-lg text-center w-4/12 ${
                responseMessage.startsWith('Success')
                  ? 'bg-green-100 text-green-600 border border-green-500'
                  : 'bg-red-100 text-red-600 border border-red-500'
              }`}
            >
              {responseMessage}
            </div>
          )}
<div className=" text-xl px-3">
    {calculatedAmount > 0 ? `₹${calculatedAmount.toFixed(2)}` : null}
</div>
          <h1 className="text-2xl font-bold text-fxbt-blue mb-4 mt-2">QR Code Screen</h1>

          {upiData ? (
            <div className="p-4 bg-gray-300 border-4 border-teal-600 rounded shadow-lg">
              <div className="relative bg-gray-900 text-white w-72 h-96 rounded-lg flex flex-col items-center justify-center shadow-lg mb-6">
                <p className="absolute top-4 text-sm font-medium">
                  Scan your QR Code
                </p>
                {/* QR Code Frame */}
                <div className="w-60 h-60 border-4 border-dashed border-gray-500 flex items-center justify-center">
                  <img
                    src={upiData.qr_image}
                    alt="QR Code"
                    className="w-52 h-52 "
                  />
                </div>
              </div>

              <p className="text-md font-semibold">UPI ID:</p>
              <p className="text-md text-teal-600 font-semibold inline-flex">
                {upiData.upi_id}
                <IoCopyOutline className="pt-1 mt-1 text-gray-600" />{' '}
              </p>

              <p className="text-md font-semibold mt-4">Selected Amount:</p>
              <p className="text-md text-teal-600 font-semibold">₹ {selectedAmount}</p>
              <p className="text-md font-semibold">Selected Option:</p>
              <p className="text-md text-teal-600 font-semibold">{selectedOption}</p>

              <label className="block mt-4 text-sm font-medium">UTR</label>
              <input
                type="text"
                value={utr}
                onChange={handleUtrChange}
                className="w-full border-2 border-fxbt-blue rounded px-2 py-1 mt-1"
                placeholder="Enter UTR"
              />

              <button
                onClick={handleSubmit}
                className="mt-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-600"
              >
                Submit
              </button>
            </div>
          ) : (
            <p className="text-fxbt-blue">Loading UPI data...</p>
          )}
        </div>

        {/* Bottom Right Image */}
        <img
          src={qrscreen}
          alt="QR Screen Decoration"
          className="absolute bottom-0 right-4 w-1/4 opacity-15"
        />
      </div>
    </>
  );
};

export default QrScreen;
