<template>
  <div  v-inView="{callback:()=>visible1 = true}"  id="hitBlock">
    <transition  name="bottom-in">
      <div v-if="visible1" v-inView="{callback:()=>visible2 = true}"  class="block-line">
        <img :src="line" alt="">
      </div>
    </transition>
    <div class="page-inner">
      <transition-group name="bottom-in">
      <h1 v-if="visible2" v-inView="{callback:()=>visible3 = true}" class="title">
        Hatch your
      </h1>
      <h1 v-if="visible2" v-inView="{callback:()=>visible3 = true}" class="title yellow">
        AI Agent
      </h1>
      <h1 v-if="visible2" v-inView="{callback:()=>visible3 = true}" class="title">
        with us!
      </h1>
      <div v-if="visible3" v-inView="{callback:()=>visible4 = true}" class="des">

Ready to put an AI Agent face to your brand or project? The Narra Training Academy is here to help!


      </div>
      <img v-if="visible4" v-inView="{callback:()=>visible5 = true}" class="bg" :src="img" alt="">
      <a v-if="visible5" class="hit-btn" href='https://docs.google.com/forms/d/e/1FAIpQLSe5xSPSk3BsIo3_xrUYNsNtCKn9VyKwLrsF9KUYevQXD56WAg/viewform' target="_blank">LFG!</a>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
import mixin from '@/mixin/hitBlock.js'
import {useAppState} from "@/store/modules/app.js";
import line from "@/assets/images/mobile-line.svg";
import img from '@/assets/images/hit-block-bg.png'

const appState = useAppState()
defineOptions({
  name: 'hitBlock'
})
const {visible1,visible2,visible3,visible4,visible5} = mixin()

</script>

<style lang="scss" scoped>
#hitBlock {
  width: 100%;
  min-height: 7.5rem;
  position: relative;
  margin-bottom: 50px;
}
.block-line {
  display: flex;
  justify-content: start;
  margin-bottom: 0.3rem;
  img{
    height: 0.16rem;
  }
}
.page-inner {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: var(--page-inner-width);
  margin: 0 auto;
  align-items: center;
  .title{
    color: var(--color-1);
    margin-bottom: 0.01rem;
  }
  yellow{
    color: var(--color-7);
  }
  .des{
    font-size: 0.16rem;
    color: #fff;
    width: 3rem;
    text-align: center;
    line-height: 0.24rem;
    font-family: 'KrossNeueGrotesk-Regular';
    margin-bottom: 0.3rem;
    margin-top: 0.3rem;
  }
  .bg{
    width: 3.9rem;
    height: 3.19rem;
  }
  .hit-btn{
    background: url("@/assets/images/hit-btn-bg.svg") no-repeat center center/100%;
    width: 2.45rem;
    height: 0.7629rem;
    font-family: "RAXON-Regular";
    font-size: 0.2rem;
    font-weight: 400;
    line-height:0.7629rem;
    text-align: center;
    color:var(--color-1) ;
    cursor: pointer;
  }
}

</style>
