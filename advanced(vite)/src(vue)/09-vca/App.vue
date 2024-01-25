<template>
    <div>
        {{ obj.name }}
        {{ obj.job }}
        <button @click="handleClick">点击</button>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
const obj = reactive({
    name: '吾昂王',
    job: '前端开发',
});
const handleClick = () => {
    obj.name = '111'
}
</script>

<style scoped></style>
