import React from 'react';
import buttonarrowb from '../../assets/right-arrowBB.png';
import { Link } from 'react-router-dom';
import BeginnerGuide1 from '../../assets/download.jpg';
import BeginnerGuide2 from '../../assets/download1.png';
import BeginnerGuide3 from '../../assets/download6.png';
import BeginnerGuide4 from '../../assets/download7.png';
import BeginnerGuide5 from '../../assets/download8.png';
import BeginnerGuide6 from '../../assets/download9.png';
import BeginnerGuide7 from '../../assets/download10.png';

import BeginnerGuide13 from '../../assets/download11.png';
import BeginnerGuide14 from '../../assets/download12.png';
import BeginnerGuide15 from '../../assets/download13.png';
import BeginnerGuide16 from '../../assets/download14.png';
import BeginnerGuide18 from '../../assets/download15.png';

import BeginnerGuide19 from '../../assets/download16.png';
import BeginnerGuide20 from '../../assets/download17.png';
import BeginnerGuide21 from '../../assets/download18.png';
import BeginnerGuide22 from '../../assets/download19.png';
import BeginnerGuide23 from '../../assets/download20.png';

const BeginnerGuide = () => {
  return (
    <div className="bg-[#f1f5f9] h-full relative flex justify-center flex-col px-2">
      <div className="fixed top-0 lg:w-6/12 xl:w-[400px] sm:w-8/12 w-full flex justify-between items-center bg-white z-10 py-2">
        <Link to="/home" className="text-white cursor-pointer ps-3 pb-1">
          <img src={buttonarrowb} className="w-[22px] h-[24px]" alt="" />
        </Link>
        <div className="text-xl">Beginner's Guide</div>
        <div className="w-10"></div>
        {/* Placeholder for spacing on the right */}
      </div>
      <div className="flex flex-col mt-10 px-4">
        <div className="flex flex-col">
          <div className="text-sm pt-1">1. How to Register</div>
          <p className="text-sm">- Fill your phone number</p>
          <p className="text-sm">- Set your own password ( 6 letters ）</p>
          <p className="text-sm">- Fill your Recommendation code</p>
          <p className="text-sm">-Click Register</p>
        </div>
        <img src={BeginnerGuide1} alt="" />
        <div>
          <div className="text-sm text-gray-500">2. How to betting</div>
          <p className="text-sm text-gray-500">
            Click start game then choose 1minute, 3minute, 5minute or 10minute.
          </p>
          <p className="text-sm text-gray-500">
            Green : if the result shows 1,3,7,9
          </p>
          <p className="text-sm text-gray-500">
            Red : if the result shows 2,4,6,8
          </p>
          <p className="text-sm text-gray-500">
            Violet : if the result shows 0 or 5
          </p>
          <p className="text-sm text-gray-500">
            Small : if the result shows 0,1,2,3,4
          </p>
          <p className="text-sm text-gray-500">
            Big : if the result shows 5,6,7,8,9
          </p>
          <p className="text-sm text-gray-500">
            This company not allowed to place Illegal betting Exp ：Betting (Big
            and small together) or (Red and Green together) in the same time
          </p>
        </div>
        <img src={BeginnerGuide2} alt="" />
        <div className="pt-5">
          <div className="text-sm text-gray-500">3.How to recharge</div>
          <p className="text-sm text-gray-500">
            Click Wallet Icon, Click The Recharge Button, and we have three ways
            to make a recharge ( UPI, BANK TRANSFER, USDT/CRYPTO)
          </p>
        </div>
        <img src={BeginnerGuide3} alt="" />
        <img src={BeginnerGuide4} alt="" />
        <div className="pt-3">
          <div className="text-sm">4. How to Withdraw</div>
          <div className="text-sm">
            Click Wallet Icon, Click Withdraw Button.
          </div>
          <div className="text-sm">- Enter withdraw amount</div>
          <div className="text-sm">- Make Sure Your Total Bet Until Zero</div>
          <div className="text-sm">
            - Select Your Bank Account Or Add Your Bank Account
          </div>
          <div className="text-sm">- Input Your Login Password</div>
        </div>
        <img src={BeginnerGuide5} alt="" />
        <img src={BeginnerGuide6} alt="" />
        <div>
          <div className="text-sm pt-5">5. Orders</div>
          <p className="text-sm">
            When The Betting complete You Can Click My Game Record To See Your
            Bet Recor, You Can Check The Chart Trend
          </p>
        </div>
        <img src={BeginnerGuide7} alt="" />
        <div className="text-gray-800 text-sm pt-5 font-semibold">
          7. Promotion
        </div>
        <p className="text-gray-500 text-sm text-justify">
          If you have a downline or referral member use your own link to
          register and if they make a recharge you can claim a reward. The agent
          will get a minimum commission of 0.6 % (level 1) and 0.18% (level 2)
          from each transaction that is done by the referral (Added every day at
          00:30 AM.) If the accumulated transactions of the Referral reach a
          certain target, the agent will get an additional bonus with the
          following rebates.
        </p>
        <img src={BeginnerGuide13} alt="" />
        <img src={BeginnerGuide14} alt="" />
        <div className="text-sm text-gray-800 pt-4">8. Account security</div>
        <p className="text-sm text-gray-800">
          Go To Center Icon, Click Account{' '}
        </p>
        <p className="text-sm text-gray-800">- Fill your mobile number</p>
        <p className="text-sm text-gray-800">
          - Click OTP then will send it to message to your number as your
          verification code
        </p>
        <p className="text-sm text-gray-800">
          - Enter Strongest new password, and Confirm your password.
        </p>

        <p className="text-sm text-gray-800">click sure</p>
        <img src={BeginnerGuide15} alt="" />
        <img src={BeginnerGuide16} alt="" />
        <div className="text-sm pt-5">9. Forget Password</div>
        <p className="text-sm">- Click Forgot Password</p>

        <p className="text-sm">Fill your moblie number</p>
        <p className="text-sm">
          - Click OTP then will send it to message to your number as your
          verification code
        </p>
        <p className="text-sm">
          - Enter Strongest new password, and Click Submit.
        </p>
        <p className="text-sm">
          - If Cannot Receive OTP Please Contact Customer Service Immediately.
        </p>
      </div>
      <img src={BeginnerGuide18} alt="" />
      <img src={BeginnerGuide19} alt="" />
      <img src={BeginnerGuide20} alt="" />
      <div className="text-sm pt-5">10. App download</div>
      <p className="text-sm">
        Click top right corner download icon, your can download the app and easy
        to use
      </p>
      <img src={BeginnerGuide21} alt="" />
      <div className="text-sm pt-5">11. About</div>
      <p className="text-sm text-gray-500">
        Click About for more details regarding Privacy Policy and Risk Diclo
        sure Agreement
      </p>
      <img src={BeginnerGuide22} alt="" />
      <img src={BeginnerGuide23} alt="" />
    </div>
  );
};

export default BeginnerGuide;
