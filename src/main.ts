import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import pinia from './stores'
import icons from './utils/register-icons'
import bootstarp from './utils/register-bootstarp'
// 样式
import 'normalize.css'
import './assets/css/index.less'
import '@/assets/css/scss/styles.scss'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(icons)
app.use(bootstarp)
app.mount('#app')
