<template>
  <div v-inView="{callback:()=>visible1 = true}" id="hitBlock">
    <transition  name="bottom-in">
      <div v-if="visible1" v-inView="{callback:()=>visible2 = true}"  class="block-line">
        <img :src="line" alt="">
      </div>
    </transition>
    <div class="page-inner">
      <transition-group name="bottom-in">
        <h1 v-if="visible1" v-inView="{callback:()=>visible2 = true}" class="title">
          Hatch your
          <div>AI Agent</div>
          with us!
        </h1>
      <div v-if="visible2" v-inView="{callback:()=>visible3 = true}"  class="des">

Ready to put an AI Agent face to your brand or project? The Narra Training Academy is here to help!

Hit Me Up! replace with LFG!!!
      </div>
      <a v-if="visible3"  class="hit-btn" href='https://docs.google.com/forms/d/e/1FAIpQLSe5xSPSk3BsIo3_xrUYNsNtCKn9VyKwLrsF9KUYevQXD56WAg/viewform' target="_blank">HIT ME UP!</a>
      <img  v-if="visible3" class="img" :src="img" alt="">
      </transition-group>
    </div>
  </div>
</template>

<script setup>
import mixin from '@/mixin/hitBlock.js'
import {useAppState} from "@/store/modules/app.js";
import line from "@/assets/images/line.svg";
import img from '@/assets/images/hit-block-bg.png'

const appState = useAppState()
defineOptions({
  name: 'hitBlock'
})
const {visible1,visible2,visible3} = mixin()

</script>

<style lang="scss" scoped>
#hitBlock {
  width: 100%;
  max-width: var(--page-inner-width);
  margin: 0 auto 50px;
  min-height: 816px;
  position: relative;
}

.block-line{
  display: flex;
  justify-content: start;
  margin-bottom: 60px;
}
.page-inner {
  position: relative;
  width: 100%;
  height: 869px;
  display: flex;
  flex-direction: column;
  max-width: var(--page-inner-width);
  margin: 0 auto;
  padding-left: 40px;
  //background: url("@/assets/images/hit-block-bg.png") no-repeat bottom right / 1108px 908px;
  .img{
    position: absolute;
    width: 1108px;
    height: 908px;
    bottom: 0;
    right: 0;
  }
  .title{
    color: var(--color-1);
    margin-bottom: 32px;
    div{
      color: var(--color-7);
    }
  }
  .des{
    font-size: 16px;
    color: #fff;
    width: 400px;
    line-height: 24px;
    font-family: 'KrossNeueGrotesk-Regular';
    margin-bottom: 87px;
  }
  .hit-btn{
    background: url("@/assets/images/hit-btn-bg.svg") no-repeat center center/100%;
    width: 269.46px;
    height: 83.35px;
    font-family: "RAXON-Regular";
    font-size: 24px;
    font-weight: 400;
    line-height:83.35px;
    text-align: center;
    color:var(--color-1) ;
    cursor: pointer;
  }
}

</style>
