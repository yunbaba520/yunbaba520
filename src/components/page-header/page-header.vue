<template>
  <div class="page-header-wrap">
    <div class="logo" @click="handlerLogoClick">
      <img src="../../assets/img/logo.svg" alt="" />
      <span>灰色と青小破站</span>
    </div>
    <div class="operate">
      <router-link to="/home" v-slot="props">
        <span :class="{ active: props.isActive }" @click="props.navigate"
          >首页</span
        >
      </router-link>
      <router-link to="/message" v-slot="props">
        <span
          :class="[props.isActive ? 'active' : 'no-active']"
          @click="props.navigate"
          >留言</span
        >
      </router-link>
      <router-link to="/personal" v-slot="props">
        <span
          :class="[props.isActive ? 'active' : 'no-active']"
          @click="props.navigate"
          >关于作者</span
        >
      </router-link>
      <el-icon @click="handlerThemeIconClick" size="25">
        <component :is="theme === 'light' ? 'Sunny' : 'Moon'"></component>
      </el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import useGlobel from '@/stores/globel/globel'
import { storeToRefs } from 'pinia'
const globelStore = useGlobel()
const { theme } = storeToRefs(globelStore)
function handlerThemeIconClick() {
  if (theme.value === 'light') {
    globelStore.changeThemeAction('dark')
    ;(document.getElementById('theme') as HTMLLinkElement).href =
      './css/theme-dark.css'
  } else {
    globelStore.changeThemeAction('light')
    ;(document.getElementById('theme') as HTMLLinkElement).href =
      './css/theme-light.css'
  }
}
function handlerLogoClick() {
  router.push('/home')
}
</script>

<style scoped lang="less">
.page-header-wrap {
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  .logo {
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      width: 40px;
      height: 40px;
    }
    span {
      font-size: 22px;
      font-weight: 700;
      color: var(--theme_text_color);
    }
  }
  .operate {
    display: flex;
    align-items: center;
    span {
      margin-right: 15px;
      font-size: 18px;
      color: var(--theme_text_color);
    }
    .active {
      border-bottom: 2px solid var(--always_orange_color);
    }
    .no-active:hover {
      border-bottom: 2px solid var(--always_orange_color);
    }
    .el-icon {
      cursor: pointer;
      color: var(--theme_text_color);
    }
  }
}
</style>
