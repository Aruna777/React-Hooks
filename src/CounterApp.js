import React, { useState } from "react";

function CounterApp() {
  const [initialcount, setcount] = useState(0);
  const increment = () => setcount(initialcount + 1);
  const decrement = () => setcount(initialcount - 1);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>
      <h2>{initialcount}</h2>
      <button
        onClick={increment}
        style={{ marginRight: "10px", padding: "10px" }}
      >
        Increment
      </button>
      <button onClick={decrement} style={{ padding: "10px" }}>
        Decrement
      </button>
    </div>
  );
}

export default CounterApp;
