import React, { useState } from "react";
import "./App.css";

function PasswordGenerator() {
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
    let newPassword = "";
    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }
    setPassword(newPassword);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Password Generator</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={generatePassword}
      >
        Generate Password
      </button>
      <input
        type="text"
        value={password}
        readOnly
        className="border border-gray-400 px-4 py-2 rounded text-center w-64"
      />
    </div>
  );
}

export default PasswordGenerator;
