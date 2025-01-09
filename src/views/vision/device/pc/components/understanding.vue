<template>
  <div v-inView="{callback:()=>textVisible = true}" id="understanding">
    <Transition name="opacity">
      <div v-if="textVisible" class="zaigo-text">
        <h1 class="title">Understanding Narra</h1>
        <div class="zaigo-des">At Narra, we’re bullish about our users, whom we call Trainers. That’s why we’re consumer-first, game-first, and story-first. We’re blending the excitement of “crypto cults,” with cutting-edge AI technology, while placing the power of creativity and evolution in everyone’s hands!

          
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
const {cardVisible, textVisible,isCanMint,mintHandle} = mixin()
</script>

<style lang="scss" scoped>
#understanding {
  width: 100%;
  max-width: var(--page-inner-width);
  //height: 1251px;
  margin: 138px auto 53px;
}

.zaigo-text {
  display: flex;
  flex-direction: column;
  //align-items: center;
  padding-left: 40px;
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
  //text-align: center;
  font-family: "KrossNeueGrotesk-Regular";
  color: var(--color-1);
  margin-bottom: 40px;
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
  margin-bottom: 1.6cqw;
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
  height: 67px;
  width: 197px;
  line-height: 48px;
  text-align: center;
  font-size: 16px;
  margin:  0 10px;
  font-family: "KrossNeueGrotesk-Heavy";
  background:url("@/assets/images/takeQuiz-bg.svg") no-repeat center / 100% 100%;
  //background: #df9808;
  //border-radius: 0px 0px 8px 8px;
  //border: 1px solid #EDE4CC;
  cursor: pointer;
  color: #000;
}

img {
  width: 50cqw;
}
</style>
