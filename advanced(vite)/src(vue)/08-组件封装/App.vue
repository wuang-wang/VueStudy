<!--
 * @Description:
 * @Author: 吾昂王
 * @Date: 2024-01-22 17:02:48
-->
<template>
    <div>
        <MySwiper v-if="datalist.length" :loop="false" @slideChange="onSlideChange">
            <MySwiperItem v-for="(data, index) in datalist" :key="index">
                {{ data }}
            </MySwiperItem>
        </MySwiper>
    </div>
</template>
<script>
import MySwiper from './MySwiper.vue';
import MySwiperItem from './MySwiperItem.vue';
export default {
    components: {
        MySwiper,
        MySwiperItem,
    },
    data() {
        return {
            datalist: [],
        };
    },
    mounted() {
        setTimeout(() => {
            this.datalist = [11, 22, 33, 44];
        }, 2000);
    },
    methods: {
        onSlideChange(index) {
            console.log(index);
        },
    },
};
</script>
<style>
.swiper {
    width: 600px;
    height: 400px;
}
</style>
