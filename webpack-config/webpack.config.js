/** eslint-disable */
const devConfigs = require('./webpack.config.dev');
const prodConfigs = require('./webpack.config.prod');

const env = process.env.NODE_ENV === 'production';

let config;

if (env) {
    config = prodConfigs
} else {
    config = devConfigs
}

module.exports = config;