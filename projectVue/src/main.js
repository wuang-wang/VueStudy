/*
 * @Description:
 * @Author: 吾昂王
 * @Date: 2024-01-29 16:29:49
 */
import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

// 导入Vant
import Vant, { Lazyload } from 'vant';
import './assets/reset.min.css';
import 'amfe-flexible';
import 'vant/lib/index.css';
// 处理最大宽度
import { handleMaxWidth } from './assets/utils';
handleMaxWidth();
window.addEventListener('resize', handleMaxWidth());

const app = createApp(App);
app.use(Vant);
app.use(Lazyload, {
    lazyComponent: true,
});
app.use(store);
app.use(router);
app.mount('#app');
