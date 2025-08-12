import React, { useState, useRef, useEffect } from 'react';
import LotteryIconSlider from '../../../Svg/LotteryIconSlider';
import VideoIcon from '../../../Svg/VideoIcon';
import IconChess from '../../../Svg/IconChess';
import IconFlash from '../../../Svg/IconFlash';
import IconSlot from '../../../Svg/IconSlot';

const tabs = [
  { label: 'Lottery', icon: <LotteryIconSlider /> },
  { label: 'Casino', icon: <VideoIcon /> },
  { label: 'Fishing', icon: <LotteryIconSlider /> },
  { label: 'Rummy', icon: <IconChess /> },
  { label: 'Original', icon: <IconFlash /> },
  { label: 'Slots', icon: <IconSlot /> },
];

const BetSliderTab = ({ initialTab = 'Lottery', onTabConfirm }) => {
  const [selectedTab, setSelectedTab] = useState(initialTab);
  const containerRef = useRef(null);
  const tabRefs = useRef([]);

  useEffect(() => {
    if (selectedTab && containerRef.current && tabRefs.current.length) {
      const containerWidth = containerRef.current.offsetWidth;
      const selectedIndex = tabs.findIndex((tab) => tab.label === selectedTab);
      const selectedTabElement = tabRefs.current[selectedIndex];

      if (selectedTabElement) {
        const { offsetLeft, offsetWidth } = selectedTabElement;
        const scrollPosition =
          offsetLeft + offsetWidth / 2 - containerWidth / 2;

        containerRef.current.style.transform = `translateX(${-Math.max(
          0,
          Math.min(
            scrollPosition,
            containerRef.current.scrollWidth - containerWidth
          )
        )}px)`;
      }
    }
  }, [selectedTab]);

  const handleSelectTab = (tab) => {
    setSelectedTab(tab);
    if (onTabConfirm) onTabConfirm(tab);
  };

  return (
    <div className="relative mx-3 mt-1 overflow-hidden rounded-lg">
      <div
        ref={containerRef}
        className="flex items-center space-x-2 transition-transform duration-300"
      >
        {tabs.map((tab, index) => (
          <div
            key={tab.label}
            ref={(el) => (tabRefs.current[index] = el)}
            className={`flex flex-col items-center justify-center px-10 py-1 rounded-lg cursor-pointer transition-all duration-300 ${
              tab.label === selectedTab
                ? 'bg-gamenav-gradient text-white'
                : 'bg-white text-gray-600'
            }`}
            onClick={() => handleSelectTab(tab.label)}
          >
            <div className="text-xl">{tab.icon}</div>
            <span className="text-sm">{tab.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BetSliderTab;
