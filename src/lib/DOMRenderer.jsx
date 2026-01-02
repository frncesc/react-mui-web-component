import React from 'react';
import { createRoot } from "react-dom/client";
import createCache from '@emotion/cache';
import { parseStringSettings } from './utils.js';
import Layout from "../components/Layout.jsx";
import Root from "../components/Root.jsx";

// Currently existing components, associated to unique keys
const COMPONENTS = {
  'main': Root,
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
    root.render(<Layout {...{ cache, dataSettings, Component }} />);
  }
}
