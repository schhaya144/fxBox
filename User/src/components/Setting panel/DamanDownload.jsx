import React from 'react';
import DamanIcon from '../../assets/h5setting.ico';

const DamanDownload = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-Download-gradient h-full py-6">
      <p className="p-2 text-[12.5px] text-white font-bahnschrift">
        Use your phone to scan the QR Code to download the app
      </p>
      <div className="flex justify-center items-center flex-col p-2 text-[10.5px] text-white font-bahnschrift">
        <img
          src={DamanIcon}
          className="object-fill w-[40px] h-[40px]" // Updated size for better quality
          alt="Daman Icon"
          loading="lazy" // Added lazy loading
        />
        Daman
      </div>

      <div className="w-[120px] h-[120px] border-2 mb-6"></div>
    </div>
  );
};

export default DamanDownload;
