const webpack = require('webpack');
const path = require('path');
const WebPackCopyFiles = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src/app.ts'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new WebPackCopyFiles([
            {from: 'copytodist'}
        ]),
        new CleanWebpackPlugin([
            path.join(__dirname, 'dist')
        ])
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        inline: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: true,
            ignored: /node_modules/
        }
    },
    module: {
        rules: [
            { test: /\.ts$/, enforce: 'pre', loader: 'tslint-loader' },
            //{ test: /assets(\/|\\)/, loader: 'file-loader?name=assets/[hash].[ext]' },
            // { test: /pixi\.js$/, loader: 'expose-loader?PIXI' },
            // { test: /phaser-split\.js$/, loader: 'expose-loader?Phaser' },
            // { test: /p2\.js$/, loader: 'expose-loader?p2' },
            { test: /\.ts$/, loader: 'ts-loader', exclude: '/node_modules/' }
        ]
    }
};