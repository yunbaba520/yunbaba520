<template>
  <div class="home-wrap">
    <el-container>
      <el-header height="60px">
        <PageHeader></PageHeader>
      </el-header>
      <el-main>
        <PageCarousel></PageCarousel>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '@/components/page-header/page-header.vue'
import PageCarousel from '@/components/page-carousel/page-carousel.vue'


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
    color: var(--theme_text_color);
  }
}
</style>
