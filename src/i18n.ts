import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import es from './locales/es.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

const syncHtmlLang = (lng: string) => {
  document.documentElement.lang = lng;
};
syncHtmlLang(i18n.language);
i18n.on('languageChanged', syncHtmlLang);

export default i18n;
