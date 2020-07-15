const lodash = require('lodash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const commonConfig = require('./webpack.config.common');

function srcPaths(src) {
    return path.resolve(__dirname, "..", src);
}

const rendererConfig = lodash.cloneDeep(commonConfig);
rendererConfig.entry = ['./src/renderer/index.tsx'];
rendererConfig.target = 'electron-renderer';
rendererConfig.output.filename = 'renderer.bundle.js';
rendererConfig.plugins = [
    new HtmlWebpackPlugin({
        template: srcPaths('public/index.html'),
        file: "./index.html"
    }),
    new CopyPlugin({
        patterns: [
            { from: srcPaths('src/renderer/resources'), to: srcPaths('dist/resources') },
        ],
    }),
];
rendererConfig.module = {
    ...commonConfig.module,
    rules: commonConfig.module.rules.concat([
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }
    ])
}

module.exports = rendererConfig;
