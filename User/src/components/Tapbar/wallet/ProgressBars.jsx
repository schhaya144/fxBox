// import React from 'react';
// import './wallet.css'

// const ProgressBars = ({ label, amount }) => {
//   return (
//     <div className="flex flex-col items-center">
//       <div className="relative w-[100px] h-[100px]">
//         <svg viewBox="0 0 1100 1100">
//           {/* Outer Circle with color and border */}
//           <path
//             className="van-circle__layer"
//             d="M 550 550 m 0, -500 a 500, 500 0 1, 1 0, 1000 a 500, 500 0 1, 1 0, -1000"
//             style={{
//               fill: 'none',
//               stroke: '#F6F6F6',  // Set the circle border color to #F6F6F6
//               strokeWidth: '5px',  // Set the border thickness to 5px
//             }}
//           ></path>
//           {/* Progress Circle */}
//           <path
//             className="van-circle__hover"
//             d="M 550 550 m 0, -500 a 500, 500 0 1, 1 0, 1000 a 500, 500 0 1, 1 0, -1000"
//             style={{
//               strokeWidth: '5px',  // Set the same border thickness for the progress circle
//               strokeLinecap: 'butt',
//               strokeDasharray: '0px, 3140px',  // Initially 0% progress
//               stroke: '#F6F6F6',  // Set progress color to #F6F6F6
//             }}
//           ></path>
//         </svg>
//         {/* Center Text */}
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-base">
//           0%
//         </div>
//       </div>
//       <h3>{amount}</h3>
//       <span>{label}</span>
//     </div>
//   );
// };

// export default ProgressBars;

import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBars = ({ label, balance, percentage }) => {
    return (
        <div style={styles.walletContainer}>
            <div style={{ width: 96, height: 96 }}>
                <CircularProgressbar 
                    value={percentage} 
                    text={`${percentage}%`} 
                    styles={buildStyles({
                        pathColor: '#cccccc',
                        textColor: '#000000',
                        trailColor: '#F6F6F6',
                    })}
                />
            </div>
            <p style={styles.balance}>₹{balance}</p>
            <p style={styles.label}>{label}</p>
        </div>
    );
};

const styles = {
    walletContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0px',
    },
    balance: {
        fontSize: '15px',
        fontWeight : '360',
        margin: '4px 0 0px',
    },
    label: {
        fontSize: '12px',
        color: '#1E2637',
        fontWeight : '260',

    },
    
};

export default ProgressBars;

