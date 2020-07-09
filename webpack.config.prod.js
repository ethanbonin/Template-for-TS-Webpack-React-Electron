/* eslint-disable */
const lodash = require('lodash');
const CopyPkgJsonPlugin = require('copy-pkg-json-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

function srcPaths(src) {
    return path.join(__dirname, src);
}

const isEnvProduction = process.env.NODE_ENV === 'production';
const isEnvDevelopment = process.env.NODE_ENV === 'development';

// #region Common settings
const commonConfig = {
    devtool: isEnvDevelopment ? 'source-map' : false,
    mode: isEnvProduction ? 'production' : 'development',
    output: { path: srcPaths('dist') },
    node: { __dirname: false, __filename: false },
    resolve: {
        alias: {
            '@': srcPaths('src'),
            '@main': srcPaths('src/main'),
            '@models': srcPaths('src/models'),
            '@public': srcPaths('public'),
            '@renderer': srcPaths('src/renderer'),
            '@utils': srcPaths('src/utils'),
            '@resources': srcPaths('src/renderer/resources')
        },
        extensions: ['.js', '.json', '.ts', '.tsx', '.png'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};
// #endregion

const mainConfig = lodash.cloneDeep(commonConfig);
mainConfig.entry = './src/main/main.ts';
mainConfig.target = 'electron-main';
mainConfig.output.filename = 'main.bundle.js';
mainConfig.plugins = [
    new CopyPkgJsonPlugin({
        remove: ['scripts', 'devDependencies', 'build'],
        replace: {
            main: './main.bundle.js',
            scripts: { start: 'electron ./main.bundle.js' },
            postinstall: 'electron-builder install-app-deps',
        },
    }),
];
mainConfig.module = {
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

const rendererConfig = lodash.cloneDeep(commonConfig);
rendererConfig.entry = ['./src/renderer/index.tsx'];
rendererConfig.target = 'electron-renderer';
rendererConfig.output.filename = 'renderer.bundle.js';
rendererConfig.plugins = [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './public/index.html'),
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

module.exports = [mainConfig, rendererConfig];
