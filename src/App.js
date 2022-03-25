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
      <button onClick={() => changeLanguage('sv')}>SE</button>
      <button onClick={() => changeLanguage('si')}>Sinhala</button>


      <div>
        <h1>Login -  {t("new.login","Login here")}</h1>
        <h1>Register -  {t("new.signUp","register here")}</h1>
        <h1>Login -  {t("new.forget","Forget password")}</h1>


        <h1>good morning -  {t("common.greeting","Good morning")}</h1>


      
       




      </div>
      

    </div>
  );
}

export default App;
