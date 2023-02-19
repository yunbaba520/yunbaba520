<template>
  <div class="main-right-wrap">
    <div class="author-box mx-auto">
      <img :src="getAssetsFile('avatar.jpg')" alt="" />
      <span class="name">灰色と青</span>
      <div class="email">
        <el-icon size="22px"><Promotion /></el-icon>
      </div>
    </div>
    <div class="type-area">
      <div class="title">知识点类型归档</div>
      <div class="type-list">
        <template v-for="item in typeArr" :key="item.id">
          <div class="type-item" @click="handlerTypeItemClick(item)">
            <img :src="item.img" alt="" />
            <span>{{ item.title }}</span>
          </div>
        </template>
        <i /><i /><i /><i /><i /><i /><i />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getAssetsFile } from '@/utils/handler-img'
import type { ITypeItem } from '@/types/home/home'
const typeArr: ITypeItem[] = [
  {
    id: 1,
    img: getAssetsFile('html.svg'),
    title: 'html',
    url: 'https://blog.csdn.net/yunbabac/category_11710011.html?spm=1001.2014.3001.5482'
  },
  {
    id: 2,
    img: getAssetsFile('css.svg'),
    title: 'css',
    url: 'https://blog.csdn.net/yunbabac/category_11710011.html?spm=1001.2014.3001.5482'
  },
  {
    id: 3,
    img: getAssetsFile('javascript.svg'),
    title: 'javascript',
    url: 'https://blog.csdn.net/yunbabac/category_11424609.html?spm=1001.2014.3001.5482'
  },
  {
    id: 4,
    img: getAssetsFile('vue.svg'),
    title: 'vue',
    url: 'https://blog.csdn.net/yunbabac/category_11620602.html?spm=1001.2014.3001.5482'
  },
  {
    id: 5,
    img: getAssetsFile('react.svg'),
    title: 'react',
    url: 'https://blog.csdn.net/yunbabac/category_11463435.html?spm=1001.2014.3001.5482'
  },
  {
    id: 6,
    img: getAssetsFile('echarts.svg'),
    title: 'echarts',
    url: 'https://blog.csdn.net/yunbabac/category_12029084.html?spm=1001.2014.3001.5482'
  },
  {
    id: 7,
    img: getAssetsFile('typescript.svg'),
    title: 'typescript',
    url: 'https://blog.csdn.net/yunbabac/category_11854907.html?spm=1001.2014.3001.5482'
  },
  {
    id: 8,
    img: getAssetsFile('node.svg'),
    title: 'node',
    url: 'https://blog.csdn.net/yunbabac/category_11899784.html?spm=1001.2014.3001.5482'
  },
  {
    id: 9,
    img: getAssetsFile('webpack.svg'),
    title: '工程化',
    url: 'https://blog.csdn.net/yunbabac/category_11642634.html?spm=1001.2014.3001.5482'
  },
  {
    id: 10,
    img: getAssetsFile('git.svg'),
    title: 'git',
    url: 'https://blog.csdn.net/yunbabac/category_11917644.html?spm=1001.2014.3001.5482'
  },
  {
    id: 11,
    img: getAssetsFile('deploy.svg'),
    title: '部署',
    url: 'https://blog.csdn.net/yunbabac/category_12094606.html?spm=1001.2014.3001.5482'
  }
]
function handlerTypeItemClick(item: ITypeItem) {
  window.open(item.url, '_blank')
}
</script>

<style scoped lang="less">
.main-right-wrap {
  .author-box {
    width: 360px;
    height: 220px;
    box-sizing: border-box;
    border: 1px solid var(--footer_text_color);
    border-radius: 10px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    .name {
      color: var(--theme_text_color);
    }
    .email {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: var(--always_orange_color);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      .el-icon {
        color: var(--theme_text_color);
      }
    }
  }
  .type-area {
    margin-top: 20px;
    .title {
      text-align: center;
      font-size: 16px;
      font-weight: 700;
      color: var(--theme_text_color);
    }
    .type-list {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .type-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid #ddd;
        border-radius: 5px;
        margin-top: 10px;
        padding-bottom: 10px;
        cursor: pointer;
        img {
          width: 170px;
          height: 170px;
        }
        span {
          color: var(--theme_text_color);
        }
      }
      i {
        width: 170px;
      }
    }
  }
}
</style>
