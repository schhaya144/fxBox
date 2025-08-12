import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import TierModal from '../../pramotion/TierModal';

const TransactionModalData = ({ initialTier = 'All', onTierConfirm }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState(initialTier);
  const [confirmedTier, setConfirmedTier] = useState(initialTier);

  const handleToggleModal = () => setIsModalOpen(!isModalOpen);

  const handleConfirmTier = () => {
    setConfirmedTier(selectedTier);
    onTierConfirm(selectedTier); // Send the selected tier back to the parent
    setIsModalOpen(false);
  };

  const handleSelectTier = (tier) => {
    setSelectedTier(tier);
  };

  // Calculate the initial offset for centering the selected tier
  const calculateTransform = (tier) => {
    const tierIndex = ['All', 'Bet', 'Agent commission', 'Win', 'Red envolope', 'Deposit', 'Withdraw', 'Cancel withdrawal', 'Attendance bonus', "Agent's red envelop"].indexOf(tier);
    return (3 - tierIndex) * 2; // Adjust for centering
  };

  return (
    <div>
      {/* Display confirmed tier in a clickable box */}
      <div className="bg-white rounded-lg p-2 mx-3 mt-3" onClick={handleToggleModal}>
        <div className="flex justify-between cursor-pointer w-full p-1">
          <h4>{confirmedTier}</h4>
          <FaChevronDown className="mt-2 text-13px" />
        </div>
      </div>

      {/* Bottom Modal for Selecting Tiers */}
      <TierModal isOpen={isModalOpen} onClose={handleToggleModal} confirm={handleConfirmTier}>
        <div className="flex justify-center items-center h-48 overflow-hidden relative cursor-grab">
        <div className="absolute top-1/2 -translate-y-full w-full border-t mt-1 border-gray-100"></div>
        <div className="absolute top-2/4 translate-y-full w-full border-t -mt-8 border-gray-100"></div>
          <div
            className="flex flex-col items-center space-y-1 text-16px mt-16 transition-transform duration-300"
            style={{
              transform: `translateY(${calculateTransform(selectedTier)}rem)`,
            }}
          >
            {['All', 'Bet', 'Agent commission', 'Win', 'Red envolope', 'Deposit', 'Withdraw', 'Cancel withdrawal', 'Attendance bonus', "Agent's red envelop"].map((tier) => (
              <div
                key={tier}
                className={`text-19px cursor-pointer transition-all duration-300 ease-in-out transform ${
                  tier === selectedTier ? 'text-gray-800 scale-105' : 'text-gray-300'
                } hover:text-gray-500`}
                onClick={() => handleSelectTier(tier)}
              >
                {tier}
              </div>
            ))}
          </div>
        </div>
      </TierModal>
    </div>
  );
};

export default TransactionModalData;
