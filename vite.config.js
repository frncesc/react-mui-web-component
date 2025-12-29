/* global process */

import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react';
import banner from 'vite-plugin-banner';
import pkg from './package.json';

const date = new Date();
const version = `${pkg.version} (${date.toISOString().substring(0, 10)})`;
const bannerText = `
${pkg.name} v${version}
${pkg.description}
${pkg.homepage}

MIT License

Copyright (c) ${date.getFullYear()} ${pkg.author.name || pkg.author}

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the " Software"), to deal in
the Software without restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice (including the next paragraph)
shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

WARNING: This is a compressed version of "${pkg.name}".
The full source code is freely available at:
${pkg.repository.url}
`;

// See: https://vite.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [
      react(),
      banner(bannerText),
    ],
    base: '',
    publicDir: 'public',
    appType: 'spa',
    build: {
      assetsDir: '',
      assetsInlineLimit: 16384,
      cssCodeSplit: false,
      sourcemap: true,
      rollupOptions: {
        output: {
          entryFileNames: `${process.env.VITE_COMPONENT_NAME}.js`,
          format: 'iife',
        }
      },
    },
  });
}
