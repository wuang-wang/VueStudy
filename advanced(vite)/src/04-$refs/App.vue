<!--
 * @Descripttion: 
 * @Author: 吾昂王
 * @Date: 2024-01-18 15:51:37
-->
<template>
    <div>
        <button @click="getNode()">获取</button>
        <div ref="myDiv">aaa</div>
    </div>
</template>

<script>
export default {
    methods: {
        getNode() {
            this.$refs.myDiv.style.background = 'skyblue';
            console.log('🚀 ~ getNode ~ this.$refs:', this.$refs);
        },
    },
};
</script>
