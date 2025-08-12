import React, { useState } from 'react';
import IconAll from '../../../Svg/IconAll';
import payNameIcon2 from '../../../assets/wallet/payNameIcon2.png';
import payNameIconupi from '../../../assets/wallet/payNameIconupi.png';
import payNameIcon from '../../../assets/wallet/payNameIcon.png';

const tabs = [
  { label: 'All', icon: <IconAll /> }, // SVG component
  { label: 'E-Wallet', icon: payNameIcon2 }, // Image
  { label: 'UPI x QR', icon: payNameIconupi }, // Image
  { label: 'Paytm', icon: payNameIcon }, // Image
];

const Navslider = ({ onTabConfirm }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].label);

  const handleSelectTab = (tab) => {
    setSelectedTab(tab);
    if (onTabConfirm) onTabConfirm(tab);
  };

  const calculateTransform = () => {
    const selectedIndex = tabs.findIndex((tab) => tab.label === selectedTab);
    return `translateX(calc(0% - ${selectedIndex * 100}px))`; // Adjust based on tab width
  };

  return (
    <div className="relative overflow-hidden rounded mt-2  mx-3">
      <div
        className="flex  items-center space-x-2 transition-transform duration-300"
        style={{
          transform: calculateTransform(),
        }}
      >
        {tabs.map((tab) => (
          <div
            key={tab.label}
            className={`flex items-center px-7  py-[15px]   justify-center rounded-md cursor-pointer transition-all duration-300 ${
              tab.label === selectedTab
                ? 'bg-gamenav-gradient text-white'
                : 'bg-white text-gray-800'
            }`}
            onClick={() => handleSelectTab(tab.label)}
          >
            {typeof tab.icon === 'string' ? (
              // Render image if the icon is an image path
              <img
                src={tab.icon}
                alt={tab.label}
                className="w-6 h-6 object-contain"
              />
            ) : (
              // Render SVG component
              <div className="w-5 h-5">
                {React.cloneElement(tab.icon, {
                  color: tab.label === selectedTab ? 'white' : 'gray',
                  width: 20,
                  height: 20,
                })}
              </div>
            )}
            <span
              className="text-[13.7px] font-medium whitespace-nowrap"
              style={{ minWidth: '45px', textAlign: 'center' }}
            >
              {tab.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navslider;
