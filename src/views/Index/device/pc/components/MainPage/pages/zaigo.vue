<template>
  <div id="zaigo" v-inView="{callback:()=>visible1=true}">
    <transition name="opacity">
      <div v-if="visible1" v-inView="{callback:()=>visible2=true}" class="title">
        Narra's AI Agents
      </div>
    </transition>
    <transition name="opacity">
      <div v-if="visible2" v-inView="{callback:()=>visible3=true}" class="des">
        ZAI崽 is curious and always ready to learn in order to evolve. Through nurturing ZAI崽, it'll be able to evolve into a Narra AI Agent inspired by the Crypto Universe.</div>
    </transition>
    <transition name="opacity">
      <div v-if="visible3" v-inView="{callback:()=>visible=true}" class="subtitle">
Who will your ZAI崽 evolve into?
      </div>
    </transition>
    <!--    <transition name="opacity">-->
    <!--      <div v-if="visible" class="bg"></div>-->
    <!--    </transition>-->
    <!-- <transition name="opacity">
      <div v-if="visible" class="count">
        <div class="count-item">
          <div class="count-item-name">
            Narra Training Day
          </div>
          <div class="count-item-value">
            ******
                       <digital-flop :number="120" :formatter="formatter"/>
          </div>
        </div>
        <div class="count-item">
          <div class="count-item-name">
            Trainers Enrolled
          </div>
          <div class="count-item-value">
            ******
                       <digital-flop :number="230234100" :formatter="formatter"/>
          </div>
        </div>
        <div class="count-item">
          <div class="count-item-name">
            ZAI In Training
          </div>
          <div class="count-item-value">
            ******
                       <digital-flop :number="231456902" :formatter="formatter"/>
          </div>
        </div>
      </div>
    </transition> -->
    <transition name="opacity">
      <div v-if="visible" class="page-inner">
        <div class="camouflage"></div>
        <img class="shapes" :src="cardList.find(i=>i.id === activeId)?.shapes" alt="">
        <!--      <img class="shapes" :src="cardList.find(i=>i.id === activeId)?.shapes" alt="">-->
        <div class="center">
          <transition name="scale-in">
            <div v-if="visible" class="speechBubble">
              <img class="speechBubbleBg" :src="cardList.find(i=>i.id === activeId).speechBubble" alt="">
              <transition name="aopacity" v-for="i in cardList" :key="i.id">
                <h1 v-show="i.id === activeId" class="text">
                  {{ i.des }}
                </h1>
              </transition>
              <!--            <button class="try" :class="'try-'+activeId" @click="appState.toQuiz()">Vibe check !</button>-->
            </div>
          </transition>
          <transition :name="'figure-bg-'+i.id" v-for="i in cardList" :key="i.id">
            <img v-show="i.id === activeId" class="figure-bg" :class="'figure-bg-'+i.id" :src="i.figureBg" alt="">
          </transition>
          <transition name="aopacity" v-for="i in cardList" :key="i.id">
            <img v-show="i.id === activeId" class="figure" :class="'figure-'+i.id" :src="i.figure" alt="">
          </transition>
        </div>
        <transition name="left-in">
          <div v-if="visible" class="card" @click="isCardActive = !isCardActive">
            <div class="card-face"
                 :class="(isCardActive?'back':'front')+' '+('card-face-'+cardList.find(i=>i.id === activeId)?.id)">
              <img :src="cardList.find(i=>i.id === activeId)?.cardDefault" alt="">
            </div>
            <div class="card-face"
                 :class="(isCardActive?'front':'back')+' '+('card-face-'+cardList.find(i=>i.id === activeId)?.id)">
              <img :src="cardList.find(i=>i.id === activeId)?.cardActive" alt="">
            </div>
          </div>
        </transition>
        <swiper-card class="swiper-card" v-model:activeId="activeId"/>
      </div>
    </transition>
  </div>
</template>

<script setup>
import mixin from '@/mixin/zaigo.js'
import {ref} from "vue";
import {useAppState} from "@/store/modules/app.js";
import SwiperCard from "@/views/Index/device/pc/components/MainPage/components/swiperCardV2.vue";

function formatter(number) {
  const numbers = number.toString().split('').reverse()
  const segs = []

  while (numbers.length) segs.push(numbers.splice(0, 3).join(''))

  return segs.join(',').split('').reverse().join('')
}

const {cardList, visible, visible1, visible2, visible3} = mixin()
const activeId = ref(3)
const hoverId = ref('')
const isCardActive = ref(false)
const cardListClickHandle = (i) => {
  activeId.value = i.id
  isCardActive.value = false
}
const appState = useAppState()
</script>

