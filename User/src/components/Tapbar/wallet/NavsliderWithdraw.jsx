import React, { useState } from 'react';
import IconAll from '../../../Svg/IconAll';
import bankcardRed from '../../../assets/wallet/withdrawhtbankcard.png'; // Red image
import bankcardYellow from '../../../assets/wallet/WithBeforeImgIcon2.png'; // Yellow image

const tabs = [
  { label: 'All', icon: <IconAll /> }, // SVG component
  { label: 'Bank Card', icon: bankcardRed }, // Default image for the "Bank Card" tab
];

const NavsliderWithdraw = ({ onTabConfirm }) => {
  // Default selected tab set to 'All'
  const [selectedTab, setSelectedTab] = useState(tabs[0].label);
  const [bankCardIcon, setBankCardIcon] = useState(bankcardRed); // State to track the current image for Bank Card

  // Handle selecting a new tab
  const handleSelectTab = (tab) => {
    setSelectedTab(tab);

    // Change the Bank Card icon when the "Bank Card" tab is selected
    if (tab === 'Bank Card') {
      setBankCardIcon(bankcardYellow);
    } else {
      setBankCardIcon(bankcardRed);
    }

    if (onTabConfirm) onTabConfirm(tab);
  };

  // Calculate the transform offset to center the selected tab
  const calculateTransform = () => {
    const selectedIndex = tabs.findIndex((tab) => tab.label === selectedTab);
    return `translateX(calc(0% - ${selectedIndex * 50}px))`; // Adjust based on tab width
  };

  return (
    <div className="relative overflow-hidden rounded  mx-3">
      <div
        className="flex items-center space-x-2 transition-transform duration-300"
        style={{
          transform: calculateTransform(), // Center the selected tab
        }}
      >
        {tabs.map((tab) => (
          <div
            key={tab.label}
            className={`flex items-center px-10 py-3 rounded-lg cursor-pointer transition-all duration-300 ${
              tab.label === selectedTab
                ? 'bg-gamenav-gradient text-white'
                : 'bg-white text-gray-800'
            }`}
            onClick={() => handleSelectTab(tab.label)}
          >
            {tab.label === 'Bank Card' ? (
              // Conditionally render the updated Bank Card icon
              <img src={bankCardIcon} alt={tab.label} className="w-7 h-7 mr-3" />
            ) : typeof tab.icon === 'string' ? (
              // Render image if the icon is an image path
              <img src={tab.icon} alt={tab.label} className="w-7 h-7 mr-3" />
            ) : (
              // Render component (e.g., SVG) if not an image
              <div className="text-2xl mr-3">
                {React.cloneElement(tab.icon, {
                  color: tab.label === selectedTab ? 'white' : 'gray',
                })}
              </div>
            )}
            <span className="text-sm font-semibold">{tab.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavsliderWithdraw;
