<template>
  <div id="zaigo" v-inView="{callback:()=>visible1=true}">  
    <transition name="opacity">
      <div v-if="visible1" v-inView="{callback:()=>visible2=true}" class="title">
        BERA&FWENS
      </div>
    </transition>
    <transition name="opacity">
      <div v-if="visible2" v-inView="{callback:()=>visible3=true}" class="des">

        Guided by Smokey, the Narra Team and ZAI found a vibrant home in the Berachain Universe. Together with Chibi BERA NFTs, ZAI evolves into FWENs—companions beyond BERA—gearing up for TENNIAM, a reality-shifting event. 🙌 Join the journey and explore BERA & FWENS!
      </div>
    </transition>
    <transition name="opacity">
      <div v-if="visible3" v-inView="{callback:()=>visible=true}" class="subtitle">
        Just be warned: if you poke the bear, you get the claws.
      </div>
    </transition>
    <!--    <transition name="opacity">-->
    <!--      <div v-if="visible" class="bg"></div>-->
    <!--    </transition>-->
    
    <transition name="opacity">
      <div v-if="visible" class="page-inner">
        <div class="camouflage"></div>
        <!-- <img class="shapes" :src="cardList.find(i=>i.id === activeId)?.shapes" alt=""> -->
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
            <img v-show="i.id === activeId" class="figure" :class="figure" :src="i.figure" alt="">
          </transition>
        </div>
        <transition name="left-in">
          <div v-if="visible" class="card" >
            <!-- <img :src="cardList.find(i=>i.id === activeId)?.cardDefault" alt=""> -->
            <div class="card-face"
                 :class="(isCardActive?'back':'front')+' '+('card-face-'+cardList.find(i=>i.id === activeId)?.id)">
              <img :src="cardList.find(i=>i.id === activeId)?.cardDefault" alt="">
            </div>
            <!-- <div class="card-face"
                 :class="(isCardActive?'front':'back')+' '+('card-face-'+cardList.find(i=>i.id === activeId)?.id)">
              <img :src="cardList.find(i=>i.id === activeId)?.cardActive" alt="">
            </div> -->
          </div>
        </transition>
        <swiper-card class="swiper-card" v-model:activeId="activeId"/>
      </div>
    </transition>
  </div>
</template>

<script setup>
import mixin from '@/mixin/bera-fwens.js'
import {ref} from "vue";
import {useAppState} from "@/store/modules/app.js";
import SwiperCard from "@/views/Index/device/pc/components/MainPage/components/swiperCardV2bf.vue";

function formatter(number) {
  const numbers = number.toString().split('').reverse()
  const segs = []

  while (numbers.length) segs.push(numbers.splice(0, 3).join(''))

  return segs.join(',').split('').reverse().join('')
}

const {cardList, visible, visible1, visible2, visible3} = mixin()
const activeId = ref(6)
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
    width: 80%;

    top: 0;
    left: 0;
    z-index: 1;
  }

  .text {
    position: absolute;
    top: 40%;
    left: 40%;
    transform: translate(-57%, -67%);
    width: 299px;
    font-size: 28px;
    line-height: 36px;
    font-family: "Prototype";
    // color: #EDE4CC;
    color: #3d474f;
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
  transform: translateX(-50%) rotateZ(0deg) scale(1.2);
  max-height: 654px;
  top: 15%;
  left: 50%;
}

.figure-bg-1 {
  // width: 653px;
  // height: 600px;
  // top: -28px;
  // left: 50%;
  

}

.figure-bg-1-enter-from,
.figure-bg-1-leave-to {
  opacity: 0;
  transform: translateX(-50%) rotateZ(30deg);
  transition: opacity 0.3s, transform 0.3s;
}

.figure-bg-1-enter-to {
  opacity: 1;
  transition: opacity 0.3s, transform 0.3s 0.1s;
  transform: translateX(-50%) rotateZ(0deg) scale(1.2);
}


.figure-bg-2 {

}

.figure-bg-2-enter-from,
.figure-bg-2-leave-to {
  opacity: 0;
  transform: translateX(-50%) rotateZ(50deg) ;
  transition: opacity 0.3s, transform 0.3s;
}

.figure-bg-2-enter-to {
  opacity: 1;
  transition: opacity 0.3s, transform 0.3s 0.1s;
  transform: translateX(-50%) rotateZ(0deg) scale(1.2);
}

.figure-bg-3 {

}

.figure-bg-3-enter-from,
.figure-bg-3-leave-to {
  opacity: 0;
  transform: translateX(-50%) rotateZ(-46.5deg);
  transition: opacity 0.3s, transform 0.3s;
}

.figure-bg-3-enter-to {
  opacity: 1;
  transition: opacity 0.3s, transform 0.3s 0.1s;
  transform: translateX(-50%) rotateZ(0deg) scale(1.2);
}

.figure-bg-4 {

}

.figure-bg-4-enter-from,
.figure-bg-4-leave-to {
  opacity: 0;
  transform: translateX(-50%) rotateZ(56deg) scale(0.8);
  transition: opacity 0.3s, transform 0.3s;
}

