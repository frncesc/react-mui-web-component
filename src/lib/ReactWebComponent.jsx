import * as React from "react";
import { createRoot } from "react-dom/client";
import createCache from "@emotion/cache";
import { parseStringSettings } from "./utils";

/**
 * Encloses the main React app into a Web Component with Shadow DOM
 *
 * See:
 * https://developer.mozilla.org/en-US/docs/Web/Web_Components
 *
 * Based on RemedialBear and Shawn Mclean answers on StackOveflow:
 * https://stackoverflow.com/a/57128971/3588740
 * https://stackoverflow.com/a/56516753/3896566
 *
 */
class ReactWebComponent extends HTMLElement {
  /**
   * Override this functions in derived classes to return the real main layout and component
   */
  getLayout = () => null;
  getMainComponent = () => null;

  connectedCallback() {
    // Get the main React componnet
    const Component = this.getMainComponent();

    // Allow mainComponent to create slot clients, if needed
    Component.createSlotClients?.(this);

    // Parse the "data-" props passed to the web component, and set the 'isWebComponent' flag
    const dataSettings = {
      ...parseStringSettings(this.dataset),
      isWebComponent: true,
    };

    // Create a pivot element, where ReactDOM will render the app,
    // and initialize it with our specific style (if set)
    const mountPoint = document.createElement("div");

    // Transfer our `style` attribute to the mountPoint
    const styleAttr = this.getAttribute("style");
    if (styleAttr) {
      mountPoint.setAttribute("style", styleAttr);
      this.removeAttribute("style");
    }

    // Create a Shadow DOM tree and append to it the pivot element and a root style element (needed by emotion)
    const shadowRoot = this.attachShadow({ mode: "open" });
    const emotionRoot = document.createElement("style");
    shadowRoot.appendChild(emotionRoot);
    shadowRoot.appendChild(mountPoint);

    // Create a CSS cache based on emotionRoot
    const cache = createCache({
      key: "css",
      prepend: true,
      container: emotionRoot,
    });

    const Root = this.getLayout();
    const pivot = createRoot(mountPoint);

    // Render the React component on the pivot element
    pivot.render(<Root {...{ cache, dataSettings, Component }} />);
  }
}

/**
 * Builds a JavaScript class extending HTMLElement,
 * ready to be used as a web component with shadow DOM,
 * formed by a layout (React function or Component) hosting a React main component
 * @param {class|function} layout - The React component or function that will act as a layout
 * @param {class|function} mainComponent - The main react component that will be hosted on the layout
 * @returns class - The resulting HTMLElement, ready to be used in `customElements.define`
 */
function getWebComponentClass(layout, mainComponent) {
  return class extends ReactWebComponent {
    getLayout = () => layout;
    getMainComponent = () => mainComponent;
  };
}

// eslint-disable-next-line react-refresh/only-export-components
export { ReactWebComponent, getWebComponentClass };
