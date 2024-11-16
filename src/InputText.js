import React, { useState } from "react";

function InputText() {
  const [input, setInput] = useState("");
  const changeState = (event) => setInput(event.target.value);
  return (
    <div>
      <h1>Input Text </h1>
      <input
        type="text"
        value={input}
        onChange={changeState}
        placeholder="Type something here..."
      />
      <p>
        {" "}
        <b>You typed:</b> {input}
      </p>
    </div>
  );
}

export default InputText;
