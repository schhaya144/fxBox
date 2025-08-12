import React, { useState } from "react";
import IconAll from "../../../Svg/IconAll";
import LotteryIconSlider from "../../../Svg/LotteryIconSlider";
import VideoIcon from "../../../Svg/VideoIcon";
import IconChess from "../../../Svg/IconChess";
import IconSlot from "../../../Svg/IconSlot";
const tabs = [
  { label: "All", icon: <IconAll /> },
  { label: "Lottery", icon: <LotteryIconSlider /> },
  { label: "Casino", icon: <VideoIcon /> },
  { label: "Rummy", icon: <IconChess /> },
  { label: "Slot", icon: <IconSlot /> },

  // Add more tabs as needed
];

const SliderTabActivity = ({ initialTab = "All", onTabConfirm }) => {
  const [selectedTab, setSelectedTab] = useState(initialTab);

  // Handle selecting a new tab
  const handleSelectTab = (tab) => {
    setSelectedTab(tab);
    if (onTabConfirm) onTabConfirm(tab);
  };

  const calculateTransform = () => {
    const selectedIndex = tabs.findIndex((tab) => tab.label === selectedTab);

    // Start sliding when the third tab or later is selected
    if (selectedIndex >= 2) {
      return `translateX(-${(selectedIndex - 2) * 70}px)`; // Adjust based on tab width
    }
    return "translateX(0)"; // No sliding for the first two tabs
  };

  return (
    <div className="relative overflow-hidden rounded-lg mt-2 mx-3">
      <div
        className="flex items-center space-x-2 transition-transform duration-300"
        style={{
          transform: calculateTransform(), // Center the selected tab
        }}
      >
        {tabs.map((tab) => (
          <div
            key={tab.label}
            className={`flex flex-col items-center justify-center px-6 py-1 w-[200px] h-[50px] rounded-lg cursor-pointer transition-all duration-300 ${
              tab.label === selectedTab
                ? "bg-gamenav-gradient text-white"
                : "bg-white text-gray-l1"
            } font-sansSerif`}
            onClick={() => handleSelectTab(tab.label)}
          >
            <div className="text-xl">{tab.icon}</div>
            <span className="text-12px font-sansSerif">{tab.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderTabActivity;
