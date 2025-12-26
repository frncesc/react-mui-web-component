
import React from 'react';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { deepmerge } from '@mui/utils';
import ThemeProviderWithLocale from './lib/ThemeProviderWithLocale.jsx';
import { DEFAULT_SETTINGS, initFonts, initSettings } from './settings.js';
import theme from './theme.js';
import { MainContext } from './contexts.js';


export default function MainLayout({ cache, dataSettings, Component }) {

  // Merge default settings with "data-" props
  const settings = initSettings(deepmerge(DEFAULT_SETTINGS, dataSettings));

  // Initialize needed fonts
  initFonts(settings);

  return (
    <MainContext value={settings}>
      <CacheProvider value={cache}>
        <ThemeProviderWithLocale theme={theme}>
          <CssBaseline />
          <Component settings={settings} />
        </ThemeProviderWithLocale>
      </CacheProvider>
    </MainContext>
  );
}
