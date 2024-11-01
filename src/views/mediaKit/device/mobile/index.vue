<template>
  <main class="main">
    <div class="page-center">
      <h1 class="title">
        Media Kit
      </h1>
      <ul class="content">
        <li class="content-item" v-for="(i,index) in mainList" :key="i.title" :class="'content-item-'+index">
          <h2 v-if="i.title" class="content-item-title">{{ i.title }}</h2>
          <div v-if="i.description" class="content-item-des" v-html="i.description"></div>
          <img v-if="i.btn" class="download-btn" :src="downloadBtn" alt="" @click="downloadAssetHandle">
          <ul v-if="i.list" class="content-item-list">
            <li v-for="it in i.list" :key="it.name" class="content-item-list-item">
              <img class="content-item-list-item-img" :src="it.svg" alt="">
              <div v-if="it.description" class="content-item-list-item-des" v-html="it.description"></div>
              <div class="btn-group" v-if="index>1">
                <img src="~@/assets/images/mobile/mediakit/Button-svg.png" alt="" @click="downloadHandle(it.svg)">
                <img src="~@/assets/images/mobile/mediakit/Button-png.png" alt="" @click="downloadHandle(it.png)">
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
import BrandColors1 from '@/assets/images/mobile/mediakit/BrandColors1.png'
import BrandColors2 from '@/assets/images/mobile/mediakit/BrandColors2.png'
import BrandColors3 from '@/assets/images/mobile/mediakit/BrandColors3.png'
import {downloadHandle} from "@/utils/utils.js";
import mixin from "@/views/mediaKit/device/mixin.js";
import downloadBtn from "@/assets/images/assets-download.svg";

const {cardList,downloadAssetHandle} = mixin()
const mainList = reactive([
  {
    description: "To keep our logo looking sharp and easy to recognize, please ensure a clear buffer around it. This space should be free from text and other elements, and ideally, it should be as tall and as wide as the logo itself — feel free to add a bit more room! <br><br>" +
        "Here are some guidelines to keep our logo looking its best:<br>" +
        "<ul style='padding-left: 0.25rem'>" +
        "<li style='list-style: disc ;'>Let’s keep the logo true to its form — no stretching, rotating, or distorting.</li>" +
        "<li style='list-style: disc ;'>Stick to our brand’s color palette.</li>" +
        "<li style='list-style: disc ;'>Keep the logo fully opaque.</li>" +
        "<li style='list-style: disc ;'>Our logo loo ks its best as a whole, so please don’t take it apart.</li>" +
        "<li style='list-style: disc ;'>Steer clear of adding text or image effects.</li>" +
        "<li style='list-style: disc ;'>Don’t outline the logo.</li>" +
        "<li style='list-style: disc ;'>We thank you for maintaining our logo\"s integrity and style!</li>" +
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
  position: relative;
  z-index: 0;
  overflow: hidden;
  min-height: calc(var(--vh) - 7.295rem + 0.4rem);
  background: radial-gradient(50% 50% at 50% 50%, #1D2C31 0%, #0E171A 100%);
}

.page-center {
  width: 100%;
  padding: 0.4rem 0.235rem 0.87rem ;
}

.title{
  font-family: "RAXON-Regular";
  font-size: 0.32rem;
  font-weight: 400;
  line-height: 0.36rem;
  color: #FAAC07;
  margin-bottom: 0.32rem;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 0.48rem;
  width: 100%;

  &-item {
    display: flex;
    flex-direction: column;

    &-title {
      color: #EDE4CC;
      font-size: 0.28rem;
      line-height: 0.36rem;
      font-family: "Prototype";
      margin-bottom: 0.32rem;
    }

    &-des {
      width: 100%;
      color: #fff;
      font-size: 0.16rem;
      line-height: 0.24rem;
      font-family: "KrossNeueGrotesk-Regular";
    }

    &-list {
      display: flex;
      gap: 0.2rem;
      flex-wrap: wrap;

      &-item {
        display: flex;
        flex-direction: column;
        gap: 0.24rem;

        //&-img {
        //  width: 154px;
        //  height: 154px;
        //}

        &-des {
          //text-indent: 30px;
          font-size: 0.16rem;
          line-height: 0.24rem;
          color: #fff;
          font-family: "KrossNeueGrotesk-Regular";
        }
      }
    }
  }

  .content-item-1 {
    .content-item-list-item-img {
      width: 1.63rem;
      height: 1.54rem;
    }

    .content-item-list-item-des {
      text-indent: 0;
      text-align: center;
    }
  }

  .content-item-3, .content-item-4 {
    .content-item-list {
      gap: 0.24rem;
      flex-wrap: wrap;
    }

    .content-item-list-item-img {
      border-radius: 0.2rem;
      width: 3.45rem;
      height: 1.3269rem;
    }

    .btn-group {
      display: flex;
      justify-content: center;
      gap: 0.16rem;
      img{
        width: 1.645rem;
        height: 0.4rem;
      }
    }
  }
}
.download-btn{
  width: 2.7rem;
  height: 0.84rem;
  cursor: pointer;
}
</style>
