import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(Backend)
  // .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'se',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    lng:"en",
    ns:["common","header","footer"],

    backend:{
      loadPath: 'https://borsdatadevresources.blob.core.windows.net/locales/landing/{{lng}}/{{ns}}.json',

      // request: function (options, url, payload, callback) {
      //   console.log("options",options);
      //   console.log("url",url)
      //   console.log("options",payload);
      //   // console.log("url",url)
      // },
    }
   
  });

export default i18n;