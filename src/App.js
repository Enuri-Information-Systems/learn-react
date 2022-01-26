import logo from "./logo.svg";
import "./App.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import options from "./options";
function App() {
  // const options = {
  //   chart: {
  //     type: 'column'
  // },
  //   title: {
  //     text: "My chart",
  //   },
  //   colors: ['#028ba8', '#ff8134', 'green', ],
  //   series: [
  //     {
  //       data: [1, 2, 3],
  //     },
  //     {
  //       data: [1, 2, 3],
  //     },
  //     {
  //       data: [2,4, 5],
  //     },
  //   ],
  // };
  return (
    <div className="App">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default App;
