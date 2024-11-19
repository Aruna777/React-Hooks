import React, { useState } from "react";

function CounterApp() {
  const [initialcount, setcount] = useState(0);
  const increment = () => setcount(initialcount + 1);
  const decrement = () => setcount(initialcount - 1);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 mb-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Counter App</h1>
      <h2 className="text-3xl font-semibold text-blue-600 mb-4">
        {initialcount}
      </h2>
      <div>
        <button
          onClick={increment}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all mr-4"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-all"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default CounterApp;
