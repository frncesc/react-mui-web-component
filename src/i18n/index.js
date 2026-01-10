/**
 * Initializes the i18n engine and loads messages for all supported languages
 */

import i18n from "i18next";
import LngDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { formatDistance } from "date-fns";

// Currently supported languages (add or replace as needed)
const SUPPORTED_LANGUAGES = ["en", "ca", "es"];

// Import translations
import en from "./en.json";
import ca from "./ca.json";
import es from "./es.json";

// date-fns locales
import { ca as ca_fns, es as es_fns } from "date-fns/locale";
export const fnsLocales = { en: null, ca: ca_fns, es: es_fns };

// MUI locales for currently supported languages (add or replace as needed)
import {
  enUS as enUS_material,
  caES as caES_material,
  esES as esES_material,
} from "@mui/material/locale";
export const muiLocales = {
  en: enUS_material,
  ca: caES_material,
  es: esES_material,
};
export function getMuiLocale(lang) {
  return muiLocales[lang] || enUS_material;
}

// MUI X Data Grid locales for currently supported languages (add or replace as needed)
// Uncomment if needed:
/*
import { enUS as enUS_datagrid, caES as caES_datagrid, esES as esES_datagrid } from '@mui/x-data-grid/locales';
export const dgLocales = { en: enUS_datagrid, ca: caES_datagrid, es: esES_datagrid };
export function getDgLocale(lang) {
  return dgLocales[lang] || enUS_datagrid;
};
*/

/**
 * Initializes the i18n system
 * See https://www.i18next.com/overview/api for detailed options
 * @param {object} settings
 * @param {string} settings.langKey - Key used in querystring to set the language (default: 'lang')
 * @param {string} settings.langDefault - Default language if none is detected (default: 'en')
 * @param {string|null} settings.lang - Force a specific language (overrides detection)
 * @returns {object} - the [i18n](https://www.i18next.com) main object
 */
export function i18nInit(settings) {
  const { langKey = "lang", langDefault = "en", lang = null } = settings;

  // Store supported languages list into settings
  settings.supportedLanguages = SUPPORTED_LANGUAGES;

  // Initialize i18next
  return i18n
    .use(LngDetector)
    .use(initReactI18next)
    .init({
      lng: lang,
      detection: {
        order: [
          "querystring",
          "cookie",
          "localStorage",
          "sessionStorage",
          "navigator",
          "htmlTag",
        ],
        lookupQuerystring: langKey,
        lookupLocalStorage: "i18nextLng",
      },
      resources: {
        en: {
          translation: {
            ...en,
          },
        },
        ca: {
          translation: {
            ...ca,
          },
        },
        es: {
          translation: {
            ...es,
          },
        },
      },
      fallbackLng: langDefault,
      interpolation: {
        escapeValue: false,
      },
    });
}

// Get "last saved at" string in the current language
export function timeFrom(from) {
  const date = from || Date.now();
  const locale = fnsLocales[i18n.resolvedLanguage] || null;
  return formatDistance(Date.now(), date, locale ? { locale } : {});
}
