<template>
  <div class="intro-progress" :class="appState.media+'-intro-progress'">
    <div v-if="end" class="accessGranted"></div>
    <div v-else class="intro-progress-inner">
      <div class="loading">
      <span>
        INITIATING
      </span>
      </div>
      <div class="progress">
        <div class="inner" :style="{width:progressNum+'%',transition:timeStep+'ms'}"></div>
<!--        <div class="inner" :style="{width:schedule+'%'}"></div>-->
      </div>
<!--      <div class="num">{{ schedule }}%</div>-->
<!--      <div class="num">{{ schedule }}%</div>-->
      <div class="num">{{ progressNum }}</div>
      <div class="des">ENTERING NARRA TRAINING ACADEMY</div>
    </div>
  </div>
</template>

<script setup>
import {useAppState} from "@/store/modules/app.js";
import {computed, onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";

const router = useRouter()
const route = useRoute()

const appState = useAppState()
const props = defineProps({
  time: {
    default:2.3 * 1000
  },
})
const emit = defineEmits(['end'])
const progressNum = ref(0)
const timer = ref(null)
const timeStep = computed(() => {
  return Math.ceil(props.time / 100);
})
const end = ref(false)
const setupHandle = () => {
  timer.value = null
  timer.value = setInterval(() => {
    if (progressNum.value === 100) {
      clearInterval(timer.value)
      setTimeout(()=>{
        end.value = true
      },300)
      setTimeout(() => {
        emit('end')
        // if(route.path !== '/home'){
        //   // router.replace('/home')
        // }
      },700)
    } else {
      progressNum.value++
    }
  }, timeStep.value)
}
onMounted(() => {
  setupHandle()
})
// const {schedule} = preload()
// watch(schedule,()=>{
//   if(schedule.value >=100){
//     emit('end')
//   }
// })
</script>

<style lang="scss" scoped>
.intro-progress{
  display: flex;
  align-items: center;
  justify-content: center;
  .accessGranted{
    background: url("@/assets/images/accessGranted.png") no-repeat center /100% 100%;
  }
  .intro-progress-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

    .loading {
      word-wrap: break-word;
      font-family: Prototype;
      text-align: center;
      color: #FAAC07;
      -webkit-background-clip: text;
      background-size: 100% 100%;

      span {
        color: transparent;
        background-image: linear-gradient(to right, #EDE4CC, #EDE4CC);
        background-repeat: no-repeat;
        -webkit-background-clip: text;
        background-size: 0% 100%;
        position: relative;
        animation: bg 2s linear infinite;
        animation-fill-mode: forwards;
      }

      @keyframes bg {
        from {
          background-size: 0% 100%;
        }
        to {
          background-size: 100% 100%;
        }
      }

    }


    .num {
      font-family: "Prototype";
      font-size: 32px;
      line-height: 38px;
      color: #EDE4CC;
    }

    .progress {
      width: 100%;
      height: 3px;
      background: #ede4cc;
      margin-bottom: 8px;

      .inner {
        width: 0%;
        height: 100%;
        background: #faac07;
      }
    }

    .des {
      font-family: "Prototype";
      color: #EDE4CC;
    }
  }
}
.pc-intro-progress{
  width: 388px;
  height: 141px;
  .accessGranted{
    width: 356px;
    height: 91px;
  }
  .loading {
    font-size: 32px;
    line-height: 38px;
    letter-spacing: 10px;
    margin-bottom: 16px;
  }
  .num {
    font-size: 32px;
    line-height: 38px;
  }
  .progress {
    height: 3px;
    margin-bottom: 8px;
  }
  .des {
    font-size: 20px;
    line-height: 26px;
  }
}
.pad-intro-progress{
  width: 3.88rem;
  height: 1.41rem;
  .accessGranted{
    width: 3.56rem;
    height: 0.91rem;
  }
  .loading {
    font-size: 0.32rem;
    line-height: 0.38rem;
    letter-spacing: 0.1rem;
    margin-bottom: 0.16rem;
  }
  .num {
    font-size: 0.32rem;
    line-height: 0.38rem;
  }
  .progress {
    height: 0.03rem;
    min-height: 3px;
    margin-bottom: 0.08rem;
  }
  .des {
    font-size: 0.2rem;
    line-height: 0.26rem;
  }
}
.mobile-intro-progress{
  width: 3.45rem;
  height: 1.2626rem;
  .accessGranted{
    width: 3.1655rem;
    height: 0.8091rem;
  }
  .loading {
    font-size: 0.28rem;
    line-height: 0.30rem;
    letter-spacing: 0.06rem;
    margin-bottom: 0.14rem;
  }
  .num {
    font-size: 0.28rem;
    line-height: 0.30rem;
  }
  .progress {
    height: 0.0267rem;
    min-height: 2.67px;
    margin-bottom: 0.07rem;
  }
  .des {
    font-size: 0.178rem;
    line-height: 0.23rem;
  }
}
</style>
