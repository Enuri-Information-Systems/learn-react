import logo from './logo.svg';
import './App.css';
import {DynamicSvg} from './components/dynamic-svg';
const countries = ['jpn','aus','dnk']
import { useTranslation, Trans } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className="App">
      <header className="App-header">
        {countries.map(country=>{
          return (<DynamicSvg name={country} />)
        })}
      </header>
      {/* {t('description.part2')} */}
      {/* {t("description.part2")} */}
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('si')}>SI</button>

      <Trans i18nKey={"description.part2"} components={{1:<span style={{fontWeight:"bold",color:"red"}}></span>}} />

    </div>
  );
}

export default App;
