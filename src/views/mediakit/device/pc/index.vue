<template>
  <main class="main">
    <div class="bg"></div>
    <div class="page-inner">
      <h1 class="title">
        Media Kit
      </h1>
      <ul class="content">
        <li class="content-item" v-for="(i,index) in mainList" :key="i.title" :class="'content-item-'+index">
          <h2 v-if="i.title" class="content-item-title">{{ i.title }}</h2>
          <img v-if="i.btn" class="download-btn" :src="downloadBtn" alt="" @click="downloadAssetHandle">
          <div v-if="i.description" class="content-item-des" v-html="i.description"></div>
          <ul v-if="i.list" class="content-item-list">
            <li v-for="it in i.list" :key="it.name" class="content-item-list-item">
              <img class="content-item-list-item-img" :src="it.svg" alt="">
              <div v-if="it.description" class="content-item-list-item-des" v-html="it.description"></div>
              <div class="btn-group" v-if="index>1">
                <img src="~@/assets/images/pc/mediakit/Button-svg.png" alt="" @click="downloadHandle(it.svg)">
                <img src="~@/assets/images/pc/mediakit/Button-png.png" alt="" @click="downloadHandle(it.png)">
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup>
import {reactive} from "vue";
import BrandColors1 from '@/assets/images/pc/mediakit/BrandColors1.png'
import BrandColors2 from '@/assets/images/pc/mediakit/BrandColors2.png'
import BrandColors3 from '@/assets/images/pc/mediakit/BrandColors3.png'
import {downloadHandle} from "@/utils/utils.js";
import mixin from "@/views/mediakit/device/mixin.js";
import downloadBtn from '@/assets/images/assets-download.svg'

const {cardList,downloadAssetHandle} = mixin()

const mainList = reactive([
  {
    description: "To keep our logo looking sharp and easy to recognize, please ensure a clear buffer around it. This space should be free from text and other elements, and ideally, it should be as tall and as wide as the logo itself — feel free to add a bit more room! <br><br>" +
        "Here are some guidelines to keep our logo looking its best:<br>" +
        "<ul>" +
        "<li style='list-style: disc inside;text-indent: 10px'>Let’s keep the logo true to its form — no stretching, rotating, or distorting.</li>" +
        "<li style='list-style: disc inside;text-indent: 10px'>Stick to our brand’s color palette.</li>" +
        "<li style='list-style: disc inside;text-indent: 10px'>Keep the logo fully opaque.</li>" +
        "<li style='list-style: disc inside;text-indent: 10px'>Our logo looks its best as a whole, so please don’t take it apart.</li>" +
        "<li style='list-style: disc inside;text-indent: 10px'>Steer clear of adding text or image effects.</li>" +
        "<li style='list-style: disc inside;text-indent: 10px'>Don’t outline the logo.</li>" +
        "<li style='list-style: disc inside;text-indent: 10px'>We thank you for maintaining our logo\"s integrity and style!</li>" +
        "</ul>",
  },
  {
    title: 'Brand Colors',
    list: [
      {
        svg: BrandColors1,
        description: 'Pearl WHite<br/>' +
            '#EDE4CC'
      },
      {
        svg: BrandColors2,
        description: 'Mango<br/>' +
            '#FAAC07'
      },
      {
        svg: BrandColors3,
        description: "Dark Alphine<br/>" +
            "#152226"
      }
    ]
  },
  ...cardList
])

</script>

<style lang="scss" scoped>

.main {
  //position: relative;
  z-index: 0;
  overflow: hidden;
  min-height: calc(var(--vh) - 352px + 30px);
  //background: radial-gradient(50% 50% at 50% 50%, #1D2C31 0%, #0E171A 100%);
}

.page-inner {
  position: relative;
  width: 100%;
  padding: 76px 64px 94px 64px;
}

.bg {
  position: absolute;
  width: 714px;
  height: 1885px;
  top: 0;
  right: 0;
  z-index: 0;
  background: url("@/assets/images/pc/mediakit/bg.png") no-repeat center/ 100% 100%;
}

.title {
  max-width: var(--page-inner-width);
  font-family: "RAXON-Regular";
  font-size: 48px;
  font-weight: 400;
  line-height: 52px;
  color: #FAAC07;
  margin: 0 auto 32px;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 0 auto;
  max-width: var(--page-inner-width);

  &-item {
    display: flex;
    flex-direction: column;

    &-title {
      color: #EDE4CC;
      font-size: 28px;
      line-height: 36px;
      font-family: "Prototype";
      margin-bottom: 32px;
    }

    &-des {
      width: 100%;
      max-width: 867px;
      color: #fff;
      font-size: 16px;
      line-height: 24px;
      font-family: "KrossNeueGrotesk-Regular";
    }

    &-list {
      display: flex;
      gap: 24px;

      &-item {
        display: flex;
        flex-direction: column;
        gap: 16px;

        &-img {
          width: 154px;
          height: 154px;
        }

        &-des {
          font-size: 14px;
          line-height: 18px;
          color: #fff;
          font-family: "KrossNeueGrotesk-Regular";
        }
      }
    }
  }

  .content-item-1 {

    .content-item-list-item-img {
      width: 154px;
      height: 154px;
    }

    .content-item-list-item-des {
      text-indent: 0;
      text-align: center;
    }
  }

  .content-item-3,.content-item-4 {
    .content-item-list {
      gap: 24px;
      flex-wrap: wrap;
    }

    .content-item-list-item-img {
      border-radius: 20px;
      width: 520px;
      height: 200px;
    }

    .btn-group {
      display: flex;
      justify-content: center;
      gap: 16px;

      img {
        cursor: pointer;
      }
    }
  }
}
.download-btn{
  width: 270px;
  height: 84px;
  cursor: pointer;
}
</style>
