import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-locize-backend';

const locizeOptions = {
  projectId:process.env.REACT_APP_LOCIZE_PROJECT_ID,
  apiKey:process.env.REACT_APP_LOCIZE_API_KEY,
  refLng:process.env.REACT_APP_LOCIZE_REFLAN,
  version:process.env.REACT_APP_LOCIZE_VERSION
}

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(Backend)
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    lng:"en",
    // ns:["common","header","footer","instrumentbasic"],

    // backend:{
    //   loadPath: 'https://borsdatadevresources.blob.core.windows.net/locales/landing/{{lng}}/{{ns}}.json',

    
    // }
    backend:locizeOptions,
    saveMissing:process.env.REACT_APP_LOCIZE_ADD_MISSING
   
  });

export default i18n;