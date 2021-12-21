import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const names = [
    { text: "One", value: "One-1" },
    {text:"Two-2",value:"Two-2"},
    {text:"Three",value:"Three-3"},
    {text:"Four",value:"Four-4"},
    {text:"Five",value:"Five-5"},
  ];
  const [value, setValue] = useState();
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="App">
      Value {value}
      <select value={value} onChange={handleChange}>
        <option>Please select a size</option>
        {names.map((item) => (
          <option key={item.value} value={item.value}>
            {item.text}
          </option>
        ))}
      </select>
      {value && (
        <img src={`/hedgerow-${value.split("-")[1]}.webp`} />

      )}
    </div>
  );
}

export default App;
