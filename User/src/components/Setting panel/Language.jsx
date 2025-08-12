import React, { useState } from 'react';
import english from '../../assets/english.png';
import hindi from '../../assets/hindi.png';
import NavPramotion from '../pramotion/NavPramotion';

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('english');

  const handleCheckboxChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div>
      <NavPramotion heading={'Language'} linkPath={'/account'} />
      <div className="mt-3 mx-3 rounded-lg">
        {/* English Option */}
        <div
          className="flex justify-between p-3 bg-white cursor-pointer"
          onClick={() => handleCheckboxChange('english')}
        >
          <div className="flex gap-3">
            <img src={english} alt="English" className="w-7 h-7" />
            <span>English</span>
          </div>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={selectedLanguage === 'english'}
              onChange={() => handleCheckboxChange('english')}
              className="hidden"
            />
            <div
              className={`w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center transition-colors duration-200 ${
                selectedLanguage === 'english'
                  ? 'bg-red-500 text-white'
                  : 'bg-white'
              }`}
            >
              {selectedLanguage === 'english' && (
                <span className="text-white text-md font-bold">&#10003;</span>
              )}
            </div>
          </label>
        </div>

        {/* Hindi Option */}
        <div
          className="flex justify-between p-3 bg-white mt-3 cursor-pointer"
          onClick={() => handleCheckboxChange('hindi')}
        >
          <div className="flex gap-3">
            <img src={hindi} alt="Hindi" className="w-7 h-7" />
            <span>Hindi</span>
          </div>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={selectedLanguage === 'hindi'}
              onChange={() => handleCheckboxChange('hindi')}
              className="hidden"
            />
            <div
              className={`w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center transition-colors duration-200 ${
                selectedLanguage === 'hindi'
                  ? 'bg-red-500 text-white'
                  : 'bg-white'
              }`}
            >
              {selectedLanguage === 'hindi' && (
                <span className="text-white text-md font-bold ">&#10003;</span>
              )}
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Language;
