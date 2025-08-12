// IconRebate.jsx
import React, { useRef, useEffect } from 'react';

const IconRebate = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!document.getElementById('icon-rebate-symbol')) {
      const parser = new DOMParser();
      const symbolSvg = `
        <svg id="icon-rebate-symbol" xmlns="http://www.w3.org/2000/svg" style="display:none">
          <symbol id="icon-rebate" viewBox="0 0 48 48" fill="none">
            <path d="M21.3742 33.0555V37.3185C21.3742 40.9305 18.0143 43.8494 13.8773 43.8494C9.74038 43.8494 6.35938 40.9305 6.35938 37.3185V33.0555C6.35938 36.6675 9.71938 39.2295 13.8773 39.2295C18.0143 39.2295 21.3742 36.6465 21.3742 33.0555Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21.3737 27.2808C21.3737 28.3308 21.0797 29.2968 20.5757 30.1368C19.3367 32.1738 16.7957 33.4547 13.8557 33.4547C10.9158 33.4547 8.37476 32.1528 7.13578 30.1368C6.63178 29.2968 6.33789 28.3308 6.33789 27.2808C6.33789 25.4748 7.17784 23.8578 8.52183 22.6819C9.88681 21.4849 11.7557 20.7709 13.8347 20.7709C15.9137 20.7709 17.7827 21.5059 19.1477 22.6819C20.5337 23.8368 21.3737 25.4748 21.3737 27.2808Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21.3742 27.2808V33.0558C21.3742 36.6677 18.0143 39.2297 13.8773 39.2297C9.74038 39.2297 6.35938 36.6467 6.35938 33.0558V27.2808C6.35938 23.6688 9.71938 20.7499 13.8773 20.7499C15.9563 20.7499 17.8254 21.4849 19.1903 22.6609C20.5344 23.8368 21.3742 25.4748 21.3742 27.2808Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M44.9996 20.6867V25.0128C44.9996 26.1678 44.0756 27.1126 42.8996 27.1546H38.7836C36.5157 27.1546 34.4367 25.4956 34.2477 23.2276C34.1217 21.9047 34.6257 20.6657 35.5077 19.8047C36.2847 19.0067 37.3556 18.5448 38.5316 18.5448H42.8996C44.0756 18.5868 44.9996 19.5317 44.9996 20.6867Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M32.4003 5C32.9463 5 33.4713 5.02098 33.9753 5.10498C39.3933 5.73497 42.9002 9.74595 42.9002 15.4999V18.5449H38.5323C37.3563 18.5449 36.2853 19.0069 35.5083 19.8049C34.6263 20.6658 34.1223 21.9048 34.2483 23.2278C34.4373 25.4958 36.5163 27.1548 38.7843 27.1548H42.9002V30.1997C42.9002 36.4997 38.7003 40.6996 32.4003 40.6996H27.1504" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 19.6999V15.4999C3 9.78795 6.44397 5.79799 11.7989 5.126C12.3449 5.042 12.9119 5 13.4999 5H23.9998" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </symbol>
        </svg>
      `;
      const svgElement = parser.parseFromString(symbolSvg, 'image/svg+xml').documentElement;
      document.body.appendChild(svgElement);
    }
  }, []);

  return (
    <svg ref={svgRef} className="w-6 h-6 text-primary" aria-hidden="true">
      <use href="#icon-rebate" />
    </svg>
  );
};

export default IconRebate;
