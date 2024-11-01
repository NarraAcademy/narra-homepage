<template>
  <div id="home">
    <div v-inView="{callback:()=>visible = true}">
      <transition name="right-in">
        <div v-if="visible" class="bg bg-left"/>
      </transition>
      <Transition name="left-in">
        <div v-if="visible" class="bg bg-right"/>
      </Transition>
    </div>
    <div class="page-inner">
      <div class="page-home">
        <div class="text">
          <span class="text-1">The first</span>
          <br>
          <span class="text-2">community-owned</span>
          <br>
          <span class="yellow text-3">AI edutainment</span>
        </div>
        <transition name="left-in">
          <div v-if="visible" class="mascot"></div>
        </transition>
      </div>
    </div>
    <transition name="opacity">
      <div v-if="visible"  class="getStarted" @click="pushChat">TAKE THE QUIZ!</div>
    </transition>
  </div>
</template>

<script setup>
import mixin from '@/mixin/home.js'
import {useAppState} from "@/store/modules/app.js";

const appState = useAppState()
defineOptions({
  name: 'home'
})
const {visible,pushChat} = mixin()

</script>

<style lang="scss" scoped>
#home {
  width: 100%;
  height: 816px;
  position: relative;
  margin-bottom: 50px;
}

.bg {
  position: absolute;
  top: 138px;
  width: 50%;
  height: 862px;
  min-width: 707px;
  z-index: 1;
  background: url("@/assets/images/home-bg-2.svg") no-repeat top right;
}

.bg-left {
  left: 50%;
}


.bg-right {
  transform: rotateY(180deg);
  right: 50%;
}

.page-home {
  position: relative;
  width: 100%;
  height: 869px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .mascot {
    position: absolute;
    width: 90%;
    max-width: var(--page-inner-width);
    height: 90%;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    background: url("https://oss.narralayer.ai/images/mascot-4.gif") no-repeat center / 100% 100%;
  }

  .text {
    z-index: 1;
    word-wrap: break-word;
    margin-top: 183px;
    font-family: Prototype;
    font-size: 60px;
    font-weight: 400;
    line-height: 76px;
    text-align: center;
    color: #EDE4CC;
    -webkit-background-clip: text;
    background-size: 100% 100%;

    span {
      color: transparent;
      background-image: linear-gradient(to right, #EDE4CC, #EDE4CC);
      background-repeat: no-repeat;
      -webkit-background-clip: text;
      background-size: 0% 100%;
      position: relative;
    }

    .yellow {
      background-image: linear-gradient(to right, #FAAC07, #FAAC07);
    }

    &-1 {
      animation: bg 0.3s linear;
      animation-delay: 0s;
      animation-fill-mode: forwards;
    }

    &-2 {
      animation: bg 0.4s linear;
      animation-delay: 0.3s;
      animation-fill-mode: forwards;
    }

    &-3 {
      animation: bg 0.5s linear;
      animation-delay: 0.7s;
      animation-fill-mode: forwards;
    }

    &-4 {
      animation: bg 0.3s linear;
      animation-delay: 1.2s;
      animation-fill-mode: forwards;
    }
  }

  @keyframes bg {
    from {
      background-size: 0% 100%;
    }
    to {
      background-size: 100% 100%;
    }
  }
}

.getStarted {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  bottom: 0;
  z-index: 2;
  background: url("@/assets/images/home-btn-1.svg") no-repeat center center/100% 100%;
  width: 455px;
  height: 109px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-3);
  font-family: 'RAXON-Regular';
  font-size: 32px;
  cursor: pointer;
}

.left-in-enter-from,
.left-in-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.right-in-enter-from,
.right-in-leave-to {
  opacity: 0;
  transform: translateX(200%);
}

</style>
