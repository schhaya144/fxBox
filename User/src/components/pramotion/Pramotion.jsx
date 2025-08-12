import React from 'react';
// import SubordinateIcon from '../svgs/SubordinateIcon';
import Commission from './Commission';
import SubordinateIcon from "../svg's/SubordinateIcon";
import PramotionData from './PramotionData';
import Tapbar from '../Tapbar';
import { Link } from 'react-router-dom';
import PramotionCell from './PramotionCell';

const Pramotion = () => {
  return (
    <div>
      <div className="min-h-screen">
        <div className="sticky top-0 left-0 right-0 z-20 flex items-center justify-between w-full px-4 pt-2 pb-3 mb-0 bg-primary">
          <div className="flex justify-center flex-grow">
            <div className="py-1 text-lg text-white "> Subordinates</div>
          </div>
          <Link to="">
            <SubordinateIcon className="w-6 h-6 text-fxbt-blue" />
          </Link>
        </div>
        <Commission />
        
      <PramotionCell/> 
        <PramotionData />
      </div>
      <div className="sticky bottom-0 left-0 right-0 z-20">
       
      </div>
    </div>
  );
};

export default Pramotion;
