<template>
  <div v-inView="{callback:()=>textVisible = true}" id="understanding">
    <div v-inView="{callback:()=>cardVisible = true}" class="zaigo-card">
      <transition name="scale-in">
      <div v-if="cardVisible" class="zaigo-card-bg"/>
      </transition>
      <transition name="left-in">
        <div v-if="cardVisible" class="zaigo-card-text">
          <div class="zaigo-card-title">ZAI-GO</div>
          <div class="zaigo-card-subtitle">PERSONALITY QUIZ</div>
          <div class="zaigo-card-des">BERA, BTC, ETH, SOL, DOGE, or PEPE... which ZAI-GO would you vibe with?
            Connect your Wallet and take our ZAI-GO Personality Quiz to find out!
          </div>
          <div class="btn-group">
            <button class="take-quiz" @click="appState.toQuiz()">TAKE THE QUIZ! </button>
            <button v-show="isCanMint" class="take-quiz" @click="mintHandle()">Mint</button>
          </div>
        </div>
      </transition>
      <transition name="opacity">
        <img v-if="cardVisible" :src="cardVisible?zaigoPic:''" alt="">
      </transition>

    </div>
  </div>
</template>

<script setup>
import mixin from '@/mixin/understanding.js'
import {useAppState} from "@/store/modules/app.js";
import zaigoPic from '@/assets/images/zaigo-pic.gif'

defineOptions({
  name: 'understanding'
})
const appState = useAppState()
const {cardVisible, textVisible,isCanMint,mintHandle} = mixin()
</script>

<style lang="scss" scoped>
#understanding {
  width: 100%;
  max-width: var(--page-inner-width);
  //height: 1251px;
  margin: 0 auto 83px;
}

.zaigo-text {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.zaigo-title {
  font-family: "RAXON-Regular";
  font-size: 48px;
  margin-bottom: 32px;
  color: var(--color-1);
}

.zaigo-des {
  font-size: 16px;
  width: 58%;
  text-align: center;
  font-family: "KrossNeueGrotesk-Regular";
  color: var(--color-1);
  margin-bottom: 20px;
}

.zaigo-subtitle {
  font-size: 28px;
  text-align: center;
  font-family: "Prototype";
  color: var(--color-2);
}

.zaigo-card {
  padding: 150px 180px ;
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  container-type: inline-size;
  position: relative;
}

.zaigo-card-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("https://oss.narralayer.ai/images/home-page-bg-1.gif") no-repeat center / 100% 100%;
  z-index: -1;
}

.zaigo-card-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.zaigo-card-title {
  font-family: "RAXON-Regular";
  font-size: 9cqw;
  color: #fff;
  margin-bottom: 10px;
}

.zaigo-card-subtitle {
  font-family: "Prototype";
  color: var(--color-2);
  font-size: 3cqw;
  margin-bottom: 2cqw;
}

.zaigo-card-des {
  font-size: 1.6cqw;
  font-family: 'KrossNeueGrotesk-Regular';
  color: #fff;
  margin-bottom: 4cqw;
}
.btn-group{
  display: flex;
}
.take-quiz {
  height: 84px;
  width: 269px;
  line-height: 84px;
  text-align: center;
  font-size: 24px;
  margin:  0 10px;
  font-family: "RAXON-Regular";
  background:url("@/assets/images/takeQuiz-bg.svg") no-repeat center / 100% 100%;
  //background: #df9808;
  //border-radius: 0px 0px 8px 8px;
  //border: 1px solid #EDE4CC;
  cursor: pointer;
  color: var(--color-1);
}

img {
  width: 50cqw;
  transform: scale(1.2);
}
</style>
