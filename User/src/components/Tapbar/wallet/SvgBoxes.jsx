import React from 'react';

const SvgBoxes = () => {
  // Function to convert the LotteryIcon component to an SVG string if needed
  const getSvgString = () => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-gray-500" viewBox="0 0 220 160" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M110 130.476C137.877 130.476 160.476 107.877 160.476 80C160.476 52.1228 137.877 29.5238 110 29.5238C82.1228 29.5238 59.5238 52.1228 59.5238 80C59.5238 107.877 82.1228 130.476 110 130.476ZM110 133C139.271 133 163 109.271 163 80C163 50.7289 139.271 27 110 27C80.7289 27 57 50.7289 57 80C57 109.271 80.7289 133 110 133Z" fill="currentColor"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M76.6496 121.194C83.9231 111.56 96.1469 107.762 110 107.762C123.853 107.762 136.077 111.56 143.35 121.194C154.933 111.806 162.477 97.6313 162.974 81.6808C162.192 82.2271 161.351 82.5241 160.476 82.5241C156.295 82.5241 152.905 75.7443 152.905 67.3811C152.905 61.9503 154.334 57.1872 156.482 54.5147C147.471 38.1151 130.033 27 110 27C89.9666 27 72.5292 38.1151 63.5184 54.5147C65.6658 57.1872 67.0953 61.9503 67.0953 67.3811C67.0953 75.7443 63.7054 82.5241 59.5239 82.5241C58.6487 82.5241 57.8082 82.2271 57.0262 81.6808C57.523 97.6313 65.0675 111.806 76.6496 121.194ZM150.381 66.1192C150.381 86.3303 132.302 102.715 110 102.715C87.6982 102.715 69.6191 86.3303 69.6191 66.1192C69.6191 45.9081 87.6982 29.5238 110 29.5238C132.302 29.5238 150.381 45.9081 150.381 66.1192Z" fill="currentColor"/>
    </svg>`;

    return svg;
  };

  // Style to set the SVG background with the desired opacity
  const backgroundStyle = {
    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
      getSvgString()
    )}")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    opacity: 0.02, // Set opacity to the background only
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        {[...Array(12)].map((_, index) => (
          <div className="h-20 w-full bg-white rounded-md shadow-sm text-center relative flex items-center justify-center flex-col" key={index}>
            <div className="absolute inset-0" style={backgroundStyle}></div>
            <span className="relative z-10 text-gray-500 font-semibold text-xs">
              0.00
            </span>
            <span className="relative z-10 text-gray-300 font-semibold text-xs">Lottery</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default SvgBoxes;
