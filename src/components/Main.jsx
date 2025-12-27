
import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { MainContext } from '../contexts.js';
import { useTranslation } from 'react-i18next';

import LangSelector from './LangSelector.jsx';

/**
 * Main React component
 * @returns {JSX.Element} Main component
 */
export default function Main() {

  const { t } = useTranslation();
  const { debug, info } = useContext(MainContext);

  return (
    <Paper sx={{ p: 1 }}>
      <Typography variant="h1">{t`app-title`}</Typography>
      <Typography>{t`welcome-text`}</Typography>
      <Typography>{info}</Typography>
      {debug && <Typography>Running in debug mode</Typography>}
      <LangSelector />
    </Paper>
  );
}
