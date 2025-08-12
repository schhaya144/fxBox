import React, { useState } from 'react';

// Import images directly from the assets folder
import popularIcon from '../assets/Image/gamecategory_20240412114829pq18.png';
import lotteryIcon from '../assets/Image/gamecategory_20240412114947sy3o.png';
import casinoIcon from '../assets/Image/gamecategory_20240412114911i998.png';
import sportIcon from '../assets/Image/gamecategory_20240412114921c1tg.png';
import slotIcon from '../assets/Image/gamecategory_20240412114929rkd9.png';
import rummyIcon from '../assets/Image/gamecategory_2024041211490142rl.png';
import fishIcon from '../assets/Image/gamecategory_20240412114848em94.png';
import originalIcon from '../assets/Image/gamecategory_20240412114937mcis.png';

const tabs = [
  { label: 'Popular', icon: popularIcon },
  { label: 'Lottery', icon: lotteryIcon },
  { label: 'Casino', icon: casinoIcon, id: 'casino' },
  { label: 'Slots', icon: slotIcon },
  { label: 'Sports', icon: sportIcon },
  { label: 'Rummy', icon: rummyIcon },
  { label: 'Fishing', icon: fishIcon },
  { label: 'Original', icon: originalIcon },
];

const NavSlider = ({ initialTab = 'Popular', onTabConfirm }) => {
  const [selectedTab, setSelectedTab] = useState(initialTab);

  // Handle selecting a new tab
  const handleSelectTab = (tab) => {
    setSelectedTab(tab);
    if (onTabConfirm) onTabConfirm(tab);
  };

  // Calculate the transform offset to center the selected tab
  const calculateTransform = () => {
    const selectedIndex = tabs.findIndex((tab) => tab.label === selectedTab);
    return `translateX(calc(0% - ${selectedIndex * 80}px))`; // Adjust based on tab width
  };

  return (
    <div className="relative overflow-hidden rounded-lg my-2 mx-1">
      <div
        className="flex items-center space-x-2 transition-transform duration-300"
        style={{
          transform: calculateTransform(), // Center the selected tab
        }}
      >
        {tabs.map((tab) => (
          <div
            key={tab.label}
            id={tab.id}
            className={`flex flex-col items-center justify-center px-8 py-2 rounded-lg cursor-pointer transition-all duration-300 ${
              tab.label === selectedTab
                ? 'bg-gamenav-gradient text-white'
                : 'bg-white text-gray-500'
            }`}
            onClick={() => handleSelectTab(tab.label)}
          >
            {/* Using the imported icon directly */}
            <img src={tab.icon} alt={`${tab.label} Icon`} className="w-8" />
            <span className="font-medium text-sm">{tab.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavSlider;
