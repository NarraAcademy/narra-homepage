<template>
  <div  class="swiper-container">
    <div class="card" @click="clickHandle(i)" v-for="i in cardList" :key="i.name">
      <img v-show="props.activeId === i.id" :src="i.zaiSelectorActive" alt="" >
      <img v-show="props.activeId !== i.id" :src="i.zaiSelector" alt="" >
    </div>
  </div>
</template>

<script setup>
import mixin from "@/mixin/zaigo.js";

defineOptions({
  name:'swiperCard'
})
const emit = defineEmits(["update:activeId"]);
const props = defineProps(['activeId'])
const {cardList} = mixin()
const clickHandle = (i)=>{
  emit('update:activeId', i.id)
}

</script>

<style lang="scss" scoped>
.swiper-container {
  width:max-content;
  height: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}
img{
  width: 160px;
  height: 147.22px;
  cursor: pointer;
}
</style>
