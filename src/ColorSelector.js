import React, { useState } from "react";

function ColorSelector() {
  const [initial, setcolor] = useState("");
  const changecolor = (event) => setcolor(event.target.value);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Favorite Color Selector</h1>

      <select
        value={initial}
        onChange={changecolor}
        style={{ padding: "10px", fontSize: "16px", marginBottom: "20px" }}
      >
        <option value="" disabled>
          Select your favorite color
        </option>

        <option value="Red">Red</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
        <option value="Yellow">Yellow</option>
      </select>

      <p style={{ fontSize: "18px" }}>
        {initial
          ? `Your favorite color is: ${initial}`
          : "Please select a color."}
      </p>
    </div>
  );
}

export default ColorSelector;
