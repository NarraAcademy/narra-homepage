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


          <span class="text-1">Berachain Virtuals with </span>
          <!-- <br> -->
          <span class="text-2"> </span>

          <br>
          <span class=" yellow text-3"> Gamified AI Agents</span>
        </div>
        <transition name="left-in">
          <div v-if="visible" class="mascot"></div>
        </transition>
      </div>
    </div>
    <a class="getStarted" href="https://meme.narralayer.ai/">Meme now!</a>
    <!-- <transition name="bottom-in">
      <div v-if="visible"  class="getStarted" @click="pushChat">TAKE THE QUIZ!</div>
    </transition> -->
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
  position: relative;
  margin-bottom: 0.8rem;
}

.bg {
  position: absolute;
  top: 0%;
  width: 50%;
  height:7rem;
  z-index: 1;
  background: url("@/assets/images/home-bg-mobile.svg") no-repeat top left/100% 100%;
  transform: scale(1.4);
  pointer-events: none;
}

.bg-left {
  right: -10%;
}


.bg-right {
  transform:  scale(1.4)  rotateY(180deg);
  left: -10%;
}

.page-home {
  position: relative;
  width: 100%;
  height: 4.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .mascot {
    position: absolute;
    width: 5rem;
    height: 3rem;
    bottom: 0.2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    background: url("https://oss.narralayer.ai/images/mascot-4.gif") no-repeat center / 100% 100%;
  }

  .text {
    z-index: 1;
    word-wrap: break-word;
    margin-top: 1rem;
    font-family: Prototype;
    font-size: 0.32rem;
    font-weight: 400;
    line-height: 0.42rem;
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
  width: 2.69rem;
  height: 0.64rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-3);
  font-family: 'RAXON-Regular';
  font-size: 0.32rem;
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
