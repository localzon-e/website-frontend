module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/website-frontend/'
        : '/',
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, {limit: 10240}))
    }
}