<template>
  <div class="app">
    <el-container>
      <el-header height="60px">
        <page-header></page-header>
      </el-header>
      <el-main>
        <RouterView></RouterView>
      </el-main>
      <el-footer>
        <page-footer></page-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import useGlobel from './stores/globel/globel'
import { localCache } from './utils/cache'
import PageFooter from '@/components/page-footer/page-footer.vue'
import PageHeader from '@/components/page-header/page-header.vue'

const globelStore = useGlobel()
onMounted(() => {
  // 先查看本地是否保存
  let theme = localCache.getCache('theme') || 'light'
  // 有theme，但是被修改为别的值了
  if (theme !== 'light' && theme !== 'dark') {
    theme = 'light'
    localCache.setCache('theme', 'light')
  } else {
    // 把store同步下
    globelStore.changeThemeAction(theme)
  }
  let link = document.createElement('link')
  link.type = 'text/css'
  link.id = 'theme'
  link.rel = 'stylesheet'
  link.href = `./css/theme-${theme}.css`
  document.getElementsByTagName('head')[0].appendChild(link)
})
</script>

<style lang="less" scoped>
.app {
  background-color: var(--theme_bg_color);
  .el-header {
    padding: 10px 24px;
  }
  .el-main {
    padding: 0;
  }
  .el-footer {
    padding: 0;
  }
}
</style>
