/*
 * @Description:
 * @Author: 吾昂王
 * @Date: 2024-01-30 11:09:20
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
