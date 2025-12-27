
import { red } from '@mui/material/colors';
import { loadGoogleFont } from './lib/utils.js';

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

// Override default MUI theme settings
// See: https://mui.com/material-ui/customization/default-theme/
export const theme = {
  cssVariables: true,
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#fbc02d' },
    error: red,
  },
  typography: {
    fontFamily: mainFont.family,
    fontDisplay: 'swap',
    h1: {
      fontFamily: titleFont.family,
      fontWeight: 700,
      fontSize: '2.8rem',
    },
    h2: {
      fontFamily: titleFont.family,
      fontWeight: 700,
      fontSize: '2rem',
    },
    h3: {
      fontFamily: titleFont.family,
      fontWeight: 700,
      fontSize: '1.5rem',
      marginBottom: '0.6rem',
    },
    body1: {
      fontFamily: mainFont.family,
    },
    body3: {
      fontFamily: mainFont.family,
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
    },
    subtitle1: {
      lineHeight: 'normal',
    }
  },
};
