import path from 'path'
import { Configuration } from 'webpack'
import TerserPlugin from 'terser-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

const config: Configuration = {
    mode: 'production',
    devtool: 'source-map',
    target: [
        'web',
        `browserslist:${path.resolve(__dirname, '../.browserslistrc')}:modern`,
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].[contenthash].js',
        publicPath: '',
        assetModuleFilename: 'assets/[hash][ext][query]',
    },
    performance: {
        hints: 'warning',
        maxEntrypointSize: 100 * 1024, // 100kb
        maxAssetSize: 100 * 1024, // 100kb
    },
    optimization: {
        moduleIds: 'deterministic',
        minimize: true,
        splitChunks: {
            cacheGroups: {
                common: {
                    test: /[\\/]src[\\/]components[\\/]/,
                    chunks: 'all',
                    minSize: 0,
                },
                vendor: {
                    name: 'vendors',
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    maxSize: 100 * 1024, // 100kb
                },
            },
        },
        minimizer: [
            new TerserPlugin({
                terserOptions: { format: { comments: false } },
                extractComments: false,
                parallel: true,
            }),
        ],
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin({
            filename: `static/css/[name].[contenthash].css`,
            chunkFilename: `static/css/[id].[contenthash].css`,
        }),
        new CleanWebpackPlugin(),
    ],
}

export default config
