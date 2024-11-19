import React, { useState } from "react";

function InputText() {
  const [input, setInput] = useState("");
  const changeState = (event) => setInput(event.target.value);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Input Text</h1>
      <input
        type="text"
        value={input}
        onChange={changeState}
        placeholder="Type something here..."
        className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-1/2 mb-4"
      />
      <p className="text-xl text-gray-700">
        <b>You typed:</b> {input}
      </p>
    </div>
  );
}

export default InputText;
