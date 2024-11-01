<template>
  <div>
    <div style="height: 100%;width: 100%" @click="openHandle">
      <slot >
      </slot>
    </div>
    <ChangeLoginType ref="changeLoginType" @email="$refs.loginBlock.openHandle()" />
    <Login ref="loginBlock"  @error="$refs.loginError.openHandle()" @create="$refs.createAccount.openHandle()" @forget="$refs.SendEmail.openHandle()"/>
    <LoginError ref="loginError" />
    <CreateAccount ref="createAccount"  @success="(data)=>{$refs.createTakeCode.openHandle(data);$refs.loginBlock.closeHandle()}"/>
<!--    <CreateError ref="createError" />-->
    <CreateSuccess ref="createSuccess" @login="(data)=>$refs.loginBlock.openHandle(data)"/>
    <SendEmail ref="SendEmail"
                    @success="(address)=>{$refs.loginBlock.closeHandle();$refs.codeVerification.openHandle(address)}"
                    @error="()=>{$refs.loginBlock.closeHandle();$refs.forgetError.openHandle()}" />
    <CodeVerification ref="codeVerification" @success="$refs.forgetSuccess.openHandle()" @error="modal.open({
               title:'error',
               content:'Verification failed! Please try again. ',
               type:'error'
               })"/>
    <ForgetError ref="forgetError" @create="()=>{$refs.createAccount.openHandle();$refs.SendEmail.closeHandle()}" />
    <ForgetSuccess ref="forgetSuccess" @close='$refs.loginBlock.openHandle()'/>
    <CreateTakeCode ref="createTakeCode" @success="(data)=>{$refs.createSuccess.openHandle(data);$refs.createAccount.closeHandle()}" @error="$refs.verificationFailed.openHandle()" />
    <VerificationFailed ref="verificationFailed" />
  </div>
</template>

<script setup>

import LoginError from "@/components/LoginError.vue";
// import CreateError from "@/components/CreateError.vue";
import CreateAccount from "@/components/CreateAccount.vue";
import Login from "@/components/Login.vue";
import CreateSuccess from "@/components/CreateSuccess.vue";
import SendEmail from "@/components/SendEmail.vue";
import CodeVerification from "@/components/CodeVerification.vue";
import ForgetError from "@/components/ForgetError.vue";
import CreateTakeCode from "@/components/CreateTakeCode.vue";
import VerificationFailed from "@/components/VerificationFailed.vue";
import {ref} from "vue";
import {modal} from "@/utils/utils.js";
import ForgetSuccess from "@/components/ForgetSuccess.vue";
import ChangeLoginType from "@/components/changeLoginType.vue";

const changeLoginType = ref()
const openHandle =()=>{
  changeLoginType.value.openHandle()
}
defineExpose({
  openHandle
})
</script>

<style lang="less" scoped>

</style>
