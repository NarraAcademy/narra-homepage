<template>
  <div id="zaigo" v-inView="{callback:()=>visible=true}">
    <transition name="opacity">
      <div v-if="visible" v-inView="{callback:()=>visible1=true}" class="title">
        A new hero has <br> arrived!
      </div>
    </transition>
    <transition name="opacity">
      <div v-if="visible1" v-inView="{callback:()=>visible2=true}" class="des">
        The big bad bear from the Great White North, BERA’s dry, skewering wit tends to whittle anyone who isn’t already
        pissing their pants from his towering stature (dude’s 2 friggin meters tall!). But dig a little deeper and
        you’ll find warm and fuzzy. Just be warned: if you poke the bear, you get the claws.
      </div>
    </transition>
    <transition name="opacity">
      <div v-if="visible2" v-inView="{callback:()=>visible3=true}" class="subtitle">
        Begin your Narra journey!
      </div>
    </transition>
    <div class="count">
      <transition-group name="scale-in">
        <div v-if="visible1" v-inView="{callback:()=>visible2 = true}" class="count-item">
          <div class="count-item-name">
            Narra Training Day
          </div>
          <div class="count-item-value">
            ******
            <!--            <digital-flop :number="120" :formatter="formatter"/>-->
          </div>
        </div>
        <div v-if="visible2" v-inView="{callback:()=>visible3 = true}" class="count-item">
          <div class="count-item-name">
            Trainers Enrolled
          </div>
          <div class="count-item-value">
            ******
            <!--            <digital-flop :number="230234100" :formatter="formatter"/>-->
          </div>
        </div>
        <div v-if="visible3" v-inView="{callback:()=>visible4 = true}" class="count-item">
          <div class="count-item-name">
            ZAI In Training
          </div>
          <div class="count-item-value">
            ******
            <!--            <digital-flop :number="231456902" :formatter="formatter"/>-->
          </div>
        </div>
      </transition-group>
    </div>

    <div class="page-inner">
      <transition name="bottom-in">
        <img v-if="visible4" class="shapes"
             :src="cardList.find(i=>i.id === activeId)?.shapes" alt="">
        <!--        <div v-if="visible2" v-inView="{callback:()=>visible3=true}" class="aboutMe aboutMe-right" @click="activeId = addActive(activeId+1)"-->
        <!--             :class="'aboutMe-'+activeId"></div>-->
        <!--        <div v-if="visible2" v-inView="{callback:()=>visible3=true}" class="aboutMe aboutMe-left" @click="activeId = addActive(activeId-1)"-->
        <!--             :class="'aboutMe-'+activeId"></div>-->
      </transition>
      <transition name="bottom-in">
        <div v-if="visible4"  v-inView="{callback:()=>visible5=true}"  class="center">
          <div class="speechBubble">
            <img class="speechBubbleBg" :src="cardList.find(i=>i.id === activeId).speechBubble" alt="">
            <transition name="aopacity" v-for="i in cardList" :key="i.id">
              <h1 v-show="i.id === activeId" class="text">
                {{ i.des }}
              </h1>
            </transition>
          </div>
          <transition :name="'figure-bg-'+i.id" v-for="i in cardList" :key="i.id">
            <img v-show="i.id === activeId" class="figure-bg" :class="'figure-bg-'+i.id" :src="i.figureBg"
                 alt="">
          </transition>
          <transition name="aopacity" v-for="i in cardList" :key="i.id">
            <img v-show="i.id === activeId" class="figure" :class="'figure-'+i.id" :src="i.figure" alt="">
          </transition>
        </div>
      </transition>
    </div>
    <transition-group name="bottom-in">
      <!--      <button  v-if="visible4"  v-inView="{callback:()=>visible5=true}" class="try" :class="'try-'+activeId" @click="appState.toQuiz()">Vibe check !</button>-->
      <swiper-card v-if="visible5" class="swiper-card" v-model:activeId="activeId"/>
    </transition-group>
    <div v-show="cardOpen" class="card-modal" @click="cardOpen = false">
      <div class="card" :class="('card-'+cardList.find(i=>i.id === activeId)?.id)">
        <div class="card-face" :class="isCardActive?'back':'front'">
          <img @click="cardOpen = !cardOpen" class="icon" src="@/assets/images/close-icons.png" alt="">
          <img v-for="i in cardList" @click.stop="isCardActive = !isCardActive" class="img" v-show="i.id === activeId"
               :src="i.cardDefault" alt="" :key="i.id">
        </div>
        <div class="card-face" :class="isCardActive?'front':'back'">
          <img @click="cardOpen = !cardOpen" class="icon" src="@/assets/images/close-icons.png" alt="">
          <img v-for="i in cardList" @click.stop="isCardActive = !isCardActive" class="img" v-show="i.id === activeId"
               :src="i.cardActive" alt="" :key="i.id">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import mixin from '@/mixin/zaigo.js'
