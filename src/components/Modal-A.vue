<template>
  <transition>
    <div v-if="_open" class="modal" @click="clickHandle" :class="appState.media+'-modal'">
      <div class="modal-main">
        <img @click="_open = false" class="icon" src="@/assets/images/pc/close-icon.png" alt="">
        <div class="inner">
          <h1 class="title" :class="props.title">
            <slot name="title">
              {{ props.title }}
            </slot>
          </h1>
          <div class="content">
            <slot>
              {{ props.content }}
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import {computed, onUnmounted, watch} from "vue";
import {scrollMove, scrollStop} from "@/utils/utils";
import {useAppState} from "@/store/modules/app.js";

const appState = useAppState()
const emit = defineEmits(['update:open'])
const props = defineProps({
  title: String,
  content: String,
  open: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: ''
  }
})
const _open = computed({
  get() {
    return props.open;
  },
  set(val) {
    emit('update:open', val)
  }
})
const clickHandle = (e) => {
}
watch(_open, (v) => {
  if (v) {
    scrollStop()
  } else {
    scrollMove()
  }
})
onUnmounted(()=>{
  scrollMove()
})
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  background: rgba(21, 34, 38, 0.8);
}

.modal-main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #EDE4CC;
  box-shadow: 0px 0px 15px 0px #FFEB75;
  border-radius: 20px;
  overflow: hidden;
  .icon {
    position: absolute;
    top: 24px;
    right: 24px;
    width: 24px;
    height: 24px;
    cursor: pointer;
    z-index: 9;
  }

  .inner {
    max-height: calc(var(--vh) - 33px - 15px);
    padding: 24px 12px 30px 24px;
    background: #0A1619;
    min-width: 644px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    border-top: none;
    border-bottom: none;
  }

  .title {
    padding-right: 12px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 24px;
    line-height: 32px;
    font-family: "Prototype";
    color: #FAAC07;
    margin: 0;
  }

  .error {
    color: #F52B11;
  }

  .success {
    color: #12B424;
  }

  .content {
    padding-right: 12px;
    width: 100%;
    height: 100%;
    overflow: auto;
    font-family: "KrossNeueGrotesk-Regular";
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #fff;
    /* 整体滚动条样式 */
    &::-webkit-scrollbar {
      width: 9px;
    }

    /* 滚动条轨道 */
    &::-webkit-scrollbar-track {
      background: #2D3E44; /* 轨道背景色 */
      border: 1.5px #152226 solid;
    }

    /* 滚动条滑块 */
    &::-webkit-scrollbar-thumb {
      background: #FAAC07; /* 滑块颜色 */
    }
  }
}

.mobile-modal {
  .modal-main {
    border: 1px solid #EDE4CC;
    box-shadow: 0px 0px 15px 0px #FFEB75;
    border-radius: 0.18rem;
    .icon {
      position: absolute;
      top: 0.24rem;
      right: 0.24rem;
      width: 0.24rem;
      height: 0.24rem;
    }

    .inner {
      max-height: calc(var(--vh) - 0.31rem - 0.14rem);
      padding: 0.24rem 0.12rem 0.30rem 0.24rem;
      width: 3.45rem;
      gap: 0.16rem;
      min-width: 3.45rem;
      border-top: none;
      border-bottom: none;
    }

    .title {
      padding-right: 0.12rem;
      font-size: 0.2rem;
      line-height: 0.26rem;
    }

    .content {
      padding-right: 0.12rem;
      font-size: 0.16rem;
      line-height: 0.24rem;
      /* 整体滚动条样式 */
      &::-webkit-scrollbar {
        width: 0.05rem;
      }

      /* 滚动条轨道 */
      &::-webkit-scrollbar-track {
        background: transparent; /* 轨道背景色 */
      }

      /* 滚动条滑块 */
      &::-webkit-scrollbar-thumb {
        background: #B8B8B8; /* 滑块颜色 */
        border-radius: 0.025rem;
      }
    }
  }
}


.v-enter-active,
.v-leave-active {
  transition: opacity 0.4s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
