import React from 'react'

const CommissionBalance = () => {
  return (
    <div className='p-2 mx-3 mt-4 font-semibold text-gray-600 bg-white rounded-lg text-12px'>
      <h4 className='pt-2'>Settlement Succesfull</h4>
      <h4 className='pt-2'>2024-09-13 02:11:50</h4>
      <p className='py-2'>The commission has been automatically credited to your balance</p>
      <div className="flex justify-between p-2 mt-2 bg-gray-100">
        <div className="text-gray-600 text-13px">Number of subordinates</div>
        <div className="text-base font-bold text-gray-800">11 People</div>
      </div>
      <div className="flex justify-between p-2 mt-2 bg-gray-100">
        <div className="text-gray-600 text-13px">Subordinate Amount </div>
        <div className="text-base font-bold text-gray-800">777.908</div>
      </div>
      <div className="flex justify-between p-2 mt-2 bg-gray-100">
        <div className="text-gray-600 text-13px">Commission Payout</div>
        <div className="text-base font-bold text-orange-400">428.11</div>
      </div>
      <div className="flex justify-between p-2 mt-2 bg-gray-100">
        <div className="text-gray-600 text-13px">Date</div>
        <div className="text-base font-bold text-gray-800">2024-09-14 02:11:50</div>
      </div>
    </div>
  )
}

export default CommissionBalance