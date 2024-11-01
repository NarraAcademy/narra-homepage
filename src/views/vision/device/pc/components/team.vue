<template>
  <main id="team" v-inView="{callback:()=>visible = true}">
    <transition name="left-in">
      <div v-if="visible" class="block-line">
        <img :src="line" alt="">
      </div>
    </transition>
    <div class="page-inner">
      <transition name="left-in">
        <div v-if="visible" class="bg"/>
      </transition>
      <transition name="left-in">
        <h1 v-if="visible" v-inView="{callback:()=>visible1 = true}" class="title">
          Meet The Team!
        </h1>
      </transition>
      <transition-group name="bottom-in">
        <div v-if="visible1" class="content">
          <li v-inView="{callback:()=>i.visible = true}" class="content-item" v-for="(i,index) in mainList"
              :key="i.title">
            <transition-group name="bottom-in">
              <h2 v-if="i.visible" class="content-item-title">{{ i.title }}</h2>
              <div v-if="i.visible" class="content-item-des" :class="(!i.list?.length)&&'last'">{{
                  i.description
                }}
              </div>
              <ul v-if="i.visible" class="content-item-list">
                <li v-for="it in i.list" :key="it.name" class="content-item-list-item">
                  <img class="content-item-list-item-img" :src="it.svg" alt="">
                  <h3 class="content-item-list-item-name">{{ it.name }}</h3>
                  <div class="content-item-list-item-des">{{ it.description }}</div>
                  <div class="hover-block" v-html="it.hoverText"></div>
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
import mixin from '@/mixin/team.js'
import line from "@/assets/images/line.svg";

const {mainList, visible, visible1} = mixin()
defineOptions({
  name: 'team'
})
</script>

<style lang="scss" scoped>

#team {
  box-sizing: border-box;
  width: 100%;
  max-width: var(--page-inner-width);
  margin: 0 auto;
  min-height: 2000px;
  position: relative;
  z-index: 1;
}

.block-line {
  display: flex;
  justify-content: start;
  margin-bottom: 32px;
}

.bg {
  width: 1440px;
  height: 1440px;
  position: absolute;
  top: -100px;
  right: -1000px;
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

.page-inner {
  display: flex;
  flex-direction: column;
  padding: 0 40px;

  .content {
    display: flex;
    flex-direction: column;

    &-item {
      display: flex;
      flex-direction: column;
      margin-bottom: 48px;

      &-title {
        color: #EDE4CC;
        font-size: 28px;
        line-height: 36px;
        font-family: "Prototype";
        margin-bottom: 24px;
      }

      &-des {
        width: calc(100% - 300px);
        color: #EDE4CC;
        font-size: 16px;
        line-height: 24px;
        text-align: justify;
        font-family: "KrossNeueGrotesk-Regular";
        margin-bottom: 32px;
      }

      .last {
        color: #fff;
      }

      &-list {
        display: flex;
        flex-wrap: wrap;

        &-item {
          position: relative;
          display: flex;
          flex-direction: column;
          margin-right: 24px;
          margin-bottom: 24px;

          &:hover {
            .hover-block {
              opacity: 1;
            }
          }

          &-img {
            width: 310px;
            height: 310px;
            margin-bottom: 8px;
          }

          &-name {
            text-indent: 36px;
            color: #FAAC07;
            font-size: 28px;
            line-height: 36px;
            font-family: 'Prototype';
            margin-bottom: 4px;
          }

          &-des {
            text-indent: 36px;
            font-size: 16px;
            line-height: 24px;
            color: #EDE4CC;
            font-family: "KrossNeueGrotesk-Regular";
          }

          .hover-block {
            opacity: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            background: url("@/assets/images/pc/ourVision/list-item-hover-bg.png") no-repeat center / 100% 100%;
            top: 0;
            left: 0;
            transition: 0.3s;
            padding: 24px;
            font-family: "KrossNeueGrotesk-Regular";
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            color: #fff;
          }
        }
      }

    }
  }

}

</style>
