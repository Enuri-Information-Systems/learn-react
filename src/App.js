import logo from "./logo.svg";
import "./App.css";
import Friend from "./components/Friend";
import Simpson from "./components/Simpson";
import Mario from "./components/Mario";
import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";

function App() {
  const [page, setPage] = useState("friends");

  const [visited, setVisited] = useState(["friends"]);

  const setCurrentPage = (value) => {
    setPage(value);
    setVisited((prev) => [...prev, value]);
  };

  const changeInfo = (value) => {
    
    setVisited((prev) => []);
    
  };

  useEffect(() => {
   if (visited.length === 0) {
     setVisited([page])
   }
  }, [visited])

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

      <button onClick={() => setCurrentPage("friends")}>friends</button>
      <button onClick={() => setCurrentPage("simpsons")}>simpson</button>
      <button onClick={() => setCurrentPage("mario")}>mario</button>

      <button onClick={() => changeInfo()}>change info</button>

      <Layout>
        {visited.includes("friends") && (
        <div style={loadStyles("friends")}>
          <Friend />
        </div>

        )}
        {visited.includes("simpsons") && (
          <div style={loadStyles("simpsons")}>
            <Simpson />
          </div>
        )}
        {visited.includes("mario") && (
          <div style={loadStyles("mario")}>
            <Mario />
          </div>
        )}
      </Layout>
    </div>
  );
}

export default App;
