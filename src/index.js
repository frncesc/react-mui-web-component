import { getWebComponentClass } from './ReactWebComponent.jsx';
import MainLayout from './MainLayout.jsx';
import MainComponent from './components/MainComponent.jsx';
import DOMRenderer from './DOMRenderer.jsx';

// Define web components
customElements.define('my-component', getWebComponentClass(MainLayout, MainComponent));

// Define the global DOMRenderer function, useful in scenarios with classic React DOM rendering
// See: /public/index-nowc.html
window.ReactDOMRenderer = DOMRenderer;
