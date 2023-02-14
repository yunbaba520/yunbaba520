import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import pinia from './stores'
import icons from "./utils/register-icons";
// 样式
import 'normalize.css'
import './assets/css/index.less'
const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(icons)
app.mount('#app')
