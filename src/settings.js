/* global process */

import { useRef } from 'react';
import { supportedLanguages, i18nInit } from './i18n/index.js';
import { loadGoogleFont } from './lib/utils.js';

// Define and export at least two fonts: mainFont and titleFont
export const mainFont = {
  name: 'Roboto',
  family: ['Roboto', 'Arial', '"sans-serif"'].join(','),
  sizes: '300,400,500,700',
};

export const titleFont = {
  name: 'Open Sans',
  family: ['"Open Sans"', 'Arial', '"sans-serif"'].join(','),
  sizes: '400,700',
};

const ALL_FONTS = [mainFont, titleFont];

export function initFonts({ alreadyLoadedFonts = '' }) {
  const loadedFonts = new Set(alreadyLoadedFonts.split(','));
  for (const { name, sizes } of ALL_FONTS)
    if (!loadedFonts.has(name))
      loadGoogleFont(name, sizes);
}

// Default settings
export const DEFAULT_SETTINGS = {
  // List of currently supported languages
  supportedLanguages,
  // Default language
  langDefault: process.env.LANG_DEFAULT || 'en',
  // Debug mode
  debug: process.env.DEBUG === 'true',
};

// Initialize settings
export function initSettings(settings = DEFAULT_SETTINGS) {
  // Init language tool
  i18nInit(settings);
  // Add a reference to the root component in settings
  settings.rootRef = useRef();
  return settings;
};
