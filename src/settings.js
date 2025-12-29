// Default settings
export const DEFAULT_SETTINGS = {
  // Web component name
  componentName: import.meta.env.VITE_COMPONENT_NAME || 'my-component',
  // Default language
  langDefault: import.meta.env.VITE_LANG_DEFAULT || 'en',
  // Location query key used to indicate the user's language
  langKey: import.meta.env.VITE_LANG_KEY || 'lang',
  // Debug mode
  debug: import.meta.env.VITE_DEBUG === 'true',
  // Reference to the root component, to be created in Layout
  rootRef: null,
};
