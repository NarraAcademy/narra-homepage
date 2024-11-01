<template>
  <div>
    <com-header/>
    <div class="page-inner">
      <understanding/>
      <team/>
      <news/>
    </div>
    <com-footer/>
  </div>
</template>
<script setup>
import ComFooter from "@/components/footer/pc/footer.vue";
import Team from "@/views/vision/device/pc/components/team.vue";
import ComHeader from "@/components/header/pc/header.vue";
import News from "@/views/vision/device/pc/components/news.vue";
import Understanding from "@/views/vision/device/pc/components/understanding.vue";
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
