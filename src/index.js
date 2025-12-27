import { getWebComponentClass } from './lib/ReactWebComponent.jsx';
import Layout from './components/Layout.jsx';
import Main from './components/Main.jsx';
import DOMRenderer from './lib/DOMRenderer.jsx';
import { DEFAULT_SETTINGS } from './settings.js';

// Main component name. Defaults to 'my-component'
const { componentName } = DEFAULT_SETTINGS;

// Define web components
customElements.define(componentName, getWebComponentClass(Layout, Main));

// Define the global DOMRenderer function, useful in scenarios with classic React DOM rendering
// See: /public/index-nowc.html
window.ReactDOMRenderer = DOMRenderer;

