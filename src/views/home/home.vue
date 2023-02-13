<template>
  <div class="home-wrap">
    <el-container>
      <el-header height="60px">
        <PageHeader></PageHeader>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '@/components/page-header/page-header.vue'
</script>

<style scoped lang="less">
.home-wrap {
  .el-header {
    padding: 10px 24px;
  }
}
</style>
