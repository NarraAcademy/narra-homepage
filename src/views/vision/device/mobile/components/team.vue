<template>
  <main id="team">
    <div v-inView="{callback:()=>visible = true}" class="page-inner">
      <transition name="left-in">
        <div v-if="visible" class="block-line">
          <img :src="line" alt="">
        </div>
      </transition>
      <transition name="left-in">
        <div v-if="visible" class="bg"/>
      </transition>
      <transition name="left-in">
        <h1 v-if="visible" class="title" v-inView="{callback:()=>visible1 = true}">
          Meet The Team!
        </h1>
      </transition>
      <transition-group name="bottom-in">
        <div v-if="visible1" class="content">
          <li v-inView="{callback:()=>i.visible = true}" class="content-item" v-for="i in mainList" :key="i.title">
            <transition-group name="bottom-in">
              <h2 v-if="i.visible" v-inView="{callback:()=>i.visible1 = true}" class="content-item-title">{{
                  i.title
                }}</h2>
              <div v-if="i.visible1" class="content-item-des" :class="(!i.list?.length)&&'last'"
                   v-html="i.description "></div>
              <ul v-if="i.visible1" class="content-item-list">
                <li @click="()=>it.open =!it.open" v-for="it in i.list" :key="it.name" class="content-item-list-item">
                  <img class="content-item-list-item-img" :src="it.svg" alt="">
                  <h3 class="content-item-list-item-name">{{ it.name }}</h3>
                  <div class="content-item-list-item-des">{{ it.description }}</div>
                  <div class="hover-block " :class="it.open?'hover-block-open':''">
                    <div class="text" v-html="it.hoverText"></div>
                  </div>
                  <div class="icon" :class="it.open?'icon-open':''"></div>
                </li>
              </ul>
            </transition-group>
          </li>
        </div>
      </transition-group>
    </div>
  </main>
</template>

<script setup>
import line from "@/assets/images/mobile-line.svg";
import mixin from '@/mixin/team.js'

const {mainList, visible,visible1} = mixin()
defineOptions({
  name: 'team'
})
</script>

<style lang="scss" scoped>
#team {
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto 0.9rem;
  min-height: 18rem;
  position: relative;
  z-index: 1;
}

.block-line {
  display: flex;
  justify-content: start;
}

.bg {
  width: 14.4rem;
  height: 14.4rem;
  position: absolute;
  top: -1rem;
  right: -10rem;
  background: url("https://oss.narralayer.ai/images/bg-circle.png") no-repeat center / 70%;
  z-index: 0;
  animation: rotating 30s infinite linear;
}

@keyframes rotating {
  from {
    transform: scale(1.3) rotate(0deg);
  }
  to {
    transform: scale(1.3) rotate(360deg);
  }
}

.title, .subtitle {
  margin: 0 !important;
  padding-left: 0.24rem;
}

.page-inner {
  display: flex;
  flex-direction: column;
  gap: 0.48rem;

  .content {
    padding: 0 0.24rem;
    display: flex;
    flex-direction: column;
    gap: 0.48rem;

    &-item {
      display: flex;
      flex-direction: column;

      &-title {
        color: #EDE4CC;
        font-size: 0.24rem;
        line-height: 0.32rem;
        font-family: "Prototype";
        margin-bottom: 0.24rem;
      }

      &-des {
        width: 100%;
        color: #EDE4CC;
        font-size: 0.16rem;
        line-height: 0.24rem;
        font-family: "KrossNeueGrotesk-Regular";
        margin-bottom: 0.32rem;
      }

      //.last{
      //  color: #fff;
      //}

      &-list {
        /* 整体滚动条样式 */
        &::-webkit-scrollbar {
          display: none;
        }

        width: 100vw;
        overflow-x: auto;
        overflow-y: hidden;
        display: flex;
        gap: 0.2rem;
        margin-left: -0.24rem;
        padding-left: 0.24rem;

        &-item {
          position: relative;
          display: flex;
          flex-direction: column;

          &-img {
            width: 2.45rem;
            height: 2.45rem;
            margin-bottom: 0.08rem;
          }

          &-name {
            text-indent: 0.36rem;
            color: #FAAC07;
            font-size: 0.24rem;
            line-height: 0.32rem;
            font-family: 'Prototype';
            margin-bottom: 0.04rem;
          }

          &-des {
            text-indent: 0.36rem;
            font-size: 0.14rem;
            line-height: 0.24rem;
            color: #EDE4CC;
            font-family: "KrossNeueGrotesk-Regular";
          }

          .hover-block {
            padding: 0.4rem 0.16rem 0.3258rem;
            opacity: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            background: url("@/assets/images/mobile/ourVision/list-item-hover-bg.png") no-repeat center / 100% 100%;
            top: 0;
            left: 0;
            transition: 0.3s;

            .text {
              width: 100%;
              height: 100%;
              overflow: hidden;
              font-family: "KrossNeueGrotesk-Regular";
              font-size: 0.16rem;
              font-weight: 400;
              line-height: 0.24rem;
              color: #fff;
              /* 整体滚动条样式 */
              &::-webkit-scrollbar {
                width: 0.05rem; /* 滚动条宽度 */
              }

              /* 滚动条轨道 */
              &::-webkit-scrollbar-track {
                background: transparent; /* 轨道背景色 */
              }

              /* 滚动条滑块 */
              &::-webkit-scrollbar-thumb {
                background: #b8b8b8; /* 滑块颜色 */
                border-radius: 0.025rem; /* 滑块圆角 */
              }
            }
          }

          .hover-block-open {
            opacity: 1;

            .text {
              overflow-y: auto;
            }
          }

          .icon {
            z-index: 5;
            width: 0.24rem;
            height: 0.24rem;
            position: absolute;
            top: 0.12rem;
            left: 0.16rem;
            transition: 0.3s;
            background: url("@/assets/images/plus-icons.png") no-repeat center / 100% 100%;
            transform: rotateZ(0deg);
          }

          .icon-open {
            background: url("@/assets/images/close-icons.png") no-repeat center / 100% 100%;
            transform: rotateZ(90deg);
          }
        }
      }

    }
  }
}

</style>
