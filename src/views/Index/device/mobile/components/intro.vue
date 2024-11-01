<template>
  <main class="main" :class="enterCheck&&'intro-enter'">
    <img v-show="index+1 === count" class="mascot" v-for="(i,index) in mascotList" :key="index" :src="i"
         :class="`mascot${index+1} ${enterCheck?'mascot-enterCheck':''}`" alt="">
    <div class="bg bg1" :class="enterCheck?'bg1-enterCheck':''"></div>
    <div class="bg bg2" :class="enterCheck?'bg2-enterCheck':''"></div>
    <div class="bg3" :class="enterCheck?'bg3-enterCheck':''"></div>
    <div class="logo" :class="enterCheck?'logo-enterCheck':''">
      <img :src="narra" alt="">
      <h1 class="subtitle">Become A Trainer</h1>
    </div>
    <button @click="enterHandle" :class="enterCheck?'enter-enterCheck':''" class="enter">
      ENTER
    </button>
    <div class="narra-card" :class="enterCheck?'narra-card-enterCheck':''" @click="emit('end')">
    </div>
    <div :class="enterCheck?'swiper-text-enterCheck':''" class="swiper-text">
      <div class="text" :class="swiperTextKey === 0?'text-active':''">
        Community-Led,<br/> Fan-Owned
      </div>
      <div class="text" :class="swiperTextKey === 1?'text-active':''">
        Be a Trainer!<br/>Be Empowered
      </div>
      <div class="text" :class="swiperTextKey === 2?'text-active':''">
        Entering Narra <br/> Training Academy
<!--        Game on with<br/> <img style="width: 1.4737rem;height: 0.56rem;display: inline-block" :src="zai" alt="">-->
      </div>
    </div>
    <IntroProgress v-if="enterCheck" class="progress" @end="emit('end')"/>
  </main>
</template>

<script setup>
import narra from '@/assets/images/pc/intro/NARRA.png'
import IntroProgress from "@/components/introProgress/index.vue";
import mixin from "@/mixin/intro.js";

const emit = defineEmits(['end'])
const {mascotList, swiperTextKey, enterCheck, count, enterHandle} = mixin()

</script>

<style lang="scss" scoped>
.main {
  flex-shrink: 0;
  height: var(--vh);
  position: relative;
  overflow: hidden;
  min-height: 3rem;
  background: radial-gradient(50% 50% at 50% 50%, #1D2C31 0%, #0E171A 100%);
}

.intro-enter {
  min-height: 7rem;
}

.bg {
  height: 50%;
  width: 100%;
  position: absolute;
  background: url("@/assets/images/bg-pic.svg") no-repeat center / cover;
  z-index: 2;
  transition: 0.5s;
}

.bg1 {
  bottom: 50%;
  left: 50%;
  transform: translateX(-50%);
}

.bg1-enterCheck {
  bottom: 90%;
}

.bg2 {
  top: 50%;
  left: 50%;
  transform: translateX(-50%) rotateZ(180deg);
}

.bg2-enterCheck {
  top: 90%;
}

.bg3 {
  width: 6.57rem;
  height: 6.57rem;
  position: absolute;
  top: 50%;
  left: 50%;
  background: url("https://oss.narralayer.ai/images/bg-circle.png") no-repeat center / 70%;
  z-index: 0;
  transform: translate(-50%, -52%) scale(1.3);
  animation: rotating 30s infinite linear;
}

.bg3-enterCheck {
  animation: rotating 30s infinite linear;
}


@keyframes rotating {
  from {
    transform: translate(-50%, -52%) scale(1.3) rotate(0deg);
  }
  to {
    transform: translate(-50%, -52%) scale(1.3) rotate(360deg);
  }
}

.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2.9921rem;
  height: 1.2131rem;
  z-index: 3;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.121rem;
  background: url("@/assets/images/pc/intro/narra-bg.png") no-repeat center / 100%;
  transition: 0.2s;

  img {
    width: 2.4447rem;
    height: 0.6481rem;
  }

  .subtitle {
    font-size: 0.1795rem;
    color: #faac07;
    font-family: Prototype;
    line-height: 0.2308rem;
  }
}

.logo-enterCheck {
  opacity: 0;
}

.enter {
  cursor: pointer;
  height: 0.48rem;
  width: 1.0842rem;
  position: absolute;
  z-index: 3;
  background: url("@/assets/images/pc/intro/enter-bg.png") no-repeat center / 100%;
  font-size: 0.14rem;
  font-weight: 900;
  color: #EDE4CC;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 0.06rem;
  font-family: "KrossNeueGrotesk-Heavy";
  left: 50%;
  transform: translateX(-50%);
  top: calc(50% + 0.3rem + (1.21rem / 2));
  transition: 0.5s;
  //&:hover{
  //  background-image: url("@/assets/images/pc/intro/enter-bg-hover.png");
  //}
  &:active {
    background-image: url("@/assets/images/pc/intro/enter-bg-active.png");
  }
}

.enter-enterCheck {
  opacity: 0;
  z-index: 1;
}

.mascot {
  width: 100%;
  position: absolute;
  z-index: 1;
}

.mascot-enterCheck {
  display: none;
}

.mascot1 {
  width: calc(100% * 2);
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 40%);
}

.mascot2 {
  width: calc(100% * 2);
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 30%) scale(0.7);
}

.mascot3 {
  bottom: 45%;
  left: 50%;
  transform: translate(-50%, 30%);
}

.narra-card {
  width: 2rem;
  height: 2.7789rem;
  opacity: 0;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%);
  position: absolute;
  z-index: 1;
  background: url("https://oss.narralayer.ai/images/intro-card.gif") no-repeat center / 100% 100%;
}

.narra-card-enterCheck {
  opacity: 3;
}

.swiper-text {
  opacity: 0;
  position: absolute;
  width: 3.45rem;
  height: 1.03rem;
  bottom: calc(50% - 1.27rem);
  left: 50%;
  z-index: 1;
  transform: translateX(-50%);
  font-family: Prototype;
  font-size: 0.24rem;
  font-weight: 400;
  line-height: 0.32rem;
  text-align: left;
  color: #EDE4CC;
  transition: 0.3s;

  .text {
    opacity: 0;
    transition: 0.5s;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    text-align: center;
  }

  .text-active {
    opacity: 1;
  }
}

.swiper-text-enterCheck {
  opacity: 1;
  z-index: 4;
}

.progress {
  position: absolute;
  bottom: calc(50% - 1.27rem - 1.5823rem);
  left: 50%;
  transform: translateX(-50%);
}
</style>
