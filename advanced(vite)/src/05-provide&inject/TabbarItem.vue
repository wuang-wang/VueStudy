<!--
 * @Descripttion: 
 * @Author: 吾昂王
 * @Date: 2024-01-18 16:35:55
-->
<template>
    <li @click="handleClick">{{ itemName }}</li>
</template>

<script>
export default {
    props: ['itemName'],
    inject: ['navTitle', 'app'],
    methods: {
        handleClick() {
            this.app.navTitle = this.itemName;
        },
    },
};
</script>
