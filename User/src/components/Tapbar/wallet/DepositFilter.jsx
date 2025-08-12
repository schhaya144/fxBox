import React, { useState } from 'react';
import DepositeHTmodal from './DepositeHTmodal';

const DepositFilter = ({ initialTier = 'All', onTierConfirm }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState(initialTier);
  const [confirmedTier, setConfirmedTier] = useState(initialTier);

  const tiers = ['All', 'To Be Paid', 'Complete', 'Failed'];

  const handleToggleModal = () => setIsModalOpen(!isModalOpen);

  const handleConfirmTier = () => {
    setConfirmedTier(selectedTier);
    onTierConfirm(selectedTier); // Send the selected tier back to the parent
    setIsModalOpen(false);
  };

  const handleSelectTier = (tier) => {
    setSelectedTier(tier);
  };

  // Calculate the transform offset to center the selected tier
  const calculateTransform = (tier) => {
    const tierIndex = tiers.indexOf(tier);
    const totalItems = tiers.length;
    const middleIndex = Math.floor(totalItems / 2);
    return (middleIndex - tierIndex) * 2  ; // Adjust `3rem` spacing to center
  };

  return (
    <div>
      {/* Display confirmed tier in a clickable box */}
      <div onClick={handleToggleModal} className='py-1 text-14px'>
        <div className="flex justify-between cursor-pointer w-full pb-1 ">
          <h4 className="text-gray-800">{confirmedTier}</h4>
        </div>
      </div>

      {/* Bottom Modal for Selecting Tiers */}
      <DepositeHTmodal isOpen={isModalOpen} onClose={handleToggleModal} confirm={handleConfirmTier}>
        <div className="flex justify-center items-center h-48 overflow-hidden relative cursor-grab">
          {/* Horizontal Lines */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full border-t border-gray-200"></div>
          <div className="absolute top-1/2 translate-y-8 w-full border-t border-gray-200"></div>

          {/* Tier Selection List */}
          <div
            className="flex flex-col items-center space-y-2 text-lg transition-transform duration-300"
            style={{
              transform: `translateY(${calculateTransform(selectedTier)}rem)`,
            }}
          >
            {tiers.map((tier) => (
              <div
                key={tier}
                className={`text-base cursor-pointer transition-all duration-300 ease-in-out transform ${
                  tier === selectedTier
                    ? 'text-gray-800 scale-105 font-semibold'
                    : 'text-gray-400'
                } hover:text-gray-600`}
                onClick={() => handleSelectTier(tier)}
              >
                {tier}
              </div>
            ))}
          </div>
        </div>
      </DepositeHTmodal>
    </div>
  );
};

export default DepositFilter;
