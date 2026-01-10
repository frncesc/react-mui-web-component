import * as React from "react";
import { deepmerge } from "@mui/utils";
import { i18nInit } from "./i18n";
import { theme, initFonts } from "./theme";

// eslint-disable-next-line react-refresh/only-export-components
export const MainContext = React.createContext();

// Default settings
const DEFAULT_SETTINGS = {
  // Web component name
  componentName: import.meta.env.VITE_COMPONENT_NAME || "my-component",
  // Default language
  langDefault: import.meta.env.VITE_LANG_DEFAULT || "en",
  // Location query key used to indicate the user's language
  langKey: import.meta.env.VITE_LANG_KEY || "lang",
  // Debug mode
  debug: import.meta.env.VITE_DEBUG === "true",
  // Reference to the root component, to be created in Root
  rootRef: null,
};

export function MainContextProvider(props) {
  const { children, rootRef, dataSettings = {} } = props;
  const settings = deepmerge(
    { ...DEFAULT_SETTINGS, theme, rootRef },
    dataSettings,
  );
  initFonts(settings);
  i18nInit(settings);
  return <MainContext value={settings}>{children}</MainContext>;
}
