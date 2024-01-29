<!--
 * @Description:
 * @Author: 吾昂王
 * @Date: 2024-01-17 16:45:51
-->
<template>
    <div>
        <!-- <p>新年龄：{{ store.getAddAge }}</p> -->
        <p>新年龄：{{ store.getAddAge(1100) }}</p>
        <p>姓名：{{ store.name }}</p>
        <p>年龄：{{ store.age }}</p>
        <p>性别：{{ store.sex }}</p>
        <button @click="changeName">更改姓名</button>
        <button @click="patchStore">批量修改数据</button>
        <button @click="saveName">保存姓名</button>
        <router-view></router-view>
        <Tabbar></Tabbar>
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Tabbar from './components/Tabbar.vue';
import { useUsersStore } from '../src/store/user';

const store = useUsersStore();
console.log(store);

const changeName = () => {
    store.name = '张三';
    console.log(store);
};
const patchStore = () => {
    store.$patch({
        name: '张三',
        age: 100,
        sex: '女',
    });
};
const saveName = () => {
    store.saveName("吾昂王");
}

</script>

<style>
* {
    margin: 0;
    padding: 0;
}
li {
    list-style: none;
}
</style>
