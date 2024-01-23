<template>
    <div>
        <input type="text" v-model="myText" />
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
import { ref } from 'vue';

const myText = ref('')
const dataList = ref(['111', '222', '333'])

// 添加数据
const handleAdd = () => {
    myText.value == '' ? '' : dataList.value.push(myText.value);
    myText.value = '';
};

// 过滤数据
const handleFilter = () => {
    console.log(dataList.value);
    return dataList.value.filter((item) => item.includes(myText.value));
};
</script>
<style scoped></style>
