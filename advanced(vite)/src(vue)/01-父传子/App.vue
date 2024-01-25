<!--
 * @Descripttion: 
 * @Author: 吾昂王
 * @Date: 2024-01-18 10:01:52
-->
<template>
    <div v-for="(item,id) in titleList" :key="id">
        <Navbar :title="item.name"></Navbar>
    </div>
</template>

<script>
import Navbar from './Navbar.vue';
export default {
    data() {
        return {
            titleList: [
                {
                    id: 1,
                    name: '首页',
                },
                {
                    id: 2,
                    name: '影院',
                },
                {
                    id: 3,
                    name: '我的',
                },
            ],
        };
    },
    components: {
        Navbar,
    },
};
</script>
