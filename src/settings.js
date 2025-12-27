/* global process */

// Default settings
export const DEFAULT_SETTINGS = {
  // Web component name
  componentName: process.env.COMPONENT_NAME || 'my-component',
  // Default language
  langDefault: process.env.LANG_DEFAULT || 'en',
  // Location query key used to indicate the user's language
  langKey: process.env.LANG_KEY || 'lang',
  // Debug mode
  debug: process.env.DEBUG === 'true',
  // Reference to the root component, to be created in Layout
  rootRef: null,
};
