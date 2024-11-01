<template>
  <button @click="sendHandle" :disabled="userState.sendSecond!==0" class="resend" :class="appState.media+'-resend'">
    <span v-if="userState.sendSecond !==0" class="seconds">
    {{userState.sendSecond+'s'}}
    </span>
      resend
  </button>
</template>

<script setup>
import {onMounted, ref, watch} from "vue";
import {useAppState} from "@/store/modules/app.js";
import {useUserState} from "@/store/modules/user.js";
import apis from "@/utils/apis.js";
const appState = useAppState()
const userState = useUserState()
const props =defineProps({
  address:String
})
const timer = ref(null)
const resetHandle = ()=>{
  userState.sendSecond = 60
  console.log(userState.sendSecond)
  timer.value = null
  timer.value = setInterval(() => {
    userState.sendSecond--
    if(userState.sendSecond === 0){
      clearInterval(timer.value)
    }
  },1000)
}
const sendHandle = ()=>{
  apis.sendCodeAPI({address:props.address}).then((res)=>{
    resetHandle()
  })
}
onMounted(()=>{
  resetHandle()
})
</script>

<style lang="scss" scoped>
.resend{
    height: 40px;
  padding:  0 10px;
  background: #df9808;
  color: #000;
  display: flex;
  font-size: 18px;
  font-family: "Prototype";
  line-height: 40px;
  justify-content: center;
  border-radius: 8px;
  .seconds{
    margin-right: 10px;
  }
}
.resend[disabled] {
  cursor: default;
  color: #111D20;
  border-color: #686B63;
  background: #634C15;
}
.pad,.mobile{
  height: 0.4rem;
  padding:  0 0.1rem;
  font-size: 0.18rem;
  line-height: 0.4rem;
  border-radius: 0.08rem;
  .seconds{
    margin-right: 0.1rem;
  }
}
</style>
