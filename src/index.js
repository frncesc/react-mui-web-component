import { getWebComponentClass } from './lib/ReactWebComponent.jsx';
import Layout from './components/Layout.jsx';
import Main from './components/Main.jsx';
import DOMRenderer from './lib/DOMRenderer.jsx';

// Define web components
customElements.define('my-component', getWebComponentClass(Layout, Main));

// Define the global DOMRenderer function, useful in scenarios with classic React DOM rendering
// See: /public/index-nowc.html
window.ReactDOMRenderer = DOMRenderer;