import {onMounted, ref, watch} from "vue";
import {useAppState} from "@/store/modules/app.js";
import SwiperCard from "@/views/Index/device/mobile/components/MainPage/components/swiperCardV2.vue";

const cardOpen = ref(false)
const cardOpenHandle = () => {
  cardOpen.value = !cardOpen.value
  isCardActive.value = false
}


const {cardList, visible, visible1, visible2, visible3, visible4, visible5} = mixin()
const activeId = ref(6)
const hoverId = ref('')
const isCardActive = ref(false)
const cardListClickHandle = (i) => {
  activeId.value = i.id
  isCardActive.value = false
}
const addActive = (num) => {
  if (num < 1) {
    return Math.abs(5 + num)
  } else if (num > 5) {
    return Math.abs(5 - num)
  } else {
    return num
  }
}
const appState = useAppState()
onMounted(() => {
  console.log(visible.value)
})
watch(activeId, () => {
  console.log(activeId.value)
})
</script>

<style lang="scss" scoped>
#zaigo {
  width: 100%;
  position: relative;
  margin: 0 0 0.6rem;
  min-height: 8rem;
  //overflow: hidden;
}

.title {
  text-align: center;
  color: var(--color-7) !important;
}

.subtitle {
  text-align: center;
  margin-bottom: 0.6rem;
  color: var(--color-1) !important;
}

.des {
  margin: 0.3rem auto;
  text-align: center;
  width: 3.45rem;
  color: var(--color-1);
  font-size: 0.16rem;
  line-height: 0.24rem;
  font-family: "KrossNeueGrotesk-Regular";
}


.block-line {
  display: flex;
  justify-content: start;
}

.page-inner {
  min-height: 6rem;
  position: relative;
  width: 100%;
  margin: 0 auto;
  container-type: size;
}

.count {
  min-height: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 0rem;

  &-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &-name {
      font-size: 0.2rem;
      font-family: 'Prototype';
      color: #fff;
      margin-bottom: 0.08rem;
    }

    &-value {
      font-size: 0.2rem;
      font-family: "Prototype";
      color: var(--color-5);
      margin-bottom: 0.17rem;
      text-shadow: 0 0 2px #0e171a;
    }
  }
}


.shapes {
  position: absolute;
  width: 4.6488rem;
  height: 0.36rem;
  bottom:-0.4rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.center {
  position: absolute;
  left: 0;
  height: 100%;
  width: 100%;
  bottom: 0;
  z-index: 2;
}

.speechBubble {
  position: absolute;
  width: 4.0257rem;
  height: 3.799rem;
  top: 0;
  left: 0.65rem;
  transform-origin: left bottom;
  z-index: 3;
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
    transform: translate(-57%, -70%);
    width: 2.2rem;
    font-size: 0.2rem;
    line-height: 0.26rem;
    font-family: "Prototype";
    color: #EDE4CC;
    z-index: 2;
  }


}


.figure-bg {
  position: absolute;
}

.figure-bg-1 {
  width: 3.17rem;
  height: 2.82rem;
  bottom: 0.5rem;
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
  width: 10rem;
  height: 9rem;
  bottom: -3rem;
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
  width: 4.1rem;
  height: 4rem;
  bottom: -0.42rem;
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
  width: 8.32rem;
  height: 4.44rem;
  bottom: -0.5rem;
  left: 50%;
  transform: translateX(-50%) rotateZ(0deg) scale(1);
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
  transform: translateX(-50%) rotateZ(0deg) scale(1);
}

.figure-bg-5 {
  width: 8.32rem;
  height: 4.44rem;
  bottom: -0.43rem;
  left: 50%;
  transform: translateX(-50%) rotateZ(0deg) scale(1);
}

