<template>
  <div class="left-project-wrap">
    <img :src="data.img" alt="">
  </div>
</template>

<script setup lang="ts">
import type { IProjectItem } from "@/types/home/home";

interface IProps {
  data: IProjectItem
}
const props = defineProps<IProps>()
</script>

<style scoped lang="less">
.left-project-wrap {
  width: 100%;
  height: 200px;
  background-color: pink;
  margin-bottom: 20px;
  display: flex;
  img {
    width: 350px;
    height: 100%;
  }
}
</style>
