import logo from './logo.svg';
import './App.css';

function App() {
  const str = `<img src onerror="alert('something')" />`
  return (
    <div className="App">
     {str}
    </div>
  );
}

export default App;
