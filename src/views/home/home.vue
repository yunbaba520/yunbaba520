<template>
  <div class="home-wrap">
    <el-container>
      <el-header height="60px">
        <page-header></page-header>
      </el-header>
      <el-main>
        <page-carousel></page-carousel>
        <main-content></main-content>
      </el-main>
      <el-footer>
        <page-footer></page-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '@/components/page-header/page-header.vue'
import PageCarousel from '@/components/page-carousel/page-carousel.vue'
import PageFooter from "@/components/page-footer/page-footer.vue";
import MainContent from "./cpns/main-content.vue";
</script>

<style scoped lang="less">
.home-wrap {
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
