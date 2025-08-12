import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ registrationDate }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    if (!registrationDate) return;

    const registrationTime = new Date(registrationDate).getTime();
    const targetTime = registrationTime + 8 * 24 * 60 * 60 * 1000; // 8 days in ms

    const updateCountdown = () => {
      const now = Date.now();
      const diff = targetTime - now;

      if (diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown(); // initial call
    const timerId = setInterval(updateCountdown, 1000); // update every second

    return () => clearInterval(timerId);
  }, [registrationDate]);

  return (
    <div className="text-white text-center">
      <h3 className="text-2xl font-bold mb-4 text-blue-300">⏳ 8 Day Countdown</h3>
      <div className="flex justify-center gap-4 text-center">
        <div className="bg-fxbt-gradient  px-4 py-2 rounded-lg shadow-lg w-20">
          <p className="text-2xl font-bold">{timeLeft.days ?? '--'}</p>
          <p className="text-sm text-blue-200">Days</p>
        </div>
        <div className="bg-fxbt-gradient  px-4 py-2 rounded-lg shadow-lg w-20">
          <p className="text-2xl font-bold">{timeLeft.hours ?? '--'}</p>
          <p className="text-sm text-blue-200">Hours</p>
        </div>
        <div className="bg-fxbt-gradient  px-4 py-2 rounded-lg shadow-lg w-20">
          <p className="text-2xl font-bold">{timeLeft.minutes ?? '--'}</p>
          <p className="text-sm text-blue-200">Minutes</p>
        </div>
        <div className="bg-fxbt-gradient  px-4 py-2 rounded-lg shadow-lg w-20">
          <p className="text-2xl font-bold">{timeLeft.seconds ?? '--'}</p>
          <p className="text-sm text-blue-200">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
