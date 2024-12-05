import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [inputValue, setInputValue] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      if (navigator.vibrate) {
        navigator.vibrate([500, 200, 500]);
      }
      alert("Countdown complete!");
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    if (inputValue > 0) {
      setTimeLeft(inputValue);
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setInputValue(0);
  };

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Countdown Timer</h1>

      <div className="mb-4">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
          disabled={isRunning}
          className="border border-gray-300 rounded px-2 py-1 w-24 text-center"
        />
        <span className="ml-2">seconds</span>
      </div>

      <div className="mb-4">
        <h2 className="text-xl">
          Time Left: <span className="font-bold">{timeLeft} seconds</span>
        </h2>
      </div>

      <div className="space-x-2">
        {!isRunning && timeLeft === 0 && (
          <button
            onClick={handleStart}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Start
          </button>
        )}
        {isRunning && (
          <button
            onClick={handlePause}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            Pause
          </button>
        )}
        {!isRunning && timeLeft > 0 && (
          <button
            onClick={handleStart}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Resume
          </button>
        )}
        <button
          onClick={handleReset}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;
