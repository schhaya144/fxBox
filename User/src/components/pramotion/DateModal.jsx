import React, { useEffect, useState } from 'react';

const DateModal = ({ isOpen, onClose, confirm, children }) => {
  const [showModal, setShowModal] = useState(false);

 
  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      const timer = setTimeout(() => setShowModal(false), 300); 
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!showModal) return null; 

  return (
    <div className={`fixed top-0 left-0 right-0 bottom-0 z-40 bg-black bg-opacity-50 flex justify-center items-end transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`bg-white p-4 shadow-lg rounded-t-2xl lg:w-[400px] xl:w-[400px] sm:w-8/12 w-full max-w-full pb-8 transition-transform duration-300 transform ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="flex justify-between items-center mb-4">
          {/* Close Button */}
          <button onClick={onClose} className="text-gray-500 text-13px">
            Cancel
          </button>
          <h2 className="text-16px font-semibold">Choose a Date</h2>
          {/* Confirm Button */}
          <button onClick={confirm} className="text-fxbt-blue font-bold text-13px">
            Confirm
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DateModal;
