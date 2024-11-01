<template>
  <div v-inView="{callback:()=>visible = true}" id="ourVision">
    <transition name="left-in">
      <div v-if="visible" v-inView="{callback:()=>visible1 = true}" class="block-line">
        <img :src="line" alt="">
      </div>
    </transition>
    <transition name="bottom-in">
      <h1 v-if="visible1" v-inView="{callback:()=>visible2 = true}" class="title">
        NARRA+IVE
      </h1>
    </transition>
    <transition name="bottom-in">
      <h2 v-if="visible2" v-inView="{callback:()=>visible3 = true}" class="subtitle">
        As a Trainer, you can expect to:
      </h2>
    </transition>
    <transition name="bottom-in">
      <div v-if="visible3" class="card-list">
        <div class="card-list-view">
          <div class="card-item" @click="()=>i.open = !i.open" v-for="(i,index) in cardList" :key="i.title"
               :class="i.open?'open-item':''">
            <div class="inner">
              <img class="icon" src="@/assets/images/plus-icons.png" alt="">
              <div class="content">
                <h2 class="content-title" v-html="i.title"/>
                <h3 class="content-subtitle" v-html="i.subtitle"/>
                <div class="content-des" v-html="i.des"/>
              </div>
              <img :class="'bg'+(index+1)+'-'+1" :src="i.bg1" alt="">
              <img :class="'bg'+(index+1)+'-'+2" :src="i.bg2" alt="">
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import mixin from '@/mixin/ourVision.js'
import line from "@/assets/images/mobile-line.svg";

defineOptions({
  name: "ourVision",
})
const {cardList, visible,visible1,visible2,visible3} = mixin()
</script>

<style lang="scss" scoped>
#ourVision {
  min-height: 6rem;
  width: 100%;
  margin: 0 auto 1rem;
  position: relative;
  z-index: 1;
}

.block-line {
  display: flex;
  justify-content: start;
  margin-bottom: 0.3rem;
  img{
    height: 0.16rem;
  }
}

.subtitle, .title {
  padding-left: 0.24rem;
  margin-bottom: 0.24rem;
}

.card-list {
  width: 100%;
  overflow: auto;
  //margin-left: -0.24rem;
  margin-top: -0.3rem;
  /* 整体滚动条样式 */
  &::-webkit-scrollbar {
    display: none;
  }

  .card-list-view {
    display: flex;
    gap: 0.24rem;
    width: max-content;
    padding: 0.24rem;

    .card-item {
      width: 2rem;
      height: 5rem;
      position: relative;
      transition: 0.5s;
      animation: boxShadow 2s infinite linear;
      //box-shadow:0 0 0px rgba(255, 230, 27, 0.7) ;
      //filter: drop-shadow(0 0 0px rgba(255, 230, 27, 0.7));

      * {
        transition: 0.5s;
      }

      .inner {
        width: 2rem;
        height: 5rem;
        background-image: linear-gradient(to bottom, #E4BA21, #E4BA21);
        position: relative;
        overflow: hidden;

        & > * {
          position: absolute;
        }

        .content {
          width: 1.68rem;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.04rem;

          .content-title {
            font-family: "RAXON-Regular";
            font-size: 0.32rem;
            line-height: 0.36rem;
            color: #152226;
            text-align: center;
          }

          .content-subtitle {
            font-family: "Prototype";
            font-size: 0.16rem;
            line-height: 0.2rem;
            color: #152226;
            text-align: center;

          }

          .content-des {
            position: absolute;
            top: 50%;
            left: 50%;
            font-family: "KrossNeueGrotesk-Regular";
            width: 100%;
            transform: translate(-50%, -50%);
            opacity: 0;
            font-size: 0.12rem;
            line-height: 0.18rem;
            text-align: center;
            color: #152226;
          }
        }

        .bg1-1 {
          z-index: 0;
          width: 1.6006rem;
          height: 1.1996rem;
          bottom: -0.0287rem;
          left: 0.5766rem;
        }

        .bg1-2 {
          z-index: 1;
          opacity: 0;
          width: 1.0699rem;
          height: 1.2226rem;
          left: -0.29rem;
          bottom: 0.4112rem;
        }

        .bg2-1 {
          z-index: 0;
          width: 1.6006rem;
          height: 1.1996rem;
          bottom: -0.036rem;
          left: 0.5955rem;
        }

        .bg2-2 {
          z-index: 1;
          opacity: 0;
          position: absolute;
          width: 0.7086rem;
          height: 0.9085rem;
          bottom: 0.8715rem;
          left: 1.4499rem;
        }

        .bg3-1 {
          z-index: 0;
          width: 2.1285rem;
          height: 1.4717rem;
          bottom: -0.2917rem;
          left: 0.14rem;
        }

        .bg3-2 {
          z-index: 1;
          opacity: 0;
          position: absolute;
          width: 2.1447rem;
          height: 1.435rem;
          bottom: 1.0605rem;
          left: 0.3197rem;
        }

        .icon {
          width: 0.24rem;
          height: 0.24rem;
          top: 0.16rem;
          right: 0.16rem;
          z-index: 99;
          transform: rotateZ(0deg);
        }

      }

    }

    .open-item {
      //box-shadow: 0rem 0rem 0.15rem #FFE61BB2;
      //filter: drop-shadow(0rem 0rem 0.15rem #FFE61BB2);

      .inner {
        background-image: linear-gradient(to bottom, #FFCE22, #997C14);

        .content {
          top: 0.48rem;
          left: 50%;
          transform: translateX(-50%);
          gap: 0.04rem;

          .content-des {
            top: calc(100% + 0.16rem);
            left: 50%;
            transform: translateX(-50%);
            opacity: 1;
          }
        }

        .bg1-1 {
          width: 2.0402rem;
          height: 1.5291rem;
          bottom: -0.0176rem;
          left: 0.4rem;
        }

        .bg2-1 {
          width: 2.1042rem;
          height: 1.5771rem;
          bottom: -0.0267rem;
          left: 0;
        }

        .bg3-1 {
          width: 3.086rem;
          height: 2.13rem;
          bottom: -0.45rem;
          left: -0.74rem;
          z-index: 1;
          transform: scale(0.86);
        }

        .bg1-2, .bg2-2, .bg3-2 {
          opacity: 1;
        }

        .icon {
          transform: rotateZ(135deg);
        }

      }

    }
  }
}
@keyframes boxShadow {
  0%{
    box-shadow: 0rem 0rem 0rem #FFE61BB2;
  }
  50%{
    box-shadow: 0rem 0rem 0.15rem #FFE61BB2;

  }
  100%{
    box-shadow: 0rem 0rem 0rem #FFE61BB2;
  }
}
</style>
