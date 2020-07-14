const path = require('path');

function srcPaths(src) {
    let resolvePath = path.resolve(__dirname, "..", src);
    console.log(resolvePath)
    return resolvePath
}

const isEnvProduction = process.env.NODE_ENV === 'production';
const isEnvDevelopment = process.env.NODE_ENV === 'development';

const commonConfig = {
    devtool: isEnvDevelopment ? 'source-map' : false,
    mode: isEnvProduction ? 'production' : 'development',
    output: { path: srcPaths('dist') },
    node: { __dirname: false, __filename: false },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx', '.png'],
        alias: {
            '@': srcPaths('src'),
            '@main': srcPaths('src/main'),
            '@public': srcPaths('public'),
            '@renderer': srcPaths('src/renderer'),
            '@resources': srcPaths('src/renderer/resources'),
            '@scenes': srcPaths('src/renderer/constants/scenes'),
            '@types': srcPaths('src/renderer/types'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
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

module.exports = commonConfig