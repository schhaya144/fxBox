import React from 'react'
import NavPramotion from './NavPramotion'
import RebateLottryPramotion from './RebateLottryPramotion'
import SlidingTabs from './SlidingTab'

const RebatePramotion = () => {
  return (
    <div>
     
         <NavPramotion heading="Rebate ratio" linkPath="/promotion-panel" /> <div className="sticky top-11 left-0 right-0 z-20 pt-2 pb-2 flex items-center justify-between w-full px-4 mb-0 bg-[#F7F8FF]">
         <SlidingTabs/></div>
         <RebateLottryPramotion/>
    </div>
  )
}

export default RebatePramotion