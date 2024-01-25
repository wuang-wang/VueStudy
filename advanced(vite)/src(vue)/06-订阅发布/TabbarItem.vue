<!--
 * @Descripttion: 
 * @Author: 吾昂王
 * @Date: 2024-01-18 16:35:55
-->
<template>
    <li @click="handleClick">{{ itemName }}</li>
</template>

<script>
import store from './store';

export default {
    props: ['itemName'],
    methods: {
        handleClick() {
            store.publish(this.itemName)
        },
    },
};
</script>
