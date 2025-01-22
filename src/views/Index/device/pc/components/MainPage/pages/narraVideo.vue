<template>
  <div v-inView="{callback:()=>visible = true}" id="narra-video">
    <transition name="left-in">
      <div v-if="visible" class="block-line">
        <img :src="line" alt="">
      </div>
    </transition>
    <transition name="left-in">
      <div v-if="visible" class="title">Stream Narra</div>
    </transition>
    <transition name="scale-in">
      <div v-inView="{callback:()=>visible1 = true}" v-if="visible" class="media-youtubo">
        <iframe :src="videoList.find(i=>i.id === activeId).src"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <!--      <iframe v-if="activeId===2" width="560" height="315"-->
        <!--              src="https://www.youtube.com/embed/_lkkLHDTbJY?si=9C6ggmz1dHrKeCTw&rel=0"-->
        <!--              title="YouTube video player" frameborder="0"-->
        <!--              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"-->
        <!--              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>-->
        <!--      <iframe v-if="activeId===3" width="560" height="315"-->
        <!--              src="https://www.youtube.com/embed/KkBteM8ZsBc?si=sRmDx5ovW2mwapwJ&rel=0"-->
        <!--              title="YouTube video player" frameborder="0"-->
        <!--              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"-->
        <!--              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>-->
      </div>
    </transition>
    <transition name="bottom-in">
      <div v-if="visible1" class="nav">
        <div class="nav-item nav-prev" @click="activeId>1&&activeId--">
          <img class="icon disabled-icon" v-if="activeId ===1" :src="navControlDisadled" alt="">
          <img class="icon" v-else :src="navControl" alt="">
        </div>
        <div class="nav-item nav-pic" v-for="i in videoList" :class="{active:i.id === activeId}" @click="()=>activeId = i.id">
          <img class="poster" :src="i.img" alt="">
        </div>
        <div class="nav-item nav-next" @click="activeId<videoList.length&&activeId++">
          <img class="icon disabled-icon" v-if="activeId ===videoList.length" :src="navControlDisadled" alt="">
          <img class="icon" v-else :src="navControl" alt="">
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import navControl from '@/assets/images/nav-control.svg'
import navControlDisadled from '@/assets/images/nav-control-disabled.svg'
import mixin from '@/mixin/narraVideo.js'
import line from "@/assets/images/line.svg";

defineOptions({
  name: 'narraVideo',
})

const {videoList, visible, activeId,visible1} = mixin()
</script>

<style lang="scss" scoped>
#narra-video {
  width: 100%;
  container-type: inline-size;
  max-width: var(--page-inner-width);
  margin: 0 auto 100px;
  min-height: 900px;
  position: relative;
  z-index: 1;
}
.block-line{
  display: flex;
  margin-bottom: 40px;
}


.title {
  padding-left: 40px;
  max-width: var(--page-inner-width);
  box-sizing: border-box;
  margin: 0 auto 38px;
}

.media-youtubo {
  margin: 0 auto;
  position: relative;
  z-index: 8;
  width: 90cqw;
  height: 50.54cqw;
  min-width: 800px;
  min-height: 449.27px;
  padding: 60px;
  background: url("@/assets/images/home/youtubo-bg.svg") no-repeat top/100% auto;
  display: flex;
  align-items: center;
  justify-content: center;

  iframe {
    width: 100%;
    height: 100%;
  }
}

.nav {
  width: 100%;
  max-width: var(--page-inner-width);
  margin: 20px auto 0;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: max-content max-content max-content max-content max-content;
  align-items: center;
  justify-content: center;
  gap: 10px;

  .nav-item {
    cursor: pointer;
    .poster {
      width: 24cqw;
      height: 14cqw;
      border-radius: 16px;
      border: 3px solid #fff;
    }

    .icon {
      width: 61px;
      height: 61px;
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
  .disabled-icon{
    cursor: not-allowed;
  }
}
</style>
