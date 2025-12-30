/* global process */

import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import pkg from './package.json' with {type: 'json'};
import dotenv from 'dotenv';
import Dotenv from 'dotenv-webpack';
import TerserPlugin from 'terser-webpack-plugin';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const date = new Date();
const version = `${pkg.version} (${date.toISOString().substring(0, 10)})`;
const banner = `
${pkg.name} v${version}
${pkg.description}
${pkg.homepage}

MIT License

Copyright (c) ${date.getFullYear()} ${pkg.author.name || pkg.author}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

For full license information of included components please see: 
components.LICENSE

WARNING: This is a compressed version of "${pkg.name}".
Full source code is freely available at:
${pkg.repository.url}
`;

/**
 * Inline assets as raw text or Base64 URIs
 * See: https://webpack.js.org/guides/asset-modules/
 */
const assetRules = [
  {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  },
  {
    test: /\.png$/,
    type: 'asset/inline',
  },
  {
    test: /\.html$/,
    use: 'raw-loader',
  },
];

export default function (env, argv) {

  const MODE = argv.mode || '';
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  let dotEnvPath = path.resolve(__dirname, `.env${MODE ? '.' : ''}${MODE}`);
  if (!fs.existsSync(dotEnvPath))
    dotEnvPath = path.resolve(__dirname, '.env');
  if (!fs.existsSync(dotEnvPath))
    dotEnvPath = path.resolve(__dirname, '.env.example');
  dotenv.config({ path: dotEnvPath });

  const config = {
    mode: 'production',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: `${process.env.COMPONENT_NAME}.js`,
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
              ],
            }
          },
        },
        ...assetRules,
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        APP_ID: JSON.stringify(`${pkg.title} v${version}`),
      }),
      new Dotenv({
        path: dotEnvPath,
        safe: './.env.example',
        allowEmptyValues: true,
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'public/index.html',
        minify: false,
        scriptLoading: 'module',
      }),
      new HtmlWebpackPlugin({
        filename: 'index-nowc.html',
        template: 'public/index-nowc.html',
        minify: false,
        scriptLoading: 'module',
      }),
    ],
    devServer: {
      host: 'localhost',
      port: 8000,
      open: true,
      static: {
        directory: path.join(__dirname, 'public'),
        watch: true,
      },
      client: {
        overlay: true,
        progress: true,
      },
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          extractComments: {
            filename: `${process.env.COMPONENT_NAME}.LICENSES`,
            banner: () => banner,
          },
          terserOptions: {
            // See: https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
          }
        }),
      ],
    },
    performance: {
      // Avoid "big asset" warnings
      maxAssetSize: 2000000,
      maxEntrypointSize: 2000000,
    },
    // Create source maps only in production builds
    devtool: MODE === 'production' ? 'source-map' : undefined,
  };

  return config;
};
