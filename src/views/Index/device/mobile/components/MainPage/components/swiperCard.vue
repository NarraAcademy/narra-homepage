<template>
  <div v-swipe="onSwipe" class="swiper-container">
    <div class="card" :style="{backgroundImage:`url(${i.avatar})`}" @click="clickHandle(i)" :class="'card-'+i.active+' card-avatar-'+i.id" v-for="i in _cardList" :key="i.name">
    </div>
  </div>
</template>

<script setup>
import mixin from "@/mixin/zaigo.js";
import {onMounted, ref, watch} from "vue";

defineOptions({
  name:'swiperCard'
})
const emit = defineEmits(["update:activeId"]);
const props = defineProps(['activeId'])
const {cardList} = mixin()
const _activeId = ref(props.activeId)
onMounted(()=>{
  _activeId.value =props.activeId
})
watch(()=>props.activeId, (newVal) => {
  console.log(456456)
  _activeId.value =props.activeId
  _cardList.value = _cardList.value.map(i => {
    return {
      ...i,
      active: addActive(i.id + 3 - _activeId.value),
    }
  })
})
// onUpdated(()=>{
//   if(props.activeId !== _activeId.value){
//     setTimeout(()=>{
//       emit('update:activeId', _activeId.value)
//     },350)
//   }
// })
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
  setTimeout(()=>{
    _cardList.value = _cardList.value.map(i => {
      return {
        ...i,
        active: addActive(i.id + 3 - _activeId.value),
      }
    })
    emit('update:activeId', _activeId.value)
  },350)

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
  width:3.45rem ;
  height: 1.83rem;
  position: relative;
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
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  transform: translateY(-50%) translateX(-50%);
  //img {
  //  position: absolute;
  //  top: 0;
  //  left: 0;
  //  transition: 0.5s;
  //  width: 100%;
  //  height: 100%;
  //}
}


.card-3 {
  bottom: 0;
  height: 1.8363rem;
  width: 1.1688rem;
  z-index: 4;
}


.card-2, .card-4 {
  height: 1.5661rem;
  width: 0.9331rem;
  z-index: 3;
}

.card-2 {
  transform: translateY(-50%) translateX(-125%);
}

.card-4 {
  transform: translateY(-50%) translateX(25%);
}

.card-1, .card-5 {
  width: 0.8279rem;
  height: 1.3007rem;
  z-index: 2;
}
.card-1 {
  transform: translateY(-50%) translateX(-200%);
}

.card-5 {
  transform: translateY(-50%) translateX(100%);
}
//.card-avatar-1{
//  &[class*='card-3']  {
//    filter: drop-shadow(0rem 0rem 0.3rem #7F892966) drop-shadow(0rem 0rem 0.1rem #7F8929B2);
//  }
//}
//
//.card-avatar-2{
//  &[class*='card-3']  {
//    filter: drop-shadow(0px 0px 0.3rem #AB4FEA66) drop-shadow(0px 0px 0.1px #AB4FEAB2);
//  }
//}
//
//.card-avatar-3{
//
//  &[class*='card-3']  {
//    filter: drop-shadow(0rem 0rem 0.3rem #F9490F66) drop-shadow(0rem 0rem 0.1rem #F9490FB2);
//  }
//}
//
//.card-avatar-4{
//  &[class*='card-3']  {
//    filter: drop-shadow(0rem 0rem 0.3rem #47B6F466) drop-shadow(0rem 0rem 0.1rem #47B6F4B2);
//  }
//}
//
//.card-avatar-5{
//  &[class*='card-3']  {
//    filter: drop-shadow(0rem 0rem 0.3rem #DD812F66) drop-shadow(0rem 0rem 0.1rem #DD812FB2);
//  }
//}
</style>
