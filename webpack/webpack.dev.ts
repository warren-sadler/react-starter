import path from 'path'
import { Configuration, HotModuleReplacementPlugin } from 'webpack'

const config: Configuration = {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        publicPath: '/',
    },
    plugins: [new HotModuleReplacementPlugin()],
    devServer: {
        static: path.join(__dirname, 'build'),
        historyApiFallback: true,
        port: 4000,
        open: true,
    },
}

export default config
