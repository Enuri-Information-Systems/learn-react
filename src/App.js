import logo from "./logo.svg";
import "./App.css";
import Friend from "./components/Friend";
import Simpson from "./components/Simpson";
import Mario from "./components/Mario";
import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";
import { Provider, useSelector, useDispatch } from "react-redux";

import { addToVisited, clearVisited } from "./store/visited/visitedAction";

function App() {
  const { visited } = useSelector((store) => store.visited);

  const [page, setPage] = useState("friends");

  const dispatch = useDispatch();

  const setCurrentPage = (value) => {
    setPage(value);
    dispatch(addToVisited(value));
  };

  const changeInfo = (value) => {
    dispatch(clearVisited());
    console.log("cleared", visited);
    // dispatch(addToVisited(value));
    // console.log("after visited", visited);
  };

  useEffect(() => {
    console.log("visited",visited)
   if (visited.length === 0) {
     console.log("visited is empty",page)
     dispatch(addToVisited(page))
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

  // console.log("after visited", visited);

  return (
    <div className="App">
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
