import { getWebComponentClass, DOMRenderer } from './lib';
import Root from './Root.jsx';
import App from './components/App.jsx';

// Main component name. Defaults to 'my-component'
const componentName = import.meta.env.VITE_COMPONENT_NAME || 'my-component';

// Define web components
customElements.define(componentName, getWebComponentClass(Root, App));

// Define the global DOMRenderer function, useful in scenarios with classic React DOM rendering
// See: /public/index-nowc.html
window.ReactDOMRenderer = DOMRenderer;


