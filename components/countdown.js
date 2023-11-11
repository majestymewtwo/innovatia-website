import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      return { days, hours, minutes, seconds };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [timeLeft]);

  return (
    <div>
      <div className="flex space-x-4">
        <TimeCard timeLeft={timeLeft.days} timeName="DAYS" />
        <TimeCard timeLeft={timeLeft.hours} timeName="HOURS" />
        <TimeCard timeLeft={timeLeft.minutes} timeName="MINUTES" />
        <TimeCard timeLeft={timeLeft.seconds} timeName="SECONDS" />
      </div>
    </div>
  );
};

export default CountdownTimer;

const TimeCard = ({ timeLeft, timeName }) => {
  return (
    <div className='flex flex-col justify-center items-center space-y-2 font-blanka border border-slate-400 w-[80px]  md:w-[130px] md:h-[130px] p-3 rounded-lg bg-white/5'>
      <h2 className='md:text-5xl text-3xl'>{timeLeft}</h2>
      <h2 className='md:text-lg text-sm font-space tracking-wide'>
        {timeName}
      </h2>
    </div>
  );
};
