<!--
 * @Description:
 * @Author: 吾昂王
 * @Date: 2024-01-23 16:23:08
-->
<template>
    <input type="text" v-model="state.keyWord" />
    <ul>
        <li v-for="item in computedList" :key="item">{{ item }}</li>
    </ul>
</template>

<script setup>
import { reactive, computed } from 'vue';

const state = reactive({
    keyWord: '',
    dataList: ['111', '222', '333'],
});

const computedList = computed(() => {
    return state.dataList.filter((item) => item.includes(state.keyWord));
});
</script>
