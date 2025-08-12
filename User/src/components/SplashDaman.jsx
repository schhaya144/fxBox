import React from 'react';
import Logos from '../assets/fxlogo.webp';
export const SplashDaman = () => {
  return (
    <>
      <div className="h-[100vh] w-full bg-fxbt-gradient text-[#fdf6ed] flex justify-center flex-col items-center ">
        <div>
          <img src={Logos} className="w-52" />
        </div>
        <div className="text-2xl font-bold text-black mt-6 ">
          Invest With Us
        </div>
      </div>
    </>
  );
};

export default SplashDaman;
