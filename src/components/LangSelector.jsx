import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { MainContext } from '../contexts.js';

/** 
 * React element that renders a language selector dropdown.
 * The available languages are defined in the application settings.
 * The selected language is stored in the i18n instance.
 * @returns {JSX.Element} LangSelector component
 */
export default function LangSelector() {
  const { supportedLanguages, rootRef } = useContext(MainContext);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language.substring(0, 2));

  // Handle language change
  const handleChange = (ev) => {
    const lang = ev.target.value;
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <Select
      label={t`language`}
      value={language}
      onChange={handleChange}
      size="small"
      sx={{ color: 'inherit' }}
      MenuProps={{ container: () => rootRef.current }}
    >
      {supportedLanguages.map((lang) =>
        <MenuItem key={lang} value={lang} >
          {t(lang)}
        </MenuItem>
      )}
    </Select>
  );
};