<template>
  <div class="index">
    <pc v-if="appState.media ==='pc'"/>
    <mobile v-if="appState.media ==='mobile'"/>
    <div style="height: 0;width: 0;">
      <LoginBlock ref="loginBlock"  v-if="loginVisalbe"/>
    </div>
  </div>
</template>

<script setup>
import pc from './device/pc/index.vue'
import mobile from './device/mobile/index.vue'
import {useAppState} from "@/store/modules/app.js";
import {useUserState} from "@/store/modules/user.js";
import {onMounted, ref, watch} from "vue";
import {useRoute} from "vue-router";
import mixin from "@/mixin/index.js";
import LoginBlock from "@/components/LoginBlock.vue";
import storage from "store";

const appState = useAppState()
const userState = useUserState()
const route = useRoute()
const {pageNum,domainName} = mixin()
const loginVisalbe = ref(false)
defineProps({
  name: 'Index'
})
const loginBlock =ref(null)
onMounted(()=>{
  if(route.query.ic&&!storage.get('token',userState.token)){
    console.log(loginBlock.value)
    loginBlock.value.openHandle()
    window.history.pushState({},'',domainName)
  }
})
watch(()=>route,()=>{
  console.log(route.query.ic)
  if(route.query?.ic){
    loginVisalbe.value =true
    // pageNum.value++
  }
},{
  deep: true,
  immediate:true
})
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
