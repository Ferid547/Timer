import React, { useState, useEffect } from "react";

export const Timer = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalSecond;

    if (isActive) {
      intervalSecond = setInterval(() => {
        setSecond((prevSecond) => {
          if (prevSecond === 59) {
            setMinute((prevMinute) => {
              if (prevMinute === 59) {
                setHour((prevHour) => prevHour + 1);
                return 0;
              } else {
                return prevMinute + 1;
              }
            });
            return 0;
          } else {
            return prevSecond + 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(intervalSecond);
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setHour(0);
    setMinute(0);
    setSecond(0);
  };

  return (
    <div className=" h-screen flex items-center justify-center">
      <div className=" bg-[#2e3a6c] w-max p-5 rounded-xl flex flex-col items-center gap-5 shadow-lg">
        <div className="flex items-center text-white gap-1">
          <div className="bg-[#4c4c8ecc] px-2.5 py-1.5 rounded-md">
            {hour.toString().padStart(2, "0")}
          </div>
          :
          <div className="bg-[#4c4c8ecc] px-2.5 py-1.5 rounded-md">
            {minute.toString().padStart(2, "0")}
          </div>
          :
          <div className="bg-[#4c4c8ecc] px-2.5 py-1.5 rounded-md">
            {" "}
            {second.toString().padStart(2, "0")}
          </div>
        </div>
        <div className="flex gap-2">
          <button
            className=" bg-[#05184e] text-white py-1 px-4 rounded-lg"
            onClick={handleStart}
          >
            Start
          </button>
          <button
            className=" bg-[#05184e] text-white py-1 px-4 rounded-lg"
            onClick={handleStop}
          >
            Stop
          </button>
          <button
            className=" bg-[#05184e] text-white py-1 px-4 rounded-lg"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
