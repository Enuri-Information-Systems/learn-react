import logo from "./logo.svg";
import "./App.css";
import Ratios from "./components/Ratios";
import PDFHistory from "./components/PDFHistory";
import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";

function App() {
  const [page, setPage] = useState("friends");

  const loadStyles = (value) => {
    if (value === page) {
      return {
        display: "block",
      };
    } else {
      return {
        display: "none",
      };
    }
  };
  return (
    <div className="App">
      {/* <div style={loadStyles("friends")}>
        <Ratios />
      </div>
      <div style={loadStyles("simpsons")}>
        <PDFHistory />
      </div> */}

      {/* <button onClick={() => setPage("friends")}>friends</button>
      <button onClick={() => setPage("simpsons")}>simpson</button> */}
      <Layout>
        <div style={loadStyles("friends")}>
          <Ratios />
        </div>
        <div style={loadStyles("simpsons")}>
          <PDFHistory />
        </div>
      </Layout>
    </div>
  );
}

export default App;
