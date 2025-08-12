import React, { useState } from 'react';
import NavPramotion from './NavPramotion';
import ChooseDateModal from './ChooseDateModal';
import { CiSearch } from 'react-icons/ci';
import { FaSearch } from 'react-icons/fa';
import TierModalData from './TierModalData';
import SubordinateDisplayData from './SubordinateDisplayData';
import SubordinateLevel from './SubordinateLevel';

const SubordinateData = () => {
 // Get the current date
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
    <div className="bg-primary">
      <NavPramotion heading="Subordinates Data" linkPath="/promotion-panel" />
  
      {/* search  */}
      <div className="flex justify-between px-4 py-3 mx-3 mt-1 bg-gray-200 rounded-lg">
        <div className="pt-1 text-gray-800 text-13px">Search Subordinate UID</div>
        <div className="px-5 py-1 text-2xl text-white bg-fxbt-gradient rounded-3xl">
          <FaSearch className=''/>
        </div>
      </div>

      <div className="flex justify-between mb-2">
      <div className="w-1/2">
          <TierModalData
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
      <SubordinateDisplayData />
        <SubordinateLevel/>
    </div>
  );
};

export default SubordinateData;
