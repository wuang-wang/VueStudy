<template>
    <input type="text" v-model="state.keyWord" />
    <ul>
        <li v-for="item in computedList" :key="item">{{ item }}</li>
    </ul>
</template>

<script setup>
import { reactive } from 'vue';
import UseSearch from './UseSearch';  // 引入Hook

const state = reactive({
    keyWord: '',
    dataList: ['111', '222', '333'],
});

// 自定义Hook（将响应式变量或者方法形式暴露出来
const { computedList } = UseSearch(state)
</script>
