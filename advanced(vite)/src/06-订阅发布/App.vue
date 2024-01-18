<!--
 * @Descripttion: 
 * @Author: 吾昂王
 * @Date: 2024-01-18 16:16:52
-->
<template>
    <div>
        <Navbar></Navbar>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Tabbar from './Tabbar.vue';
export default {
    components: {
        Navbar,
        Tabbar,
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
li {
    list-style: none;
}
</style>
