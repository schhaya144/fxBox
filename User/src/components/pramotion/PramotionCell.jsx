import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import invitationImg from "../../assets/invitation.png";
import downloadImg from "../../assets/copy.png";
import eightImg from "../../assets/right-arrowB.png";
import TeamPortIcon from "../svg's/TeamPortIcon";
import CommissionIcon from "../svg's/CommissionIcon";
import InviteRegIcon from "../svg's/InviteRegIcon";
import ServerIcon from "../svg's/ServerIcon";
import RebateRatioIcon from "../svg's/RebateRaioIcon";
import CopyCodeIcon from "../svg's/CopyCodeIcon";
import CopyIcon from "../svg's/COpyIcon";
import { GiCheckMark } from "react-icons/gi";

const PramotionCell = () => {
  const [showToast, setShowToast] = useState(false);
  const currentUser = useSelector((state) => state?.user?.user);

  // Check if currentUser exists before trying to access properties
  if (!currentUser) {
    return <p>Loading...</p>; // or some placeholder content
  }

  const handleCopy = (code) => {
    if (!code) return;
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setShowToast(true); // Show the toast
        setTimeout(() => {
          setShowToast(false); // Hide the toast after 2 seconds
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  // Data array for the promotion content
  const data = [
    {
      label: "Copy invitation code",
      code: currentUser.referralCode || 'N/A', // Fallback in case referralCode is undefined
      Icon: CopyCodeIcon,
      Copy: CopyIcon,
    },
    {
      label: "Subordinate Data",
      Icon: TeamPortIcon,
      downloadImgSrc: eightImg,
      path: "/subordinate-data",
    },
    {
      label: "Commission Details",
      Icon: CommissionIcon,
      downloadImgSrc: eightImg,
      path: "/commission-details",
    },
    {
      label: "Business Plan",
      Icon: InviteRegIcon,
      downloadImgSrc: eightImg,
      path: "/invitation-rule",
    },
    {
      label: "Agent line customer service",
      Icon: ServerIcon,
      downloadImgSrc: eightImg,
      path: "/customer-service",
    },
  ];

  return (
    <div className="mx-4 my-4">
      <div>
        {data.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className="flex items-center justify-between p-3 mb-3 bg-gray-200 font-custom text-14px rounded-xl"
          >
            <div className="flex items-center space-x-2">
              <item.Icon className="w-8 h-8 text-fxbt-blue" />
              <span>{item.label}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              {item.code && <span>{item.code}</span>}
              {item.Copy && (
                <button onClick={() => handleCopy(item.code)}>
                  <item.Copy className="cursor-pointer" />
                </button>
              )}

              {/* Conditionally render image except for the first item */}
              {index !== 0 && item.downloadImgSrc && (
                <img
                  src={item.downloadImgSrc}
                  alt="Download"
                  className="w-5 h-5"
                />
              )}
            </div>
          </Link>
        ))}
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

export default PramotionCell;
