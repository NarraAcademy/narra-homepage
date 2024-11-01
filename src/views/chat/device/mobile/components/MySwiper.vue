<template>
  <swiper class="swiper" :speed="1000"  :pagination="{ clickable: true }" :loop="true" :centeredSlides="true" :slidesPerView="3" :spaceBetween="0" :autoplay="{delay:2000}">
    <swiper-slide class="swiper-slide" v-for="(slide, index) in list" :key="index">
      <img :src="slide.mobileBg" alt="">
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
  width: 9rem;
  height:5.83rem;
  transform: translateX(-50%);
  left: 50%;
  margin: 0 auto;
}

:deep(.swiper-slide) {
  position: relative;
  width: 3.55rem;
  height:5.83rem;
  padding: 0.8rem 0.6rem 0;
}

img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
  transform: scale(1.2);
  transform-origin: top center;
}
.title{
  position: relative;
  z-index: 1;
  font-size: 0.5rem;
  color: var(--color-7);
}
.des{
  position: relative;
  z-index: 1;
  width: 1.9rem;
  font-size:0.14rem;
  color: var(--color-1);
  font-family: "Prototype";
}

/* 自定义分页器容器样式 */
:deep(.swiper-pagination) {
  bottom: -0.1rem; /* 设置分页器位置 */
  text-align: center; /* 居中对齐 */
  font-size: 0.42rem!important;
}

/* 自定义分页器点的样式 */
:deep(.swiper-pagination-bullet) {
  background: var(--color-1); /* 默认颜色 */
  opacity: 1; /* 透明度 */
  width: 0.2rem; /* 宽度 */
  height: 0.12rem; /* 高度 */
  border-radius: 0.06rem; /* 圆形 */
  margin: 0 0.04rem; /* 间距 */
  transition: opacity 0.3s, background 0.3s; /* 过渡效果 */
}

/* 活动状态下的样式 */
:deep(.swiper-pagination-bullet-active) {
  width: 0.4rem; /* 宽度 */
  background: var(--color-2); /* 活动状态颜色 */
  opacity: 1; /* 透明度 */
}
</style>
