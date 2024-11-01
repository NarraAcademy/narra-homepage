<template>
  <Swiper loop>
    <SwiperSlide v-for="i in imgList">
      <img :src="i" alt="">
    </SwiperSlide>
  </Swiper>
</template>

<script setup>

import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';

defineOptions({
  name: 'Carousel',
})
const props = defineProps({
  imgList: {
    type: Array,
  }
})
</script>

<style lang="scss" scoped>
.swiper-card {
  width: 500px;
  height: 300px;
}

img {
  width: 500px;
  height: 300px;
}
</style>
