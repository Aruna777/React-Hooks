import React, { useState } from "react";

function Password() {
  const [Password, setPassword] = useState("");
  const [ShowPassword, setShowPassword] = useState(false);
  const handleChange = () => setShowPassword(!ShowPassword);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Password Visibility Toggle</h1>
      <input
        type={ShowPassword ? "text" : "password"}
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        style={{
          padding: "10px",
          width: "300px",
          fontSize: "16px",
          marginBottom: "10px",
        }}
      />
      <label>
        <input
          type="checkbox"
          checked={ShowPassword}
          onChange={handleChange}
          style={{ marginRight: "5px" }}
        />
        Show Password
      </label>
    </div>
  );
}

export default Password;
