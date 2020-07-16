import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';

import translationFR from './locales/fr/translation.json';
import translationES from './locales/es/translation.json';
import translationEUS from './locales/eus/translation.json';

// the translations
const resources = {
  fr: {
    translation: translationFR,
  },
  esp: {
    translation: translationES,
  },
  eus: {
    translation: translationEUS,
  },
};

i18n
  .use(detector)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'fr',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