<style lang="scss" scoped>
#zaigo {
  width: 100%;
  position: relative;
  margin-bottom: 110px;
}

.title {
  text-align: center;
  color: var(--color-7) !important;
}

.subtitle {
  text-align: center;
  margin-bottom: 82px;
  color: var(--color-1) !important;
}

.des {
  margin: 30px auto;
  text-align: center;
  width: 1000px;
  color: var(--color-1);
  font-size: 16px;
  line-height: 24px;
  text-align: justify;
  font-family: "KrossNeueGrotesk-Regular";
}

.block-line {
  display: flex;
  justify-content: end;
  margin-bottom: 120px;

  img {
    transform: rotateY(180deg);
  }
}

.count {
  width: 100%;
  max-width: var(--page-inner-width);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto;
  padding: 0 100px;
  position: relative;
  z-index: 1;

  &-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 100px;
    width: 200px;

    &-name {
      font-size: 16px;
      font-family: 'Prototype';
      color: #fff;
    }

    &-value {
      font-size: 32px;
      font-family: "Prototype";
      color: var(--color-5);
      text-shadow: 0 0 2px #0e171a;
    }
  }
}

.bg {
  position: absolute;
  width: 1442.49px;
  height: 1442.49px;
  transform: rotate(90deg);
  top: 120px;
  right: 0;
  z-index: 0;
  background: url("@/assets/images/bg-pic.svg") no-repeat top / 100% auto;
}

.page-inner {
  max-width: var(--page-inner-width);
  height: 804px;
  position: relative;
  width: 100%;
  margin: 0 auto;
  container-type: size;
}

.camouflage {
  position: absolute;
  width: 25.08px;
  height: 482px;
  top: 203px;
  left: 4cqw;
  z-index: 1;
  background: url("@/assets/images/camouflage-light.png") no-repeat center /100% 100%;
}

.shapes {
  position: absolute;
  width: 464.88px;
  height: 36px;
  z-index: 1;

  &:nth-of-type(1) {
    top: 141px;
    right: 10cqw;
  }

  &:nth-of-type(2) {
    top: 700px;
    left: 0px;
  }
}

.center {
  position: absolute;
  left: 50%;
  transform: translateX(-65%);
  height: 100%;
  width: 50%;
  z-index: 2;
}

.speechBubble {
  position: absolute;
  width: 555.21px;
  height: 523.94px;
  top: 30px;
  left: 70%;
  transform-origin: left bottom;
  z-index: 7;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;

  .speechBubbleBg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-57%, -67%);
    width: 299px;
    font-size: 28px;
    line-height: 36px;
    font-family: "Prototype";
    color: #EDE4CC;
    z-index: 2;
  }

  .try {
    cursor: pointer;
    z-index: 3;
    position: absolute;
    bottom: 130px;
    left: 50%;
    width: 310px;
    height: 72px;
    text-align: center;
    line-height: 72px;
    color: var(--color-4);
    font-size: 16px;
    font-family: "KrossNeueGrotesk-Heavy";
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    animation: try-scale 2s linear infinite;
  }

  .try-1 {
    background-image: url("@/assets/images/try-bg-1.svg");
  }

  .try-2 {
    background-image: url("@/assets/images/try-bg-2.svg");
  }

  .try-3 {
    background-image: url("@/assets/images/try-bg-3.svg");
  }

  .try-4 {
    background-image: url("@/assets/images/try-bg-4.svg");
  }

  .try-5 {
    background-image: url("@/assets/images/try-bg-5.svg");
  }
}


.figure-bg {
  position: absolute;
}

.figure-bg-1 {
  width: 653px;
  height: 600px;
  top: -28px;
  left: 50%;
  transform: translateX(-50%) rotateZ(30deg) scale(1.2);
}

.figure-bg-1-enter-from,
.figure-bg-1-leave-to {
  opacity: 0;
  transform: translateX(-50%) rotateZ(0deg);
  transition: opacity 0.3s, transform 0.3s;
}

.figure-bg-1-enter-to {
  opacity: 1;
  transition: opacity 0.3s, transform 0.3s 0.1s;
  transform: translateX(-50%) rotateZ(30deg) scale(1.2);
}


.figure-bg-2 {
  width: 1587px;
  height: 1631px;
  top: -384px;
  left: 50%;
  transform: translateX(-50%) rotateZ(0deg);
}

.figure-bg-2-enter-from,
.figure-bg-2-leave-to {
  opacity: 0;
  transform: translateX(-50%) rotateZ(50deg) scale(0.8);
  transition: opacity 0.3s, transform 0.3s;
}

