<!--
 * @Description:
 * @Author: 吾昂王
 * @Date: 2024-01-22 17:03:13
-->
<template>
    <div class="swiper">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
export default {
    props: ['loop'],
    mounted() {
        this.mySwiper = new Swiper('.swiper', {
            loop: this.loop,
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            on: {
                slideChange: () => {
                    this.$emit('slideChange', this.mySwiper.activeIndex);
                },
            },
        });
    },
};
</script>
