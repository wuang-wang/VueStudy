/*
 * @Description:
 * @Author: 吾昂王
 * @Date: 2024-01-30 16:53:04
 */
const ENV = process.env.NODE_ENV;
module.exports = {
    lintOnSave: ENV !== 'production',
    publicPath: './',
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:7000',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    chainWebpack: (config) => {
        config.plugin('define').tap((definitions) => {
          Object.assign(definitions[0], {
            __VUE_OPTIONS_API__: 'true',
            __VUE_PROD_DEVTOOLS__: 'false',
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
          })
          return definitions
        })
      }
};