import React from "react";
import UserContext from "./context/UserContext";
import Child from "./components/Child";

function App() {
  // Data to be shared via Context
  const userData = {
    name: "Shlok",
    role: "Developer",
    location: "Gurugram"
  };

  return (
    // Step 2: Provide data using Context.Provider
    <UserContext.Provider value={userData}>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>React Context API Demo </h1>
        <Child />
      </div>
    </UserContext.Provider>
  );
}

export default App;
