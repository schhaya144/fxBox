import React, { useState } from "react";
import Card from "./Card";
import BettingStatistics from "./BettingStatistics";
import WingoResult from "./WingoResult";
const ThirtySec = () => {
  const [showStatistics, setShowStatistics] = useState(false);
  const [showResult, setShowResult] = useState(false);
 

  const handleInteraction = () => {
    setShowStatistics(true);
    setShowResult(true);
  };
  const coloredCardsData = [
    { color: "bg-customRed", label: "Join Red", value: 0 },
    { color: "bg-customPurple", label: "Join Violet", value: 0 },
    { color: "bg-customGreen", label: "Join Green", value: 0 },
    { color: "bg-cyan-500", label: "Total Amount", value: 0 },
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
    <div className="w-full min-h-screen" onClick={handleInteraction }>
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
      
   {showResult && <WingoResult/>}</div>
    
  );
};

export default ThirtySec;

// import React from "react";
// import { FaShoppingCart } from "react-icons/fa";
// import BettingStatistics from "./BettingStatistics";


// const ThirtySec = () => {
//   return (
//     <div className="w-full min-h-screen ">
//       <div className="w-full p-2 ">
       
//         {/* Wrapper div added */}
//         <div className="grid justify-start grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        
//           {/* Increased gap for cards */}
//           {/* Card 30sec */}
//           <div className="flex items-center w-full cursor-pointer">
//             <div className="flex items-center w-full p-2 rounded bg-darkSidebar shadow-custom">
            
//               {/* Reduced padding */}
//               <div
//                 className="flex items-center justify-center rounded shadow-lg bg-customRed"
//                 style={{ width: "55px", height: "50px" }}
//               >
               
//                 {/* Reduced icon size */}
//                 <FaShoppingCart className="text-2xl text-white" />
//                 {/* Reduced icon size */}
//               </div>
//               <div className="flex flex-col gap-1 ml-3">
               
//                 {/* Flex container for vertical alignment */}
//                 <p className="text-white">Join Red</p>
//                 {/* Reduced text size */}
//                 <p className="text-white">0</p>
//                 {/* Reduced text size */}
//               </div>
//             </div>
//           </div>
//           {/* Card 1min */}
//           <div className="flex items-center w-full cursor-pointer">
//             <div className="flex items-center w-full p-2 rounded bg-darkSidebar shadow-custom">
//               <div
//                 className="flex items-center justify-center rounded shadow-lg bg-customPurple"
//                 style={{ width: "55px", height: "50px" }}
//               >
//                 <FaShoppingCart className="text-2xl text-white" />
//               </div>
//               <div className="flex flex-col gap-1 ml-3">
//                 <p className="text-white">Join Violet</p>
//                 <p className="text-white ">0</p>
//               </div>
//             </div>
//           </div>
//           {/* Card 3min */}
//           <div className="flex items-center w-full cursor-pointer">
//             <div className="flex items-center w-full p-2 rounded bg-darkSidebar shadow-custom">
//               <div
//                 className="flex items-center justify-center rounded shadow-lg bg-customGreen"
//                 style={{ width: "55px", height: "50px" }}
//               >
//                 <FaShoppingCart className="text-2xl text-white" />
//               </div>
//               <div className="flex flex-col gap-1 ml-3">
//                 <p className="text-white">Join Green</p>
//                 <p className="text-white ">0</p>
//               </div>
//             </div>
//           </div>
//           {/* Card 5min */}
//           <div className="flex items-center w-full cursor-pointer">
//             <div className="flex items-center w-full p-2 rounded bg-darkSidebar shadow-custom">
//               <div
//                 className="flex items-center justify-center rounded shadow-lg bg-cyan-500"
//                 style={{ width: "55px", height: "50px" }}
//               >
//                 <FaShoppingCart className="text-2xl text-white" />
//               </div>
//               <div className="flex flex-col gap-1 ml-3 ">
//                 {" "}
//                 {/* Kept flex-col for vertical alignment */}
//                 <p className="text-white ">Total Amount</p>{" "}
//                 {/* Text centered */}
//                 <p className="text-white ">0</p>
//                 {/* Value centered below text */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="w-full p-2 ">
//         {/* Wrapper div added */}
//         <div className="grid justify-start w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
//           {/* Increased gap for cards */}
//           {/* Card 30sec */}
//           <div className="flex items-center w-full cursor-pointer">
//             <div className="flex items-center w-full p-2 rounded bg-darkSidebar shadow-custom">
              
