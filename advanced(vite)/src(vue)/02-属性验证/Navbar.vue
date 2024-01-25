<!--
 * @Descripttion: 
 * @Author: 吾昂王
 * @Date: 2024-01-18 11:07:08
-->
<template>
    <div v-show="showFlag">{{ title }}</div>
</template>

<script>
export default {
    props: {
        title: {
            required: true,
            type: String,
            default:'默认值'
        },
        showFlag: Boolean,
    },
};
</script>
