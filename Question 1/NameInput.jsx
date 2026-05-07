import React, { useState } from "react";

function NameInput() {
  // State to hold the entered name
  const [name, setName] = useState("");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Enter Your Name</h2>
      <input
        type="text"
        placeholder="Type your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "8px",
          fontSize: "16px",
          width: "250px",
          border: "1px solid #ccc",
          borderRadius: "4px"
        }}
      />
      <div style={{ marginTop: "15px", fontSize: "18px" }}>
        <strong>Real-time Output:</strong> {name}
      </div>
    </div>
  );
}

export default NameInput;
