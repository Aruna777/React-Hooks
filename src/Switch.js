import React, { useState } from "react";

function Switch() {
  const [isOn, setIsOn] = useState(false);
  const switchOn = () => setIsOn(!isOn);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Switch</h1>
      <h2>Status: {isOn ? "ON" : "OFF"}</h2>
      <button
        onClick={switchOn}
        style={{ marginRight: "10px", padding: "10px" }}
      >
        Turn On
      </button>
    </div>
  );
}

export default Switch;
