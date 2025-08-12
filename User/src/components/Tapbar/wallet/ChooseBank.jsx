import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavPramotion from '../../pramotion/NavPramotion';
import { FaSearch } from 'react-icons/fa';

const banks = ['Bank Of Baroda', 'Union Bank of India', 'Yes Bank', 'State Bank of India', 'HDFC bank']; // Sample bank list

const ChooseBank = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBankSelection = (selectedBank) => {
    navigate(location.state?.from || '/', { state: { selectedBank } });
  };

  return (
    <div className="min-h-screen">
         <NavPramotion heading="Choose Bank" linkPath="/addBankNumber" />
         <h1 className="text-lg bg-gray-300 p-3 mb-4 flex items-center gap-2 "> <FaSearch className="text-fxbt-blue text-xl"/> <span className='text-14px'>Search Bank</span></h1>
      <div className="mx-4 bg-gray-300 text-14px rounded">
      <h1 className="text-14px border-b bg-teal-500 p-3 mb-4">Choose a Bank :</h1>
      <ul className="space-y-2">
        {banks.map((bank, index) => (
          <li
            key={index}
            className=" p-2  cursor-pointer bg-slate-300-"
            onClick={() => handleBankSelection(bank)}
          >
            {bank}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default ChooseBank;
