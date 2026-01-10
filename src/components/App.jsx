import * as React from 'react';
import { Typography, Paper } from '@mui/material';
import { MainContext } from '../MainContext';
import { useTranslation } from 'react-i18next';

import LangSelector from './LangSelector';

/**
 * Main app component
 * @returns {JSX.Element} App component
 */
export default function App(attributes = {}) {

  const { t } = useTranslation();
  const { debug, info } = React.useContext(MainContext);

  return (
    <Paper {...attributes} sx={{ p: 2, '> p': { my: 2 } }}>
      <Typography variant="h2">{t`app-title`}</Typography>
      <Typography>{t`welcome-text`}</Typography>
      <Typography>{info}</Typography>
      {debug && <Typography>Running in debug mode</Typography>}
      <LangSelector />
    </Paper>
  );
}