.figure-bg-5-enter-from,
.figure-bg-5-leave-to {
  opacity: 0;
  transform: translateX(-50%) rotateZ(41deg) scale(0.82);
  transition: opacity 0.3s, transform 0.3s;
}

.figure-bg-5-enter-to {
  opacity: 1;
  transition: opacity 0.3s, transform 0.3s 0.1s;
  transform: translateX(-50%) rotateZ(0deg) scale(1);
}

.figure-bg-6 {
  width: 5.2rem;
  height: 2.93rem;
  bottom: 0.43rem;
  left: 50%;
  transform: translateX(-50%) ;
}

.figure-bg-6-enter-from,
.figure-bg-6-leave-to {
  opacity: 0;
  transition: opacity 0.3s
}

.figure-bg-6-enter-to {
  opacity: 1;
  transition: opacity 0.3s
}

.figure {
  position: absolute;
  z-index: 3;
  bottom: -0.36rem;
}

.figure-1 {
  width: 3.6219rem;
  height: 4.5965rem;
  left: 50%;
  transform: translateX(-50%);
}

.figure-2 {
  z-index: 5;
  width: 3.62rem;
  height: 4.57rem;
  left: 50%;
  transform: translateX(-50%);
}

.figure-3 {
  width: 3.2rem;
  height: 4.07rem;
  bottom: 0;
  left: 50%;
  transform: translateX(-38%);
}

.figure-4 {
  width: 3.2563rem;
  height: 4.1369rem;
  left: 50%;
  transform: translateX(-50%);
}

.figure-5 {
  width: 3.4723rem;
  height: 4.4082rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
}
.figure-6 {
  width: 5.94rem;
  height: 3.9099rem;
  left: 50%;
  bottom: -0.1rem;
  transform: translateX(-50%);
  z-index: 5;
}

