<template>
  <div class="main-left-wrap">
    <template v-for="item in projectArr" :key="item.id">
      <left-project :data="item"></left-project>
    </template>
  </div>
</template>

<script setup lang="ts">
import LeftProject from './left-project.vue'
import { getAssetsFile } from '@/utils/handler-img'
import type { IProjectItem } from '@/types/home/home'
const projectArr: IProjectItem[] = [
  {
    id: 1,
    img: getAssetsFile('项目cms.jpg'),
    projectTitle: 'ZY后台管理系统',
    status: '已完成',
    job: '前端开发',
    github: 'https://github.com/yunbaba520/vue3-ts-cms-zyl',
    access: 'http://101.43.97.210:9002/',
    technology:
      'Vue3 TypeScript Vite Pinia VueRouter ElementPlue Echarts Less...',
    introduce:
      'Vue3Admin 是基于Vue3等后台系统解决方案,快速搭建你的后台管理系统。主要功能：登录，动态路由，权限管理，通过配置快速生成增删改查页面，echart图表等'
  },
  {
    id: 2,
    img: getAssetsFile('项目coderhub.jpg'),
    projectTitle: '吐个槽社交网站',
    status: '开发中',
    job: '全栈开发',
    github: 'https://github.com/yunbaba520/coderhub-zyl',
    access: 'http://101.43.97.210:9001/',
    technology: 'node Koa Mysql Vue3 TypeScript Vite Pinia VueRouter',
    introduce:
      '一个社交网站，v0.0.1版本支持用户注册登录，发布动态，标签，发表/回复评论等功能。'
  }
]
</script>

<style scoped lang="less"></style>
