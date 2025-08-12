import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DepositHistoryTable from './DepositHistoryTable';

import { RiArrowDropDownLine } from 'react-icons/ri';
import ChooseDateModal from '../../pramotion/ChooseDateModal';
import ChooseDateModalWallet from './ChooseDateModalWallet';
import DepositFilter from './DepositFilter';
import Navbar from '../../Navbar';


function DepositHistory() {
  const [isModalOpen, setModalOpen] = useState(false);

  const [selectedTier, setSelectedTier] = useState('All');
  const handleTierConfirm = (tier) => {
    setSelectedTier(tier); // Set the selected tier in the parent
  };
  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <div className="container-fluid min-h-screen ]">
  
<Navbar heading={'Deposit History'} linkPath={'/account'}/>
      {/* Filter */}
      {/* <section className="flex justify-between mt-2 mx-3 gap-3">
        <div className="w-full">
          <div className="btn px-4  py-2 text-secondary  font-bahnschrift text-[#768096] btn-lg bg-white text-sm w-full rounded-md flex items-center justify-between">
            <DepositFilter
              className=""
              onTierConfirm={handleTierConfirm}
              initialTier={selectedTier}
            />
            <RiArrowDropDownLine className="text-2xl" />
          </div>
        </div>
        <div className="w-full pb-4">
          <ChooseDateModalWallet />
        </div>
      </section> */}

      {/* Modal */}
      {/* {isModalOpen && (
        <div className="modal fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="modal-content relative bg-white p-4 rounded-lg shadow-lg w-11/12 sm:w-96">
            <span
              className="close absolute top-0 right-0 p-2 cursor-pointer"
              onClick={toggleModal}
            >
              &times;
            </span>
            <h2>Modal Header</h2>
            <p>Some text in the Modal Body</p>
            <p>Some other text...</p>
            <h3>Modal Footer</h3>
          </div>
        </div>
      )} */}

      <div className="container-fluid vh-130 ">
        {/* Other Components like Navbar */}

        <div className="px-3">
          <DepositHistoryTable />
        </div>

        {/* Other Components */}
      </div>

      {/* No Data */}

    </div>
  );
}

export default DepositHistory;

// import React from "react";
// import Card from "../../../Utils/Card";
// import Navbar from "../../Navbar";

// const DepositHT = () => {
//   return (
//     <>
//      <Navbar heading={"Recharge History"} className={"mb-3 "} />
//       <div className="min-h-screen mx-4">
       

//         <Card />
//       </div>
//     </>
//   );
// };

// export default DepositHT;
