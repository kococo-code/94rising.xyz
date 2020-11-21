const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            assets: path.resolve(__dirname, '../src/assets'),
            style: path.resolve(__dirname, '../src/style'),
            common: path.resolve(__dirname, '../src/common'),
            components: path.resolve(__dirname, '../src/components'),
            pages: path.resolve(__dirname, '../src/pages'),
            utils: path.resolve(__dirname, '../src/utils'),
            types: path.resolve(__dirname, '../src/types'),
        },
    },
    output: {
        publicPath: '/',
        path: path.join(__dirname, '../build'),
        chunkFilename: 'static/js/[name].js',
        filename: 'static/js/[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-typescript',
                        ],
                        plugins: [
                            '@babel/proposal-class-properties',
                            '@babel/proposal-object-rest-spread',
                        ],
                    },
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(ico|png|jpg|jpeg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                options: {
                    name: 'static/image/[hash].[ext]',
                    limit: 10000,
                },
            },

            {
                test: /\.(woff(2)?|ttf|eot|svg|mp4)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'static/',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[hash:8].css',
            chunkFilename: 'static/css/[id].[hash:8].css',
        }),
    ],
}
