import { Configuration } from 'webpack'
import { merge } from 'webpack-merge'
import WEBPACK_BASE from './webpack.base'
import WEBPACK_DEV from './webpack.dev'
import WEBPACK_PROD from './webpack.prod'

function getEnvConfig(env: string): Configuration {
    switch (env) {
        case 'production':
            return merge(WEBPACK_BASE, WEBPACK_PROD)
        case 'development':
            return merge(WEBPACK_BASE, WEBPACK_DEV)
        default:
            return merge(WEBPACK_BASE, WEBPACK_DEV)
    }
}

export default getEnvConfig(process.env.NODE_ENV || 'development')