.figure-bg-2-enter-to {
  opacity: 1;
  transition: opacity 0.3s, transform 0.3s 0.1s;
  transform: translateX(-50%) rotateZ(0deg);
}

.figure-bg-3 {
  width: 868.39px;
  height: 849.61px;
  top: 25px;
  left: 50%;
  transform: translateX(-50%) rotateZ(-46.5deg) scale(1.15);
}

.figure-bg-3-enter-from,
.figure-bg-3-leave-to {
  opacity: 0;
  transform: translateX(-50%) rotateZ(0deg);
  transition: opacity 0.3s, transform 0.3s;
}

.figure-bg-3-enter-to {
  opacity: 1;
  transition: opacity 0.3s, transform 0.3s 0.1s;
  transform: translateX(-50%) rotateZ(-46.5deg) scale(1.15);
}

.figure-bg-4 {
  width: 1435px;
  height: 768px;
  top: 0px;
  left: 50%;
  transform: translateX(-50%) rotateZ(0deg) scale(1);
}

.figure-bg-4-enter-from,
.figure-bg-4-leave-to {
  opacity: 0;
  top: -21px;
  transform: translateX(-50%) rotateZ(56deg) scale(0.8);
  transition: opacity 0.3s, transform 0.3s;
}

.figure-bg-4-enter-to {
  opacity: 1;
  transition: opacity 0.3s, transform 0.3s 0.1s;
  transform: translateX(-50%) rotateZ(0deg) scale(1);
}

.figure-bg-5 {
  width: 1368px;
  height: 650px;
  top: 43px;
  left: 50%;
  transform: translateX(-50%) rotateZ(0deg) scale(1);
}

.figure-bg-5-enter-from,
.figure-bg-5-leave-to {
  opacity: 0;
  top: 31px;
  transform: translateX(-50%) rotateZ(41deg) scale(0.82);
  transition: opacity 0.3s, transform 0.3s;
}

.figure-bg-5-enter-to {
  opacity: 1;
  transition: opacity 0.3s, transform 0.3s 0.1s;
  top: 43px;
  transform: translateX(-50%) rotateZ(0deg) scale(1);
}


.figure-bg-6 {
  width: 1440px;
  height: 810px;
  top: 50%;
  left: 65%;
  transform: translate(-50%, -50%);
}

.figure-bg-6-enter-from,
.figure-bg-6-leave-to {
  opacity: 0;
  transition: opacity 0.3s;
}

.figure-bg-6-enter-to {
}

.figure {
  position: absolute;
  z-index: 3;
}

