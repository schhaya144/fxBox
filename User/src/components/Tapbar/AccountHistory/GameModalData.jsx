import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import GameModal from './GameModal';
import imgWingo from '../../../assets/Image/wingo.png';
import imgTrxWingo from '../../../assets/Image/trxwingo.png';
import img5D from '../../../assets/Image/5D.png';
import imgK3 from '../../../assets/Image/k3.png';

const GameModalData = ({ initialTier = 'Win Go', onTierConfirm }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmedTier, setConfirmedTier] = useState(initialTier);

  const handleToggleModal = () => setIsModalOpen(!isModalOpen);

  const handleSelectTier = (tier) => {
    setConfirmedTier(tier); // Update the selected tier
    onTierConfirm(tier); // Notify the parent component
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div>
      {/* Display confirmed tier in a clickable box */}
      <div
        className="p-2 mx-3 mt-3 bg-white rounded-lg "
        onClick={handleToggleModal}
      >
        <div className="flex justify-between p-1 cursor-pointer">
        <h4>{confirmedTier}</h4>
        <FaChevronDown className="mt-2 text-13px" />
        </div>
      </div>

      {/* Modal */}
      <GameModal isOpen={isModalOpen} onClose={handleToggleModal}>
        <div className="flex flex-col items-center">
          <div className="grid w-full grid-cols-2 gap-4 p-1">
            {/* Game options */}
            {[
              { name: 'Win Go', img: imgWingo },
              { name: 'Trx Win Go', img: imgTrxWingo },
              { name: '5D', img: img5D },
              { name: 'K3', img: imgK3 },
            ].map((game, index) => (
              <div
                key={index}
                className={`flex items-center bg-[#f6f6f6] rounded-lg  transition-colors  duration-300 ${
                  confirmedTier === game.name
                    ? 'bg-gradient-to-r from-[#f95959] to-[#ff9a8e]'
                    : ''
                }`}
                onClick={() => handleSelectTier(game.name)}
              >
                {/* Game Image */}
                <img
                  src={game.img}
                  alt={game.name}
                  className="object-contain w-12 h-12 mr-3 "
                />
                {/* Game Name */}
                <p
                  className={`text-14px font-sans
                  ${
                    confirmedTier === game.name ? 'text-white' : 'text-[#848a97]'
                  }`}
                >
                  {game.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </GameModal>
    </div>
  );
};

export default GameModalData;
