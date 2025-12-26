import React from 'react';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { getMuiLocale } from '../i18n';

/**
 * Overrides MUI's ThemeProvider, filling the provided theme with specific localization strings for
 * mui/material
 * 
 * @param {Object} props - The component props.
 * @param {Object} props.theme - Object with MUI theme properties.
 * @param {React.ReactNode} props.children - The child components consumers of the provided MUI theme.
 * @returns {JSX.Element} - The customized ThemeProvider
 */
export default function ThemeProviderWithLocale({ theme, children }) {

  const { i18n: { resolvedLanguage } } = useTranslation();

  const themeWithLocale = responsiveFontSizes(
    createTheme(
      theme,
      getMuiLocale(resolvedLanguage))
  );

  return (<ThemeProvider theme={themeWithLocale}>{children}</ThemeProvider>);
}
