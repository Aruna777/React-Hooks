import React, { useState, useEffect } from "react";

function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTracking, setIsTracking] = useState(true);

  useEffect(() => {
    const updateMousePosition = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    if (isTracking) {
      window.addEventListener("mousemove", updateMousePosition);
      console.log("Logged Mouse event");
    }

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      console.log("Stopped Mouse event");
    };
  }, [isTracking]);

  const toggleTracking = () => {
    setIsTracking(!isTracking);
  };

  return (
    <div className="flex flex-col items-center justify-center  text-gray-800">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96 text-center">
        <h1 className="text-2xl font-bold mb-4">Mouse Tracker</h1>
        <p className="text-lg mb-6">
          <span className="font-semibold">X:</span> {position.x},{" "}
          <span className="font-semibold">Y:</span> {position.y}
        </p>
        <button
          onClick={toggleTracking}
          className={`px-4 py-2 text-white font-semibold rounded-lg transition ${
            isTracking
              ? "bg-red-500 hover:bg-red-600"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isTracking ? "Stop Tracking" : "Start Tracking"}
        </button>
      </div>
    </div>
  );
}

export default MouseTracker;
