import React, { useState } from "react";
import logo from "./logo.svg";
import convert from "convert-length";

function App() {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [area, setArea] = useState();

  const lengths = ["cm", "m", "km"];
  const [widthLengthType, setWidthLengthType] = useState("cm");

  const handleWidthLength = (e) => {
    const lengthType = e.target.value;
    setWidthLengthType(lengthType);
    // result = convert(value, fromUnit, toUnit, [options])
    console.log("WIDTH",width,"widthLengthType",widthLengthType,"lengthType",lengthType)
    const r = convert(Number(width),widthLengthType, lengthType);
    
    setWidth(r);
  };

  const handleWidth = (e) => {
    setWidth(e.target.value);
    if (e.target.value && height) {
      console.log("Value #1", e.target.value, "Value #2", height);
      setArea(Number(e.target.value) * height);
    }
  };

  const handleHeight = (e) => {
    setHeight(e.target.value);
    if (e.target.value && width) {
      console.log("Value #1", e.target.value, "Value #2", width);
      setArea(Number(e.target.value) * width);
    }
  };

  const handleArea = (e) => {
    setArea(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input
            type="number"
            placeholder="Width"
            value={width}
            onChange={handleWidth}
          />
          <select onChange={handleWidthLength} value={widthLengthType}>
            {lengths.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="number"
            placeholder="Height"
            value={height}
            onChange={handleHeight}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Area"
            value={area}
            onChange={handleArea}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
