# react-mui-web-component
React app template using Material UI, encapsulated as a web component

This template builds a [custom web component](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
created with [React](https://react.dev/) and [Material UI](https://mui.com/material-ui/) elements.

The web component can be placed on any blog post or web page, just like any other HTML element.

The component uses [shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM),
so it has a CSS environment completely independent from the styles of the page where it is embedded.

The template also initializes the [react-i18next](https://react.i18next.com/) 
[_useTranslation_](https://react.i18next.com/latest/usetranslation-hook) hook, useful
for internationalizing your app, and utilities for customizing the
[MUI Theme](https://mui.com/material-ui/customization/theming/).

The template comes in two variants, built with different bundlers:
- The "[with-vite](https://github.com/frncesc/react-mui-web-component/tree/with-vite)" branch uses [Vite](https://vite.dev/).
- The "[with-webpack](https://github.com/frncesc/react-mui-web-component/tree/with-webpack)" branch (this one) uses [Webpack](https://webpack.js.org/).

## How to use this template

Before you begin, it's important to familiarize yourself with [Node.js](https://nodejs.org/en), [NPM](https://www.npmjs.com/),
[React](https://react.dev/), [Material UI](https://mui.com/material-ui/), and [i18next](https://www.i18next.com/), as well as
the [Web Components API](https://developer.mozilla.org/en-US/docs/Web/API/Web_components). This will allow you to understand
the inner workings of the template by examining its code.

1 - Create a new repository using the __"Use this template"__ button at the top right of the
[GitHub repository](https://github.com/frncesc/react-mui-web-component).

2 - [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
your newly created repository on your computer.

3 - Create a copy of the file `.env.example` named `.env`:
```bash
$ cd your-repository-name
$ cp ./.env.example ./.env
```
This file can be used later to declare custom variables to your app.

4 - Install the NPM dependencies with:
```bash
$ npm ci
```

5 - Launch the application on your browser with `npm start`:
```bash
$ npm start
```

6 - From here, edit `src/components/Root.jsx` to create your app. You can completely remove the contents
of this file, which is now just a test. The only condition is that this function returns a React component
that collects the attributes passed by its parent. For example:
```jsx
import Box from '@mui/material/Box';

export default function Root(attributes = {}) {
  return (
    <Box {...attributes}>
       ...
    </Box>
  );
}
```
Of course, you can add other components to build your app.

7 - The `src/i18n` folder currently contains some example text strings in three languages
​​(English, Catalan, and Spanish). You can add and remove the languages ​​you actually need, and completely
remove the example strings that are currently in the three language JSON files. You will also need to
adapt the variables defined in the `src/i18n/index.js` file to suit your internationalization requirements.

8 - The appearance of the application can be customized by editing the `src/theme.js` file. Also, new
context variables can be added to `src/context.js`. Both context variables and theme parameters can be set
with 'data-' attributes of your custom web element. See `public/index.html` for an example about how to
do this.

9 - To bundle your application, run the npm "build" command.
```bash
$ npm run build
```
This will create a `dist` folder with a file named `my-component.js` (or the name you specified in
the `.env` file), which is what you need to distribute and load from your web page in order to use your
custom web component.

If you detect any errors or want to make any contributions to the template, please leave a comment in the
[issues](https://github.com/frncesc/react-mui-web-component/issues) section.

Happy coding!
