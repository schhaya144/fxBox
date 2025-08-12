import React from 'react';

const WingoResult = () => {
  const results = [
    { period: "2022070132764", number: 2, bigSmall: "Small", color: "red" },
    { period: "2022070132763", number: 7, bigSmall: "Big", color: "green" },
    { period: "2022070132762", number: 0, bigSmall: "Small", color: "red" },
    { period: "2022070132761", number: 2, bigSmall: "Small", color: "red" },
    { period: "2022070132760", number: 0, bigSmall: "Small", color: "red" },
    { period: "2022070132759", number: 1, bigSmall: "Small", color: "green" },
    { period: "2022070132758", number: 7, bigSmall: "Big", color: "green" },
    { period: "2022070132757", number: 7, bigSmall: "Big", color: "green" },
    { period: "2022070132756", number: 1, bigSmall: "Small", color: "green" },
    { period: "2022070132755", number: 8, bigSmall: "Big", color: "red" },
  ];

  return (
    <div className="p-3">
      <div className="w-full mt-4 py-4 text-center text-white bg-[#406790] shadow-custom">
        <h1 className="text-xl font-semibold">2022070117638</h1>
        <div className="flex justify-center gap-1 mt-2">
          <div className="px-1 py-1 text-xl font-semibold text-black bg-white shadow-custom ">
            0
          </div>
          <div className="px-1 py-1 text-xl font-semibold text-black bg-white shadow-custom ">
            0
          </div>
          <span class="text-white  text-xl font-semibold ">:</span>
          <div className="px-1 py-1 text-xl font-semibold text-black bg-white shadow-custom">
            1
          </div>
          <div className="px-1 py-1 text-xl font-semibold text-black bg-white shadow">
            7
          </div>
        </div>
      </div>

      <table className="w-full overflow-hidden text-center text-white rounded-lg bg-darkSidebar">
        <thead>
          <tr className="bg-darkSidebar">
            <th className="p-2 border-b-2 border-gray-400">Periods</th>
            <th className="p-2 border-b-2 border-gray-400">Number</th>
            <th className="p-2 border-b-2 border-gray-400">Big/Small</th>
            <th className="p-2 border-b-2 border-gray-400">Colour</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index} className="">
              <td className="p-2">{result.period}</td>
              <td
                className={`p-2 ${
                  result.number === 0
                    ? 'text-red-500'
                    : result.number % 2 === 0
                    ? 'text-red-500'
                    : 'text-green-500'
                }`}
              >
                {result.number}
              </td>
              <td className="p-2 border-gray-600">{result.bigSmall}</td>
              <td className="p-2 border-gray-600">
                <span
                  className={`inline-block w-4 h-4 rounded-full ${
                    result.color === 'red' ? 'bg-red-500' : 'bg-green-500'
                  }`}
                ></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="p-2  mt-4  bg-[#406790] rounded">
        <p className="ml-2 font-semibold text-white">Adjusting the result</p>
        </div>
      <div className='bg-darkSidebar'>
        <p className='p-2 py-4 ml-2 font-semibold text-white '>0 (Red and Purple) | 5 (Blue and Purple) | 1, 3, 7, 9 (Blue) | 2, 4, 6, 8 (Red)</p>
        <p className='p-2 ml-2 font-semibold text-white '>Next Result:Random</p>
        <input type="text" className='w-full text-justify bg-transparent border border-grayCustom text-grayCustom' placeholder='Enter the Result (e.g. 1)' />
        </div>
    </div>
  );
};

export default WingoResult;
