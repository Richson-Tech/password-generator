import React, { useState } from "react";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8); // Default length

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(length); // Call your password generation function
    setPassword(newPassword);
  };

  return (
    <div>
      <label>Password Length:</label>
      <input
        type="number"
        value={length}
        onChange={(e) => setLength(parseInt(e.target.value))}
      />
      <button onClick={handleGeneratePassword}>Generate Password</button>
      <br />
      <label>Generated Password:</label>
      <input type="text" value={password} readOnly />
    </div>
  );
}

export default PasswordGenerator;
