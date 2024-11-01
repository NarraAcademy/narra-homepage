<template>
  <Modal v-model:open="open">
    <template #title>
        <span style="color: #F52B11">
        Oops!
        </span>
    </template>
    <div class="content">There is already an account using this email!
      Please enter a different one!</div>
    <img class="error-bg" src="@/assets/images/login-error.png" alt="">
  </Modal>
</template>

<script setup>
import Modal from "@/components/Modal-A.vue";
import {ref} from "vue";

const open = ref(false)
const openHandle = ()=>{
  open.value = true
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
}
.mobile-modal,.pad-modal {
  .content{
    height: 1.5rem;
  }
  .error-bg {
    width: 2.1rem;
    height: 2.1rem;
  }
}
</style>
