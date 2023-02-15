<template>
  <div class="left-project-wrap">
    <img :src="data.img" alt="" />
    <div class="info">
      <div class="job-status">
        <span>{{ data.job }}</span>
      </div>
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
  background-color: pink;
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
      border-bottom: 1px solid var(--footer_text_color);
    }
  }
}
</style>
