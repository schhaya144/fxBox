import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import NavPramotion from '../../pramotion/NavPramotion';
import hint from '../../../assets/hint.png';
import BankIcon from "../../svg's/BankIcon";
import IconName from "../../svg's/NameIcon";
import BankCardIcon from "../../svg's/BankCardIcon";
import PhoneIcon from '../../../Svg/PhoneIcon';
import IfscCodeIcon from "../svg's/IfscCodeIcon";
import SummaryApi from '../../../common/SummaryApi.jsx';

const AddBankNo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // State variables
  const [bank, setBank] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const isFormValid = recipientName && accountNumber && phoneNumber && ifscCode && bank;

  const handleAddBankDetails = async () => {
    if (!isFormValid) {
      setMessage('All fields are required.');
      setMessageType('error');
      return;
    }

    try {
      const response = await axios.post(
        SummaryApi.AddBankDetails.url,
        { bank, recipientName, accountNumber, phoneNumber, ifscCode },
        { withCredentials: true }
      );

      if (response.status === 201) {
        setMessage('Bank details added successfully.');
        setMessageType('success');
        setIsEditMode(true);
      } else if (response.status === 200) {
        setMessage('Bank details updated successfully.');
        setMessageType('success');
      }
    } catch (error) {
      console.error('Error adding bank details:', error);
      setMessage(
        error.response?.data?.message || 'Failed to add bank details. Please try again.'
      );
      setMessageType('error');
    }
  };

  return (
    <div className='min-h-screen'>
      <NavPramotion heading="Add bank account details" linkPath="/Withdrawl" />

      {/* Notification message */}
      {message && (
        <div
          className={`p-2 text-center rounded-lg mb-4 mx-3 ${
            messageType === 'success' ? 'bg-green-100 text-green-700' : 'bg-teal-100 text-teal-700'
          }`}
        >
          {message}
        </div>
      )}

      <div className="flex bg-white p-1 rounded-full mt-2 text-12px items-center font-semibold px-3 justify-center mx-3 ">
        <img src={hint} alt="hint" className="w-4 h-4" />
        <span className="text-fxbt-blue px-2">
          To ensure the safety of your funds, please bind your bank account
        </span>
      </div>

      {/* Form section */}
      <form onSubmit={(e) => e.preventDefault()} className="mx-3">
        <label className="block my-6">
          <div className="flex justify-start items-center text-semibold font-bahnschrift text-12px my-2">
            <BankIcon /> <span className='text-white ps-1'>Bank Name</span>
          </div>
          <input
            type="text"
            value={bank}
            onChange={(e) => setBank(e.target.value)}
            placeholder="Enter bank name"
            className="w-full bg-white text-gray-600 p-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-200"
          />
        </label>

        <label className="block my-6">
          <div className="flex justify-start items-center text-semibold font-bahnschrift text-12px my-2">
            <IconName /> <span className='text-white ps-1'>Recipient's Full Name</span>
          </div>
          <input
            type="text"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
            placeholder="Enter recipient's name"
            className="w-full bg-white text-gray-600 p-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-200"
          />
        </label>

        <label className="block my-6">
          <div className="flex justify-start items-center text-semibold font-bahnschrift text-12px my-2">
            <BankCardIcon /> <span className='text-white ps-1'>Bank account number</span>
          </div>
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            placeholder="Enter bank account number"
            className="w-full bg-white text-gray-600 p-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-200"
          />
        </label>

        <label className="block my-6">
          <div className="flex justify-start items-center text-semibold font-bahnschrift text-12px my-2">
            <PhoneIcon className="w-7 h-7 text-red-500" />{' '}
            <span className='text-white ps-1'>Phone number</span>
          </div>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
            className="w-full bg-white text-gray-600 p-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-200"
          />
        </label>

        <label className="block my-6">
          <div className="flex justify-start items-center text-semibold font-bahnschrift text-12px my-2">
            <IfscCodeIcon className="w-7 h-7 text-fxbt-blue" />{' '}
            <span className='text-white ps-1'>IFSC code</span>
          </div>
          <input
            type="text"
            value={ifscCode}
            onChange={(e) => setIfscCode(e.target.value)}
            placeholder="Enter IFSC code"
            className="w-full bg-white text-gray-600 p-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-200"
          />
        </label>

        <div className="mt-10 mb-8">
          <button
            type="button"
            onClick={handleAddBankDetails}
            className={`${
              isFormValid ? 'bg-teal-500' : 'bg-gray-300'
            } text-white font-bold rounded-full p-2 w-full`}
            disabled={!isFormValid}
          >
            {isEditMode ? 'Update Bank Details' : 'Add Bank Details'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBankNo;
