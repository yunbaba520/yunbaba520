<template>
  <div class="left-project-wrap">
    <img :src="data.img" alt="" />
    <div class="info">
      <div class="job-status">
        <span>{{ data.job }}</span>
        <span>{{ data.status }}</span>
      </div>
      <div class="projectTitle">{{ data.projectTitle }}</div>
      <div class="technology">技术栈：{{ data.technology }}</div>
      <div class="access">
        访问地址：<a :href="data.access">{{ data.access }}</a>
      </div>
      <div class="github">
        github：<a :href="data.github">{{ data.github }}</a>
      </div>
      <div class="introduce">介绍：{{ data.introduce }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProjectItem } from '@/types/home/home'

interface IProps {
  data: IProjectItem
}
const props = defineProps<IProps>()
</script>

<style scoped lang="less">
.left-project-wrap {
  width: 100%;
  height: 220px;
  background-color: var(--theme_text_color);
  border: 1px solid var(--theme_text_color);
  color: var(--theme_bg_color);
  margin-bottom: 20px;
  display: flex;
  img {
    width: 350px;
    height: 100%;
  }
  .info {
    flex: 1;
    padding: 10px 20px;
    .job-status {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid var(--always_orange_color);
    }
    .projectTitle {
      margin: 20px 0;
      font-size: 20px;
    }
    .technology,
    .access,
    .github,
    .introduce {
      a {
        color: var(--theme_bg_color);
      }
      margin-top: 7px;
      /* 显示一行 */
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      display: -moz-box;
      -moz-line-clamp: 1;
      -moz-box-orient: vertical;
      word-wrap: break-word;
      word-break: break-all;
      white-space: normal;
      overflow: hidden;
    }
  }
}
</style>
