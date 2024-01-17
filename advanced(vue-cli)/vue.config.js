/*
 * @Description:
 * @Author: 吾昂王
 * @Date: 2024-01-17 13:56:32
 */
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: {
            '/pjxiaoshuidian': {
                target: 'http://220.191.229.177:10002',
                changeOrigin: true,
            },
        },
    },
});
