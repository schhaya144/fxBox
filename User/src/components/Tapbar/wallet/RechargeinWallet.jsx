// "If the transfer time is up, please fill out the deposit form again.",
//     "The transfer amount must match the order you created, otherwise the money cannot be credited successfully.",
//     "If you transfer the wrong amount, our company will not be responsible for the lost amount!",
//     "Note: do not cancel the deposit order after the money has been transferred.",

import React from 'react';
import IconShuoming from '../../../Svg/IconShuoming';

const RechargeinWallet = () => {
  return (
    <>
      <div className="px-3 py-3  ">
        <div className=" bg-white rounded-lg p-3">
          <div className="inline-flex text-custom2 font-bold text-lg">
            {' '}
            <IconShuoming />{' '}
            <span className="pl-2 ">Recharge instructions</span>{' '}
          </div>
          <div className="my-2 border  border-gray-300 rounded-lg p-4 w-full">
            {/* Information Text */}
            <div className="space-y-3 text-[13.7px] font-custom2 text-[#768096]">
              <p className="">
                <span className="mr-2 text-[#f95959]">◆</span>
                If the transfer time is up, please fill out the deposit form{' '}
                again.
              </p>
              <p className="">
                <span className="mr-2 text-[#f95959]">◆</span>
                The transfer amount must match the order you created, otherwise
                the money cannot be credited successfully.
              </p>
              <p className="">
                <span className="mr-2 text-[#f95959]">◆</span>
                If you transfer the wrong amount, our company will not be{' '}
                responsible for the lost amount!
              </p>
              <p className="">
                <span className="mr-2 text-[#f95959]">◆</span>
                Note: do not cancel the deposit order after the money has been
                transferred.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RechargeinWallet;
