import React from 'react';
import buttonarrow from '../../assets/right-arrowBB.png';
import { Link } from 'react-router-dom';
import NotificationHorn from '../../Svg/NotificationHorn';

const NotificationSPData = [
  {
    nitifyheading: 'ANNOUNCEMENT!!!',
    nitifyontent:
      'The website upgrade is complete. Before logging in, clear the browser cache. Add member betting rewards and VIP level rewards',
    dateTime: '2023-08-08  22:19:25',
  },
  {
    nitifyheading: '⭐️Official Website⭐️',
    nitifyontent:
      'To visit our official website, be sure to use the link below, https://www.damangames.com/ Please remember! Make sure not provide personal data and personal transactions in any form and for any reason to other parties on behalf of DamanGames. Our side does not make private chats or calls to all members. Please inform all Referrals/other Members about this to avoid fraud. Thank you for your attention and cooperation.',
    dateTime: '2023-01-27 13:33:00',
  },
  {
    nitifyheading: 'Safe Recharge Tips',
    nitifyontent:
      'All Recharge payment methods on the DamanGames site are only available in the Recharge menu on the official website. Make sure to make a Recharge only through our official website and don t trust any party on behalf of DamanGames. If you find any discrepancies or suspicious behavior, please contact our customer service immediately for confirmation. We urge all members not to believe or be tempted by other promotions outside our site, Thank You',
    dateTime: '2022-05-08  12:49:52',
  },
  {
    nitifyheading: 'Authorized Customer Service',
    nitifyontent:
      'Attention ! Attention ! To all Daman Games members, you can only contact Daman Customer Service directly from the Account Tab on the App, select 24/7 Customer Service and select the option base on your concern.  Do not entertain Private messages claiming to be from Daman Games, NEVER provide personal data and transactions outside the application or website for deposits, withdrawals and Bank information. Please be careful with those acting on behalf of DamanGames.',
    dateTime: '2023-08-08  22:19:25',
  },
  {
    nitifyheading: 'Secured Website',
    nitifyontent:
      'Daman  is a secured website using  encryption and authentication standards to protect the confidentiality of web transactions. You can see a padlock at the start of your browser address bar, the link between your browser and the server is encrypted. The hacker could not attach a malicious program to the server that will hosts our website that could steal any of our data.',
    dateTime: '2023-01-27 13:34:03',
  },
  {
    nitifyheading: 'Protect your accounts from HACKERS',
    nitifyontent:
      'Here are the TIPS on how to prevent your account from hacking Secure your password it should be difficult to guess and easy for you to remember and do not share your password with anyone.  Make sure you re logging in on the correct websites. if you are using a web browser to access your DAMAN ACCOUNT make sure the address bar says damangames.in. Be extra careful when clicking links in your messages from WHATS APP and TELEGRAM, Scammers may send a links that looks like they are from DAMANGAMES, but are rogue sites that steal your data,',
    dateTime: '2023-01-27 13:39:09',
  },
];

const NotificationSP = () => {
  return (
    <div className="bg-[#f1f5f9] h-full relative flex justify-center flex-col text-center">
      <div className="fixed top-0 lg:w-6/12 xl:w-[400px] sm:w-8/12 w-full flex justify-between items-center bg-white z-10 py-2">
        <Link to="/home" className="text-white cursor-pointer ps-3 pb-1">
          <img src={buttonarrow} className="w-[22px] h-[24px]" alt="" />
        </Link>
        <div className="text-lg">Notification</div>
        <div className="w-10"></div>
        {/* Placeholder for spacing on the right */}
      </div>

      <div className="mt-3 py-4">
        {NotificationSPData.map((item, index) => {
          return (
            <div
              key={index}
              className="p-4 border-b border-gray-200 bg-white m-4 rounded-lg text-start"
            >
              <div className="flex">
                <NotificationHorn className="text-red-400 w-8 h-7" />
                <div className="text-xl ms-2">{item.nitifyheading}</div>
              </div>
              <p className="text-xs text-justify text-gray-500 mt-2 mb-2">
                {item.nitifyontent}
              </p>
              <div className="text-sm text-gray-400 mt-1">{item.dateTime}</div>
            </div>
          );
        })}
      </div>

      <div className="text-xl mb-4">No more</div>
    </div>
  );
};

export default NotificationSP;
