<template>
  <div class="part1">
    <div class="bg1"></div>
    <div class="page-center">
      <div class="main">
        <div class="left">
          <div class="title">
            Welcome to our <br>
            <span>
          Beta!
          </span>
          </div>
          <div class="des">
            The first community-owned AI tamagotchi is now live... with our Beta version! Begin your Narra journey and chat with ZAI cub!
          </div>
        </div>
        <img  :src="zaigoPic" class="right"/>
        <div class="bg3"></div>
      </div>
      <swiper class="swiper"/>
    </div>
  </div>
</template>

<script setup>
import zaigoPic from '@/assets/images/zaigo-pic.gif'
import Swiper from "@/views/chat/device/mobile/components/MySwiper.vue";
import mixin from "@/mixin/chat.js";

const {
  load
} = mixin()
</script>

<style lang="scss" scoped>
.part1 {
  position: relative;
  width: 100%;
  min-height: 10rem;
  overflow: hidden;
}

.page-center {
  position: relative;
  max-width: var(--page-inner-width);
  width: 100%;
  margin: 1.38rem auto 0.7rem;
}

.bg1, .bg2, .bg3, .bg4 {
  position: absolute;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
}

.bg1 {
  width: 4.40rem;
  height: 4.40rem;
  left: 50%;
  transform: translateX(-50%);
  background-image: url("https://oss.narralayer.ai/images/bg-circle.png");
  animation: rotating 10s infinite linear;
}

@keyframes rotating {
  from {
    transform: translateX(-50%) scale(1) rotate(0deg);
  }
  to {
    transform: translateX(-50%) scale(1) rotate(360deg);
  }
}

.main {
  position: relative;
  width: 3.45rem;
  margin: 0 auto;

  .left {
    .title {
      font-size: 0.32rem;
      color: var(--color-1);

      span {
        color: var(--color-7);
      }
    }

    .des {
      width: 100%;
      font-size: 0.14rem;
      line-height: 0.2rem;
      color: var(--color-1);
      font-family: "KrossNeueGrotesk-Regular";
    }
  }

  .right {
    width: 100%;
  }
}

.bg3 {
  background-image: url("@/assets/images/chat-bg.svg");
  height:1.64rem;
  width: 4.97rem;
  bottom: 0rem;
  left: 50%;
  transform: translateX(-50%);
}

.swiper {

}
</style>
