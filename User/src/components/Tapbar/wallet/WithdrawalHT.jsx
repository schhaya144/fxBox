import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavPramotion from "../../pramotion/NavPramotion";

import NavsliderWithdraw from "./NavsliderWithdraw";
import { RiArrowDropDownLine } from "react-icons/ri";
import ChooseDateModalWallet from "./ChooseDateModalWallet";
import WithdrawModalData from "./WithdrawModalData";
import WithdrawHistoryTable from "./WithdrawHistoryTable";
import Navbar from "../../Navbar";

const WithdrawalHT = () => {
  // const [modalOpen, setModalOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!isModalOpen);

  const [selectedTier, setSelectedTier] = useState("All"); // Default tier

  const handleTierConfirm = (tier) => {
    setSelectedTier(tier); // Set the selected tier in the parent
  };

  return (
    <div className="container-fluid min-h-screen ">
      <Navbar
        heading="Withdraw History"
        linkPath="/Account"
        className="font-semibold text-lg "
      />

      {/* Heading Tabs */}
      {/* <NavsliderWithdraw /> */}

      {/* Filter */}

      {/* <div className="flex justify-between  mb-2 ">
        <div className="w-1/2">
          <WithdrawModalData
            initialTier={selectedTier}
            onTierConfirm={handleTierConfirm}
          />
        </div>
        <div className="w-1/2 pt-3">
          <ChooseDateModalWallet />
        </div>
      </div> */}

      {/* Withdraw History Tables */}
      <div className="">
        <WithdrawHistoryTable />
      </div>

      {/* Filter Modal */}
      {/* {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center"
          onClick={() => setModalOpen(false)}
        >
          <div className="modal-content relative bg-white p-4 rounded-lg shadow-lg w-11/12 sm:w-96">
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={() => setModalOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Modal Header</h2>
            <p className="mb-4">Some text in the Modal Body</p>
            <p>Some other text...</p>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default WithdrawalHT;
