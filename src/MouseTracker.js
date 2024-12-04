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
    <div>
      <h1>Mouse Position:</h1>
      <p>
        X: {position.x}, Y: {position.y}
      </p>
      <button onClick={toggleTracking}>
        {isTracking ? "Stop Tracking" : "Start Tracking"}
      </button>
    </div>
  );
}

export default MouseTracker;
