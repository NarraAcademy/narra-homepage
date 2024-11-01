<template>
  <Modal v-model:open="open">
    <template #title>
        <span style="color: #12B424">
        Congratulations
        </span>
    </template>
    <div class="content">Welcome to Narra! We’re looking forward to chatting with you!<br><span class="loading"></span></div>
    <img class="error-bg" src="@/assets/images/create-success.png" alt="">
  </Modal>
</template>

<script setup>
import Modal from "@/components/Modal-A.vue";
import {ref} from "vue";

const open = ref(false)
const emit = defineEmits(['login'])
const openHandle = (data)=>{
  open.value = true
  setTimeout(()=>{
    open.value = false
    emit('login',data)
  },2000)
}
defineExpose({
  openHandle
})
</script>

<style lang="scss" scoped>
.content{
  height: 150px;
}
.error-bg {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 210px;
  height: 210px;
  z-index: 0;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% calc(100% - 14px), 0 calc(100% + 160px),0 0 );
}

.loading{
  font-family: "KrossNeueGrotesk-Heavy";
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #DF9808;
  &:after{
    content: 'loadiing';
    animation: loading 2s linear infinite;
  }
}
@keyframes loading {
  0%{
    content: 'loadiing';
  }
  30%{
    content: 'loadiing .';
  }
  60%{
    content: 'loadiing . .';
  }
  100%{
    content: 'loadiing . . .';
  }
}
.mobile-modal,.pad-modal {
  .content{
    height: 1.5rem;
  }
  .error-bg {
    width: 2.1rem;
    height: 2.1rem;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 100% calc(100% - 0.14rem), 0 calc(100% + 1.6rem),0 0 );
  }
  .loading{
    font-size: 0.16rem;
    line-height: 0.2rem;
  }
}
.mobile-modal{
  .error-bg {
    width: 1.8rem;
    height: 1.8rem;
  }
}
</style>
