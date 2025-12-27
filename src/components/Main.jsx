
import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import { MainContext } from '../contexts.js';
import { useTranslation } from 'react-i18next';

import LangSelector from './LangSelector.jsx';

export default function Main() {

  const { t } = useTranslation();
  const { debug } = useContext(MainContext);

  return (
    <>
      <Typography variant="h1">{t`app-title`}</Typography>
      <Typography>{t`welcome-text`}</Typography>
      {debug && <Typography>Debug mode</Typography>}
      <LangSelector />
    </>
  );
}
