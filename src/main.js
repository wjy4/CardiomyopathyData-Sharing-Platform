import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.css"

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount('#app');

import "bootstrap/dist/js/bootstrap.js"