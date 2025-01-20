<template>
  <div v-inView="{callback:()=>visible = true}" id="ai">
    <transition name="left-in">
      <div v-if="visible" v-inView="{callback:()=>visible1 = true}" class="block-line">
        <img :src="line" alt="">
      </div>
    </transition>
    <transition name="scale-in">
      <div v-if="visible" v-inView="{callback:()=>visible1 = true}" class="subtitle">
        Shaping the future of  <br> cryptographic painting AI, Narra <br> is unstoppable
      </div>
    </transition>
    <div class="list">
      <transition-group name="bottom-in">
        <ul v-if="visible1"  v-inView="{callback:()=>visible2 = true}">
          <li v-for="i in aiList" :key="i.text"><img :src="i.icon"/>{{ i.text }}</li>
          <li v-for="i in aiList" :key="i.text"><img :src="i.icon"/>{{ i.text }}</li>
          <li v-for="i in aiList" :key="i.text"><img :src="i.icon"/>{{ i.text }}</li>
          <li v-for="i in aiList" :key="i.text"><img :src="i.icon"/>{{ i.text }}</li>
          <li v-for="i in aiList" :key="i.text"><img :src="i.icon"/>{{ i.text }}</li>
        </ul>
        <ul  v-if="visible2">
          <li v-for="i in aiList" :key="i.text"><img :src="i.icon"/>{{ i.text }}</li>
          <li v-for="i in aiList" :key="i.text"><img :src="i.icon"/>{{ i.text }}</li>
          <li v-for="i in aiList" :key="i.text"><img :src="i.icon"/>{{ i.text }}</li>
          <li v-for="i in aiList" :key="i.text"><img :src="i.icon"/>{{ i.text }}</li>
          <li v-for="i in aiList" :key="i.text"><img :src="i.icon"/>{{ i.text }}</li>
        </ul>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
import mixin from '@/mixin/ai.js'
import line from "@/assets/images/mobile-line.svg";

defineOptions({
  name: 'ai'
})
function formatter(number) {
  const numbers = number.toString().split('').reverse()
  const segs = []

  while (numbers.length) segs.push(numbers.splice(0, 3).join(''))

  return segs.join(',').split('').reverse().join('')
}

const {aiList, visible, visible1, visible2, visible4, visible3, visible5} = mixin()

</script>

<style lang="scss" scoped>
#ai {
  width: 100%;
  margin-bottom: 0.6rem;

}
.block-line {
  display: flex;
  justify-content: start;
  margin-bottom: 0.3rem;
  img{
    height: 0.16rem;
  }
}
.subtitle {
  text-align: center;
  line-height: .36rem;
  margin: 0 auto 0.41rem;
}



.list {
  min-height: 1rem;
  ul {
    display: flex;
    margin-bottom: 0.16rem;
    width: max-content;
    animation: _translate 200s infinite normal linear;

    &:last-child {
      animation: translate 200s infinite normal linear;
      transform: translateX(calc(100vw - 1.2rem * 65));
    }

    li {
      width: 1.12rem;
      height: 0.38rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0.08rem;
      font-family: "Prototype";
      border-radius: 0.19rem;
      background: linear-gradient(180deg, #FFE169 0%, #F7B72E 99%);

      img {

        max-width: 80%;
      }

      &:nth-of-type(even) {
        background: linear-gradient(180deg, #FFF200 0%, #FFE169 99.5%);
      }
    }
  }
}

@keyframes translate {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(calc(100vw - 1.2rem * 65));
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes _translate {
  0% {
    transform: translateX(calc(100vw - 1.2rem * 65));
  }
  50% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(100vw - 1.2rem * 65));
  }
}
</style>
