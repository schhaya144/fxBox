import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Navbar';
import Tapbar from '../../Tapbar';
import { useSelector } from 'react-redux';
import axios from 'axios';
import SummaryApi from '../../../common/SummaryApi.jsx';

const Deposit = () => {
  const [amount, setAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState('');
  const [paymentType, setPaymentType] = useState('');
  const [extraAmount, setExtraAmount] = useState(null);
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state?.user?.user);

  useEffect(() => {
    const fetchExtraAmount = async () => {
      try {
        const response = await axios.get(SummaryApi.depositReward.url);
        if (response.data.success) {
          setExtraAmount(response.data.extraamount);
        } else {
          console.error('Failed to fetch extraamount:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching extraamount:', error);
      }
    };
    fetchExtraAmount();
  }, []);

  const handleAmountChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9]/g, '');
    setAmount(numericValue);
  };

  const handleAmountSelect = (value) => {
    let numericAmount;
    if (value.includes('K')) {
      numericAmount = parseInt(value.replace('K', '')) * 1000;
    } else if (value.includes('L')) {
      numericAmount = parseInt(value.replace('L', '')) * 100000;
    } else {
      numericAmount = parseInt(value);
    }

    setAmount(numericAmount.toString());
    setSelectedAmount(value);
  };

  const handlePaymentTypeChange = (e) => {
    setPaymentType(e.target.value);
  };

  const handleRecharge = () => {
    if (amount && paymentType) {
      navigate('/qrScreen', {
        state: {
          selectedAmount: parseFloat(amount).toFixed(2),
          selectedOption: paymentType,
        },
      });
    } else {
      console.error('Amount or Payment Type is missing!');
    }
  };

  const amounts = [
  '250', '500', '750',
  '1K', '1.25K', '1.5K', '1.75K',
  '2K', '2.25K',
];

  return (
    <>
      <div className="min-h-screen">
        <Navbar heading="Recharge" linkPath="/Account" />

        <div className="text-white px-3">
          {extraAmount && extraAmount !== 0
            ? `If you deposit right now, you get an extra ${extraAmount}% on your deposit amount`
            : ''}
        </div>

        <div className="p-6 space-y-6">
          {/* Recharge Box */}
          <div className="p-3 bg-gray-900 border rounded-lg border-neon">
            <div className="flex mb-1">
              <h2 className="text-xs font-semibold text-gray-400">
                Recharge Balance
              </h2>
            </div>
            <div className="text-2xl font-semibold text-white">
              USD {parseFloat(currentUser?.totalBalance || 0).toFixed(2)}
            </div>
          </div>

          {/* Input Box */}
          <div className="flex items-center px-4 py-1 bg-[#F7F8FF] rounded-full">
            <span className="mr-3 text-gray-400">USD</span>
            <input
              type="tel"
              className="w-full px-3 py-2 placeholder-gray-400 bg-transparent border-none rounded-lg outline-none"
              placeholder="Enter Amount"
              value={amount}
              onChange={handleAmountChange}
            />
          </div>

          {/* Buttons Grid */}
          <div className="grid grid-cols-3 gap-4">
            {amounts.map((value) => (
              <button
                key={value}
                onClick={() => handleAmountSelect(value)}
                className={`py-2 px-2 rounded-lg transition duration-200 ${
                  selectedAmount === value
                    ? 'bg-cyan-500 text-white font-semibold'
                    : 'bg-white text-gray-500 hover:bg-secondary hover:text-gray-800'
                }`}
              >
                USD {value}
              </button>
            ))}
          </div>

          {/* Payment Type */}
          <div className="flex items-center w-full px-4 py-2 space-x-4 bg-white rounded-lg">
            <span className="text-sm font-semibold text-gray-700">
              Payment Type:
            </span>
            <select
              className="px-1 text-xs text-blue-500 bg-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              value={paymentType}
              onChange={handlePaymentTypeChange}
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="upi">UPI</option>
            </select>
          </div>

          {/* Recharge Button */}
          <button
            onClick={handleRecharge}
            className={`w-full py-2 rounded-full text-center transition-colors ${
              amount && paymentType
                ? 'border border-neon text-white font-semibold'
                : ' text-white'
            }`}
            disabled={!amount || !paymentType}
          >
            Recharge Now
          </button>

          {/* Note */}
          <div className="px-2 py-2 text-xs text-gray-500 bg-white">
            <p>Deposit time: 7x24 hours</p>
            <p>Minimum Recharge amount is: USD 800</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deposit;



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../../Navbar';
// import Tapbar from '../../Tapbar';
// import { useSelector } from 'react-redux';

// const Deposit = () => {
//   const [amount, setAmount] = useState('');
//   const [selectedAmount, setSelectedAmount] = useState('');
//   const [paymentType, setPaymentType] = useState(''); // Store selected payment type
//   const navigate = useNavigate();
//   const currentUser = useSelector((state) => state?.user?.user);
//   const [extraAmount, setExtraAmount] = useState(null); // State to store `extraamount`


//   const handleAmountChange = (e) => {
//     const value = e.target.value;
//     const numericValue = value.replace(/[^0-9]/g, ''); // Allow only numbers
//     setAmount(numericValue);
//   };

//   const handleAmountSelect = (value) => {
//     let numericAmount;

//     // Handle shorthand values like "K" and "L"
//     if (value.includes('K')) {
//       numericAmount = parseInt(value.replace('K', '')) * 1000;
//     } else if (value.includes('L')) {
//       numericAmount = parseInt(value.replace('L', '')) * 100000;
//     } else {
//       numericAmount = parseInt(value); // Regular numeric value
//     }

//     setAmount(numericAmount.toString());
//     setSelectedAmount(value);
//   };

//   const handlePaymentTypeChange = (e) => {
//     setPaymentType(e.target.value);
//   };

//   const handleRecharge = () => {
//     if (amount && paymentType) {
//       // Send only the entered amount
//       navigate('/qrScreen', {
//         state: {
//           selectedAmount: parseFloat(amount).toFixed(2), // Ensure two decimal places
//           selectedOption: paymentType,
//         },
//       });
//     } else {
//       console.error('Amount or Payment Type is missing!');
//     }
//   };

//   const amounts = ['800', '2.2K', '6K', '10K', '20K', '30K', '50K', '80K', '1L'];


//    // Fetch `extraamount` from the backend
//    useEffect(() => {
//     const fetchExtraAmount = async () => {
//       try {
//         const response = await axios.get(SummaryApi.depositReward.url);
//         if (response.data.success) {
//           setExtraAmount(response.data.extraamount);
//         } else {
//           console.error('Failed to fetch extraamount:', response.data.message);
//         }
//       } catch (error) {
//         console.error('Error fetching extraamount:', error);
//       }
//     };
//     fetchExtraAmount();
//   }, []);


//   return (
//     <>
//       <div className="min-h-screen">
//         <Navbar heading="Recharge" linkPath="/Account" />

//                  <div className="text-white px-3">
//    {extraAmount && extraAmount !== 0 ? `If you are deposit right now uh get extra ${extraAmount}% on your deposit amount` : ''}
//  </div>
//         <div className="p-6 space-y-6">
//           {/* Recharge Box */}
//           <div className="p-3 bg-gray-900 border rounded-lg border-neon">
//             <div className="flex mb-1">
//               <h2 className="text-xs font-semibold text-gray-400">
//                 Recharge Balance
//               </h2>
//             </div>
//             <div className="text-2xl font-semibold text-white">
//               USD {parseFloat(currentUser?.totalBalance || 0).toFixed(2)}
//             </div>
//           </div>

//           {/* Input Box */}
//           <div className="flex items-center px-4 py-1 bg-[#F7F8FF] rounded-full">
//             <span className="mr-3 text-gray-400">USD</span>
//             <input
//               type="tel"
//               className="w-full px-3 py-2 placeholder-gray-400 bg-transparent border-none rounded-lg outline-none"
//               placeholder="Enter Amount"
//               value={amount}
//               onChange={handleAmountChange}
//             />
//           </div>

//           {/* Buttons Grid */}
//           <div className="grid grid-cols-3 gap-4">
//             {amounts.map((value) => (
//               <button
//                 key={value}
//                 onClick={() => handleAmountSelect(value)}
//                 className={`py-2 px-2 rounded-lg transition duration-200 ${
//                   selectedAmount === value
//                     ? 'bg-cyan-500 text-white font-semibold'
//                     : 'bg-white text-gray-500 hover:bg-secondary hover:text-gray-800'
//                 }`}
//               >
//                 USD {value}
//               </button>
//             ))}
//           </div>

//           {/* Payment Type */}
//           <div className="flex items-center w-full px-4 py-2 space-x-4 bg-white rounded-lg">
//             <span className="text-sm font-semibold text-gray-700">
//               Payment Type:
//             </span>
//             <select
//               className="px-1 text-xs text-blue-500 bg-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
//               value={paymentType}
//               onChange={handlePaymentTypeChange}
//             >
//               <option value="" disabled>
//                 Select one
//               </option>
//               <option value="upi">UPI</option>
//             </select>
//           </div>

//           {/* Recharge Button */}
//           <button
//             onClick={handleRecharge}
//             className={`w-full py-2 rounded-full text-center transition-colors ${
//               amount && paymentType
//                 ? 'border border-neon text-white font-semibold'
//                 : ' text-white'
//             }`}
//             disabled={!amount || !paymentType}
//           >
//             Recharge Now
//           </button>

//           {/* Note */}
//           <div className="px-2 py-2 text-xs text-gray-500 bg-white">
//             <p>Deposit time: 7x24 hours</p>
//             <p>Minimum Recharge amount is: USD 800</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Deposit;
