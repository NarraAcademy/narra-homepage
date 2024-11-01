<template>
  <div ref="username" :class="appState.media+'-username'" style="display: flex;align-items: center;position: relative">
    <div  class='username' @click="open =!open">{{userState.userInfo.User_name}} <img class="icon" :class="{'icon-active':open}" :src="DownIcon"  /></div>
    <div  class="userCenter" :style="{height:open?(appState.media === 'pc'?((60*routerList.length)+'px'):appState.media.pad?((0.6*routerList.length)+'rem'):((0.5*routerList.length)+'rem')):'0'}">
      <div v-for="i in routerList" :key="i.link" class="item" :class="{hasTouch:isTouchDevice}" @click="i.handle()">{{i.name}}</div>
    </div>
    <account-center-modal ref="accountCenterModal"/>
  </div>
</template>

<script setup>
import DownIcon from '@/assets/images/DownIcon.svg'
import {useAppState} from "@/store/modules/app.js";
import {ref, watch} from "vue";
import {useUserState} from "@/store/modules/user.js";
import {useRouter} from "vue-router";
import {isTouchDevice} from "@/utils/utils.js";
import AccountCenterModal from "@/components/AccountCenterModal/index.vue";

const appState = useAppState()
const userState = useUserState()
const open = ref(false)
const router = useRouter()
const username = ref()
const accountCenterModal = ref()
const routerList = [
  {
    name:'Account Settings',
    link:'/accountSetting',
    handle:()=>{
      accountCenterModal.value.openHandle()
    }
  },
  {
    name:'Logout',
    link:'',
    handle:()=>{
      userState.logoutHandle()
    }
  }
]
const clickHandle = (e) => {
  // console.log(open.value)
  // console.log(username.value,e.target)
  if(!username.value?.contains(e.target)){
    console.log(456)
    open.value = false
  }
}
watch(open, () => {
    if (open.value) {
      window.addEventListener('touchend',clickHandle)
      window.addEventListener("click", clickHandle, false);
    } else {
      window.removeEventListener('touchend',clickHandle)
      window.removeEventListener("click", clickHandle);
    }
})
</script>

<style lang="scss" scoped>
.username {
  font-size: 24px;
  line-height: 32px;
  color: #EDE4CC;
  display: flex;
  font-family: "Prototype";
  align-items: center;
  cursor: pointer;
  .icon{
    margin-left: 8px;
    width: 24px;
    height: 24px;
    transition: 0.3s;
  }
  .icon-active{
    transform: rotateX(-180deg);
  }
}
.userCenter{
  position: absolute;
  top: 100%;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 180px;
  background:#152226 ;
  overflow: hidden;
  .item{
    padding-left: 10px;
    cursor: pointer;
    font-size: 20px;
    line-height: 26px;
    height: 60px;
    text-align: center;
    display: flex;
    align-items: center;
    color: #EDE4CC;
    font-family: "Prototype";
    &:not(.hasTouch):hover{
      color: #58595B;
    }
  }
}

.mobile-username {
  .username {
    font-size: 0.14rem;
    line-height: 0.18rem;
    .icon{
      margin-left: 0.08rem;
      width: 0.24rem;
      height: 0.24rem;
    }
  }
  .userCenter{
    width: 1.2rem;
    .item{
      padding-left: 0.05rem;
      font-size: 0.14rem;
      line-height: 0.18rem;
      height: 0.5rem;
    }
  }
}
</style>
