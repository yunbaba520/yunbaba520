<template>
  <div class="main-content-wrap">
    <main-left></main-left>
    <main-right></main-right>
  </div>
</template>

<script setup lang="ts">
import MainLeft from './main-left.vue'
import MainRight from './main-right.vue'
</script>

<style scoped lang="less">
.main-content-wrap {
  margin: 20px auto;
  width: 1360px;
  display: flex;
}
</style>
