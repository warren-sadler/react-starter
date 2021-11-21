import path from 'path'
import { Configuration, HotModuleReplacementPlugin } from 'webpack'
import ESLintPlugin from 'eslint-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

const config: Configuration = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    entry: './src/index.tsx',
    plugins: [
        new ESLintPlugin({
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
        }),
        new ForkTsCheckerWebpackPlugin({
            async: false,
        }),
        new HtmlWebpackPlugin({
            meta: {
                viewport:
                    'width=device-width, initial-scale=1,viewport-fit=cover, shrink-to-fit=no',
                'theme-color': '#e3ac72',
                'apple-mobile-web-app-status-bar-style': '#e3ac72',
                'og:title': 'Therify React Starter',
                'og:description': 'A simple Boilerplate of React Js',
                'content-type': {
                    'http-equiv': 'content-type',
                    content: 'text/html; charset=UTF-8',
                },
            },
            template: path.resolve(__dirname, '../public/index.html'),
            inject: true,
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
            },
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(graphql|gql)$/,
                exclude: /node_modules/,
                loader: 'graphql-tag/loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(eot|ttf|woff|woff2|png|jpe?g|gif|svg|tif)$/i,
                type: 'asset/resource',
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024, // 4KiB
                    },
                },
            },
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                        ],
                    },
                },
            },
        ],
    },
}

export default config
