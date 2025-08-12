import React from 'react';
import NavPramotion from '../pramotion/NavPramotion';
import ActivityRulesBackgroundIcon from '../../Svg/ActivityRulesBackgroundIcon';
const AcitivityRules = () => {
  const data = [
    {
      id: '01',
      text: 'The event is effective from now on. The discount can only be used once per address, per email address, per phone number and for the same payment method (debit/credit card/bank account) and IP address;',
      text2:
        'If a member applies repeatedly, the company reserves the right to cancel or withdraw member bonuses.',
    },
    {
      id: '02',
      text: 'All offers are specially designed for players.',
      text2:
        'If any group or individual is found to be dishonestly withdrawing bonuses or threatening or abusing company offers, the company reserves the right to freeze or cancel the account and account balance of that group or individual.',
    },
    {
      id: '03',
      text: 'The platform reserves the right of final outcome of this event;',
      text2:
        'and the right to modify or terminate the campaign without prior notice; these terms apply to all offers.',
    },
  ];
  return (
    <div>
      <NavPramotion
        heading="Activity Rules"
        linkPath="/WheelGame"
        className="text-[18px] font-medium"
      />
      <div className="py-[15.6px] px-[10.4px]">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex justify-center items-center flex-col bg-white my-4 mb-[26px]  pb-[12.4px]"
          >
            <div className="relative w-36 h-8 flex justify-center items-center">
              {/* SVG Icon */}
              <ActivityRulesBackgroundIcon className="absolute w-full h-16" />

              {/* Centered Text */}
              <span className="absolute text-center text-white text-[13.5px] font-[700] blinkMacSystemFont appleSystem">
                {item.id}
              </span>
            </div>

            {/* Description */}
            <div>
              <p className="px-4  mt-[7.48px] mb-[8.31px] text-[12.48px] leading-relaxed bg-white text-[#1e2637] blinkMacSystemFont appleSystem text-start">
                {item.text}
              </p>
              <p className="text-[12.48px] text-gray-500 px-4 blinkMacSystemFont appleSystem">
                {item.text2}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcitivityRules;
