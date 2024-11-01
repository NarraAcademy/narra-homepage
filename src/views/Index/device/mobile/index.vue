<template>
  <div class="main">
    <intro @end="endHandle" v-if="pageNum ===0"/>
    <main-page v-if="pageNum === 1"/>
  </div>
</template>

<script setup>
import Intro from "@/views/Index/device/mobile/components/intro.vue";
import mixin from "@/mixin/index.js";
import MainPage from "@/views/Index/device/mobile/components/MainPage/index.vue";

const {pageNum,endHandle} = mixin()
</script>

<style lang="scss" scoped>
:deep(.title) {
  font-size: 0.32rem;
  font-family: "RAXON-Regular";
  color: var(--color-2);
  margin-bottom: 0.16rem;
}

:deep(.subtitle) {
  font-family: "Prototype";
  font-size: 0.24rem;
  color: var(--color-1);
}

</style>
