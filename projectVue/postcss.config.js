/*
 * @Description:
 * @Author: 吾昂王
 * @Date: 2024-01-29 16:28:41
 */
const path = require('path');
module.exports = ({ file }) => {
    const designWidth = file.dirname.includes(path.join('node_modules', 'vant')) ? 37.5 : 75.0;
    return {
        plugins: {
            autoprefixer: {
                browsers: ['Android >= 4.0', 'iOS >= 8'],
            },
            'postcss-pxtorem': {
                rootValue: designWidth,
                propList: ['*'],
            },
        },
    };
};
