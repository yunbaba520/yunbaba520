<template>
  <div class="main-left-wrap">
    <template v-for="item in projectArr" :key="item.id">
      <left-project :data="item"></left-project>
    </template>
  </div>
</template>

<script setup lang="ts">
import LeftProject from "./left-project.vue";
import { getAssetsFile } from "@/utils/handler-img";
import type { IProjectItem } from "@/types/home/home";
const projectArr: IProjectItem[] = [
  {
    id: 1,
    img: getAssetsFile('轮播图1.jpg'),
    projectTitle: "ZY后台管理系统",
    createTime: "2022-11-7",
    endTime: "至今",
    job: "前端开发",
    technology: "Vue3 TypeScript Vite Pinia VueRouter ElementPlue Echarts Less...",
    introduce: "Vue3Admin 是基于 Vue3、Pinia、VueRouter、Vite、 ElementPlus 、TypeScript、Echart5 等后台系统解决方案,快速搭建你的后台管理系统。主要功能：登录，动态路由，权限管理，通过配置快速生成增删改查页面，echart图表等"
  },
  {
    id: 2,
    img: getAssetsFile('轮播图1.jpg'),
    projectTitle: "ZY后台管理系统",
    createTime: "2022-11-7",
    endTime: "至今",
    job: "前端开发",
    technology: "Vue3 TypeScript Vite Pinia VueRouter ElementPlue Echarts Less...",
    introduce: "Vue3Admin 是基于 Vue3、Pinia、VueRouter、Vite、 ElementPlus 、TypeScript、Echart5 等后台系统解决方案,快速搭建你的后台管理系统。主要功能：登录，动态路由，权限管理，通过配置快速生成增删改查页面，echart图表等"
  },
]
</script>

<style scoped lang="less">
.main-left-wrap {
  width: 1100px;
}
</style>
