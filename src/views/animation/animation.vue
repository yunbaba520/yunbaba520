<template>
  <div class="animation-wrap">
    <WebpackLogo />
    <PlatformDataOne />
    <PlatformAssetsTwo />
  </div>
</template>

<script setup lang="ts">
import WebpackLogo from './cpns/webpack-logo.vue'
import PlatformDataOne from './cpns/platform-data-one.vue'
import PlatformAssetsTwo from "./cpns/platform-assets-two.vue";
</script>

<style scoped lang="less">
.animation-wrap {
  min-height: 100vh;
}
</style>
