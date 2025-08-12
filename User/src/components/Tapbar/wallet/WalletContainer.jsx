import React from 'react';
import ProgressBars from './ProgressBars';
import UserDetail from './UserDetail';
import './wallet.css';
import { useSelector } from 'react-redux';

const WalletContainer = () => {
  const currentUser = useSelector(state=>state?.user?.user)

  return (
    <div className="flex flex-col min-h-[9.06667rem] p-[0.62667rem] font-[Bahnschrift] rounded-lg bg-white  w-auto mt-[0.80rem] mx-3">
      <div className="flex justify-center items-center w-full pt-4">
        <div style={dashboardStyles.container}>
          <ProgressBars label="Main wallet" balance={parseFloat(currentUser?.totalBalance || 0).toFixed(2)}percentage={0} />
          <ProgressBars label="3rd party wallet" balance= {parseFloat(currentUser?.thirdPartyWallet || 0).toFixed(2)} percentage={0} />
        </div>
      </div>
      <div className="mt-4 text-center">
        <button className="py-1 md:px-24 px-16 text-lg font-bold bg-gradient-to-r from-[#f95a59] to-[#ff998d] text-white rounded-full">
          Main wallet transfer
        </button>
      </div>
      <UserDetail />
    </div>
  );
};

const dashboardStyles = {
  container: {
    display: 'flex',
    justifyContent: 'space-evenly', // This ensures space between the bars

    alignItems: 'center',// Ensures vertical alignment in the center
    gap: '38px',
    width: '100%', // Ensures it uses full width
    maxWidth: '600px', // Optional: You can set a max-width to keep them from stretching too far
  },
};

export default WalletContainer;
