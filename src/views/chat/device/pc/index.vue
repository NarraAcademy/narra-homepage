<template>
  <div>
    <com-header/>
    <div class="page-inner">
      <part1/>
      <part2/>
      <part3/>
    </div>
    <com-footer/>
  </div>
</template>

<script setup>

import ComHeader from "@/components/header/pc/header.vue";
import ComFooter from "@/components/footer/pc/footer.vue";
import Part1 from "@/views/chat/device/pc/components/part1.vue";
import Part2 from "@/views/chat/device/pc/components/part2.vue";
import Part3 from "@/views/chat/device/pc/components/part3.vue";
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
