import React, { useRef } from 'react';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { deepmerge } from '@mui/utils';
import Box from '@mui/material/Box';
import ThemeProviderWithLocale from '../lib/ThemeProviderWithLocale.jsx';
import { i18nInit } from '../i18n/index.js';
import { DEFAULT_SETTINGS } from '../settings.js';
import { theme, initFonts } from '../theme.js';
import { MainContext } from '../contexts.js';

/**
 * Main app layout
 * 
 * @param {Object} props - The layout props.
 * @param {Object} props.cache - The [Emotion CSS cache](https://emotion.sh/docs/@emotion/cache) used by MUI
 * @param {Object} props.dataSettings - Properties passed to the parent component via "data-" properties 
 * @param {React.ReactNode} props.Component - The main component rendered by this layout.
 * @returns {JSX.Element} - The Layout component
 */
export default function Layout({ cache, dataSettings, Component }) {

  // Merge default settings with "data-" props
  const settings = deepmerge({ ...DEFAULT_SETTINGS, theme }, dataSettings);
  const rootRef = useRef();
  settings.rootRef = rootRef;
  console.log(settings)
  initFonts(settings);
  i18nInit(settings);

  return (
    <MainContext value={settings}>
      <CacheProvider value={cache}>
        <ThemeProviderWithLocale theme={settings.theme}>
          <CssBaseline />
          <Box ref={rootRef}>
            <Component />
          </Box>
        </ThemeProviderWithLocale>
      </CacheProvider>
    </MainContext>
  );
}
