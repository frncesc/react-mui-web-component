import React from 'react';
import { createRoot } from "react-dom/client";
import createCache from '@emotion/cache';
import { parseStringSettings } from './lib/utils.js';
import MainLayout from "./MainLayout.jsx";
import MainComponent from "./components/MainComponent.jsx";

// Currently existing components, associated to unique keys
const COMPONENTS = {
  'main': MainComponent,
  // Declare other components here
};

/**
 * Renders the required component (main repository or user library) on a specific DOM component 
 * @param {HTMLElement} root - The DOM element where the requested component will be rendered
 * @param {string*} type - Type of component to be rendered. Default is 'main', 
 * but others can be defined in KNOWN_COMPONENTS.
 */
export default function DOMRenderer(rootElement, type = 'main') {
  const dataSettings = parseStringSettings(rootElement.dataset);
  const Component = COMPONENTS[type];
  if (Component) {
    const cache = createCache({ key: 'css', prepend: true });
    const root = createRoot(rootElement);
    root.render(<MainLayout {...{ cache, dataSettings, Component }} />);
  }
}
