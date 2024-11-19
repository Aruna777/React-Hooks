import React, { useState } from "react";

function ColorSelector() {
  const [initial, setcolor] = useState("");
  const changecolor = (event) => setcolor(event.target.value);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Favorite Color Selector
      </h1>

      <select
        value={initial}
        onChange={changecolor}
        className="px-4 py-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      >
        <option value="" disabled>
          Select your favorite color
        </option>

        <option value="Red">Red</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
        <option value="Yellow">Yellow</option>
      </select>

      <p className="text-xl text-gray-700">
        {initial
          ? `Your favorite color is: ${initial}`
          : "Please select a color."}
      </p>
    </div>
  );
}

export default ColorSelector;
