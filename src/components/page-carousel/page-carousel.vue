<template>
  <div class="page-carousel">
    <div class="bg-div">
      <img class="bg-img" :src="loopImg[currentIndex].img" alt="">
    </div>
    <el-carousel height="500px" arrow="never" @change="handlerCarouselChange">
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
import { ref } from "vue";
const loopImg: any[] = [
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
let currentIndex: number = ref(0)
function handlerCarouselChange(cIndex: number) {
  currentIndex.value = cIndex
}
</script>

<style scoped lang="less">
.page-carousel {
  position: relative;
  .bg-div {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    .bg-img {
      width: 100%;
      height: 100%;
      filter: blur(30px);
    }
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
