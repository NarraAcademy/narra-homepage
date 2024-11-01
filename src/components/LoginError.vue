<template>
  <Modal v-model:open="errorOpen">
    <template #title>
        <span style="color: #F52B11">
        Incorrect Email Address/Password
        </span>
    </template>
    <div class="content">The email address and/or password is incorrect. Please try again.</div>
    <img class="error-bg" src="@/assets/images/login-error.png" alt="">
  </Modal>
</template>

<script setup>
import Modal from "@/components/Modal-A.vue";
import {ref} from "vue";

const errorOpen = ref(false)
const openHandle = ()=>{
  errorOpen.value = true
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
