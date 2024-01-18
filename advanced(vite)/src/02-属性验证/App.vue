<!--
 * @Descripttion: 
 * @Author: 吾昂王
 * @Date: 2024-01-18 11:06:33
-->
<template>
    <div v-for="(item, id) in titleList" :key="id">
        <Navbar :title="item.name" :showFlag="item.showFlag"></Navbar>
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
                    showFlag: true,
                },
                {
                    id: 2,
                    name: '影院',
                    showFlag: true,
                },
                {
                    id: 3,
                    name: '我的',
                    showFlag: false,
                },
            ],
        };
    },
    components: {
        Navbar,
    },
};
</script>
