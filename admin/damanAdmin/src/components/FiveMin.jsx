import React,{useState} from 'react';
import Card from './Card';
import BettingStatistics from "./BettingStatistics";

const FiveMin = () => {
  const [showStatistics, setShowStatistics] = useState(false);

  const handleClick = () => {
    setShowStatistics(true);
  };
  const coloredCardsData = [
    { color: "bg-customRed", label: "Join Red", value: 0 },
    { color: "bg-customPurple", label: "Join Violet", value: 0 },
    { color: "bg-customGreen", label: "Join Green", value: 0 },
    { color: "bg-cyan-500", label: "Total Amount", value: 0 }, // Changed to customOrange for clarity
  ];

  const numberCardsData = [
    { label: "Join 0", value: 0 },
    { label: "Join 1", value: 1 },
    { label: "Join 2", value: 2 },
    { label: "Join 3", value: 3 },
    { label: "Join 4", value: 4 },
    { label: "Join 5", value: 5 },
    { label: "Join 6", value: 6 },
    { label: "Join 7", value: 7 },
    { label: "Join 8", value: 8 },
    { label: "Join 9", value: 9 },
    { label: "Join Big", value: 'B' },
    { label: "Join Small", value: 'S' },
  ];

  return (
    <div className="w-full min-h-screen"  onClick={handleClick}>
      {/* Colored Cards */}
      <div className="w-full p-2">
        <div className="grid justify-start grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {coloredCardsData.map((card, index) => (
            <Card key={index} color={card.color} label={card.label} value={card.value} isNumberCard={false} />
          ))}
        </div>
      </div>

      {/* Number Cards */}
      <div className="w-full p-2">
        <div className="grid justify-start grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {numberCardsData.map((card, index) => (
            <Card key={index} color="customBlue" label={card.label} value={card.value} isNumberCard={true} />
          ))}
        </div>
      </div>
    {/* Betting Statistics - Conditional Rendering */}
    {showStatistics && <BettingStatistics />}
    
    </div>
  );
};
export default FiveMin;
