const path = require('path');
const mainConfig = require('./webpack.config.main');
const rendererConfig = require('./webpack.config.renderer')

function srcPaths(src) {
    return path.resolve(__dirname, "..", src);
}

const createElectronReloadWebpackPlugin = require('electron-reload-webpack-plugin');

const ElectronReloadWebpackPlugin = createElectronReloadWebpackPlugin({
    path: srcPaths('dist/main.bundle.js'),
    logLevel: 0,
    stopOnClose: true
});

mainConfig.plugins = mainConfig.plugins.concat([ElectronReloadWebpackPlugin()])
rendererConfig.plugins = rendererConfig.plugins.concat([ElectronReloadWebpackPlugin()])

module.exports = [mainConfig, rendererConfig]