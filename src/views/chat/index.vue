<template>
  <div class="chat">
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
