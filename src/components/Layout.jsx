
import React, { useRef } from 'react';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { deepmerge } from '@mui/utils';
import Container from '@mui/material/Container';
import ThemeProviderWithLocale from '../lib/ThemeProviderWithLocale.jsx';
import { i18nInit } from '../i18n/index.js';
import { DEFAULT_SETTINGS } from '../settings.js';
import { theme, initFonts } from '../theme.js';
import { MainContext } from '../contexts.js';


export default function Layout({ cache, dataSettings, Component }) {

  // Merge default settings with "data-" props
  const settings = deepmerge(DEFAULT_SETTINGS, dataSettings);
  const rootRef = useRef();
  settings.rootRef = rootRef;
  initFonts(settings);
  i18nInit(settings);

  return (
    <MainContext value={settings}>
      <CacheProvider value={cache}>
        <ThemeProviderWithLocale theme={theme}>
          <CssBaseline />
          <Container ref={rootRef}>
            <Component />
          </Container>
        </ThemeProviderWithLocale>
      </CacheProvider>
    </MainContext>
  );
}
