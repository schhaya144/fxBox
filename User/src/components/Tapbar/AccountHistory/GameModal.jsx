import React, { useEffect, useState } from 'react';

const GameModal = ({ isOpen, onClose, children }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      const timer = setTimeout(() => setShowModal(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleBackgroundClick = (e) => {
    if (e.target.id === 'modal-background') {
      onClose(); // Close the modal when clicking outside the modal content
    }
  };

  if (!showModal) return null;

  return (
    <div
      id="modal-background"
      className={`fixed top-0 left-0 right-0 bottom-0 z-40 bg-black bg-opacity-50 flex justify-center items-end transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleBackgroundClick}
    >
      <div
        className={`bg-white p-4 shadow-lg rounded-t-2xl lg:w-[400px] xl:w-[400px] sm:w-8/12 w-full max-w-full pb-8 transition-transform duration-300 transform ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div>{children}</div>
      </div>
    </div>
  );
};

export default GameModal;
