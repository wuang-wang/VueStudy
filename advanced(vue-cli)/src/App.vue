<template>
    <div>根组件</div>
    <button @click="autoFuc()">111</button>
</template>

<script>
export default {
    name: 'App',
    methods: {
        autoFuc() {
            fetch('/pjxiaoshuidian/selectStationList.do?keyword=&dzname=&sheng=浙江省&shi=金华市&xianqu=浦江县&xfss=&xxll=&kffd=&cjobjids=&job=超级管理员&tjdm=&addBeginTime=&addEndTime=&tcBeginTime=&tcEndTime=')
                .then((res) => res.json())
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {});
        },
    },
    components: {},
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
