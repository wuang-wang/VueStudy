/*
 * @Descripttion:
 * @Author: 吾昂王
 * @Date: 2024-01-18 17:00:06
 */
export default {
    dataList: [],
    // 订阅
    subscribe(cb) {
        this.dataList.push(cb);
    },
    // 发布
    publish(val) {
        this.dataList.forEach((cb) => cb(val));
    },
};