.figure-bg-4-enter-to {
  opacity: 1;
  transition: opacity 0.3s, transform 0.3s 0.1s;
  transform: translateX(-50%) rotateZ(0deg) scale(1.2);
}

.figure-bg-5 {
 

}

.figure-bg-5-enter-from,
.figure-bg-5-leave-to {
  opacity: 0;
  // top: 31px;
  transform: translateX(-50%) rotateZ(41deg) scale(0.82);
  transition: opacity 0.3s, transform 0.3s;
}

.figure-bg-5-enter-to {
  opacity: 1;
  transition: opacity 0.3s, transform 0.3s 0.1s;
  transform: translateX(-50%) rotateZ(0deg) scale(1.2);
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

.figure {
  max-height: 830px;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.figure-2 {
  max-height: 830px;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.figure-3 {
  max-height: 830px;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.figure-4 {
  max-height: 830px;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.figure-5 {
  max-height: 830px;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.figure-6 {

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

    display: flex;
    justify-content: center;
    align-items: end;
    top: 150px;
    img {
      max-width: 500px;
      max-height: 474px;



    }
  }

  @keyframes appearAnimation {
      0% {
        transform: scale(0.8) rotate(-15deg) translateY(50px);
        opacity: 0;
      }
      50% {
        transform: scale(1.1) rotate(10deg) translateY(10px);
        opacity: 0.8;
      }
      100% {
        transform: scale(1) rotate(0deg) translateY(0);
        opacity: 1;
      }
    }

  .card-face-1 {
    animation: card-face-1 1.5s linear infinite;
    //&:hover {
    //  filter: drop-shadow(0px 0px 50px #cc40a0) drop-shadow(0px 0px 15px #325e86);
    //}
  }

  .card-face-2 {
    animation: card-face-2 1.5s linear infinite;

    //&:hover {
    //  filter: drop-shadow(0px 0px 50px #8e2f3a) drop-shadow(0px 0px 15px #fc844f);
    //}
  }

  .card-face-3 {
    animation: card-face-3 1.5s linear infinite;

    //&:hover {
    //  filter: drop-shadow(0px 0px 50px #d78415) drop-shadow(0px 0px 15px #fbc80b);
    //}
  }

  .card-face-4 {
    animation: card-face-4 1.5s linear infinite;

    //&:hover {
    //  filter: drop-shadow(0px 0px 50px #1c374f) drop-shadow(0px 0px 15px #325e86);
    //}
  }

  .card-face-5 {
    animation: card-face-5 1.5s linear infinite;

    //&:hover {
    //  filter: drop-shadow(0px 0px 50px #b1987c) drop-shadow(0px 0px 15px #DD812FB2);
    //}
  }

  .card-face-6 {
    animation: card-face-6 1.5s linear infinite;

    //&:hover {
    //  filter: drop-shadow(0px 0px 50px #b1987c) drop-shadow(0px 0px 15px #DD812FB2);
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
      filter: drop-shadow(0px 0px 0px #cc40a063) drop-shadow(0px 0px 0px #f89ae0);
    }
    50% {
      filter: drop-shadow(0px 0px 50px #cc40a063) drop-shadow(0px 0px 15px #f89ae0);
    }
    100% {
      filter: drop-shadow(0px 0px 0px #cc40a063) drop-shadow(0px 0px 0px #f89ae0);
    }
  }


  @keyframes card-face-2 {
    0% {
      filter: drop-shadow(0px 0px 0px #8e2f3a61) drop-shadow(0px 0px 0px #fc844f);
    }
    50% {
      filter: drop-shadow(0px 0px 50px #8e2f3a61) drop-shadow(0px 0px 15px #fc844f);
    }
    100% {
      filter: drop-shadow(0px 0px 0px #8e2f3a61) drop-shadow(0px 0px 0px #fc844f);
    }
  }


  @keyframes card-face-3 {
    0% {
      filter: drop-shadow(0px 0px 0px #d783154d) drop-shadow(0px 0px 0px #fbc80b);
    }
    50% {
      filter: drop-shadow(0px 0px 50px #d783154d) drop-shadow(0px 0px 15px #fbc80b);
    }
    100% {
      filter: drop-shadow(0px 0px 0px #d783154d) drop-shadow(0px 0px 0px #fbc80b);
    }
  }


  @keyframes card-face-4 {
    0% {
      filter: drop-shadow(0px 0px 0px #1c374f60) drop-shadow(0px 0px 0px #325e86);
    }
    50% {
      filter: drop-shadow(0px 0px 50px #1c374f60) drop-shadow(0px 0px 15px #325e86);
    }
    100% {
      filter: drop-shadow(0px 0px 0px #1c374f60) drop-shadow(0px 0px 0px #325e86);
    }
  }


  @keyframes card-face-5 {
    0% {
      filter: drop-shadow(0px 0px 0px #95897e51) drop-shadow(0px 0px 0px #b1987c);
    }
    50% {
      filter: drop-shadow(0px 0px 50px #95897e51) drop-shadow(0px 0px 15px #b1987c);
    }
    100% {
      filter: drop-shadow(0px 0px 0px #95897e51) drop-shadow(0px 0px 0px #b1987c);
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
