import * as React from 'react';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProviderWithLocale } from './lib';
import { MainContextProvider } from './MainContext';

/**
 * Main app layout
 * 
 * @param {Object} props - The layout props.
 * @param {Object} props.cache - The [Emotion CSS cache](https://emotion.sh/docs/@emotion/cache) used by MUI
 * @param {Object} props.dataSettings - Properties passed to the parent component via "data-" properties 
 * @param {React.ReactNode} props.Component - The main component rendered by this layout.
 * @returns {JSX.Element} - The Root component
 */
// eslint-disable-next-line no-unused-vars
export default function Root({ cache, dataSettings, Component }) {

  const rootRef = React.useRef();

  return (
    <MainContextProvider {...{ rootRef, dataSettings }}>
      <CssBaseline />
      <CacheProvider value={cache}>
        <ThemeProviderWithLocale>
          <Component ref={rootRef} />
        </ThemeProviderWithLocale>
      </CacheProvider>
    </MainContextProvider>
  );
}
