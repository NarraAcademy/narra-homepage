<template xmlns:img="http://www.w3.org/1999/html">
  <div v-inView="{callback:()=>visible = true}" id="news">
    <transition name="left-in">
      <div v-if="visible" class="block-line">
        <img :src="line" alt="">
      </div>
    </transition>
    <transition name="left-in">
      <div v-if="visible" class="bg"/>
    </transition>
    <transition name="left-in">
      <h1 v-if="visible" class="title">
        News
      </h1>
    </transition>
    <div class="page-inner">
      <transition name="left-in">
        <img v-if="visible&&width>1300" src="https://oss.narralayer.ai/images/news-pic.png" class="right"/>
      </transition>
      <transition name="right-in">
        <div v-if="visible" class="left">
<!--          <news-carousel class="swiper-card"/>-->
          <div class="classify">
            <div @click="()=>classId = i.id" class="classify-item" v-for="i in classList" :key="i.id"
                 :class="{active:i.id === classId}">
              {{ i.name }}
            </div>
          </div>
          <div class="news-list">
            <div class="news-list-item" :class="{'touch':isTouchDevice}" v-for="i in list"
                 :key="i.id">
              <div class="type">{{ i.type || 'news' }}</div>
              <a :href="i.Content" target="_blank" class="content">{{ i.Subhead }}</a>
              <div class="date">{{ i.Dotice_date }}</div>
            </div>
          </div>
          <div v-if="list.length" class="Pagination">
            <div>
              Showing {{
                Math.round((paginator.page * paginator.pageSize) - paginator.pageSize + 1)
              }}-{{
                Math.round(paginator.page * paginator.pageSize) > 7 ? paginator.total : Math.round(paginator.page * paginator.pageSize)
              }}
              out of {{ paginator.total }}
            </div>
            <Pagination :page-num="paginator.page" :page-size="paginator.pageSize" :total="paginator.total"
                        style="margin: 0rem auto" @change="PaginationChange"/>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import mixin from '@/mixin/news.js'
import {isTouchDevice} from "@/utils/utils.js";
import line from "@/assets/images/line.svg";
import Pagination from "@/components/pagination.vue";

const {list, classList, classId, visible,width,paginator,PaginationChange} = mixin()
defineOptions({
  name: 'news'
})
</script>

<style lang="scss" scoped>
#news {
  min-height: 900px;
  max-width: var(--page-inner-width);
  margin: 0 auto 100px;
  height: 900px;
  position: relative;
  z-index: 0;
}
.block-line{
  display: flex;
  justify-content: start;
  margin-bottom: 32px;
}
.bg {
  width: 1440px;
  height: 1440px;
  position: absolute;
  bottom: 300px;
  left: -900px;
  background: url("https://oss.narralayer.ai/images/bg-circle.png") no-repeat center / 70%;
  z-index: -1;
  animation: rotating 30s infinite linear;
}

@keyframes rotating {
  from {
    transform:  scale(1.3) rotate(0deg);
  }
  to {
    transform:  scale(1.3) rotate(360deg);
  }
}

.title {
  margin-bottom: 40px;
  padding-left: 40px;
}

.page-inner {
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .right {
    width: 585px;
    height: 656px;
  }
}

.swiper-card {
  width: 500px;
  height: 300px;
}

.classify {
  display: flex;
  margin: 20px 0;
  border-radius: 24px;
  overflow: hidden;

  &-item {
    cursor: pointer;
    font-size: 16px;
    height: 48px;
    width: 140px;
    font-family: "KrossNeueGrotesk-Regular";
    text-align: center;
    line-height: 48px;
    position: relative;
    background: #fff;
    color: var(--color-8);

    &:after {
      content: '';
      height: 100%;
      width: 1px;
      background: var(--color-2);
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0px;
    }
    &:last-child {
      &:after {
        display: none;
      }
    }
  }

  .active {
    background: var(--color-2);
    color: #000;
    font-family: "KrossNeueGrotesk-Heavy";
    //border-radius: 26px;
  }
}

.news-list {
  width: 750px;

  &-item {
    margin-bottom: 20px;
    width: 100%;
    height: 48px;
    border-radius: 24px;
    display: flex;
    background: #fff;
    align-items: center;
    padding: 0 20px 0 4px;
    cursor: pointer;

    &:not(.touch):hover {
      .content {
        transform: translateX(10px);
        transition: .2s;
        text-decoration: underline;
      }
    }

    .type {
      width: 132px;
      height: 40px;
      line-height: 40px;
      text-indent: -0.8em;
      text-align: center;
      background: url("@/assets/images/type-news-bg.svg") no-repeat center/100% 100%;
      color: #fff;
      font-size: 20px;
      font-family: "KrossNeueGrotesk-Heavy";
    }

    .content {
      flex: 1;
      font-size: 16px;
      color: var(--color-4);
      font-family: "KrossNeueGrotesk-Regular";
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-right: 10px;
    }

    .date {
      font-size: 12px;
      color: var(--color-6);
      font-family: "KrossNeueGrotesk-Regular";
    }
  }
}
.Pagination {
  font-size: 16px;
  line-height: 24px;
  font-family: "KrossNeueGrotesk-Heavy";
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
