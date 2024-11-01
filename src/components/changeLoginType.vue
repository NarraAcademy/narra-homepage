<template>
  <Modal v-model:open="open">
    <template v-slot:title>
     Login
    </template>
    <div v-if="loading" class="loading">
      Logging in, please wait...
    </div>
    <div v-else class="content-inner">
      <div class="btn google" @click="googleLoginHandle"><span class="btn-icon"></span>Sign in with Google</div>
      <div class="btn email"  @click="()=>{emit('email');open = false}"><span class="btn-icon"></span>Sign in with Email</div>
    </div>
  </Modal>
</template>

<script setup>
import Modal from "@/components/Modal-A.vue";
import {ref} from "vue";

const emit = defineEmits(['google', 'email'])
const open = ref(false)
const loading = ref(false)
const openHandle = ()=>{
  open.value = true
  loading.value = false
}
const domainName = window.location.origin
// console.log(domainName)
const googleLoginHandle = ()=>{
  loading.value = true
  const url = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${domainName}&access_type=online&client_id=249369560324-m8mjmp3pfgb2qqbnobmt82n04tqv4i38.apps.googleusercontent.com&response_type=code&scope=email&prompt=consent`
  console.log(url)
  // window.close()
  // window.open(url);
  window.location.href=url
}
defineExpose({
  openHandle
})
</script>

<style lang="scss" scoped>
.content-inner{
  padding:0 80px;
}
.btn{
  height: 78px;
  margin: 0 auto 31px;
  border: 1px solid #fff;
  border-radius: 15px;
  background: #000;
  color: #fff;
  font-size: 16px;
  font-family: "KrossNeueGrotesk-Book";
  display: flex;
  align-items: center;
  cursor: pointer;
  .btn-icon{
    margin-right: 20px;
    margin-left: 80px;
    width: 45px;
    height: 45px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
  &:hover{
    color: #000;
    background: linear-gradient(90deg, #FFE33E 0%, #FFAF68 100%);
  }
}
.google{
  .btn-icon{
    background-image: url("@/assets/images/google-icon.svg");
  }
  &:hover{
    .btn-icon {
      background-image: url("@/assets/images/google-icon-hover.svg");
    }
  }
}
.email{
  .btn-icon{
    background-image: url("@/assets/images/email-icon.svg");
  }
  &:hover{
    .icon {
    background-image: url("@/assets/images/email-icon-hover.svg");
    }
  }
}
.loading{
  font-size: 18px;
  font-family: KrossNeueGrotesk-Heavy;
  color: var(--color-1);
}
.mobile-modal{
  .content-inner{
    padding:0 0.4rem;
  }
  .btn{
    height: 0.58rem;
    margin: 0 auto 0.2rem;
    border: 0.01rem solid #fff;
    border-radius: 0.15rem;
    font-size: 0.14rem;
    .btn-icon{
      margin-right: 0.1rem;
      margin-left: 0.2rem;
      width: 0.3rem;
      height: 0.3rem;
    }
  }
  .loading{
    font-size: 0.16rem;
  }
}
</style>
