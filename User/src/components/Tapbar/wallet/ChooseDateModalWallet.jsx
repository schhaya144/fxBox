import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import DateModal from '../../pramotion/DateModal';

const ChooseDateModalWallet = ({ initialDate, onDateConfirm }) => {
  // Get the current date
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // Month is 0-based
  const currentDay = currentDate.getDate();

  // Use the current date as the default if no `initialDate` is provided
  const defaultDate = {
    year: initialDate?.year || currentYear,
    month: initialDate?.month || currentMonth,
    day: initialDate?.day || currentDay,
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(defaultDate);
  const [confirmedDate, setConfirmedDate] = useState(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-based
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  });
  

  const handleToggleModal = () => setIsModalOpen(!isModalOpen);

  const handleConfirmDate = () => {
    setConfirmedDate(`${selectedDate.year}-${selectedDate.month.toString().padStart(2, '0')}-${selectedDate.day.toString().padStart(2, '0')}`);
    onDateConfirm(selectedDate); // Send the selected date back to the parent
    setIsModalOpen(false);
  };

  const handleSelectDate = (type, value) => {
    setSelectedDate((prev) => ({ ...prev, [type]: value }));
  };

  const isDateValid = (year, month, day) => {
    if (year > currentYear) return false;
    if (year === currentYear && month > currentMonth) return false;
    if (year === currentYear && month === currentMonth && day > currentDay) return false;
    return true;
  };

  return (
    <div>
      {/* Display confirmed date in a clickable box */}
      <div className="bg-white rounded-md py-3 p-2  " onClick={handleToggleModal}>
        <div className="flex justify-between text-[#786096] cursor-pointer">
          <h4>{confirmedDate}</h4>
          <FaChevronDown className="mt-2 text-13px" />
        </div>
      </div>

      {/* Bottom Modal for Selecting Dates */}
      <DateModal isOpen={isModalOpen} onClose={handleToggleModal} confirm={handleConfirmDate}>
        {/* Sliding Date Selector */}
        <div className="flex justify-around relative cursor-grab">
        <div className="absolute top-1 -translate-y-full w-full border-t mt-16 border-gray-100"></div>
        <div className="absolute top-1/2 translate-y-full w-full border-t mt-5 border-gray-100"></div>
          {/* Year Selector */}
          <div className="flex flex-col items-center space-y-2 text-16px">
            {[selectedDate.year - 2, selectedDate.year - 1, selectedDate.year, selectedDate.year + 1, selectedDate.year + 2].map((year) => (
              <div
                key={year}
                className={`text-lg transition-all duration-300 ease-in-out transform ${
                  year === selectedDate.year ? 'text-gray-800 ' : 'text-gray-300'
                } ${!isDateValid(year, selectedDate.month, selectedDate.day) ? 'opacity-0 cursor-not-allowed ' : ''}`}
                onClick={() => isDateValid(year, selectedDate.month, selectedDate.day) && handleSelectDate('year', year)}
              >
                {year}
              </div>
            ))}
          </div>

          {/* Month Selector */}
          <div className="flex flex-col items-center space-y-2 text-16px">
  {[-2, -1, 0, 1, 2].map((offset) => {
    const displayedMonth = selectedDate.month + offset;
    const validMonth = displayedMonth > 0 && displayedMonth <= 12; // Ensure month is within 1 to 12 range

    if (!validMonth) return null; // Skip invalid months

    return (
      <div
        key={displayedMonth}
        className={`text-lg transition-all duration-300 ease-in-out transform ${
          displayedMonth === selectedDate.month ? 'text-gray-800 ' : 'text-gray-300'
        } ${
          !isDateValid(selectedDate.year, displayedMonth, selectedDate.day)
            ? 'opacity-0 cursor-not-allowed'
            : ''
        }`}
        onClick={() =>
          isDateValid(selectedDate.year, displayedMonth, selectedDate.day) &&
          handleSelectDate('month', displayedMonth)
        }
      >
        {displayedMonth.toString().padStart(2, '0')}
      </div>
    );
  })}
</div>


          {/* Day Selector */}
          <div className="flex flex-col items-center space-y-2 text-16px">
            {[selectedDate.day - 2, selectedDate.day - 1, selectedDate.day, selectedDate.day + 1, selectedDate.day + 2].map((day) => {
              const displayedDay = ((day + 31 - 1) % 31) + 1; // Ensure day is between 1 and 31
              return (
                <div
                  key={displayedDay}
                  className={`text-lg transition-all duration-300 ease-in-out transform ${
                    displayedDay === selectedDate.day ? 'text-gray-800 ' : 'text-gray-300'
                  } ${!isDateValid(selectedDate.year, selectedDate.month, displayedDay) ? 'opacity-0 cursor-not-allowed' : ''}`}
                  onClick={() => isDateValid(selectedDate.year, selectedDate.month, displayedDay) && handleSelectDate('day', displayedDay)}
                >
                  {displayedDay.toString().padStart(2, '0')}
                </div>
              );
            })}
          </div>
        </div>
      </DateModal>
    </div>
  );
};

export default ChooseDateModalWallet;
