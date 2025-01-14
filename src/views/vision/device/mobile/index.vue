<template>
  <div>
    <com-header/>
    <div class="page-inner">
      <understanding/>
      <team/>
      <!-- <news/> -->
    </div>
    <com-footer/>
  </div>
</template>
<script setup>
import ComFooter from "@/components/footer/mobile/footer.vue";
import Team from "@/views/vision/device/mobile/components/team.vue";
import ComHeader from "@/components/header/mobile/header.vue";
import News from "@/views/vision/device/mobile/components/news.vue";
import Understanding from "@/views/vision/device/mobile/components/understanding.vue";
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
