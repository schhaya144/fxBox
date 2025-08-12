import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SummaryApi from '../../common/SummaryApi.jsx';

const Commission = () => {
  const [referralData, setReferralData] = useState(null);

  useEffect(() => {
    const fetchReferralData = async () => {
      try {
        const response = await axios.get(SummaryApi.commission.url, { withCredentials: true });
        setReferralData(response.data);
      } catch (error) {
        console.error("Error fetching referral data", error);
      }
    };

    fetchReferralData();
  }, []);

  if (!referralData) {
    return <div>Loading...</div>;
  }

  return (
    <>  <div className="">
      <div className="bg-fxbt-gradient text-white text-center py-4">Here is your subordinates' downline data.</div>
     <div className="px-3 pt-1">
     <div className="p-2 rounded-lg text-black bg-gray-100 m-2">
      <h2 className='text-center text-white bg-black p-3 rounded'>Referral Earnings</h2>
      <div className='shadow shadow-blue-500 mt-2 p-1'>
        <h3 className='text-center font-bold '>Level 1</h3>
       <div className="flex justify-evenly">
       <div className='text-center font-semibold'>Total Earnings <br /> {referralData.referralEarnings.level1}</div>
       <div className='text-center font-semibold' >Number of Users <br />  {referralData.subordinatesCount.level1}</div>
       </div>
      </div>
      <br />
      <div className='shadow shadow-blue-500 p-1' >
        <h3 className='text-center font-bold '>Level 2</h3>
       <div className="flex justify-evenly">
       <p className='text-center font-semibold' >Total Earnings <br /> {referralData.referralEarnings.level2}</p>
       <p className='text-center font-semibold' >Number of Users <br />  {referralData.subordinatesCount.level2}</p>
       </div>
      </div>
      <br />
      <div className=' p-1 shadow shadow-blue-500'>
        <h3 className='text-center font-bold '>Level 3</h3>
        <div className="flex justify-evenly">
        <p className='text-center font-semibold' >Total Earnings <br /> {referralData.referralEarnings.level3}</p>
        <p className='text-center font-semibold' >Number of Users <br />  {referralData.subordinatesCount.level3}</p>
        </div>
      </div>
    </div>
   </div>
    
  </div>
  </>

  );
};


export default Commission;
