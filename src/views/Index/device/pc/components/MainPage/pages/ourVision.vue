<template>
  <div v-inView="{callback:()=>visible = true}" id="ourVision">
    <transition name="left-in">
      <div v-if="visible" class="block-line">
        <img :src="line" alt="">
      </div>
    </transition>
    <transition-group name="left-in">
      <h1 v-if="visible" class="title">
        Narra+IVE
      </h1>
      <h2 v-if="visible" class="subtitle">
        As a Trainer, you can expect to:
      </h2>
    </transition-group>
    <transition name="right-in">
      <div v-if="visible" class="card-block">
        <div class="card-list">
          <div class="card-item" v-for="(i,index) in cardList" :key="i.title">
            <img :class="'bg'+(index+1)+'-'+2" :src="i.bg2" alt="">
            <div class="inner">
              <h2 class="title" v-html="i.title"/>
              <h3 class="subtitle" v-html="i.subtitle"/>
              <div class="des" v-html="i.des"/>
              <img :class="'bg'+(index+1)+'-'+1" :src="i.bg1" alt="">
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import mixin from '@/mixin/ourVision.js'
import line from "@/assets/images/line.svg";

defineOptions({
  name: "ourVision",
})
const {cardList, visible} = mixin()
</script>

<style lang="scss" scoped>
#ourVision {
  height: 900px;
  max-width: var(--page-inner-width);
  margin: 0 auto 40px;
}
.block-line{
  display: flex;
  justify-content: start;
  margin-bottom: 60px;
}

.subtitle, .title {
  padding-left: 40px;
  margin-bottom: 22px !important;
}

.card-block {
  padding: 40px 0;
  width: 100%;
  overflow-y: hidden;
  overflow-x: auto;
  /* 整体滚动条样式 */
  &::-webkit-scrollbar {
    height: 6px;
    width: 6px; /* 滚动条宽度 */
  }

  /* 滚动条轨道 */
  &::-webkit-scrollbar-track {
    background: transparent; /* 轨道背景色 */
  }

  /* 滚动条滑块 */
  &::-webkit-scrollbar-thumb {
    background: #b8b8b8; /* 滑块颜色 */
    border-radius: 3px; /* 滑块圆角 */
  }
}

.card-list {
  min-width: 1165px;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;

  .card-item {
    flex-shrink: 1;
    position: relative;
    transition: 0.5s;
    filter: drop-shadow(0 0 0px rgba(255, 230, 27, 0.7));

    * {
      transition: 0.5s;
    }

    &:nth-of-type(2) {
      margin: 0 -999px;
    }

    .bg1-2 {
      opacity: 0;
      position: absolute;
      z-index: 2;
      width: 178.32px;
      height: 203.76px;
      left: -60.2px;
      bottom: 73.95px;
    }

    .bg2-2 {
      opacity: 0;
      position: absolute;
      z-index: 2;
      width: 108px;
      height: 138.48px;
      bottom: 85.13px;
      left: 322.95px;
    }

    .bg3-2 {
      opacity: 0;
      position: absolute;
      z-index: 2;
      bottom: 152px;
      width: 323.78px;
      height: 216.65px;
      left: 89px;
    }

    .inner {
      width: 541.05px;
      height: 560.61px;
      background: #E4BA21;
      clip-path: polygon(247px 0, 0 100%, 294px 100%, 100% 0);
      position: relative;

      & > * {
        position: absolute;
      }

      .title {
        padding: 0;
        font-family: "RAXON-Regular";
        font-size: 80px;
        line-height: 88px;
        top: 171px;
        left: 243.33px;
        color: #152226;
      }

      .subtitle {
        padding: 0;
        font-family: "Prototype";
        font-size: 20px;
        line-height: 26px;
        top: 263px;
        left: 140px;
        width: 263px;
        text-align: center;
        color: #152226;
      }

      .des {
        font-family: "KrossNeueGrotesk-Regular";
        opacity: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        color: #152226;
        width: 236px;
        top: 150px;
        left: 190px;
      }

      .bg1-1 {
        width: 266.7px;
        height: 199.93px;
        bottom: -4.76px;
        left: 121.71px;
        z-index: 1;
      }

      .bg2-1 {
        width: 277.8px;
        height: 208.21px;
        bottom: -13.59px;
        left: 64.99px;
      }

      .bg3-1 {
        width: 354.75px;
        height: 245.28px;
        bottom: -76.67px;
        left: 0px;
        z-index: 1;
      }

    }

    &:hover {
      filter: drop-shadow(0 0 15px rgba(255, 230, 27, 0.7));

      .bg1-2 {
        opacity: 1;
      }

      .bg2-2 {
        opacity: 1;
      }

      .bg3-2 {
        opacity: 1;
      }

      .inner {
        background: linear-gradient(180deg, rgba(255, 206, 34, 0.9) 0%, rgba(153, 124, 20, 0.9) 100%);

        .title {
          top: 8px;
          left: 300px;
        }

        .subtitle {
          top: 108px;
          left: 210px;
        }

        .des {
          opacity: 1;
        }

        .bg1-1 {
          width: 340.04px;
          height: 254.85px;
          bottom: 0px;
          left: 79px;
        }

        .bg2-1 {
          width: 320.73px;
          height: 240.38px;
          bottom: -1.77px;
          left: 41px;
        }

        .bg3-1 {
          width: 410.74px;
          height: 284px;
          bottom: -54.39px;
          left: -43px;
          z-index: 1;
        }

      }

    }

    &:first-child {
      .des {
        top: 212px;
      }
    }
  }
}
</style>
