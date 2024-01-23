<template>
    <div>
        <input type="text" v-model="state.myText" />
        <button @click="handleAdd()">add</button>
        <button @click="handleFilter()">filter</button>
        <ul>
            <li v-for="item in handleFilter()">
                {{ item }}
            </li>
        </ul>
    </div>
</template>
<script setup>
import { reactive } from 'vue';
const state = reactive({
    myText: '',
    dataList: ['111', '222', '333'],
});

// 添加数据
const handleAdd = () => {
    state.myText == '' ? '' : state.dataList.push(state.myText);
    state.myText = '';
};

// 过滤数据
const handleFilter = () => {
    console.log(state);
    return state.dataList.filter((item) => item.includes(state.myText));
};
</script>
<style scoped></style>
