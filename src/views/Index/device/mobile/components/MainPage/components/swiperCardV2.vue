<template>
  <div class="swiper-container">
    <div class="card  nav-prev">
      <img class="icon disabled-icon" v-if="activeId === 6" :src="navControlDisadled" alt="">
      <img @click="clickHandle(0)" class="icon" v-else :src="navControl" alt="">
    </div>
    <div class="card-inner">
      <div class="card" @click="clickHandle(i)"  v-for="(i,index) in cardList" :key="i.name" :style="{scrollSnapAlign: i.id ===activeId?'center':''}">
        <img v-show="props.activeId === i.id" :src="i.zaiSelectorActive" alt="">
        <img v-show="props.activeId !== i.id" :src="i.zaiSelector" alt="">
      </div>
    </div>
    <div class="card nav-next">
      <img class="icon disabled-icon" v-if="activeId ===1" :src="navControlDisadled" alt="">
      <img @click="clickHandle(1)" class="icon" v-else :src="navControl" alt="">
    </div>
  </div>
</template>

<script setup>
import mixin from "@/mixin/zaigo.js";
import navControlDisadled from "@/assets/images/nav-control-disabled.svg";
import navControl from "@/assets/images/nav-control.svg";

defineOptions({
  name: 'swiperCard'
})
const emit = defineEmits(["update:activeId"]);
const props = defineProps(['activeId'])
const {cardList} = mixin()
const clickHandle = (i) => {
  let targetItem = 0
  if (typeof i === 'number') {
    const item = cardList.findIndex(i => i.id === props.activeId)
    if (i) {
      targetItem = cardList[item + 1].id
    } else {
      targetItem = cardList[item - 1].id
    }
  } else {
    targetItem = i.id
  }
  emit('update:activeId', targetItem)
}


</script>

<style lang="scss" scoped>
.swiper-container {
  width: 3.45rem;
  display: flex;
  align-items: center;
}


.card-inner {
  display: flex;
  align-items: center;
  width: 3rem;
  overflow: hidden;
  scroll-snap-type: x mandatory; /* 启用水平滚动快照 */
  scroll-behavior: smooth;
}

.card {
  cursor: pointer;
  width: max-content;

  img {
    width: 1rem;
    height: 0.92rem;
    cursor: pointer;
  }

  .icon {
    width: 0.24rem;
    height: 0.24rem;
  }
}

.nav-next {
  .icon {
    transform: rotate(180deg);
  }
}

.active {
  .poster {
    border-color: var(--color-5);
  }
}

.disabled-icon {
  cursor: not-allowed;
}

</style>
