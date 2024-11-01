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

import ComHeader from "@/components/header/mobile/header.vue";
import ComFooter from "@/components/footer/mobile/footer.vue";
import Part1 from "@/views/chat/device/mobile/components/part1.vue";
import Part2 from "@/views/chat/device/mobile/components/part2.vue";
import Part3 from "@/views/chat/device/mobile/components/part3.vue";
</script>
<style lang="scss" scoped>
:deep(.title) {
  font-size: 0.32rem;
  font-family: "RAXON-Regular";
  color: var(--color-2);
  margin-bottom: 0.32rem;
}

:deep(.subtitle) {
  font-family: "Prototype";
  color: var(--color-1);
  font-size: 0.2rem;
}

</style>
