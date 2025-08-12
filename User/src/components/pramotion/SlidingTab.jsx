import React, { useState } from 'react';

const tabs = [
  { label: 'Lottery', icon: '🎲' },
  { label: 'Casino', icon: '📺' },
  { label: 'Sports', icon: '⚽' },
  { label: 'Roulette', icon: '🎡' },
  { label: 'Rummy', icon: '🎡' },
  // Add more tabs as needed
];

const SlidingTabs = ({ initialTab = 'Lottery', onTabConfirm }) => {
  const [selectedTab, setSelectedTab] = useState(initialTab);

  // Handle selecting a new tab
  const handleSelectTab = (tab) => {
    setSelectedTab(tab);
    if (onTabConfirm) onTabConfirm(tab);
  };

  // Calculate the transform offset to center the selected tab
  const calculateTransform = () => {
    const selectedIndex = tabs.findIndex((tab) => tab.label === selectedTab);
    return `translateX(calc(0% - ${selectedIndex * 60}px))`; // Adjust based on tab width
  };

  return (
    <div className="relative overflow-hidden rounded-lg mt-2 mx-3">
      <div className="flex items-center space-x-2 transition-transform duration-300"
           style={{
             transform: calculateTransform(), // Center the selected tab
           }}
      >
        {tabs.map((tab) => (
          <div
            key={tab.label}
            className={`flex flex-col items-center justify-center px-8 py-2 rounded-lg cursor-pointer transition-all duration-300 ${
              tab.label === selectedTab
                ? 'bg-gamenav-gradient text-white'
                : 'bg-white text-gray-800'
            }`}
            onClick={() => handleSelectTab(tab.label)}
          >
            <div className="text-xl">{tab.icon}</div>
            <span className="mt-1 text-sm">{tab.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingTabs;
