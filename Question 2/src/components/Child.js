import React from "react";
import NestedChild from "./NestedChild";

function Child() {
  return (
    <div style={{ marginTop: "20px", padding: "10px", border: "1px solid black" }}>
      <h2>Child Component</h2>
      <NestedChild />
    </div>
  );
}

export default Child;
