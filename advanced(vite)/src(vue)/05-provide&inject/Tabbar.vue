<!--
 * @Descripttion: 
 * @Author: 吾昂王
 * @Date: 2024-01-18 16:18:57
-->
<template>
    <ul>
        <TabbarItem v-for="data in dataList" :key="data" :itemName="data"></TabbarItem>
    </ul>
</template>

<script>
import TabbarItem from './TabbarItem.vue';
export default {
    data() {
        return {
            dataList: ['首页', '列表', '我的'],
        };
    },
    components: {
        TabbarItem,
    },
};
</script>

<style scoped>
ul {
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    display: flex;
    position: fixed;
    bottom: 0;
}
li {
    flex: 1;
    text-align: center;
}
</style>
