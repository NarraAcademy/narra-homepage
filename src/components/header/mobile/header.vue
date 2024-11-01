<template>
  <div class="header">
    <div class="header-content">
      <!-- logo -->
      <div class="header-left">
        <img @click="onGoToHomePage" class="logo" :src="logoSvg" alt=""/>
      </div>
      <!-- 右上角操作按钮 -->
      <div class="menu">
        <LoginBlock v-if="!isLogin">
          <h2 class="login">Login</h2>
        </LoginBlock>
        <NameBlock v-else/>
        <!--        <div v-if="appState.musicToggle" class="icon music-on" @click="appState.setMusicToggle()"></div>-->
        <!--        <div v-if="!appState.musicToggle" class="icon music-off" @click="appState.setMusicToggle()"></div>-->
        <div @click="openToggle" v-if="menuOpen" class="icon menuIcon-open"></div>
        <div @click="openToggle" v-else class="icon menuIcon "></div>
      </div>
      <div class="menu-content" :class="{'menu-content-open':menuOpen}"  @click="closeMenuHandle">
        <transition name="right-in">
          <div  v-if="menuOpen" class="menu-main">
            <div class="icon-top">
              <img @click="onGoToHomePage" class="logo" :src="logoSvg" alt=""/>
              <div @click="menuOpen = false" class="close-icon"></div>
            </div>
            <div class="menu-item" v-for="(i) in pageLinks" :key="i.name">
              <div @click="openHandle(i.name)" class="menu-item-title" :class="i.open?'menu-item-title-open':''">
                <h3 @click="!i.children&&pushHandle(i.route)">{{ i.name }}</h3><span v-if="i.children"> <img
                  class="icon" v-if="!i.open" :src="addIcon"><img class="icon" v-else :src="removeIcon" alt=""></span>
              </div>
              <div v-if="i.children" class="sub-menu" :class="i.open?'menu-open':''"
                   :style="{height: i.open?((0.18*i.children.length)+(0.16*(i.children.length-1)))+'rem':'0rem'}">
                <h5 @click="pushHandle(it.id)" v-for="it in i.children" class="menu-item">{{ it.name }}</h5>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <div v-if="appState.musicToggle" class="music-icon music-on" @click="appState.setMusicToggle()"></div>
    <div v-if="!appState.musicToggle" class="music-icon music-off" @click="appState.setMusicToggle()"></div>
  </div>
</template>
<script setup>
import headerMixin from "@/mixin/header.js";
import {onMounted, watch} from "vue";
import {scrollMove, scrollStop} from "@/utils/utils.js";
import LoginBlock from "@/components/LoginBlock.vue";
import NameBlock from "@/components/NameBlock.vue";
import {useUserState} from "@/store/modules/user.js";

const userState = useUserState()
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
  permission,
  closeMenuHandle,
  clickHandle
} = headerMixin()

onMounted(() => {
  permission()
})

watch(menuOpen, () => {
  if (menuOpen.value) {
    scrollStop()
  } else {
    scrollMove()
  }
})
</script>

<style lang="scss" scoped>
.header {
  padding-top: 0.15rem;
  position: fixed;
  z-index: 100;
  background: linear-gradient(to bottom, #000 0%, rgba(0, 0, 0, 0) 100%);
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;

  &-content {
    width: 3.45rem;
    height: 0.48rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .logo {
      cursor: pointer;
      height: 0.24rem;
      width: 0.918rem;
    }
  }

  .login {
    font-size: 0.18rem;
    line-height: 0.32rem;
    color: var(--color-2);
    display: flex;
    font-family: "Prototype";
    align-items: center;
    cursor: pointer;
    height: 100%;
  }


  .menu {
    user-select: none;
    position: relative;
    //z-index: 100;
    display: flex;
    gap: 0.12rem;

    .icon {
      width: 0.28rem;
      height: 0.28rem;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: center;
    }


    //.music-on {
    //  background: url("@/assets/images/music-on.svg") no-repeat center /100% 100%;
    //  //:hover{
    //  //  background: url("@/assets/images/music-on-hover.svg") no-repeat center /100% 100%;
    //  //}
    //}
    //
    //.music-off {
    //  background: url("@/assets/images/music-off.svg") no-repeat center /100% 100%;
    //  //:hover{
    //  //  background: url("@/assets/images/music-off-hover.svg") no-repeat center /100% 100%;
    //  //}
    //}
    //
    .menuIcon {
      background-image: url("@/assets/images/menu.svg");

      //&:hover {
      //  background-image: url("@/assets/images/pc/header/menu-icon-active.svg");
      //}
    }
    //
    //.menuIcon-open {
    //  background-image: url("@/assets/images/pc/header/menu-icon-open.svg");
    //
    //  //&:hover {
    //  //  background-image: url("@/assets/images/pc/header/menu-icon-open-active.svg");
    //  //}
    //}

  }

  .menu-content {
    background: rgba(24, 24, 24, 0.64);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 98;
    display: none;
  }
  .menu-content-open{
    display: block;
  }

  .menu-main {
    background: linear-gradient(185.34deg, #141A20 0.39%, #37474E 55.64%, #1B232B 98.68%);
    position: fixed;
    top: 0;
    right: 0;
    width: 70vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 0.32rem;
    padding:0 0.24rem 0.24rem;
    .icon-top{
      margin: 0.25rem 0 0.1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        cursor: pointer;
        height: 0.24rem;
        width: 0.918rem;
      }
      .close-icon{
        width: 0.28rem;
        height: 0.28rem;
        background: url("@/assets/images/close-icon.svg") no-repeat center /100% 100%;
      }
    }
    .menu-item {
      display: flex;
      font-family: Prototype;
      font-size: 0.18rem;
      font-weight: 400;
      line-height: 0.24rem;
      color: #EDE4CC;
      flex-direction: column;

      .menu-item-title {
        cursor: pointer;
        transition: 0.3s;
        display: flex;
        align-items: center;

        .icon {
          width: 0.4rem;
          height: 0.4rem;
          margin-left: 0.08rem;
        }

        //&:hover {
        //  color: #58595B;
        //}
      }

      .menu-item-title-open {
        color: #58595B;
      }

    }

    .sub-menu {
      overflow: hidden;
      height: 0;
      opacity: 0;
      transition: 0.3s;
      display: flex;
      flex-direction: column;
      gap: 0.16rem;
      margin-top: 0px;

      .menu-item {
        cursor: pointer;
        font-size: 0.14rem;
        line-height: 0.18rem;

        //&:hover {
        //  color: #58595B;
        //}
      }
    }

    .menu-open {
      opacity: 1;
      margin-top: 0.16rem;
    }
  }

}
.music-icon {
  box-shadow: 0rem 0rem 0.08rem var(--color-2);
  position: absolute;
  top: var(--vh);
  transform: translateY(-400%);
  right:0.3rem;
  width: 0.36rem;
  height: 0.36rem;
  z-index: 88;
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
