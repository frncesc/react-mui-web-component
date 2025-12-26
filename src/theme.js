
import { red } from '@mui/material/colors';
import { mainFont, titleFont } from './settings.js';

// Overrides on the default MUI theme
// See: https://mui.com/material-ui/customization/default-theme/
export default {
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
