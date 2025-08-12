import React, { useState } from 'react';
import NavPramotion from './NavPramotion';
import ChooseDateModal from './ChooseDateModal';
import CommissionBalance from './CommissionBalance';

const CommitionDetails = () => {
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

  return (
    <div className="min-h-screen bg-primary">
      <NavPramotion heading="Commission Details" linkPath="/promotion-panel" />
      <ChooseDateModal
        initialDate={selectedDate}
        onDateConfirm={handleDateConfirm}
      />
      <CommissionBalance/>
    </div>
  );
};

export default CommitionDetails;
