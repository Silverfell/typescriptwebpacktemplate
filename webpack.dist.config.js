const merge = require('webpack-merge');
const baseConfig = require('./webpack.common.js');
const minify = require('uglifyjs-webpack-plugin');

module.exports = merge(baseConfig, {
    plugins: [
        new minify({
            uglifyOptions: {
                compress: true,
                parallel: true,
                output:{
                    comments: false,
                    beautify: false
                }
            }

          })
    ]
});
