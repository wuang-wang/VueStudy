<!--
 * @Description:
 * @Author: 吾昂王
 * @Date: 2024-01-25 14:06:54
-->
<template>
    <div class="tabbar">
        <ul>
            <li>
                <router-link to="/films">电影</router-link>
            </li>
            <li>
                <router-link to="/cinemas">影院</router-link>
            </li>
            <li>
                <router-link to="/center">我的</router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.tabbar {
    position: fixed;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    bottom: 0;
    ul {
        display: flex;
        li {
            flex: 1;
        }
    }
}

.router-link-active {
    color: aqua;
}
</style>
