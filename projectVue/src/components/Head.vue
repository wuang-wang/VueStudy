<!--
 * @Description:
 * @Author: 吾昂王
 * @Date: 2024-01-31 10:32:05
-->
<template>
    <header class="header-box">
        <div class="left">
            <div class="time">
                <span>{{ timeNow.day }}</span>
                <span>{{ timeNow.month }}</span>
            </div>
            <h1 class="title">知乎日报</h1>
        </div>
        <router-link to="/person" class="link-btn">
            <img :src="pic" alt="" />
        </router-link>
    </header>
</template>

<script setup>
import { reactive, toRefs, computed } from 'vue';
import { formatTime } from '../assets/utils';

// 定义默认头像
let state = reactive({
    pic: require('../assets/images/timg.jpg'),
});
let {pic} = toRefs(state)

//defineProps 来接收组件的传值
const props = defineProps({
    time: {
        type: String,
        default: '',
    },
});

// 获取当前时间
let timeNow = computed(() => {
    let time = props.time || null;
    let [month, day] = formatTime(time, '{1}-{2}').split('-');
    let area = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
    return {
        month: area[month - 1],
        day,
    };
});
</script>

<style lang="scss" scoped>
.header-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;

    .left {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .time {
        padding-right: 15px;
        border-right: 1px solid #ddd;

        span {
            display: block;
            height: 20px;
            line-height: 20px;
            font-size: 20px;
            text-align: center;

            &:nth-child(2) {
                height: 15px;
                line-height: 15px;
                font-size: 12px;
            }
        }
    }

    .title {
        padding-left: 10px;
        font-size: 22px;
    }

    .link-btn {
        box-sizing: border-box;
        width: 30px;
        height: 30px;

        img {
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
}
</style>
