<template>
  <div class="part1">
    <div class="bg1"></div>
    <div class="page-center">
      <div class="bg2"></div>
      <div class="main">
        <div class="left">
          <div class="title">
            Welcome <br>
            to our <br>
            <span>
          Beta!
          </span>
          </div>
          <div class="des">
            The first community-owned AI tamagotchi is now live... with our Beta version! Begin your Narra journey and chat with ZAI cub!
          </div>
        </div>
        <img :src="load?zaigoPic:''" class="right"/>
        <div class="bg3"></div>
      </div>
      <swiper class="swiper"/>
    </div>
  </div>
</template>

<script setup>
import zaigoPic from '@/assets/images/zaigo-pic.gif'
import Swiper from "@/views/chat/device/pc/components/MySwiper.vue";
import mixin from "@/mixin/chat.js";

const {
  load
} = mixin()
</script>

<style lang="scss" scoped>
.part1{
  position: relative;
  width: 100%;
  min-height: 1400px;
  overflow: hidden;
}
.page-center{
  position: relative;
  max-width: var(--page-inner-width);
  width: 100%;
  margin: 138px auto 70px;
}
.bg1,.bg2,.bg3,.bg4{
  position: absolute;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.bg1{
  width: 1440px;
  height: 1440px;
  top: -300px;
  left: 40%;
  background-image: url("https://oss.narralayer.ai/images/bg-circle.png");
  animation: rotating 10s infinite linear;
}

@keyframes rotating {
  from {
    transform: scale(1) rotate(0deg);
  }
  to {
    transform: scale(1) rotate(360deg);
  }
}
.bg2{
  width: 53.52px;
  height: 497.52px;
  right: -10px;
  top: 40px;
  background-image: url("@/assets/images/camouflage-1.png");
}
.main{
  position: relative;
  display: flex;
  justify-content: space-between;
  .left{
    padding-left: 40px;
    .title{
      font-size: 80px;
      color: var(--color-1);
      span{
        color: var(--color-7);
      }
    }
    .des{
      width: 448px;
      font-size: 16px;
      line-height: 24px;
      color: var(--color-1);
      font-family: "KrossNeueGrotesk-Heavy";
    }
  }
  .right{
      width: 50cqw;
      max-width: 900px;
    min-width: 900px;
    margin-right: 40px;
  }
}
.bg3{
  background-image: url("@/assets/images/chat-bg.svg");
  height: 514px;
  width: 1553px;
  bottom: -100px;
  left: 50%;
  transform: translateX(-50%);
}
.swiper{
  margin-top: -220px!important;
}
</style>
