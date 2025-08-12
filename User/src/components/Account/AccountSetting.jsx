import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAvatar } from '../../AvatarContext';
import Securityinfo from './Securityinfo';
import Accountnav from './Accountnav';
import { MdNavigateNext } from 'react-icons/md';
import NicknameIcon from '../../Svg/NicknameIcon';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { IoCopyOutline } from 'react-icons/io5';
import { GiCheckMark } from 'react-icons/gi';

const AccountSetting = () => {
  const { avatar } = useAvatar();
  const [name, setName] = useState('NAME');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputName, setInputName] = useState(name);
  const [showToast, setShowToast] = useState(false); // State to show/hide toast
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const confirmNameChange = () => {
    setName(inputName);
    closeModal();
  };

 // Function to handle copying of transaction ID
 const handleCopy = (transactionID) => {
  // Copy the transaction ID to clipboard
  navigator.clipboard.writeText(transactionID)
    .then(() => {
      // Show the toast on successful copy
      setShowToast(true);
      // Hide the toast after 2 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    })
    .catch((err) => {
      console.error('Failed to copy: ', err);
    });
};


  return (
    <div className="container-fluid max-w-[420px] px-0 bg-[#f7f7ff]">
      <div className="h-auto bg-[#f7f7ff]">
        <div className="heading">
          <Accountnav />
          <div className="content-setting-area">
            <div className="px-3 bg-gamenav-gradient rounded-b-[140px]">
              <div className="p-3 text-gray-600 bg-white rounded-lg shadow-sm">
                <div className="rounded-4">
                  <div className="flex justify-between">
                    <div className="avatar-photo">
                      <img
                        src={avatar}
                        alt="Avatar"
                        className="w-20 h-20 p-1 rounded-full"
                      />
                    </div>
                    <Link to="/changeAvatar" className="inline-flex pt-6">
                      <div className="text-13px text-[#768096] ">
                        Change avatar &nbsp;
                      </div>
                      <div className="">
                        <MdNavigateNext className="text-2xl text-[#768096]" />
                      </div>
                    </Link>
                  </div>

                  <div className="flex justify-between py-5 border-b-[1px] border-gray-100">
                    <div>Nickname</div>
                    <div
                      className="inline-flex cursor-pointer"
                      onClick={openModal}
                    >
                      <div className="text-16px text-gray-950">
                        {name} &nbsp;
                      </div>
                      <div className="">
                        <MdNavigateNext className="text-2xl text-[#768096] " />
                      </div>
                    </div>
                  </div>

                  {isModalOpen && (
                    <>
                      {/* Overlay */}
                      <div className="fixed inset-0 z-40 bg-black bg-opacity-40"></div>

                      {/* Modal */}
                      <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="p-3 bg-timer-gradient rounded-2xl">
                          <div className="py-1 pb-3 text-xl font-semibold text-center text-white font-Poppins">
                            Change NickName
                          </div>
                          <div className="bg-white p-5 rounded-lg shadow-lg  w-[22rem]">
                            <h3 className="inline-flex mb-4 text-lg font-semibold">
                              <NicknameIcon className="w-6 h-6 mt-1 text-red-500 me-2" />
                              Change Name
                            </h3>
                            <input
                              type="text"
                              className="w-full p-3 px-6 mb-4 bg-gray-100 rounded-full"
                              value={inputName}
                              onChange={(e) => setInputName(e.target.value)}
                              placeholder="Enter new name"
                            />
                            <div className="mt-6">
                              <button
                                className="w-full py-3 text-white rounded-full bg-timer-gradient mt-28 font-Poppins"
                                onClick={confirmNameChange}
                              >
                                Confirm
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Cancel Button */}
                      <button
                        className="fixed z-50 px-4 text-3xl text-gray-100 transform -translate-x-1/2 rounded-full bottom-36 left-1/2"
                        onClick={closeModal}
                      >
                        <IoMdCloseCircleOutline className="inline mr-1" />
                      </button>
                    </>
                  )}
                  <div className="flex justify-between py-5">
                    <div>UID</div>
                    <div className="inline-flex cursor-pointer">
                      <div className="text-15px text-gray-950">
                        807656 &nbsp;
                      </div>
                      <div className="pt-1 text-red-600">
                        <IoCopyOutline className='cursor-default'  onClick={() => handleCopy()}/>
                      </div>
                    </div>
                  </div>
                {/* Toast Notification */}
                {showToast && (
                  <div
                    className="fixed inline-block px-7 py-5 text-white transform -translate-x-1/2 -translate-y-1/2 bg-[rgba(0,0,0,0.7)] rounded-lg shadow top-1/2 left-1/2"
                    style={{
                      zIndex: 9999,
                      transition: 'opacity 0.5s ease-in-out',
                      '--van-toast-max-width': '70%',
                    }}
                  >
                    <div className="flex flex-col items-center justify-center">
                      {/* Check Icon */}
                      <div className='pb-2'>
                        <GiCheckMark className="text-3xl font-extrabold text-white"/>
                      </div>
                      {/* Refresh Text */}
                      <span className="text-sm font-custom2">Copy</span>
                      {/* Successfully Text */}
                      <span className="text-sm font-custom2">Successful</span>
                    </div>
                  </div>
                )}

                </div>
              </div>
            </div>
            <Securityinfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
