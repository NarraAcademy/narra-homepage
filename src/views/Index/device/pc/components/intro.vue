<template>
  <main class="main" :class="enterCheck&&'intro-enter'">
    <div class="bg bg1" :class="enterCheck?'bg1-enterCheck':''"></div>
    <div class="bg bg2" :class="enterCheck?'bg2-enterCheck':''"></div>
    <div class="page-inner">
      <img v-show="index+1 === count" class="mascot" v-for="(i,index) in mascotList" :key="index" :src="i"
           :class="`mascot${index+1} ${enterCheck?'mascot-enterCheck':''}`" alt="">
      <div class="bg3" :class="enterCheck?'bg3-enterCheck':''"></div>
      <transition name="opacity">
        <div v-if="!enterCheck" class="enter-before">
          <div class="logo">
            <img :src="narra" alt="">
            <h1 class="subtitle">Become A Trainer</h1>
          </div>
          <button @click="enterHandle" class="enter">
            ENTER
          </button>
        </div>
        <div v-else class="enter-after">
          <div class="narra-card" @click="emit('end')"/>
          <div class="right">
            <div class="swiper-text">
              <div class="text" :class="swiperTextKey === 0?'text-active':''">
                Community-Led, Fan-Owned
              </div>
              <div class="text" :class="swiperTextKey === 1?'text-active':''">
                Be a Trainer!<br/>Be Empowered
              </div>
              <div class="text" :class="swiperTextKey === 2?'text-active':''">
                Entering Narra<br/>Training Academy
<!--                Game on with <img style="width: 250px;height: 95px;" :src="zai" alt="">-->
              </div>
            </div>
            <IntroProgress  class="progress" @end="emit('end')" />
          </div>
        </div>
      </transition>
    </div>
  </main>
</template>

<script setup>
defineOptions({
  name: 'intro',
})
import narra from '@/assets/images/pc/intro/NARRA.png'
import IntroProgress from "@/components/introProgress/index.vue";
import mixin from "@/mixin/intro.js";

const emit = defineEmits(['end'])

const {mascotList,swiperTextKey,enterCheck,count,enterHandle} = mixin()

</script>

<style lang="scss" scoped>
.main {

}
.intro-enter{
  height: var(--vh);
  min-height: 785px;
  overflow: hidden;
  position: relative;
}

.page-inner {
  position: relative;
  overflow: hidden;
  height: var(--vh);
}

.bg {
  width: 1440px;
  height: 50%;
  max-height: 510px;
  position: absolute;
  background: url("@/assets/images/bg-pic.svg") no-repeat bottom/ cover;
  z-index: 2;
  transition: 0.5s;
}

.bg1 {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.bg1-enterCheck {
  top: -300px;
}

.bg2 {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) rotateZ(180deg);
}

.bg2-enterCheck {
  bottom: -300px;
}

.bg3 {
  width: 1440px;
  height: 1440px;
  position: fixed;
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

.mascot {
  position: absolute;
  z-index: 1;
  width: calc(var(--page-inner-width) / 1.1);
  height: calc(1080px / 1.1);
}

.mascot-enterCheck {
  display: none;
}

.mascot1 {
  top: calc(50% - 110px);
  left: -12%;
  transform: translateY(-50%);
}

.mascot2 {
  transform: scale(0.8);
  top: calc(50% - 710px);
  left: 320px;
}

.mascot3 {
  top: calc(50% - 10px);
  left: -650px;
  transform: translateY(-50%) scale(0.45);
}

.enter-before {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-rows: max-content max-content;
  justify-items: center;
  gap: 20px;

  .logo {
    width: 468px;
    height: 190px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url("@/assets/images/pc/intro/narra-bg.png") no-repeat center / 100%;

    img {
      width: 381px;
      height: 101px;
      margin-bottom: 20px;
    }

    .subtitle  {
      font-size: 28px;
      color: #faac07;
      font-family: Prototype;
      line-height: 36px;
    }
  }


  .enter {
    cursor: pointer;
    height: 72px;
    width: 162.53px;
    background: url("@/assets/images/pc/intro/enter-bg.png") no-repeat center / 100%;
    font-size: 22px;
    font-weight: 900;
    color: #EDE4CC;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
    font-family: "KrossNeueGrotesk-Heavy";
    transition: 0.5s;

    &:hover {
      background-image: url("@/assets/images/pc/intro/enter-bg-hover.png");
    }

    &:active {
      background-image: url("@/assets/images/pc/intro/enter-bg-active.png");
    }
  }
}

.enter-after {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  gap: 30px;

  .narra-card {
    width: 421px;
    height: 584.97px;
    background: url("https://oss.narralayer.ai/images/intro-card.gif") no-repeat center / 100% 100%;
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .swiper-text {
      position: relative;
      width: 600px;
      height: 248px;
      font-family: Prototype;
      font-size: 73.48px;
      font-weight: 400;
      line-height: 86.41px;
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
      }

      .text-active {
        opacity: 1;
      }
    }
  }
}


</style>
