import React, { useState } from 'react';
import BetSliderTab from './BetSliderTab';
import NavActivity from '../Activity/NavActivity';
import GameModalData from './GameModalData';
import ChooseDateModal from '../../pramotion/ChooseDateModal';

const GameHistory = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // Months are 0-based
  const currentDay = currentDate.getDate();

  // Initialize selectedDate with the current date
  const [selectedDate, setSelectedDate] = useState({
    year: currentYear,
    month: currentMonth,
    day: currentDay,
  });

  const handleDateConfirm = (newDate) => {
    setSelectedDate(newDate);
  };
  const [selectedTier, setSelectedTier] = useState('Win Go'); // Default tier

  const handleTierConfirm = (tier) => {
    setSelectedTier(tier); // Set the selected tier in the parent
  };

  return (
    <>
      <NavActivity heading={'Bet history'} linkPath={'/account'} />
      <div className="mx-2">
        <BetSliderTab />
      </div>
      <div className="flex justify-between mb-2 ">
        <div className="w-1/2 text-gray-500">
          <GameModalData
            initialTier={selectedTier}
            onTierConfirm={handleTierConfirm}
          />
        </div>
        <div className="w-1/2 text-gray-500">
          <ChooseDateModal
            initialDate={selectedDate}
            onDateConfirm={handleDateConfirm}
          />
        </div>
      </div>
    </>
  );
};
export default GameHistory;
