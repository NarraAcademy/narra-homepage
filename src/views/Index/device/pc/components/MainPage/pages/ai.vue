<template>
  <div v-inView="{callback:()=>visible = true}" id="ai">
    <transition name="scale-in">
    <div v-if="visible" class="subtitle">
      Partners who are shaping the future of AI + Crypto with Narra!
    </div>
    </transition>
    <transition name="bottom-in">
      <div v-if="visible" class="list">
        <ul >
          <li v-for="i in aiList" :key="i.text"><img :src="i.icon"/>{{ i.text }}</li>
          <li v-for="i in aiList" :key="i.text"><img :src="i.icon"/>{{ i.text }}</li>
          <li v-for="i in aiList" :key="i.text"><img :src="i.icon"/>{{ i.text }}</li>
          <li v-for="i in aiList" :key="i.text"><img :src="i.icon"/>{{ i.text }}</li>
          <li v-for="i in aiList" :key="i.text"><img :src="i.icon"/>{{ i.text }}</li>
        </ul>
        <ul>
          <li v-for="i in aiList" :key="i.text"><img :src="i.icon"/>{{ i.text }}</li>
          <li v-for="i in aiList" :key="i.text"><img :src="i.icon"/>{{ i.text }}</li>
          <li v-for="i in aiList" :key="i.text"><img :src="i.icon"/>{{ i.text }}</li>
          <li v-for="i in aiList" :key="i.text"><img :src="i.icon"/>{{ i.text }}</li>
          <li v-for="i in aiList" :key="i.text"><img :src="i.icon"/>{{ i.text }}</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup>
import mixin from '@/mixin/ai.js'

defineOptions({
  name: 'ai'
})
const {aiList,visible} = mixin()

</script>

<style lang="scss" scoped>
#ai {
  width: 100%;
  height: 265px;
  margin-bottom: 170px;
}

.subtitle {
  font-size: 24px !important;
  color: var(--color-1) !important;
  margin-bottom: 62px;
  text-align: center;
}

.list {
  ul {
    display: flex;
    margin-bottom: 34px;
    width: max-content;
    animation: _translate 300s infinite normal linear;
    &:last-child{
      animation: translate 300s infinite normal linear;
      transform: translateX(calc(100vw - 187px * 65));
    }

    li {
      width: 168px;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      color: #000;
      margin-right: 19px;
      font-family: "Prototype";
      border-radius: 24px;
      background: linear-gradient(180deg, #FFE169 0%, #F7B72E 99%);
      img{
        max-width: 80%;
        max-height: 90%;
      }
      &:nth-of-type(even) {
        background: linear-gradient(180deg, #FFF200 0%, #FFE169 99.5%);
      }
    }
  }
}
@keyframes translate {
  0%{
    transform: translateX(0);
  }
  50%{
    transform: translateX(calc(100vw - 187px*65));
  }
  100%{
    transform: translateX(0);
  }
}
@keyframes _translate {
  0%{
    transform: translateX(calc(100vw - 187px*65));
  }
  50%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(calc(100vw - 187px*65));
  }
}
</style>
