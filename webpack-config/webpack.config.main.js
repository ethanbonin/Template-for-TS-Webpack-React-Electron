const CopyPkgJsonPlugin = require('copy-pkg-json-webpack-plugin');
const lodash = require('lodash');
const commonConfig = require('./webpack.config.common');

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

module.exports = mainConfig;