import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCircleCheck } from 'react-icons/fa6';
import SummaryApi from '../../../common/SummaryApi.jsx';
import NavPramotion from '../../pramotion/NavPramotion.jsx';
import { Link } from 'react-router-dom';
import addwithdraw from '../../../assets/wallet/add-withdraw.png';
const BankDetails = () => {
  const [bankDetails, setBankDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const maskAccountNumber = (accountNumber) => {
    if (accountNumber) {
      const first = accountNumber[0];
      const last = accountNumber[accountNumber.length - 1];
      return `${first}${'*'.repeat(accountNumber.length - 2)}${last}`;
    }
    return '';
  };

  const maskPhoneNumber = (phoneNumber) => {
    if (phoneNumber) {
      const visiblePart = phoneNumber.slice(0, 5);
      return `${visiblePart}${'*'.repeat(phoneNumber.length - 5)}`;
    }
    return '';
  };

  const fetchBankDetails = async () => {
    try {
      const response = await axios.get(
        SummaryApi.GetCurrentUserBankDetail.url,
        { withCredentials: true }
      ); // Replace with your API endpoint
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

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-gray-600">Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-teal-600">{error}</p>
      </div>
    );

  return (
    <>
      <div className="min-h-screen">
        <NavPramotion heading="Bank Account" linkPath="/Withdrawl" />
        <div className="w-full my-6 px-3">
          {bankDetails.length === 0 ? (
            <p className="text-center text-gray-500">
              No bank details available.
            </p>
          ) : (
            <div>
              {bankDetails.map((detail) => (
                <div key={detail._id} className="bg-gray-300 shadow-lg rounded-lg">
                  <div className="bg-teal-500 text-white text-lg font-semibold rounded-t-md p-5"></div>
                  <div className="p-2 space-y-2">
                    <div className="flex justify-between bg-gray-200 p-2">
                      <span className="font-medium text-gray-600">
                        Bank Name
                      </span>
                      <span className="pe-6">{detail.bank}</span>
                    </div>
                    <div className="flex justify-between bg-gray-200 p-2">
                      <span className="font-medium text-gray-600">
                        Bank Account Number
                      </span>
                      <span className="pe-6">
                        {maskAccountNumber(detail.accountNumber)}
                      </span>
                    </div>
                    <div className="flex justify-between bg-gray-200 p-2">
                      <span className="font-medium text-gray-600">
                        Phone Number
                      </span>
                      <span className="pe-6">
                        {maskPhoneNumber(detail.phoneNumber)}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center ps-4 py-3">
                    <FaCircleCheck className="text-fxbt-blue text-xl" />
                    <label className="ml-2 text-gray-600">Select</label>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <Link to="/bankAccount">
          <section className="container  mx-auto mt-4 px-3 text-center ">
        <div className="px-3 shadow-lg shadow-slate-500">
        <Link
              to="/addBankNumber"
              className=" rounded-lg p-4 w-full "
            >
              <div>
                <img
                  src={addwithdraw}
                  alt="Add Bank"
                  className="w-10 mx-auto"
                />
              </div>
              <h6 className="mt-3 text-gray-300 text-sm font-semibold">
                Add a bank account number
              </h6>
            </Link>
        </div>
          </section>
        </Link>
      </div>
    </>
  );
};

export default BankDetails;
