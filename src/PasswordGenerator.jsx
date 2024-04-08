// import React, { useState } from "react";
// import { generatePassword } from "./utils/Generator";

// function App() {
//   const [fullName, setFullName] = useState("");
//   const [dob, setDob] = useState("");
//   const [generatedPassword, setGeneratedPassword] = useState("");

//   const handleGeneratePassword = () => {
//     const newPassword = generatePassword(fullName, dob);
//     setGeneratedPassword(newPassword);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
//       <h1 className="text-3xl font-bold mb-6">Password Generator</h1>
//       <div className="flex flex-col items-center">
//         <input
//           type="text"
//           value={fullName}
//           onChange={(e) => setFullName(e.target.value)}
//           required
//           placeholder="Full Name"
//           className="border p-2 mb-4 w-64"
//         />
//         <input
//           type="date"
//           value={dob}
//           onChange={(e) => setDob(e.target.value)}
//           placeholder="Date of Birth"
//           className="border p-2 mb-4 w-64"
//         />
//         <button
//           onClick={handleGeneratePassword}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Generate Password
//         </button>
//         <div className="mt-4">
//           <input
//             type="text"
//             value={generatedPassword}
//             readOnly
//             className="border p-2 w-64"
//             placeholder="Generated Password"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import { generatePassword } from "./utils/Generator";
import { FaCopy } from "react-icons/fa";

function App() {
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(fullName, dob);
    setGeneratedPassword(newPassword);
  };

  const handleCopyPassword = () => {
    // Copy generated password to clipboard
    navigator.clipboard.writeText(generatedPassword).then(() => {
      // Show "Copied to clipboard" message for 2 seconds
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-6">Password Generator</h1>
      <div className="flex flex-col items-center">
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Full Name"
          className="border p-2 mb-4 w-64"
        />
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          placeholder="Date of Birth"
          className="border p-2 mb-4 w-64"
        />
        <button
          onClick={handleGeneratePassword}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Generate Password
        </button>
        <div className="mt-4 flex items-center">
          <input
            type="text"
            value={generatedPassword}
            readOnly
            className="border p-2 w-64"
            placeholder="Generated Password"
          />
          <button onClick={handleCopyPassword} className="ml-2">
            <FaCopy />
          </button>
        </div>
        {copied && <p className="text-green-500 mt-2">Copied to clipboard</p>}
      </div>
    </div>
  );
}

export default App;
