const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

let cesiumSource = './node_modules/cesium/Source';
let cesiumWorkers = '../Build/Cesium/Workers';
const resolve = dir => {
    return path.join(__dirname, dir)
}

// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'
// iview-admin线上演示打包路径： https://file.iviewui.com/admin-dist/
const BASE_URL = process.env.NODE_ENV === 'production' ?
    '/' :
    '/'

module.exports = {
    // Project deployment base
    // By default we assume your app will be deployed at the root of a domain,
    // e.g. https://www.my-app.com/
    // If your app is deployed at a sub-path, you will need to specify that
    // sub-path here. For example, if your app is deployed at
    // https://www.foobar.com/my-app/
    // then change this to '/my-app/'
    publicPath: '/nczjdbcdc/',
    outputDir: 'nczjdbcdc',
    // baseUrl: BASE_URL,
    // tweak internal webpack configuration.
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    // 如果你不需要使用eslint，把lintOnSave设为false即可
    lintOnSave: false,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set('_c', resolve('src/components'))


    },
    configureWebpack: {
        resolve: {
            fallback: {
                "https": false,
                "zlib": false,
                "http": false,
                "url": false
            },
            mainFiles: ['index', 'Cesium']

        },
        plugins: [
            new CopyWebpackPlugin({
                // copy-webpack-plugin 10.X.X的写法
                patterns: [{
                        from: 'node_modules/cesium/Build/Cesium/Workers',
                        to: 'cesium/Workers'
                    },
                    {
                        from: 'node_modules/cesium/Build/Cesium/ThirdParty',
                        to: 'cesium/ThirdParty'
                    },
                    {
                        from: 'node_modules/cesium/Build/Cesium/Assets',
                        to: 'cesium/Assets'
                    },
                    {
                        from: 'node_modules/cesium/Build/Cesium/Widgets',
                        to: 'cesium/Widgets'
                    }
                ]
            }),
            new webpack.DefinePlugin({
                // Define relative base path in cesium for loading assets
                CESIUM_BASE_URL: JSON.stringify('/nczjdbcdc/cesium')
            })
        ]
    },
    // 设为false打包时不生成.map文件
    productionSourceMap: true
        // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
        // devServer: {
        //   proxy: 'localhost:3000'
        // }
}