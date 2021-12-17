import logo from './logo.svg';
import './App.css';
import {DynamicSvg} from './components/dynamic-svg';
import { useTranslation, Trans } from 'react-i18next';
import {ReactComponent as Suitcase} from "../src/assets/suitcase.svg";
import {ReactComponent as SuitcaseActive} from "../src/assets/suitcase-active.svg";
const countries = ['jpn','aus','dnk']


function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className="App">
      <div className='icon'>
     <Suitcase />
     <SuitcaseActive/>

      </div>

    </div>
  );
}

export default App;
