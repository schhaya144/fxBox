import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import WithdrawModal from './WithdrawModal';

const WithdrawModalData = ({ initialTier = 'All', onTierConfirm }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState(initialTier);
  const [confirmedTier, setConfirmedTier] = useState(initialTier);

  const tiers = ['All', 'Processing', 'Completed', 'Rejected', 'Pending'];

  const handleToggleModal = () => setIsModalOpen(!isModalOpen);

  const handleConfirmTier = () => {
    setConfirmedTier(selectedTier);
    onTierConfirm(selectedTier);
    setIsModalOpen(false);
  };

  const handleSelectTier = (tier) => {
    setSelectedTier(tier);
  };

  
  const calculateTransform = (tier) => {
    const tierIndex = tiers.indexOf(tier);
    const middleIndex = Math.floor(tiers.length / 2);
    return (middleIndex - tierIndex) * 2.4; 
  };

  return (
    <div>
      <div className="bg-white rounded-sm py-3 p-2 mx-3 mt-3" onClick={handleToggleModal}>
        <div className="flex justify-between cursor-pointer w-full">
          <h4 className="text-gray-800">{confirmedTier}</h4>
          <FaChevronDown className="mt-1 text-sm text-gray-600" />
        </div>
      </div>

      <WithdrawModal isOpen={isModalOpen} onClose={handleToggleModal} confirm={handleConfirmTier}>
        <div className="flex justify-center items-center h-52 overflow-hidden relative cursor-grab">
          <div className="absolute top-1/2 -translate-y-1/2 w-full border-t pt-11 border-gray-200"></div>
          <div className="absolute top-1/2 translate-y-5 w-full border-t pt-11 border-gray-200"></div>
          <div
            className="flex flex-col items-center space-y-3 text-lg transition-transform duration-300"
            style={{
              transform: `translateY(${calculateTransform(selectedTier)}rem)`,
            }}
          >
            {tiers.map((tier) => (
              <div
                key={tier}
                className={`text-base cursor-pointer transition-all duration-300 ease-in-out transform ${
                  tier === selectedTier
                    ? 'text-gray-800 scale-110 font-semibold'
                    : 'text-gray-400'
                } hover:text-gray-600`}
                onClick={() => handleSelectTier(tier)}
              >
                {tier}
              </div>
            ))}
          </div>
        </div>
      </WithdrawModal>
    </div>
  );
};

export default WithdrawModalData;
