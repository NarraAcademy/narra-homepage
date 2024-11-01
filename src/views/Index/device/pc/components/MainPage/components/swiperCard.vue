<template>
  <div v-swipe="onSwipe" class="swiper-container">
    <div class="card" @click="clickHandle(i)" :class="'card-'+i.active+' card-avatar-'+i.id" v-for="i in _cardList" :key="i.name">
      <img :src="i.avatar" alt="" :class="{visiable: i.active ===3}">
    </div>
  </div>
</template>

<script setup>
import mixin from "@/mixin/zaigo.js";
import {onMounted, onUpdated, ref, watch} from "vue";

defineOptions({
  name:'swiperCard'
})
const emit = defineEmits(["update:activeId"]);
const props = defineProps(['activeId'])
const {cardList} = mixin()
const _activeId = ref(0)
onMounted(()=>{
  _activeId.value =props.activeId
})
onUpdated(()=>{
  if(props.activeId !== _activeId.value){
    setTimeout(()=>{
      emit('update:activeId', _activeId.value)
    },350)
  }
})
const addActive = (num) => {
  if (num < 1) {
    return Math.abs(5 + num)
  } else if (num > 5) {
    return Math.abs(5 - num)
  } else {
    return num
  }
}
const _cardList = ref(cardList.map(i => {
  return {
    ...i,
    active: addActive(i.id + 3 - _activeId.value),
  }
}))
watch(_activeId, () => {
  _cardList.value = _cardList.value.map(i => {
    return {
      ...i,
      active: addActive(i.id + 3 - _activeId.value),
    }
  })
})
const clickHandle = (row) => {
  const step = row.active - 3
  _activeId.value = addActive(_activeId.value + step)
}
const onSwipe = (direction, distance) => {
  console.log(`滑动方向：${direction}，滑动距离：${distance}`);
  if (distance > 50) {
    let step = 0
    if (direction === 'left') {
      step = 1
    }
    if (direction === 'right') {
      step = -1
    }
    _activeId.value = addActive(_activeId.value + step)
    return
  }
  return
}
</script>

<style lang="scss" scoped>
.swiper-container {
  width:40cqw ;
  height: 300px;
  position: relative;
  container-type: inline-size;
}


.card {
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  position: absolute;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  img {
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.5s;
    width: 100%;
    height: 100%;
  }
}


.card-3 {
  bottom: 0;
  height: 37.75cqw;
  width: 24cqw;
  z-index: 4;
}


.card-2, .card-4 {
  height: 30.1cqw;
  width: 19.1cqw;
  z-index: 3;
}

.card-2 {
  transform: translateY(-50%) translateX(-150%);
}

.card-4 {
  transform: translateY(-50%) translateX(50%);
}

.card-1, .card-5 {
  width: 17cqw;
  height: 26.7cqw;
  z-index: 2;
}
.card-1 {
  transform: translateY(-50%) translateX(-250%);
}

.card-5 {
  transform: translateY(-50%) translateX(150%);
}
.card-avatar-1{
  &[class*='card-3'] ,&:hover {
    filter: drop-shadow(0px 0px 50px #7F892966) drop-shadow(0px 0px 15px #7F8929B2);
  }
}

.card-avatar-2{

  &[class*='card-3'] , &:hover {
    filter: drop-shadow(0px 0px 50px #AB4FEA66) drop-shadow(0px 0px 15px #AB4FEAB2);
  }
}

.card-avatar-3{

  &[class*='card-3'] , &:hover {
    filter: drop-shadow(0px 0px 50px #F9490F66) drop-shadow(0px 0px 15px #F9490FB2);
  }
}

.card-avatar-4{
  &[class*='card-3'] ,&:hover {
    filter: drop-shadow(0px 0px 50px #47B6F466) drop-shadow(0px 0px 15px #47B6F4B2);
  }
}

.card-avatar-5{
  &[class*='card-3'] , &:hover {
    filter: drop-shadow(0px 0px 50px #DD812F66) drop-shadow(0px 0px 15px #DD812FB2);
  }
}
</style>
