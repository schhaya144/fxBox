import React, { useState } from 'react';
import NavPramotion from './NavPramotion';

const NewSubordinates = () => {
  const [select, setSelect] = useState('Today'); // Set default selection to 'Today'

  const handleSelect = (option) => {
    setSelect(option);
  };

  const buttonStyles = (option) =>
    select === option
      ? 'bg-gamenav-gradient text-white'
      : 'bg-white text-gray-500';

  const renderContent = () => {
    switch (select) {
      case 'Today':
        return <p>Showing content for Today</p>;
      case 'Yesterday':
        return <p>Showing content for Yesterday</p>;
      case 'This month':
        return <p>Showing content for This Month</p>;
      default:
        return <p>Select a date to view content.</p>;
    }
  };

  return (
    <div>
      <NavPramotion
        heading={'New Subordinates'}
        linkPath={'/promotion-panel'}
      />
      <div className="flex justify-around items-center mt-1 w-full gap-1">
        <button
          onClick={() => handleSelect('Today')}
          className={`p-3 text-center rounded-lg w-full text-[13.52px] font-medium ${buttonStyles(
            'Today'
          )}`}
        >
          Today
        </button>
        <button
          onClick={() => handleSelect('Yesterday')}
          className={`p-3 text-center rounded-lg w-full text-[13.52px] font-medium ${buttonStyles(
            'Yesterday'
          )}`}
        >
          Yesterday
        </button>
        <button
          onClick={() => handleSelect('This month')}
          className={`p-3 text-center rounded-lg w-full text-[13.52px] font-medium ${buttonStyles(
            'This month'
          )}`}
        >
          This month
        </button>
      </div>
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default NewSubordinates;
