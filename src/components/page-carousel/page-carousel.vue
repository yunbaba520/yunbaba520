<template>
  <div class="page-carousel">
    <el-carousel height="500px">
      <el-carousel-item
        class="carousel-item"
        v-for="item in loopImg"
        :key="item.id"
      >
        <img class="img" :src="item.img" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
import { getAssetsFile } from '@/utils/handler-img'
const loopImg = [
  {
    id: '1',
    img: getAssetsFile('轮播图1.jpg')
  },
  {
    id: '2',
    img: getAssetsFile('轮播图2.jpg')
  },
  {
    id: '3',
    img: getAssetsFile('轮播图3.jpg')
  },
  {
    id: '4',
    img: getAssetsFile('轮播图4.jpg')
  },
  {
    id: '5',
    img: getAssetsFile('轮播图5.jpg')
  }
]
</script>

<style scoped lang="less">
.page-carousel {
  position: relative;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    content: '';
    filter: blur(80px);
    background: url(../../assets/img/轮播图1.jpg);
    z-index: -1;
  }
  .carousel-item {
    display: flex;
    justify-content: center;
    .img {
      height: 500px;
    }
  }
}
</style>
