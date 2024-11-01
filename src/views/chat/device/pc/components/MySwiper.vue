<template>
  <swiper class="swiper" :speed="1000"  :pagination="{ clickable: true }" :loop="true" :autoplay="{delay:2000}">
    <swiper-slide class="swiper-slide" v-for="(slide, index) in list" :key="index">
      <img :src="slide.bg" alt="">
      <div class="title">{{ slide.name }}</div>
      <div class="des">{{ slide.des }}</div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import mixin from '@/mixin/chat.js'
import {Swiper, SwiperSlide} from 'swiper/vue';
import _Swiper from 'swiper'
import {Autoplay, Pagination} from "swiper/modules";
import 'swiper/swiper-bundle.css';

const {list} = mixin()
_Swiper.use([Pagination,Autoplay])
</script>

<style lang="scss" scoped>
.swiper {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1343px;
  margin: 0 auto;
}

:deep(.swiper-slide) {
  position: relative;
  width: 100%;
  max-width: 1343px;
  aspect-ratio: 1343 / 602;;
  padding-left: 10%;
  padding-top: 11%;
  container-type: inline-size;
}

img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 1343px;
  aspect-ratio: 1343 / 602;
  z-index: 0;
}
.title{
  position: relative;
  z-index: 1;
  font-size: 80px;
  color: var(--color-7);
}
.des{
  position: relative;
  z-index: 1;
  width: 50%;
  font-size: 3cqw;
  color: var(--color-1);
  font-family: "Prototype";
}

/* 自定义分页器容器样式 */
:deep(.swiper-pagination) {
  bottom: -10px; /* 设置分页器位置 */
  text-align: center; /* 居中对齐 */
  font-size: 42px!important;
}

/* 自定义分页器点的样式 */
:deep(.swiper-pagination-bullet) {
  background: var(--color-1); /* 默认颜色 */
  opacity: 1; /* 透明度 */
  width: 20px; /* 宽度 */
  height: 12px; /* 高度 */
  border-radius: 6px; /* 圆形 */
  margin: 0 4px; /* 间距 */
  transition: opacity 0.3s, background 0.3s; /* 过渡效果 */
}

/* 活动状态下的样式 */
:deep(.swiper-pagination-bullet-active) {
  width: 40px; /* 宽度 */
  background: var(--color-2); /* 活动状态颜色 */
  opacity: 1; /* 透明度 */
}
</style>
