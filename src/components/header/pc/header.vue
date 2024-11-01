<template>
  <div class="header">
    <div class="header-inner">
      <img @click="onGoToHomePage" class="logo" :src="logoSvg" alt=""/>
      <div class="menu">
        <h3 class="menu-item" :class="{isTouchDevice}" v-for="i in pageLinks" :key="i.name" @click="pushHandle(i.route)">{{i.name }}</h3>
        <LoginBlock v-if="!isLogin">
          <h2 class="menu-item login">Login</h2>
        </LoginBlock>
        <NameBlock v-else/>
      </div>
      <div v-if="appState.musicToggle" class="icon music-on" @click="appState.setMusicToggle()"></div>
      <div v-if="!appState.musicToggle" class="icon music-off" @click="appState.setMusicToggle()"></div>
    </div>
  </div>
</template>

<script setup>
import mixin from '@/mixin/header.js'
import {isTouchDevice} from "@/utils/utils.js";
import LoginBlock from "@/components/LoginBlock.vue";
import NameBlock from "@/components/NameBlock.vue";

defineOptions({
  name: 'header'
})
const {
  openToggle,
  openHandle,
  pageLinks,
  menuOpen,
  pushHandle,
  onGoToHomePage,
  appState,
  logoSvg,
  addIcon,
  removeIcon,
  isLogin,
  permission
} = mixin()
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 138px;
  background: linear-gradient(to bottom, #000 0%, rgba(0, 0, 0, 0) 100%);
  position: fixed;
  top: 0;
  display: flex;
  z-index: 999;
  justify-content: center;
  .header-inner{
    position: relative;
    width: 100%;
    height: 100%;
    max-width: var(--page-inner-width);
    display: flex;
    align-items: center;
    padding: 0 40px;
    justify-content: space-between;
  }
  .logo {
    cursor: pointer;
    height: 36px;
    width: 137.7px;
    margin-right: 50px;
  }
  .menu {
    flex: 1;
    max-width: 800px;
    display: flex;
    align-items: center;
    justify-content: end;
    .menu-item {
      font-size: 24px;
      color: var(--color-1);
      font-family: Prototype;
      cursor: pointer;
      margin: 0 20px;
    }
    .menu-item:not(.isTouchDevice):hover {
      color: #58595B;
    }
    .login{
      color: var(--color-2);
    }
    .login:not(.isTouchDevice):hover {
       color: #58595B;
     }
  }


}
.icon {
  box-shadow: 0px 0px 10px var(--color-2);
  position: absolute;
  top: var(--vh);
  transform: translateY(-400%);
  right:36px;
  width: 60px;
  height: 60px;
  z-index: 998;
  border-radius: 50%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
}
.music-on {
  background: url("@/assets/images/music-on.svg") no-repeat center /100% 100%;

  &:hover {
    background: url("@/assets/images/music-on-hover.svg") no-repeat center /100% 100%;
  }
}

.music-off {
  background: url("@/assets/images/music-off.svg") no-repeat center /100% 100%;

  &:hover {
    background: url("@/assets/images/music-off-hover.svg") no-repeat center /100% 100%;
  }
}
</style>
