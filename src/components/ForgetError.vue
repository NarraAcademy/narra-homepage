<template>
  <Modal v-model:open="open">
    <template #title>
        <span style="color: #F52B11">
        Invalid Email
        </span>
    </template>
    <div class="content">We can’t find this email in our records. Please try again. <br><br>Don’t have an account?<br>
      You can sign up <a @click="handle">here</a>.</div>
    <img class="error-bg" src="@/assets/images/login-error.png" alt="">
  </Modal>
</template>

<script setup>
import Modal from "@/components/Modal-A.vue";
import {ref} from "vue";

const open = ref(false)
const emit =defineEmits(["create"]);
const openHandle = ()=>{
  open.value = true
}
const handle =()=>{
  open.value = false
  emit('create')
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
a {
  display: inline-block;
  font-family: 'KrossNeueGrotesk-Regular';
  text-decoration: underline;
  cursor: pointer;
  color: #FAAC07;
}
</style>
