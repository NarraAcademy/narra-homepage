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
    <transition name="bottom-in">
      <div v-if="visible" class="media-youtubo">
        <div style="pointer-events: none" v-inView="{callback:()=>i.visible = true}"  class="video" v-for="i in videoList" :key="i.id">
          <transition name="_left-in">
          <iframe style="pointer-events: auto" v-show="i.id === activeId" :src="i.src"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </transition>
        </div>
      </div>
    </transition>
    <div class="nav">
      <div class="nav-item nav-pic" v-for="i in videoList" :class="{active:i.id === activeId}" @click="()=>activeId = i.id">
        <img class="poster" :src="i.img" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import mixin from '@/mixin/narraVideo.js'
import line from "@/assets/images/mobile-line.svg";

defineOptions({
  name: 'narraVideo',
})

const {videoList, visible, activeId} = mixin()
</script>

<style lang="scss" scoped>
#narra-video {
  width: 100%;
  position: relative;
  min-height: 5.4rem;
  z-index: 3;
}

.block-line {
  display: flex;
  justify-content: start;
  margin-bottom: 0.3rem;
  img{
    height: 0.16rem;
  }
}


.title {
  padding-left: 0.24rem;
  box-sizing: border-box;
  margin: 0 auto 0.3rem;
}

.media-youtubo {
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  z-index: 8;
  height: 2.3rem;
  background: url("@/assets/images/home/youtubo-bg.svg") no-repeat top/100% auto;
  display: flex;
  align-items: center;
  padding-top: 0.24rem;
  justify-content: center;
  .video{
    position: absolute;
    width: 100%;
    height: 1.937rem;
    padding: 0 0.24rem ;
  }

  iframe {
    width: 3.45rem;
    height: 1.937rem;
    //border: 3px solid #fff;
    //border-radius: 0.18rem;
  }
}
.nav {
  width: 100%;
  max-width: var(--page-inner-width);
  margin: 0.2rem 0 0;
  padding-left: 0.1rem;
  display: flex;
  overflow: hidden;
  scroll-snap-type: x mandatory; /* 启用水平滚动快照 */
  scroll-behavior: smooth;
  .nav-item {
    margin: 0.02rem;
    cursor: pointer;
    .poster {
      width: 2.48rem;
      height: 1.4rem;
      border-radius: 0.128rem;
      border: 0.003rem solid #fff;
    }

    .icon {
      width: 61px;
      height: 61px;
    }
  }
  .active{
  }

  .nav-next {
    .icon {
      transform: rotate(180deg);
    }
  }

  .active {
    scroll-snap-align:center;
    .poster {
      border-color: var(--color-5);
    }
  }
  .disabled-icon{
    cursor: not-allowed;
  }
}
  ._left-in-enter-from,
._left-in-leave-to {
  opacity: 0;
  transform: scale(0);
}


</style>
