import React, { useState } from "react";

function Password() {
  const [Password, setPassword] = useState("");
  const [ShowPassword, setShowPassword] = useState(false);
  const handleChange = () => setShowPassword(!ShowPassword);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Password Visibility Toggle
      </h1>

      <input
        type={ShowPassword ? "text" : "password"}
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        className="px-4 py-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 w-72"
      />

      <label className="flex items-center text-gray-700 text-lg">
        <input
          type="checkbox"
          checked={ShowPassword}
          onChange={handleChange}
          className="mr-2"
        />
        Show Password
      </label>
    </div>
  );
}

export default Password;
