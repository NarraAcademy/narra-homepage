<template xmlns:img="http://www.w3.org/1999/html">
  <div v-inView="{callback:()=>visible = true}" id="news">
    <transition name="left-in">
      <div v-if="visible" v-inView="{callback:()=>visible1 = true}" class="block-line">
        <img :src="line" alt="">
      </div>
    </transition>
<!--    <transition name="left-in">-->
<!--      <div v-if="visible" class="bg"/>-->
<!--    </transition>-->
    <transition name="left-in">
      <h1 v-if="visible1" v-inView="{callback:()=>visible2 = true}" class="title">
        Latest News
      </h1>
    </transition>
    <div class="page-inner">
      <transition name="left-in">
        <img v-if="visible" src="https://oss.narralayer.ai/images/news-pic.png" class="right"/>
      </transition>
      <transition name="left-in">
        <div v-if="visible2" v-inView="{callback:()=>visible3 = true}" class="left">
          <div class="classify">
            <div @click="()=>classId = i.id" class="classify-item" v-for="i in classList" :key="i.id"
                 :class="{active:i.id === classId}">
              {{ i.name }}
            </div>
          </div>
          <div class="news-list" v-inView="{callback:()=>visible3 = true}">
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
import line from "@/assets/images/mobile-line.svg";
import Pagination from "@/components/pagination.vue";

const {list, classList, classId, visible,width,paginator,PaginationChange,visible1,visible2,visible3} = mixin()
defineOptions({
  name: 'news'
})
</script>

<style lang="scss" scoped>
#news {
  min-height: 6rem;
  position: relative;
  z-index: 2;
  margin-bottom: 0.8rem;
}
.block-line{
  display: flex;
  justify-content: start;
  margin-bottom: 0.24rem;
}
.bg {
  width: 14.4rem;
  height: 14.4rem;
  position: absolute;
  bottom: 3rem;
  left: -9rem;
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
  margin-bottom: 0.24rem;
  padding-left: 0.24rem;
}

.page-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  .left {
    width: 3.45rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .right{
    margin-top: -0.3rem;
    width: 3.45rem;
  }
}

.classify {
  width: 100%;
  display: flex;
  border-radius: 0.24rem;
  margin: 0.24rem 0;
  overflow: hidden;

  &-item {
    cursor: pointer;
    font-size: 0.16rem;;
    height: 0.48rem;
    width: 1.4rem;
    font-family: "KrossNeueGrotesk-Regular";
    text-align: center;
    line-height: 0.48rem;
    background: #fff;
    position: relative;
    color: var(--color-8);

    &:after {
      content: '';
      height: 100%;
      width: 1px;
      background: #fff;
      position: absolute;
      background: var(--color-2);
      top: 50%;
      transform: translateY(-50%);
      right: -0.2rem;
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
  }
}

.news-list {
  width: 100%;

  &-item {
    margin-bottom: 0.24rem;
    width: 100%;
    height: 0.48rem;
    border-radius: 0.24rem;
    display: flex;
    background: #fff;
    align-items: center;
    padding: 0 0.02rem;
    cursor: pointer;

    &:not(.touch):hover {
      .content {
        transform: translateX(10px);
        transition: .2s;
        text-decoration: underline;
      }
    }

    .type {
      width: 1.02rem;
      height: 0.40rem;
      line-height: 0.4rem;
      text-indent: -0.8em;
      text-align: center;
      background: url("@/assets/images/type-news-bg-mobile.svg") no-repeat center/100% 100%;
      color: #fff;
      font-size: 0.16rem;
      font-family: "KrossNeueGrotesk-Heavy";
    }

    .content {
      flex: 1;
      font-size: 0.16rem;
      color: var(--color-4);
      font-family: "KrossNeueGrotesk-Regular";
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-right: 0.1rem;
    }

    .date {
      font-size: 0.12rem;
      color: var(--color-6);
      font-family: "KrossNeueGrotesk-Regular";
    }
  }
}
.Pagination {
  font-size: 0.16rem;
  line-height: 0.24rem;
  font-family: "KrossNeueGrotesk-Heavy";
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
