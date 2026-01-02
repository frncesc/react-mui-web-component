
import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { MainContext } from '../contexts.js';
import { useTranslation } from 'react-i18next';

import LangSelector from './LangSelector.jsx';

/**
 * Main app component
 * @returns {JSX.Element} Root component
 */
export default function Root(attributes = {}) {

  const { t } = useTranslation();
  const { debug, info } = useContext(MainContext);

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
