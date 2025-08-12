import React, { useState, useRef } from "react";
import NavPramotion from "../../pramotion/NavPramotion";
import rightImg from "../../../assets/right-arrowBB.png";
import { IoFolderOutline } from "react-icons/io5";
import { RiImageAddLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { GoQuestion } from "react-icons/go";

const SubmitUTR = () => {
  // State to store selected files
  const [depositProofImage, setDepositProofImage] = useState(null);
  const [videoStatement, setVideoStatement] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

  // Refs for file inputs
  const depositProofInputRef = useRef(null);
  const videoInputRef = useRef(null);
  const pdfInputRef = useRef(null);

  // Handlers to trigger file inputs
  const handleBoxClick = (ref) => {
    if (ref.current) {
      ref.current.click();
    }
  };

  // Handlers to update state with selected files
  const handleDepositProofChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setDepositProofImage(URL.createObjectURL(file)); // Generate temporary URL for the image
    }
  };

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideoStatement(file.name); // Store file name for display
    }
  };

  const handlePdfChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPdfFile(file.name); // Store file name for display
    }
  };

  return (
    <div>
      <div
        className={`sticky top-0 left-0 right-0 z-20 pt-2 pb-2 flex items-center justify-between w-full px-4 mb-0 bg-teal-500`}
      >
        {/* Left Side - Back Link Icon */}
        <Link to={"/depositHT"}>
          <div className="flex-none">
            <img src={rightImg} alt="Back" className="w-5 h-5" />
          </div>
        </Link>

        {/* Centered Heading */}
        <div className="flex-grow flex  justify-end">
          <div
            className={` text-[19.72px] font-[400] blinkMacSystemFont appleSystem `}
          >
            Deposit Not Recieved
          </div>
        </div>
        <div className="flex-grow flex justify-end">
          <Link to={"/user-guid"}>
            <div
              className={` text-[19.72px] font-[400] blinkMacSystemFont appleSystem text-fxbt-blue`}
            >
              <GoQuestion />
            </div>
          </Link>
        </div>
      </div>
      <form action="" className="font-custom">
        {/* UTR Number */}
        <div className="mx-3 text-17px my-6 text-gray-200">
          <label htmlFor="" className="p-2">
            UTR Number <span className="text-fxbt-blue">*</span>
            <input
              type="text"
              placeholder="Please enter UTR"
              required
              className="w-full p-2 bg-gray-200 rounded-lg shadow"
            />
          </label>
        </div>

        {/* Received UPI ID */}
        <div className="mx-3 text-17px mt-4 text-gray-200">
          <label htmlFor="" className="p-2">
            Received UPI ID <span className="text-fxbt-blue">*</span>
            <input
              type="text"
              placeholder="Please enter content"
              required
              className="w-full p-2 rounded-lg shadow bg-gray-200"
            />
          </label>
        </div>

        {/* Order Number */}
        <div className="mx-3 text-18px my-6 text-gray-200">
          <label htmlFor="" className="p-2">
            Order Number <span className="text-fxbt-blue">*</span>
            <input
              type="text"
              placeholder="Please enter Recharge Order Number"
              required
              className="w-full p-2 rounded-lg shadow bg-gray-200"
            />
          </label>
        </div>

        {/* Order Amount */}
        <div className="mx-3 text-18px mt-4 text-gray-200">
          <label htmlFor="" className="p-2">
            Order Amount <span className="text-fxbt-blue">*</span>
            <input
              type="text"
              placeholder="Please enter the order amount"
              required
              className="w-full p-2 rounded-lg shadow bg-gray-200"
            />
          </label>
        </div>

        {/* PDF Password */}
        <div className="mx-3 text-18px my-6 text-gray-200">
          <label htmlFor="" className="p-2">
            Provide PDF Password <span className="text-fxbt-blue">*</span>
            <input
              type="text"
              placeholder="Please enter PDF Password"
              required
              className="w-full p-2 rounded-lg shadow bg-gray-200"
            />
          </label>
        </div>

        {/* Deposit Proof Receipt Detail */}
        <div className="mx-3 text-18px mt-4 text-gray-700">
          <label className="block mb-2 text-gray-200">
            Deposit Proof Receipt Detail <span className="text-fxbt-blue">*</span>
          </label>
          <div
            className="border-gray-300 bg-gray-200 flex flex-col items-center justify-center p-4 rounded-lg shadow-md cursor-pointer w-1/3"
            onClick={() => handleBoxClick(depositProofInputRef)}
          >
            {depositProofImage ? (
              <img
                src={depositProofImage}
                alt="Selected"
                className="w-full h-auto rounded-lg"
              />
            ) : (
              <>
                <RiImageAddLine className="text-4xl text-gray-600" />
                <span className="text-gray-600">Photo</span>
              </>
            )}
            <input
              type="file"
              ref={depositProofInputRef}
              className="hidden"
              onChange={handleDepositProofChange}
              required
            />
          </div>
        </div>

        {/* Attach Video Statement */}
        <div className="mx-3 text-18px mt-4">
          <label className="block mb-2 text-gray-200">
            More than 1 Day, Attach Video Statement Using 2 Different Devices
          </label>
          <div
            className="border-gray-300 bg-gray-200 flex flex-col items-center justify-center p-4 rounded-lg shadow-md cursor-pointer w-1/3"
            onClick={() => handleBoxClick(videoInputRef)}
          >
            {videoStatement ? (
              <span className="text-gray-600">{videoStatement}</span>
            ) : (
              <>
                <IoFolderOutline className="text-4xl text-gray-600" />
                <span className="text-gray-600">Upload</span>
              </>
            )}
            <input
              type="file"
            accept=".pdf,image/*,video/*"
              ref={videoInputRef}
              className="hidden"
              onChange={handleVideoChange}
              required
            />
          </div>
        </div>

        {/* Attach PDF */}
        <div className="mx-3 text-18px mt-4">
          <label className="block mb-2 text-gray-200">More than 1 Day Attach PDF</label>
          <div
            className="border-gray-300 bg-gray-200 flex flex-col items-center justify-center p-4 rounded-lg shadow-md cursor-pointer w-1/3"
            onClick={() => handleBoxClick(pdfInputRef)}
          >
            {pdfFile ? (
              <span className="text-gray-600">{pdfFile}</span>
            ) : (
              <>
                <IoFolderOutline className="text-4xl text-gray-600" />
                <span className="text-gray-600">Upload</span>
              </>
            )}
            <input
              type="file"
              ref={pdfInputRef}
              className="hidden"
              onChange={handlePdfChange}
              required
              accept=".pdf,image/*,video/*"
            />
          </div>
        </div>
        <div className="my-4 px-3">
          <button className="w-full rounded-3xl text-white bg-teal-500 p-2">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubmitUTR;
