import logo from './logo.svg';
import './App.css';
import { useTranslation, Trans } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className="App">
      {/* {t("description.part2")} */}
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('se')}>SE</button>

      <div>
        <h1 className='mon'>
      Loading from Translations - Montserrat / Normalized {t("instrumentbasic:ib-market-cap").normalize()}

        </h1>
        <h1>Hard coded / default font - Börsvärde</h1>
        <h1 className='mon'>Hard coded / Montserrat - Börsvärde</h1>
        <h1 >Hard coded / Normalized - {String("Börsvärde").normalize()}</h1>
        <h1 >Hard coded / Normalized / Montserrat- {String("Börsvärde").normalize()}</h1>
        <h1 className='san'>Hard coded / Normalized / sans serif- {String("Börsvärde").normalize()}</h1>




      </div>
      
      {/* <Trans i18nKey={"instrumentbasic:ib-market-cap"} components={{1:<span style={{fontWeight:"bold",color:"red"}}></span>}} /> */}

    </div>
  );
}

export default App;