//.card {
//  max-width: 236px;
//  max-height: 474px;
//  width: 18cqw;
//  height: 36cqw;
//  bottom: 50px;
//  left: 10cqw;
//  position: absolute;
//  z-index: 98;
//  perspective: 1000px; /* 视距，用于3D效果 */
//  cursor: pointer;
//
//  .card-face {
//    width: 100%;
//    height: 100%;
//    position: absolute;
//    backface-visibility: hidden; /* 隐藏背面 */
//    transition: 0.6s ease; /* 添加过渡效果 */
//    img {
//      max-width: 236px;
//      max-height: 474px;
//      width: 18cqw;
//      height: 36cqw;
//    }
//  }
//
//  .card-face-1 {
//    animation: card-face-1 1.5s linear infinite;
//    //&:hover {
//    //  filter: drop-shadow(0px 0px 50px #7F892966) drop-shadow(0px 0px 15px #7F8929B2);
//    //}
//  }
//
//  .card-face-2 {
//    animation: card-face-2 1.5s linear infinite;
//
//    //&:hover {
//    //  filter: drop-shadow(0px 0px 50px #AB4FEA66) drop-shadow(0px 0px 15px #AB4FEAB2);
//    //}
//  }
//
//  .card-face-3 {
//    animation: card-face-3 1.5s linear infinite;
//
//    //&:hover {
//    //  filter: drop-shadow(0px 0px 50px #F9490F66) drop-shadow(0px 0px 15px #F9490FB2);
//    //}
//  }
//
//  .card-face-4 {
//    animation: card-face-4 1.5s linear infinite;
//
//    //&:hover {
//    //  filter: drop-shadow(0px 0px 50px #47B6F466) drop-shadow(0px 0px 15px #47B6F4B2);
//    //}
//  }
//
//  .card-face-5 {
//    animation: card-face-5 1.5s linear infinite;
//
//    //&:hover {
//    //  filter: drop-shadow(0px 0px 50px #DD812F66) drop-shadow(0px 0px 15px #DD812FB2);
//    //}
//  }
//
//  .front {
//    transform: rotateY(0deg); /* 初始正面 */
//  }
//
//  .back {
//    transform: rotateY(180deg); /* 反面180度旋转，初始时隐藏 */
//  }
//
//  @keyframes card-face-1 {
//    0% {
//      filter: drop-shadow(0px 0px 0px #7F892966) drop-shadow(0px 0px 0px #7F8929B2);
//    }
//    50% {
//      filter: drop-shadow(0px 0px 50px #7F892966) drop-shadow(0px 0px 15px #7F8929B2);
//    }
//    100% {
//      filter: drop-shadow(0px 0px 0px #7F892966) drop-shadow(0px 0px 0px #7F8929B2);
//    }
//  }
//
//
//  @keyframes card-face-2 {
//    0% {
//      filter: drop-shadow(0px 0px 0px #AB4FEA66) drop-shadow(0px 0px 0px #AB4FEAB2);
//    }
//    50% {
//      filter: drop-shadow(0px 0px 50px #AB4FEA66) drop-shadow(0px 0px 15px #AB4FEAB2);
//    }
//    100% {
//      filter: drop-shadow(0px 0px 0px #AB4FEA66) drop-shadow(0px 0px 0px #AB4FEAB2);
//    }
//  }
//
//
//  @keyframes card-face-3 {
//    0% {
//      filter: drop-shadow(0px 0px 0px #F9490F66) drop-shadow(0px 0px 0px #F9490FB2);
//    }
//    50% {
//      filter: drop-shadow(0px 0px 50px #F9490F66) drop-shadow(0px 0px 15px #F9490FB2);
//    }
//    100% {
//      filter: drop-shadow(0px 0px 0px #F9490F66) drop-shadow(0px 0px 0px #F9490FB2);
//    }
//  }
//
//
//  @keyframes card-face-4 {
//    0% {
//      filter: drop-shadow(0px 0px 0px #47B6F466) drop-shadow(0px 0px 0px #7F8929B2);
//    }
//    50% {
//      filter: drop-shadow(0px 0px 50px #47B6F466) drop-shadow(0px 0px 15px #47B6F4B2);
//    }
//    100% {
//      filter: drop-shadow(0px 0px 0px #47B6F466) drop-shadow(0px 0px 0px #47B6F4B2);
//    }
//  }
//
//
//  @keyframes card-face-5 {
//    0% {
//      filter: drop-shadow(0px 0px 0px #DD812F66) drop-shadow(0px 0px 0px #DD812F66);
//    }
//    50% {
//      filter: drop-shadow(0px 0px 50px #DD812F66) drop-shadow(0px 0px 15px #DD812F66);
//    }
//    100% {
//      filter: drop-shadow(0px 0px 0px #DD812F66) drop-shadow(0px 0px 0px #DD812F66);
//    }
//  }
//
//
//  //
//  //&:hover {
//  //  .front{
//  //    transform: rotateY(-180deg); /* 鼠标悬停时正面翻转到背面 */
//  //  }
//  //}
//  //&:hover {
//  //  .back{
//  //    transform: rotateY(0deg); /* 鼠标悬停时正面翻转到背面 */
//  //  }
//  //}
//}


.aopacity-enter-active, .aopacity-leave-active {
  transition: opacity 0.3s ease;
}

.aopacity-enter-from,
.aopacity-leave-to {
  opacity: 0;
}

@keyframes try-scale {
  0% {
    transform: scale(0.95);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(0.95);
  }
}

