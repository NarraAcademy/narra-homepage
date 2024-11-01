<template>
  <div class="main">
        <intro @end="endHandle" v-if="pageNum ===0"/>
        <main-page v-if="pageNum === 1"/>
<!--    <main-page/>-->
  </div>
</template>

<script setup>

import mixin from "@/mixin/index.js";
import MainPage from "@/views/Index/device/pc/components/MainPage/index.vue";
import Intro from "@/views/Index/device/pc/components/intro.vue";

const {pageNum,endHandle} = mixin()
</script>

<style lang="scss" scoped>
:deep(.title) {
  font-size: 48px;
  font-family: "RAXON-Regular";
  color: var(--color-2);
  margin-bottom: 32px;
}

:deep(.subtitle) {
  font-family: "Prototype";
  font-size: 28px;
  color: var(--color-1);
}

</style>

