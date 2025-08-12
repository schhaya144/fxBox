import React, { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar";
import Tapbar from "../Tapbar";
import { GiCheckMark } from "react-icons/gi";

const WalletMain = () => {
  const [showToast, setShowToast] = useState(false);

  // Access currentUser from Redux state
  const currentUser = useSelector(state => state?.user?.user);

  // Function to handle copying the referral code to clipboard
  const handleCopyCode = () => {
    const referralCode = currentUser?.referralCode || '123456';
    navigator.clipboard.writeText(referralCode)
      .then(() => {
        setShowToast(true); // Show the toast when the code is copied
        setTimeout(() => {
          setShowToast(false); // Hide the toast after 2 seconds
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="min-h-screen mx-auto">
      <Navbar heading={'Invitation'} linkPath={'/home'} />
      
      {/* Invitation Section */}
      <div className="px-2 py-4 mx-2 my-2 text-lg text-center text-white bg-gray-800 rounded-lg">
        Invite Link
      </div>
      
      {/* Display My Invitation Code */}
      <div className="px-4 py-5 mx-2 my-2 text-lg font-thin text-white bg-gray-800 rounded-lg">
        <p className="">My Invitation Code</p>
        <div className="flex justify-between">
          <p className="font-bold">{currentUser?.referralCode || '123456'}</p>
          <p
            className="px-3 py-1 text-sm text-center text-white rounded-full cursor-pointer bg-primary"
            onClick={handleCopyCode}
          >
            Copy Code
          </p>
        </div>
      </div>

      {/* Other instructions */}
      <div className="w-full p-6 text-left text-white rounded-lg shadow-lg">
        <ul className="space-y-4 list-disc list-inside">
          <li>You can share it on WhatsApp, Facebook, Instagram, and YouTube platforms to strengthen your team.</li>
          <li>Friends can scan your QR and become your subordinate.</li>
          <li>Friends you register through your invitation link will become your subordinate.</li>
          <li>Friends you register and fill in your invitation code will become your subordinate.</li>
        </ul>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div
          className="fixed inline-block px-6 py-5 text-white transform -translate-x-1/2 -translate-y-1/2 bg-[rgba(0,0,0,0.7)] rounded-lg shadow-lg top-1/2 left-1/2 z-50"
          style={{ transition: "opacity 0.5s ease-in-out" }}
        >
          <div className="flex flex-col items-center justify-center">
            {/* Check Icon */}
            <div className="pb-2">
              <GiCheckMark className="text-3xl font-extrabold text-white" />
            </div>
            <span className="text-sm font-custom2">Copy </span>
            <span className="text-sm font-custom2">Successful</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletMain;
