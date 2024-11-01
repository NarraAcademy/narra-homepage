<template>
  <div v-inView="{callback:()=>textVisible = true}" id="understanding">
    <Transition name="opacity">
      <div v-if="textVisible" class="zaigo-text">
        <h1 class="title">Understanding Narra</h1>
        <div class="zaigo-des">At Narra, we're bullish about you. That's why we're consumer-first,
          game-first, and
          story-first. We're blending the excitement of the crypto community with cutting-edge AI technology, while
          placing
          the power of creativity and evolution in everyone's hands. We're paving the way for a new era of digital
          storytelling, gamification, and interactive experiences. 
        </div>
        <h2 class="subtitle">Become a Narra. Be part of the grand Narra+IVE!</h2>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import mixin from '@/mixin/understanding.js'
import {useAppState} from "@/store/modules/app.js";

defineOptions({
  name: 'understanding'
})
const appState = useAppState()
const {
  cardVisible,
  textVisible,
  visible1,
  visible2,
  visible3,
  visible4,
  visible5,
  visible6,
  visible7,
  visible8,
  isCanMint,
  mintHandle
} = mixin()
</script>

<style lang="scss" scoped>
#understanding {
  position: relative;
  z-index: 1;
  width: 3.45rem;
  min-height: 4rem;
  margin: 0.63rem auto 0.66rem;
}

.zaigo-text {
  display: flex;
  flex-direction: column;
  //align-items: center;
  min-height: 3rem;
  margin-bottom: 0.5rem;
}

.title {
  font-family: "RAXON-Regular";
  font-size: 0.24rem;
  margin-bottom: 0.12rem;
  color: var(--color-1);
}

.zaigo-des {
  font-size: 0.16rem;
  width: 3.45rem;
  //text-align: center;
  font-family: "KrossNeueGrotesk-Regular";
  color: var(--color-1);
  margin-bottom: 0.12rem;
  line-height: 0.24rem;
}

.subtitle {
  line-height: 0.36rem;
  width: 3.45rem;
  //text-align: center;
}

.zaigo-card {
  margin: 0.3rem auto 0.3rem;
  width: 3.7rem;
  height: 7.08rem;
  //min-height: 8rem;
  display: flex;
  position: relative;
  z-index: 0;
  flex-direction: column;
  padding: 0.3rem;
  background: url("@/assets/images/home-mobile-zaigo-bg.png") no-repeat center /100% 100%;
}

//.zaigo-card-bg {
//  position: absolute;
//  top: -0.7rem;
//  left: 50%;
//  transform: translateX(-50%);
//  width: 6.4rem;
//  height: 1.6rem;
//  background: url("https://oss.narralayer.ai/images/home-page-bg-1.gif") no-repeat top /100% auto;
//  z-index: -1;
//}
//
//.zaigo-card-bg-2 {
//  position: absolute;
//  bottom: -0.3rem;
//  left: 50%;
//  transform: translateX(-50%);
//  width: 6.4rem;
//  height: 1.6rem;
//  background: url("https://oss.narralayer.ai/images/home-page-bg-1.gif") no-repeat bottom/100% auto;
//  z-index: -1;
//}

.zaigo-card-text {
  //text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 0.3rem;
}

.zaigo-card-title {
  font-family: "RAXON-Regular";
  font-size: 0.8rem;
  color: #fff;
  margin-bottom: 0.24rem;
}

.zaigo-card-subtitle {
  font-family: "Prototype";
  color: var(--color-2);
  font-size: 0.28rem;
  margin-bottom: 0.24rem;
}

.zaigo-card-des {
  font-size: 0.13rem;
  font-family: 'KrossNeueGrotesk-Regular';
  color: #fff;
  margin-bottom: 0.19rem;
}

.take-quiz {
  height: 0.55rem;
  width: 2.61rem;
  line-height: 0.55rem;
  text-align: center;
  margin: 0 auto 0.2rem;
  font-size: 0.16rem;
  font-family: "RAXON-Regular";
  background: url("@/assets/images/takeQuiz-bg.svg") no-repeat center/100% 100%;
  cursor: pointer;
  color: var(--color-1);
}

img {
  width: 3.45rem;
  height: 3.45rem;
}

</style>
