import React from 'react';
import SvgEditIcon from '../../Svg/SvgEditIcon';
import MessageIcon from '../../Svg/MessageIcon.jsx';
import GoogleIcon from '../../Svg/GoogleIcon.jsx';
import VersionUpdateIcon from '../../Svg/VersionUpdateIcon.jsx';
import { GrFormNext } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Securityinfo = () => {
  return (
    <>
      {/* Security Information */}
      <div className="mt-5">
        <div className="p-5">
          <div className="flex">
            <div className="text-lg font-bold text-red-500">|</div>
            <div className="font-bold ps-2 pt-1 font-bahnschrift text-lg">
              Security information
            </div>
          </div>
          <div className="font-medium text-gray-600">
            <div className="shadow-sm">
              {/* Login Password */}
              <Link
                to="/ChangeLoginPassword"
                className="py-3 mt-2 px-2 flex justify-between items-center bg-white rounded-xl"
              >
                <div className="flex items-center">
                  <SvgEditIcon />
                  <span className="ml-2">Login Password</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#768096]">Edit</span>
                  <GrFormNext className="ml-2" />
                </div>
              </Link>
            </div>
            <div className="shadow-sm mt-2">
              {/* Bind Mailbox */}
              <div className="py-5 pl-4 px-2 flex justify-between items-center bg-white rounded-xl">
                <div className="flex items-center">
                  <MessageIcon />
                  <span className="ml-2 ">Bind mailbox</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#768096]">to bind</span>
                  <GrFormNext className="ml-2" />
                </div>
              </div>
            </div>
            <div className="shadow-sm mt-2">
              {/* Google Verification */}
              <div className="py-3 pl-2 px-2 flex justify-between items-center bg-white rounded-xl">
                <div className="flex items-center">
                  <GoogleIcon />
                  <span className="ml-2">Google Verification</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#768096]">Unopened</span>
                  <GrFormNext className="ml-2" />
                </div>
              </div>
            </div>

            <div className="shadow-sm mt-2">
              {/* Update Version */}
              <div className="py-3 pl-2 px-2 flex justify-between items-center bg-white rounded-xl">
                <div className="flex items-center">
                  <VersionUpdateIcon />
                  <span className="ml-2">Update version</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#768096]">1.0.9</span>
                  <GrFormNext className="ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Securityinfo;