//               {/* Reduced padding */}
//               <div
//                 className="flex items-center justify-center rounded shadow-lg bg-customBlue"
//                 style={{ width: "55px", height: "50px" }}
//               >
//                 {" "}
//                 {/* Reduced icon size */}
//                 <h2 className="text-2xl text-white ">0</h2>{" "}
//                 {/* Reduced icon size */}
//               </div>
//               <div className="flex flex-col gap-1 ml-3">
//                 {" "}
//                 {/* Flex container for vertical alignment */}
//                 <p className="text-white">Join 0</p>{" "}
//                 {/* Reduced text size */}
//                 <p className="text-white">0</p>{" "}
//                 {/* Reduced text size */}
//               </div>
//             </div>
//           </div>
//           {/* Card 1min */}
//           <div className="flex items-center w-full cursor-pointer">
//             <div className="flex items-center w-full p-2 rounded bg-darkSidebar shadow-custom">
//               <div
//                 className="flex items-center justify-center rounded shadow-lg bg-customBlue"
//                 style={{ width: "55px", height: "50px" }}
//               >
//                 <h2 className="text-2xl text-white ">1</h2>
//               </div>
//               <div className="flex flex-col gap-1 ml-3">
//                 <p className="text-white ">Join 1</p>
//                 <p className="text-white ">0</p>
//               </div>
//             </div>
//           </div>
//           {/* Card 3min */}
//           <div className="flex items-center w-full cursor-pointer">
//             <div className="flex items-center w-full p-2 rounded bg-darkSidebar shadow-custom">
//               <div
//                 className="flex items-center justify-center rounded shadow-lg bg-customBlue"
//                 style={{ width: "55px", height: "50px" }}
//               >
//                 <h2 className="text-2xl text-white">2</h2>
//               </div>
//               <div className="flex flex-col gap-1 ml-3">
//                 <p className="text-white ">Join 2</p>
//                 <p className="text-white">0</p>
//               </div>
//             </div>
//           </div>
//           {/* Card 5min */}
//           <div className="flex items-center w-full cursor-pointer">
//             <div className="flex items-center w-full p-2 rounded bg-darkSidebar shadow-custom">
//               <div
//                 className="flex items-center justify-center rounded shadow-lg bg-customBlue"
//                 style={{ width: "55px", height: "50px" }}
//               >
//                 <h2 className="text-2xl text-white">3</h2>
//               </div>
//               <div className="flex flex-col gap-1 ml-3">
//                 <p className="text-white">Join 3</p>
//                 <p className="text-white">0</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-full p-2 ">
//         {" "}
//         {/* Wrapper div added */}
//         <div className="grid justify-start w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
//           {" "}
//           {/* Increased gap for cards */}
//           {/* Card 30sec */}
//           <div className="flex items-center w-full cursor-pointer">
//             <div className="flex items-center w-full p-2 rounded bg-darkSidebar shadow-custom">
//               {" "}
//               {/* Reduced padding */}
//               <div
//                 className="flex items-center justify-center rounded shadow-lg bg-customBlue"
//                 style={{ width: "55px", height: "50px" }}
//               >
//                 {" "}
//                 {/* Reduced icon size */}
//                 <h2 className="text-2xl text-white ">4</h2>
//                 {/* Reduced icon size */}
//               </div>
//               <div className="flex flex-col gap-1 ml-3">
//                 {" "}
//                 {/* Flex container for vertical alignment */}
//                 <p className="text-white ">Join 4</p>{" "}
//                 {/* Reduced text size */}
//                 <p className="text-white ">0</p>{" "}
//                 {/* Reduced text size */}
//               </div>
//             </div>
//           </div>
//           {/* Card 1min */}
//           <div className="flex items-center w-full cursor-pointer">
//             <div className="flex items-center w-full p-2 rounded bg-darkSidebar shadow-custom">
//               <div
//                 className="flex items-center justify-center rounded shadow-lg bg-customBlue"
//                 style={{ width: "55px", height: "50px" }}
//               >
//                 <h2 className="text-2xl text-white ">5</h2>
//               </div>
//               <div className="flex flex-col gap-1 ml-3">
//                 <p className="text-white">Join 5</p>
//                 <p className="text-white ">0</p>
//               </div>
//             </div>
//           </div>
//           {/* Card 3min */}
//           <div className="flex items-center w-full cursor-pointer">
//             <div className="flex items-center w-full p-2 rounded bg-darkSidebar shadow-custom">
//               <div
//                 className="flex items-center justify-center rounded shadow-lg bg-customBlue"
//                 style={{ width: "55px", height: "50px" }}
//               >
//                 <h2 className="text-2xl text-white">6</h2>
//               </div>
//               <div className="flex flex-col gap-1 ml-3">
//                 <p className="text-white ">Join 6</p>
//                 <p className="text-white ">0</p>
//               </div>
//             </div>
//           </div>
//           {/* Card 5min */}
//           <div className="flex items-center w-full cursor-pointer">
//             <div className="flex items-center w-full p-2 rounded bg-darkSidebar shadow-custom">
//               <div
//                 className="flex items-center justify-center rounded shadow-lg bg-customBlue"
//                 style={{ width: "55px", height: "50px" }}
//               >
//                 <h2 className="text-2xl text-white ">7</h2>
//               </div>
//               <div className="flex flex-col gap-1 ml-3">
//                 <p className="text-white ">Join 7</p>
//                 <p className="text-white ">0</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-full p-2 ">
//         {" "}
//         {/* Wrapper div added */}
//         <div className="grid justify-start w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
//           {" "}
//           {/* Increased gap for cards */}
//           {/* Card 30sec */}
//           <div className="flex items-center w-full cursor-pointer">
//             <div className="flex items-center w-full p-2 rounded bg-darkSidebar shadow-custom">
//               {" "}
//               {/* Reduced padding */}
//               <div
//                 className="flex items-center justify-center rounded shadow-lg bg-customBlue"
//                 style={{ width: "55px", height: "50px" }}
//               >
//                 {" "}
//                 {/* Reduced icon size */}
//                 <h2 className="text-2xl text-white ">8</h2>{" "}
//                 {/* Reduced icon size */}
//               </div>
//               <div className="flex flex-col gap-1 ml-3">
//                 {" "}
//                 {/* Flex container for vertical alignment */}
//                 <p className="text-white">Join 8</p>{" "}
//                 {/* Reduced text size */}
//                 <p className="text-white ">0</p>{" "}
//                 {/* Reduced text size */}
//               </div>
//             </div>
//           </div>
//           {/* Card 1min */}
//           <div className="flex items-center w-full cursor-pointer">
//             <div className="flex items-center w-full p-2 rounded bg-darkSidebar shadow-custom">
//               <div
//                 className="flex items-center justify-center rounded shadow-lg bg-customBlue"
//                 style={{ width: "55px", height: "50px" }}
//               >
//                 <h2 className="text-2xl text-white">9</h2>
//               </div>
//               <div className="flex flex-col gap-1 ml-3">
//                 <p className="text-white ">Join 9</p>
//                 <p className="text-white ">0</p>
//               </div>
//             </div>
//           </div>
//           {/* Card 3min */}
//           <div className="flex items-center w-full cursor-pointer">
//             <div className="flex items-center w-full p-2 rounded bg-darkSidebar shadow-custom">
//               <div
//                 className="flex items-center justify-center rounded shadow-lg bg-customBlue"
//                 style={{ width: "55px", height: "50px" }}
//               >
//                 <h2 className="text-2xl text-white">B</h2>
//               </div>
//               <div className="flex flex-col gap-1 ml-3">
//                 <p className="text-white ">Join Big</p>
//                 <p className="text-white">0</p>
//               </div>
//             </div>
//           </div>
//           {/* Card 5min */}
//           <div className="flex items-center w-full cursor-pointer">
//             <div className="flex items-center w-full p-2 rounded bg-darkSidebar shadow-custom">
//               <div
//                 className="flex items-center justify-center rounded shadow-lg bg-customBlue"
//                 style={{ width: "55px", height: "50px" }}
//               >
//                 <h2 className="text-2xl text-white">S</h2>
//               </div>
//               <div className="flex flex-col gap-1 ml-3">
//                 <p className="text-white ">Join Small</p>
//                 <p className="text-white ">0</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ThirtySec;

