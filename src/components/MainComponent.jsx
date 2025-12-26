
import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { MainContext } from '../contexts';
import { useTranslation } from 'react-i18next';

export default function MainComponent() {

  const { t } = useTranslation();
  const { rootRef, debug } = useContext(MainContext);

  return (
    <Box sx={{ typography: 'body1' }} ref={rootRef} >
      <Typography variant="h1">{t`app-title`}</Typography>
      <Typography>{t`welcome-text`}</Typography>
      {debug && <span>Debug mode</span>}
    </Box>
  );
}
