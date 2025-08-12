import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import addwithdraw from '../../../assets/wallet/add-withdraw.png';
import IconOne from "../../svg's/IconOne";
import SummaryApi from '../../../common/SummaryApi.jsx';
import NavPramotion from '../../pramotion/NavPramotion.jsx';

const BankAccount = () => {
  const [bankDetails, setBankDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mask account number (show first and last digit)
  const maskAccountNumber = (accountNumber) => {
    if (accountNumber) {
      const first = accountNumber[0];
      const last = accountNumber[accountNumber.length - 1];
      return `${first}${'*'.repeat(accountNumber.length - 2)}${last}`;
    }
    return '';
  };

  // Mask phone number (show first 5 digits)
  const maskPhoneNumber = (phoneNumber) => {
    if (phoneNumber) {
      const visiblePart = phoneNumber.slice(0, 5);
      return `${visiblePart}${'*'.repeat(phoneNumber.length - 5)}`;
    }
    return '';
  };

  // Fetch bank details from the API
  const fetchBankDetails = async () => {
    try {
      const response = await axios.get(
        SummaryApi.GetCurrentUserBankDetail.url,
        { withCredentials: true }
      );
      setBankDetails(response.data.data);
      setLoading(false);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch bank details');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBankDetails();
  }, []);

  return (
    <>
      <div className="mx-4 bg-gray-800 flex p-6 rounded-xl">
        {bankDetails.length === 0 ? (
          <Link
            to="/bankAccount"
            className="w-full flex justify-center items-center"
          >
            <section className=" text-center flex justify-center items-center">
              <Link
                to="/addBankNumber"
                className="bg-gray-800 rounded-lg w-full max-w-xs"
              >
                <div className="flex justify-center">
                  <img src={addwithdraw} alt="Add Bank" className="w-10" />
                </div>
                <h6 className="mt-3 text-gray-300 text-sm font-semibold text-center">
                  Add a bank account number
                </h6>
              </Link>
            </section>
          </Link>
        ) : (
          <Link to={'/bank-details'}>
            {bankDetails.map((detail) => (
              <div key={detail._id} className="flex space-x-4">
                <div className="border-r pe-4 flex flex-col items-center justify-center">
                  <IconOne className="w-6 h-6 text-fxbt-blue" />
                  <span className="mt-2 text-white">{detail.bank}</span>
                </div>
                <div className="ps-3 flex flex-col items-center justify-center">
                  <span className="mt-2 text-gray-50">
                    {maskAccountNumber(detail.accountNumber)}
                  </span>
                </div>
              </div>
            ))}
          </Link>
        )}
      </div>
    </>
  );
};

export default BankAccount;
