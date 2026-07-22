import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

void i18n.use(initReactI18next).init({
  lng: 'ko',
  fallbackLng: 'ko',
  interpolation: { escapeValue: false },
  resources: {
    ko: { translation: {} },
  },
});

export default i18n;
