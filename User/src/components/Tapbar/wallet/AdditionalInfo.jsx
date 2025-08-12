import React from 'react'

const AdditionalInfo = () => {
  return (
    <>
          {/* Additional Information */}
          <div className="my-6 border text-xs border-gray-300 rounded-lg p-[10.4px] w-full">
            <div className="text-white flex items-center my-2 text-[12.4px] font-inter">
              <span className="inline-block w-[5px] h-[5px] bg-red-500 mr-2 transform rotate-45"></span>
              Need to bet <span className="text-red-500 ml-2 px-1">₹ 0.00 </span> to
              be able to withdraw.
            </div>
            <div className="text-white flex items-center my-2 text-[12.4px] font-inter">
              <span className="inline-block w-[5px] h-[5px] bg-red-500 mr-2 transform rotate-45"></span>
              Withdraw time{' '}
              <span className="text-red-500 ml-2">00:00-23:59</span>
            </div>
            <div className="text-white flex items-center my-2 text-[12.4px] font-inter">
              <span className="inline-block w-[5px] h-[5px] bg-red-500 mr-2 transform rotate-45"></span>
              Inday Remaining Withdraw Times{' '}
              <span className="text-white ml-2 px-1">3</span>
            </div>
            <div className="text-white flex items-center my-2 text-[12.4px]">
              <span className="inline-block w-[5px] h-[5px] bg-red-500 mr-2 transform rotate-45"></span>
              Need to bet <span className="text-red-500 ml-2">₹ 0.00</span> to
              be able to withdraw.
            </div>
            <div className="text-white flex items-center my-2 text-[12.4px] font-inter">
              <span className="inline-block w-[5px] h-[5px] bg-red-500 mr-2 transform rotate-45"></span>
              Need to bet <span className="text-red-500 ml-2">₹ 0.00</span> to
              be able to withdraw.
            </div>
            <div className="text-white flex items-center my-2 text-[12.4px] font-inter">
              <div className="pb-8">
                {' '}
                <span className="inline-block w-[5px] h-[5px] bg-red-500 mr-2 transform rotate-45"></span>
              </div>
              <div>
                Please confirm your beneficial account information before
                withdrawing. If your information is incorrect, our company will
                not be liable for the amount of loss
              </div>
            </div>
            <div className="text-white flex items-center my-2 text-[12.4px]">
              <div className="pb-4">
                {' '}
                <span className="inline-block w-[5px] h-[5px] bg-red-500 mr-2 transform rotate-45"></span>
              </div>
              <div className="text-[12.4px] font-inter">
                If your beneficial information is incorrect, please contact
                customer service
              </div>
            </div>
          </div> 
    </>
  )
}

export default AdditionalInfo