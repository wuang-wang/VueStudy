/*
 * @Description:
 * @Author: 吾昂王
 * @Date: 2024-01-25 10:15:55
 */
import { createRouter, createWebHashHistory } from 'vue-router';

// 定义一些路由
const routes = [
    { path: '/', redirect: '/films' },
    { path: '/films', alias: '/filmsAlias', component: () => import('../views/Films.vue') },
    { path: '/cinemas', component: () => import('../views/Cinemas.vue') },
    { path: '/center', component: () => import('../views/Center.vue') },
    { path: '/:pathMatch(.*)*', component: () => import('../views/NotFound.vue') },
];

const router = createRouter({
    // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
});

export default router;
