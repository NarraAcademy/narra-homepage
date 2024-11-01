<template>
  <div>
    <com-header/>
    <div class="page-inner">
      <home/>
      <understanding/>
      <zaigo/>
      <our-vision/>
      <ai/>
      <narra-video/>
      <hit-block/>
<!--      <news/>-->
<!--      <team/>-->
    </div>
    <com-footer/>
  </div>
</template>

<script setup>
import ComHeader from "../../../../../../components/header/mobile/header.vue";
import ComFooter from "../../../../../../components/footer/mobile/footer.vue";
import Home from "@/views/Index/device/mobile/components/MainPage/pages/home.vue";
import understanding from "@/views/Index/device/mobile/components/MainPage/pages/understanding.vue";
import Ai from "@/views/Index/device/mobile/components/MainPage/pages/ai.vue";
import Zaigo from "@/views/Index/device/mobile/components/MainPage/pages/zaigo.vue";
import OurVision from "@/views/Index/device/mobile/components/MainPage/pages/ourVision.vue";
import NarraVideo from "@/views/Index/device/mobile/components/MainPage/pages/narraVideo.vue";
import HitBlock from "@/views/Index/device/mobile/components/MainPage/pages/hitBlock.vue";
// import Team from "@/views/Index/device/mobile/components/MainPage/pages/team.vue";
// import News from "@/views/Index/device/mobile/components/MainPage/pages/news.vue";

defineOptions({
  name:'mainPage'
})
</script>

<style lang="less" scoped>

</style>
