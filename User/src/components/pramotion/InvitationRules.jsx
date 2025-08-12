import React from 'react';
import NavPramotion from './NavPramotion';
import Rules from './Rules';

const InvitationRules = () => {
  return (
    <div className="bg-[#F7F8FF]">
      <NavPramotion heading="Plan" linkPath="/promotion-panel"/>
    
      <div className="text-center">
        <h1 className="p-2 text-2xl font-bold text-primary font-bahnschrift">Business Plan</h1>
       
      </div>

      {/* PDF viewer using iframe */}
      <div className="pdf-viewer-container">
        <iframe
          src="/Trademyindia_Presentation_20241207.pdf"
          width="100%"
          height="600"
          frameBorder="0"
        />
      </div>

    
    </div>
  );
};

export default InvitationRules;
