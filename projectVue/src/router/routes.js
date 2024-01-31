/*
 * @Description:
 * @Author: 吾昂王
 * @Date: 2024-01-30 11:09:29
 */
import Home from '../views/Home.vue';
const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        // webpackChunkName 是为预加载的文件取别名,作用就是webpack在打包的时候，对异步引入的库代码（lodash）进行代码分割时（需要配置webpack的SplitChunkPlugin插件），为分割后的代码块取得名字
        path: '/detail/:id',
        component: () => import(/*webpackChunkName: 'group-detail'*/ '../views/Detail.vue'),
    },
    {
        path: '/login',
        component: () => import(/*webpackChunkName: 'group-login'*/ '../views/Login.vue'),
    },
    {
        path: '/person',
        component: () => import(/*webpackChunkName: 'group-person'*/ '../views/Person.vue'),
    },
    {
        path: '/store',
        component: () => import(/*webpackChunkName: 'group-person'*/ '../views/Store.vue'),
    },
    {
        path: '/updatePerson',
        component: () => import(/*webpackChunkName: 'group-person'*/ '../views/UpdatePerson.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/',
    },
];

export default routes;
