// 全局注册bootstarp插件
import * as bootstrap from 'bootstrap';
import type { App, DefineComponent } from 'vue'
const arr: [string, DefineComponent][] = Object.entries(bootstrap)
function registerBootstarp(app: App) {
  for (const [key, component] of arr) {
    app.component(key, component)
  }
}

export default registerBootstarp
