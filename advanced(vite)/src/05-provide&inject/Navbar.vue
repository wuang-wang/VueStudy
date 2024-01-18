<!--
 * @Descripttion: 
 * @Author: 吾昂王
 * @Date: 2024-01-18 16:18:38
-->
<template>
    <div>
        <button>返回</button>
        <span>{{ app.navTitle }}</span>
        <button>首页</button>
    </div>
</template>

<script>
export default {
    inject: ['navTitle', 'app'],
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
