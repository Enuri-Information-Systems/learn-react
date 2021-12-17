import logo from './logo.svg';
import './App.css';
import {DynamicSvg} from './components/dynamic-svg';
const countries = ['jpn','aus','dnk']

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {countries.map(country=>{
          return (<DynamicSvg name={country} />)
        })}
      </header>
    </div>
  );
}

export default App;
