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
      {/* {t('description.part2')} */}
      {t("common:com-description")}
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('si')}>SI</button>

    </div>
  );
}

export default App;