.try {
  cursor: pointer;
  width: 3.1rem;
  height: 0.72rem;
  text-align: center;
  line-height: 0.72rem;
  color: var(--color-4);
  font-size: 0.16rem;
  margin: 0.6rem auto 0.2rem;
  font-family: "KrossNeueGrotesk-Heavy";
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  animation: try-scale 2s linear infinite;;
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

.swiper-card {
  position: relative;
  z-index: 3;
  margin: 0.5rem auto 0;
}

.aboutMe {
  width: 0.54rem;
  height: 0.54rem;
  position: absolute;
  bottom: 20%;
  right: 0.3rem;
  transform: translateY(-50%);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  z-index: 9;
}

.aboutMe-left {
  transform: translateY(-50%) rotateY(180deg);
  left: 0.3rem;
}

.aboutMe-1 {
  background-image: url("@/assets/images/zaigo-arrow-1.svg");
}

.aboutMe-2 {
  background-image: url("@/assets/images/zaigo-arrow-2.svg");
}

.aboutMe-3 {
  background-image: url("@/assets/images/zaigo-arrow-3.svg");
}

.aboutMe-4 {
  background-image: url("@/assets/images/zaigo-arrow-4.svg");
}

.aboutMe-5 {
  background-image: url("@/assets/images/zaigo-arrow-5.svg");
}

.card-modal {
  position: fixed;
  width: 100%;
  height: var(--vh);
  top: 0;
  left: 0;
  z-index: 999;
  background: rgba(21, 34, 38, 0.8);

  .card {
    width: 3.4465rem;
    height: 8rem;
    max-height: var(--vh);
    overflow-y: auto;
    overflow-x: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    perspective: 10rem; /* 视距，用于3D效果 */
    cursor: pointer;

    .card-face {
      position: absolute;
      top: 0;
      height: max-content;
      padding: 0.5rem 0;
      backface-visibility: hidden; /* 隐藏背面 */
      transition: transform 0.6s ease; /* 添加过渡效果 */
      .icon {
        width: 0.24rem;
        height: 0.24rem;
        position: absolute;
        top: 0.7rem;
      }

      .img {
        width: 3.4465rem;
        height: 6.9349rem;
      }

      &:first-child {
        .icon {
          right: 0.2rem;
        }
      }

      &:last-child {
        .icon {
          left: 0.2rem;
        }
      }
    }

    .front {
      transform: rotateY(0deg); /* 初始正面 */
    }

    .back {
      transform: rotateY(180deg); /* 反面180度旋转，初始时隐藏 */
    }
  }

  .card-1 {
    animation: card-face-1 1.5s linear infinite;
    //
    //&:not(.hasTouch):hover {
    //  filter: drop-shadow(0rem 0rem 0.5rem #7F892966) drop-shadow(0rem 0rem 0.15rem #7F8929B2);
    //  -webkit-filter: drop-shadow(0rem 0rem 0.5rem #7F892966) drop-shadow(0r'em 0rem 0.15rem #7F8929B2);
    //}
    //
    //&:active {
    //  filter: drop-shadow(0rem 0rem 0.5rem #7F892966) drop-shadow(0rem 0rem 0.15rem #7F8929B2);
    //  //transform: scale(1.01);
    //}
  }

  .card-2 {
    animation: card-face-2 1.5s linear infinite;

    //&:not(.hasTouch):hover {
    //  filter: drop-shadow(0rem 0rem 0.5rem #AB4FEA66) drop-shadow(0rem 0rem 0.15rem #AB4FEAB2);
    //}
    //
    //&:active {
    //  filter: drop-shadow(0rem 0rem 0.5rem #AB4FEA66) drop-shadow(0rem 0rem 0.15rem #AB4FEAB2);
    //  //transform: scale(1.01);
    //}
  }

  .card-3 {
    animation: card-face-3 1.5s linear infinite;

    //&:not(.hasTouch):hover {
    //  filter: drop-shadow(0rem 0rem 0.5rem #F9490F66) drop-shadow(0rem 0rem 0.15rem #F9490FB2);
    //}
    //
    //&:active {
    //  filter: drop-shadow(0rem 0rem 0.5rem #F9490F66) drop-shadow(0rem 0rem 0.15rem #F9490FB2);
    //  //transform: scale(1.01);
    //}
  }

  .card-4 {
    animation: card-face-4 1.5s linear infinite;

    //&:not(.hasTouch):hover {
    //  filter: drop-shadow(0rem 0rem 0.5rem #47B6F466) drop-shadow(0rem 0rem 0.15rem #47B6F4B2);
    //}
    //
    //&:active {
    //  filter: drop-shadow(0rem 0rem 0.5rem #47B6F466) drop-shadow(0rem 0rem 0.15rem #47B6F4B2);
    //  //transform: scale(1.01);
    //}
  }

  .card-5 {
    animation: card-face-5 1.5s linear infinite;

    //&:not(.hasTouch):hover {
    //  filter: drop-shadow(0rem 0rem 0.5rem #DD812F66) drop-shadow(0rem 0rem 0.15rem #DD812FB2);
    //}
    //
    //&:active {
    //  filter: drop-shadow(0rem 0rem 0.5rem #DD812F66) drop-shadow(0rem 0rem 0.15rem #DD812FB2);
    //  //transform: scale(1.01);
    //}
  }

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

</style>
