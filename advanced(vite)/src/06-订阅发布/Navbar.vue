<!--
 * @Descripttion: 
 * @Author: 吾昂王
 * @Date: 2024-01-18 16:18:38
-->
<template>
    <div>
        <button>返回</button>
        <span>{{ navTitle }}</span>
        <button>首页</button>
    </div>
</template>

<script>
import store from './store';
export default {
    data() {
        return {
            navTitle: '首页',
        };
    },
    mounted() {
        store.subscribe((val) => {
            this.navTitle = val;
        });
    },
};
</script>

<style scoped>
div {
    display: flex;
    justify-content: space-between;
    widows: 100%;
    height: 3rem;
    line-height: 3rem;
    background-color: #ccc;
}
</style>
