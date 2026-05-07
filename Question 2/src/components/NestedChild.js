import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function NestedChild() {
  // Step 3: Consume data using useContext
  const user = useContext(UserContext);

  return (
    <div style={{ marginTop: "10px", padding: "10px", border: "1px solid gray" }}>
      <h3>Nested Child Component</h3>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <p><strong>Location:</strong> {user.location}</p>
    </div>
  );
}

export default NestedChild;
