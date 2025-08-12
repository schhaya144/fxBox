import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavActivity from '../Activity/NavActivity';
// import TierModalData from '../../pramotion/TierModalData';
import ChooseDateModal from '../../pramotion/ChooseDateModal';
import TransactionModalData from './TransactionModaldata';

const TransactionHistory = () => {
   
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
   const [selectedTier, setSelectedTier] = useState('All'); // Default tier
 
   const handleTierConfirm = (tier) => {
     setSelectedTier(tier); // Set the selected tier in the parent
   };
  
  
    return (
      <>
      <NavActivity heading={"Transaction history"} linkPath={'/account'} />
      <div className="flex justify-between mb-2 ">
      <div className="w-1/2 ">
          <TransactionModalData
            initialTier={selectedTier}
            onTierConfirm={handleTierConfirm}
          />
        </div>
        <div className="w-1/2">
          <ChooseDateModal
            initialDate={selectedDate}
            onDateConfirm={handleDateConfirm}
          />
        </div>
      
      </div>
      </>
      )
      };
      export default TransactionHistory;