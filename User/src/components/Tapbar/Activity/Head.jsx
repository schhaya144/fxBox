import React from "react";


const Head = ({title}) => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="sticky top-0 left-0 right-0 z-20 pt-2 pb-2 flex items-center justify-between w-full px-4  mb-0 bg-white">
          <div className="flex-grow flex justify-center">
            <div className="text-xl text-19px">{title}</div>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default Head;
