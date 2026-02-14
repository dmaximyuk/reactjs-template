import i18n, { type Resource } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import {
  LOCALES,
  I18N_DEBUG,
  I18N_FALLBACK_LNG,
  I18N_STORAGE_KEY,
} from "@/shared/config";

const translations = Object.values(LOCALES).reduce((acc, curr) => {
  const [key, value] = Object.entries(curr)[0];
  return { ...acc, [key]: { translation: value } };
}, {} as Resource);

const i18nReady = i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: I18N_DEBUG,
    resources: translations,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: [
        "localStorage",
        "sessionStorage",
        "cookie",
        "navigator",
        "htmlTag",
        "querystring",
      ],
      lookupLocalStorage: I18N_STORAGE_KEY,
      lookupSessionStorage: I18N_STORAGE_KEY,
      lookupCookie: I18N_STORAGE_KEY,
    },
    supportedLngs: Object.keys(translations),
    fallbackLng: I18N_FALLBACK_LNG,
  });

export { i18n, i18nReady };
