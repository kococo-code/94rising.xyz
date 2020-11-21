const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const TerserPlugin = require('terser-webpack-plugin')
const WebpackManifestPlugin = require('webpack-manifest-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                // https://github.com/terser/terser
                terserOptions: {
                    parse: {
                        ecma: 8,
                    },
                    compress: {
                        ecma: 5,
                        warnings: false,
                        comparisons: false,
                        inline: 2,
                    },
                    mangle: {
                        safari10: true,
                    },
                    output: {
                        ecma: 5,
                        comments: false,
                        // https://github.com/facebook/create-react-app/issues/2488
                        // Emoji
                        ascii_only: true,
                    },
                },
            }),
        ],
        splitChunks: {
            chunks: 'all',
            filename: 'static/js/[hash:8]-bundle.js',
        },
    },
    plugins: [
        new WebpackManifestPlugin({
            fileName: 'manifest.json',
            basePath: '../build/',
        }),
        new CopyPlugin({
            patterns: [
                { from: 'public/robots.txt', to: 'robots.txt' },
                { from: 'public/Montserrat_OFL.txt', to: 'Montserrat_OFL.txt' },
            ],
        }),
    ],
})
