<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <div
        class="logo navbar-brand navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="handlerLogoClick"
      >
        <img src="../../assets/img/logo.svg" alt="" />
        <span>灰色と青小破站</span>
      </div>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="navbar-nav">
          <template v-for="item in navData" :key="item.title">
            <router-link :to="item.link" v-slot="props">
              <span
                :class="[props.isActive ? 'active' : 'no-active','nav-link']"
                @click="props.navigate"
                >{{item.title}}</span
              >
            </router-link>
          </template>


          <!-- <el-icon @click="handlerThemeIconClick" size="25" class="nav-link">
            <component :is="theme === 'light' ? 'Sunny' : 'Moon'"></component>
          </el-icon> -->
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
  },
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
    }
    .no-active:hover {
      border-bottom: 2px solid var(--always_orange_color);
    }
    .nav-link {
      padding: 0 !important;
      margin-right: 15px;
      font-size: 18px;
      color: var(--theme_text_color);
    }
  }

</style>
