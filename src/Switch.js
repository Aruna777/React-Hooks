import React, { useState } from "react";

function Switch() {
  const [isOn, setIsOn] = useState(false);
  const switchOn = () => setIsOn(!isOn);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 space-y-4">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Switch</h1>
      <h2
        className={`text-2xl font-semibold mb-4 ${
          isOn ? "text-green-600" : "text-red-600"
        }`}
      >
        Status: {isOn ? "ON" : "OFF"}
      </h2>
      <button
        onClick={switchOn}
        className={`px-4 py-2 rounded-lg shadow-md font-medium text-white transition-all ${
          isOn
            ? "bg-green-500 hover:bg-green-600"
            : "bg-red-500 hover:bg-red-600"
        }`}
      >
        {isOn ? "Turn Off" : "Turn On"}
      </button>
    </div>
  );
}

export default Switch;
