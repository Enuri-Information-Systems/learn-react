import React, { useState, useEffect } from "react";
import "./App.css";
import convert from "convert-units";

function App() {
  const [initialValues, setInitialValues] = useState({
    area: {
      value: "100",
      type: "cm",
    },
    length: {
      value: "",
      type: "",
    },
  });

  const converter = (e, metric) => {
    const widthType = e.target.value;
    console.log("from",initialValues[metric])// 100, cm
    console.log("to",widthType)// m

    const r = convert(Number(initialValues[metric].value))
      .from(initialValues[metric].type)
      .to(widthType);
      console.log("R",r)
  };

  return (
    <div className="App">
      <select
        onChange={(e) => {
          e.persist();
          converter(e, "area");
          let newValues = {...initialValues};
          newValues.area.type = e.target.value;
          setInitialValues(newValues)
        }}
      >
        <option value={'km'} key={'km'}>km</option>
        <option value={'m'} key={'m'}>m</option>
        <option value={'cm'} key={'cm'}>cm</option>
      </select>
      {JSON.stringify(initialValues)}
    </div>
  );
}

export default App;
