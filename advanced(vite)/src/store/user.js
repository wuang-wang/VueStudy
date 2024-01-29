/*
 * @Description:
 * @Author: 吾昂王
 * @Date: 2024-01-29 14:23:42
 */
import { defineStore } from 'pinia';

// 第一个参数是应用程序中 store 的唯一 id
export const useUsersStore = defineStore('users', {
    state: () => {
        return {
            name: '小猪课堂',
            age: 25,
            sex: '男',
        };
    },
    getters: {
        getAddAge: (state) => {
            // return state.age + 100;
            return (num) => state.age + num;
        },
        getNameAndAge() {
            return this.name + this.getAddAge; // 调用其它getter
        },
    },
    actions: {
        saveName(name) {
            this.name = name;
        },
    },
});
