<template>
  <nav class="navbar navbar-expand-md py-1">
    <div class="container-fluid">
      <!-- logo -->
      <div class="logo navbar-brand" @click="handlerLogoClick">
        <img src="../../assets/img/logo.svg" alt="" />
        <span>灰色と青小破站</span>
      </div>
      <!-- 小屏幕出现的按钮 -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <img class="expand-icon" src="@/assets/img/show-icon.png" alt="" />
      </button>
      <!-- 导航列表 -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="navbar-nav ms-auto">
          <template v-for="item in navData" :key="item.title">
            <router-link
              :to="item.link"
              v-slot="props"
              class="nav-link p-2 mx-2"
            >
              <span
                :class="[props.isActive ? 'active' : 'no-active']"
                @click="props.navigate"
                >{{ item.title }}</span
              >
            </router-link>
          </template>
          <el-icon
            @click="handlerThemeIconClick"
            size="45"
            class="navbar-text p-2 mx-2"
          >
            <component :is="theme === 'light' ? 'Sunny' : 'Moon'"></component>
          </el-icon>
        </div>
      </div>
    </div>
  </nav>
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
const navData: any[] = [
  {
    title: '首页',
    link: '/home'
  },
  {
    title: '留言',
    link: '/message'
  },
  {
    title: '关于作者',
    link: '/personal'
  }
]
</script>

<style scoped lang="less">
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
.navbar-nav {
  a {
    text-decoration: none;
  }
  .active {
    border-bottom: 2px solid var(--always_orange_color);
    color: var(--theme_text_color) !important;
  }
  .no-active:hover {
    border-bottom: 2px solid var(--always_orange_color);
  }
  .nav-link {
    font-size: 18px;
    color: var(--theme_text_color);
  }
  .navbar-text {
    color: var(--theme_text_color);
  }
}
/* 显示 按钮 */
@media (max-width: 768px) {
  .navbar-toggler {
    border: none;
    padding: 0;
  }

  .navbar-toggler .expand-icon {
    height: 25px;
  }
  .navbar-toggler .expand-icon:active {
    opacity: 0.6;
  }

  /* 修改下拉的背景 */
  #navbarNav {
    position: absolute;
    top: 100%;
    width: 100%;
    background-color: var(--theme_bg_color);
    color: #fff;
    margin: 0 -16px;
    z-index: 100;
  }
}
</style>
