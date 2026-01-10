import * as React from 'react';
import { createRoot } from "react-dom/client";
import createCache from '@emotion/cache';
import { parseStringSettings } from './utils';
import Root from "../Root";
import App from "../components/App";

// Currently existing components, associated to unique keys
const COMPONENTS = {
  'main': App,
  // Declare other components here
};

/**
 * Renders the required component (main repository or user library) on a specific DOM component 
 * @param {HTMLElement} root - The DOM element where the requested component will be rendered
 * @param {string*} type - Type of component to be rendered. Default is 'main', 
 * but others can be defined in KNOWN_COMPONENTS.
 */
function DOMRenderer(rootElement, type = 'main') {
  const dataSettings = parseStringSettings(rootElement.dataset);
  const Component = COMPONENTS[type];
  if (Component) {
    const cache = createCache({ key: 'css', prepend: true });
    const pivot = createRoot(rootElement);
    pivot.render(<Root {...{ cache, dataSettings, Component }} />);
  }
}

export { DOMRenderer };

