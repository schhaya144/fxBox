import React from 'react';
import Cert from '../assets/Rick.jpg';
import backarrow from '../assets/right-arrowBB.png';
import { Link } from 'react-router-dom';

const DisclosureAgreement = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div className="flex justify-around py-3 items-center bg-white w-full">
          <Link to="/">
            <img src={backarrow} className="w-5" />
          </Link>
          <div className="text-[18.7px] font-applebahnschrift font-normal">
            Rick Disclosure Agreement
          </div>
          <div></div>
        </div>
        <div className="p-4">
          <img src={Cert} />
        </div>
      </div>
    </>
  );
};

export default DisclosureAgreement;
