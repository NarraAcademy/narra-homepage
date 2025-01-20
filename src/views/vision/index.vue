<template>
  <div class="mediakit">
    <pc v-if="appState.media ==='pc'"></pc>
    <mobile v-if="appState.media ==='mobile'"></mobile>
  </div>
</template>

<script setup>
import pc from './device/pc/index.vue'
import mobile from './device/mobile/index.vue'
import {useAppState} from "@/store/modules/app.js";

const appState = useAppState()
</script>
<style lang="scss" scoped>
:deep(ul,
ol,
li) {
  list-style: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-weight: normal;
  margin-block: 0;
  margin-inline: 0;
}
</style>
