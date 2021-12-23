import logo from "./logo.svg";
import "./App.css";

function App() {
  const types = ["square","circle"];
  return (
    <div className="App">
      <header className="App-header">
        {types.includes("square")  && <div>Square</div> }
        {types.includes("circle")  && <div>Circle</div> }
      </header>
    </div>
  );
}

export default App;
