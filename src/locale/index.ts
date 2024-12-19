/**
 * @file i18n
 * If necessary, you can implement dynamic language loading from the root of the project.
 */

import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ru from "./ru.json";
import en from "./en.json";

const translations = [{ en }, { ru }].reduce((acc, curr) => {
  const [key, value] = Object.entries(curr)[0];
  return { ...acc, [key]: { translation: value } };
}, {} as Resource);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: translations,
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
