<template>
  <transition name="message">
    <div v-show="appState.messageOpen" class="message" :class="appState.media">
      {{appState.messageContent}}
    </div>
  </transition>
</template>

<script setup>
import {useAppState} from "@/store/modules/app.js";

defineOptions({
  name:'message'
})
const appState = useAppState()
</script>

<style lang="scss" scoped>
.message{
  width: max-content;
  height: max-content;
  font-size: 16px;
  color: var(--color-3) ;
  padding: 10px;
  background-color: var(--color-5);
  font-family: "KrossNeueGrotesk-Regular";
  position: fixed;
  top: calc(var(--vh) / 7 );
  left: 50%;
  transform: translateX(-50%);
  border-radius: 8px;
}
.mobile{
  font-size: 0.16rem;
  padding: 0.1rem;
  border-radius: 0.08rem;
}
.message-enter-from,
.message-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-200%);
}
</style>
