module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/website-frontend/'
        : '/',

    configureWebpack: {
        optimization: {
            splitChunks: {
                minSize: 500,
                maxSize: 250000
            },
            flagIncludedChunks: true
        }
    }
}