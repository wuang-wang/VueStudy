/*
 * @Descripttion:
 * @Author: 吾昂王
 * @Date: 2024-01-18 09:44:43
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from '../src/router';
import { createPinia } from "pinia";
const pinia = createPinia();

var app = createApp(App);
app.use(router);
app.use(pinia);

app.mount('#app');
