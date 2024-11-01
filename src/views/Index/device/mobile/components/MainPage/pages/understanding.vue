<template>
  <div v-inView="{callback:()=>textVisible = true}" id="understanding">
    <!--    <transition name="bottom-in">-->
    <!--      <div v-if="true" class="zaigo-text" v-inView="{callback:()=>visible1 = true}">-->
    <!--        <transition-group name="bottom-in">-->
    <!--          <h1 v-if="visible1" v-inView="{callback:()=>visible2 = true}" class="title">Understanding Narra</h1>-->
    <!--          <div v-if="visible2" v-inView="{callback:()=>visible3 = true}" class="zaigo-des">At Narra, we’re bullish about-->
    <!--            you. We’re blending the excitement of the crypto community, cutting-edge AI technology, while placing the-->
    <!--            power of creativity and evolution in everyone’s hands.-->
    <!--          </div>-->
    <!--          <h2 v-if="visible3" class="subtitle">Become a Narra. Be part of the grand Narra+IVE!</h2>-->
    <!--        </transition-group>-->
    <!--      </div>-->
    <!--    </transition>-->
    <transition name="opacity">
      <div v-if="textVisible" v-inView="{callback:()=>cardVisible = true}" class="zaigo-card">
        <!--      <transition name="opacity">-->
        <!--        <div v-if="cardVisible" class="zaigo-card-bg"/>-->
        <!--      </transition>-->
        <!--      <transition name="opacity">-->
        <!--        <div v-if="cardVisible" class="zaigo-card-bg-2"/>-->
        <!--      </transition>-->
        <div class="zaigo-card-text">
          <transition-group name="bottom-in">
            <div v-if="cardVisible" v-inView="{callback:()=>visible4 = true}" class="zaigo-card-title">ZAI-GO</div>
            <div v-if="visible4" v-inView="{callback:()=>visible5 = true}" class="zaigo-card-subtitle">PERSONALITY QUIZ
            </div>
            <div v-if="visible5" v-inView="{callback:()=>visible6 = true}" class="zaigo-card-des">BTC, ETH, SOL, DOGE,
              or PEPE... which ZAI-GO would you vibe with?
              <br>
              Connect your Wallet and take our ZAI-GO Personality Quiz to find out!
            </div>
            <!--          <img v-if="visible6" v-inView="{callback:()=>visible7 = true}"-->
            <!--               :src="cardVisible?'https://oss.narralayer.ai/images/zaigo-pic.png':''" alt="">-->
          </transition-group>
        </div>
      </div>
    </transition>
    <transition-group name="bottom-in">
      <button v-if="visible6" v-inView="{callback:()=>visible7 = true}" class="take-quiz"
              @click="appState.toQuiz()">TAKE THE QUIZ!
      </button>
      <button v-if="visible7" class="take-quiz"
              v-show="isCanMint" @click="mintHandle()"
      >Mint
      </button>
    </transition-group>
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
  //width: 3.45rem;
  min-height: 7.8rem;
  margin: 0 auto 0.66rem;
}

.zaigo-text {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  text-align: center;
  font-family: "KrossNeueGrotesk-Regular";
  color: var(--color-1);
  margin-bottom: 0.12rem;
  line-height: 0.24rem;
}

.subtitle {
  line-height: 0.36rem;
  width: 3.45rem;
  text-align: center;
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
