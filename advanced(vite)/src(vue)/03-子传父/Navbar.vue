<!--
 * @Descripttion: 
 * @Author: 吾昂王
 * @Date: 2024-01-18 11:07:08
-->
<template>
    <div>{{ title }}</div>
    <button @click="clickEvent(new Date())">点击</button>
</template>

<script>
export default {
    props: {
        title: {
            required: true,
            type: String,
            default: '默认值',
        },
    },
    //提前声明你要使用的自定义事件
    emits: ['someEvent'],
    methods: {
        clickEvent(val) {
            this.$emit('someEvent', val);
        },
    },
};
</script>
