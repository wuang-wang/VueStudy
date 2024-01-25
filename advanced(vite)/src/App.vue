<!--
 * @Description:
 * @Author: 吾昂王
 * @Date: 2024-01-17 16:45:51
-->
<template>
    <div>
        <router-view></router-view>
        <Tabbar></Tabbar>
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Tabbar from './components/Tabbar.vue';
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
