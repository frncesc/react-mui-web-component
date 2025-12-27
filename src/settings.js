/* global process */

// Default settings
export const DEFAULT_SETTINGS = {
  // Default language
  langDefault: process.env.LANG_DEFAULT || 'en',
  // Key to set language in the current location query string
  langKey: process.env.LANG_KEY || 'lang',
  // Debug mode
  debug: process.env.DEBUG === 'true',
  // Reference to the root component, to be created in Layout
  rootRef: null,
};
