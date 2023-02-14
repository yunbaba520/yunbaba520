<template>
  <div class="page-header-wrap">
    <div class="logo">
      <img src="../../assets/img/logo.svg" alt="" />
      <span>灰色と青小破站</span>
    </div>
    <div class="operate">
      <router-link to="/home" v-slot="props">
        <span :class="{ active: props.isActive }" @click="props.navigate"
          >首页</span
        >
      </router-link>
      <router-link to="/login" v-slot="props">
        <span
          :class="[props.isActive ? 'active' : 'no-active']"
          @click="props.navigate"
          >留言</span
        >
      </router-link>
      <el-icon @click="handlerThemeIconClick" size="25">
        <component
          :is="globelStore.isLightTheme ? 'Sunny' : 'Moon'"
        ></component>
      </el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import useGlobel from '@/stores/globel/globel'
const globelStore = useGlobel()
function handlerThemeIconClick() {
  globelStore.changeThemeAction()
}
</script>

<style scoped lang="less">
.page-header-wrap {
  // padding: 15px 0;
  height: 40px;
  display: flex;
  justify-content: space-between;
  .logo {
    display: flex;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
    }
    span {
      font-size: 22px;
      font-weight: 700;
    }
  }
  .operate {
    display: flex;
    align-items: center;
    span {
      margin-right: 15px;
      font-size: 18px;
    }
    .active {
      border-bottom: 2px solid #f00;
    }
    .no-active:hover {
      border-bottom: 2px solid #f00;
    }
    .el-icon {
      cursor: pointer;
    }
  }
}
</style>