.figure-1 {
  width: 654px;
  height: 830px;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.figure-2 {
  z-index: 5;
  width: 640px;
  height: 809px;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
}

.figure-3 {
  width: 579px;
  height: 735px;
  top: 31px;
  left: 50%;
  transform: translateX(-50%);
}

.figure-4 {
  width: 588px;
  height: 747px;
  top: 36px;
  left: 50%;
  transform: translateX(-50%);
}

.figure-5 {
  width: 627px;
  height: 796px;
  top: 4px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
}

.figure-6 {
  width: 1106px;
  height: 728px;
  top: 4px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
}

.card {
  max-width: 236px;
  max-height: 474px;
  width: 18cqw;
  height: 36cqw;
  bottom: 50px;
  left: 10cqw;
  position: absolute;
  z-index: 98;
  perspective: 1000px; /* 视距，用于3D效果 */
  cursor: pointer;

  .card-face {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden; /* 隐藏背面 */
    transition: 0.6s ease; /* 添加过渡效果 */
    img {
      max-width: 236px;
      max-height: 474px;
      width: 18cqw;
      height: 36cqw;
    }
  }

  .card-face-1 {
    animation: card-face-1 1.5s linear infinite;
    //&:hover {
    //  filter: drop-shadow(0px 0px 50px #7F892966) drop-shadow(0px 0px 15px #7F8929B2);
    //}
  }

  .card-face-2 {
    animation: card-face-2 1.5s linear infinite;

    //&:hover {
    //  filter: drop-shadow(0px 0px 50px #AB4FEA66) drop-shadow(0px 0px 15px #AB4FEAB2);
    //}
  }

  .card-face-3 {
    animation: card-face-3 1.5s linear infinite;

    //&:hover {
    //  filter: drop-shadow(0px 0px 50px #F9490F66) drop-shadow(0px 0px 15px #F9490FB2);
    //}
  }

  .card-face-4 {
    animation: card-face-4 1.5s linear infinite;

    //&:hover {
    //  filter: drop-shadow(0px 0px 50px #47B6F466) drop-shadow(0px 0px 15px #47B6F4B2);
    //}
  }

  .card-face-5 {
    animation: card-face-5 1.5s linear infinite;

    //&:hover {
    //  filter: drop-shadow(0px 0px 50px #DD812F66) drop-shadow(0px 0px 15px #DD812FB2);
    //}
  }

  .card-face-6 {
    animation: card-face-6 1.5s linear infinite;

    //&:hover {
    //  filter: drop-shadow(0px 0px 50px #DD812F66) drop-shadow(0px 0px 15px #DD812FB2);
    //}
  }

  .front {
    transform: rotateY(0deg); /* 初始正面 */
  }

  .back {
    transform: rotateY(180deg); /* 反面180度旋转，初始时隐藏 */
  }

  @keyframes card-face-1 {
    0% {
      filter: drop-shadow(0px 0px 0px #7F892966) drop-shadow(0px 0px 0px #7F8929B2);
    }
    50% {
      filter: drop-shadow(0px 0px 50px #7F892966) drop-shadow(0px 0px 15px #7F8929B2);
    }
    100% {
      filter: drop-shadow(0px 0px 0px #7F892966) drop-shadow(0px 0px 0px #7F8929B2);
    }
  }


  @keyframes card-face-2 {
    0% {
      filter: drop-shadow(0px 0px 0px #AB4FEA66) drop-shadow(0px 0px 0px #AB4FEAB2);
    }
    50% {
      filter: drop-shadow(0px 0px 50px #AB4FEA66) drop-shadow(0px 0px 15px #AB4FEAB2);
    }
    100% {
      filter: drop-shadow(0px 0px 0px #AB4FEA66) drop-shadow(0px 0px 0px #AB4FEAB2);
    }
  }


  @keyframes card-face-3 {
    0% {
      filter: drop-shadow(0px 0px 0px #F9490F66) drop-shadow(0px 0px 0px #F9490FB2);
    }
    50% {
      filter: drop-shadow(0px 0px 50px #F9490F66) drop-shadow(0px 0px 15px #F9490FB2);
    }
    100% {
      filter: drop-shadow(0px 0px 0px #F9490F66) drop-shadow(0px 0px 0px #F9490FB2);
    }
  }


  @keyframes card-face-4 {
    0% {
      filter: drop-shadow(0px 0px 0px #47B6F466) drop-shadow(0px 0px 0px #7F8929B2);
    }
    50% {
      filter: drop-shadow(0px 0px 50px #47B6F466) drop-shadow(0px 0px 15px #47B6F4B2);
    }
    100% {
      filter: drop-shadow(0px 0px 0px #47B6F466) drop-shadow(0px 0px 0px #47B6F4B2);
    }
  }


  @keyframes card-face-5 {
    0% {
      filter: drop-shadow(0px 0px 0px #DD812F66) drop-shadow(0px 0px 0px #DD812F66);
    }
    50% {
      filter: drop-shadow(0px 0px 50px #DD812F66) drop-shadow(0px 0px 15px #DD812F66);
    }
    100% {
      filter: drop-shadow(0px 0px 0px #DD812F66) drop-shadow(0px 0px 0px #DD812F66);
    }
  }
  @keyframes card-face-6 {
    0% {
      filter: drop-shadow(0px 0px 0px #a74a2466) drop-shadow(0px 0px 0px #a74a2466);
    }
    50% {
      filter: drop-shadow(0px 0px 50px #a74a2466) drop-shadow(0px 0px 15px #a74a2466);
    }
    100% {
      filter: drop-shadow(0px 0px 0px #a74a2466) drop-shadow(0px 0px 0px #a74a2466);
    }
  }


  //
  //&:hover {
  //  .front{
  //    transform: rotateY(-180deg); /* 鼠标悬停时正面翻转到背面 */
  //  }
  //}
  //&:hover {
  //  .back{
  //    transform: rotateY(0deg); /* 鼠标悬停时正面翻转到背面 */
  //  }
  //}
}

.swiper-card {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 99;
}


.aopacity-enter-active, .aopacity-leave-active {
  transition: opacity 0.3s ease;
}

.aopacity-enter-from,
.aopacity-leave-to {
  opacity: 0;
}

@keyframes try-scale {
  0% {
    transform: translateX(-63%) scale(0.95);
  }
  50% {
    transform: translateX(-63%) scale(1.05);
  }
  100% {
    transform: translateX(-63%) scale(0.95);
  }
}
</style>
