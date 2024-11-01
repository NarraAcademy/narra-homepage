<script setup>
import {useAppState} from "@/store/modules/app.js";
import {onMounted, watch} from "vue";
import Modal from "@/components/Modal-A.vue";
import LoginBlock from "@/components/LoginBlock.vue";
import Message from "@/components/Message.vue";

const appState = useAppState()
const resizeFontSize = (doc, win, size) => {
  var docEl = doc.documentElement;
  var clientWidth = docEl.clientWidth;
  if (!clientWidth) return;
  docEl.style.fontSize = clientWidth / size + "px";
  docEl.className = appState.media + '-html'
};
const setMediaHandle = () => {
  if (document.documentElement.clientWidth >= 775) {
    appState.setMedia('pc')
  } else {
    appState.setMedia('mobile')
  }
  setView()
}
const setView = () => {
  //首先我们获得视口高度并将其乘以1%以获得1vh单位的值
  let vh = window.innerHeight
  let vw = window.innerWidth
  // 然后，我们将——vh自定义属性中的值设置为文档的根
  document.documentElement.style.setProperty('--vh', `${vh}px`)
  document.documentElement.style.setProperty('--vw', `${vw}px`)
}

onMounted(() => {
  setMediaHandle()
  setView()
  resizeFontSize(document, window, appState.mediaSize)
  window.addEventListener("resize", () => {
    setMediaHandle()
    resizeFontSize(document, window, appState.mediaSize)
  })

})
watch(() => appState.musicToggle, () => {
  if (document.querySelector('audio')) {
    if (appState.musicToggle) {
      document.querySelector('audio').play()
    } else {
      document.querySelector('audio').pause()
    }
  }
})
// window.addEventListener('scroll', () => {
//   appState.scrollY = window.scrollY
// })
const toQuizHandel = () => {
  window.open('https://quiz-kbwbmaya.narralayer.ai', '_blank')
  appState.quizOpen = false
}
</script>

<template>
  <div class="page" :class="{[appState.media]:true}">
    <audio loop controls>
      <source
          src="https://oss.narralayer.ai/medias/BGM.wav"
          type="audio/mpeg">
    </audio>
    <!--    <ComHeader/>-->
    <router-view/>
    <!--    <Index/>-->
    <!--    <transition-group name="list">-->
    <!--      <RouterView :class="{[className+'-inner']:true,[className+'-has-footer']:$route.meta.footer}" key="main"/>-->
    <!--    </transition-group>-->
    <!--    <ComFooter/>-->
    <Modal v-model:open="appState.modalOpen" :title="appState.modalTitle" :content="appState.modalContent"
           :type="appState.modalType">
    </Modal>
    <message />
    <Modal v-model:open="appState.quizOpen" title="confirm">
      <template #default>
        <div class="text">
          Dear Trainer, Incomplete access detected! Please note that you won’t be able to have the full Narra experience
          if you’re not logged in.
        </div>
        <div class="btn-group">
          <button class="btn-item" @click="()=>{$refs.loginBlock.openHandle();appState.quizOpen = false}">Login</button>
          <button class="btn-item" @click="toQuizHandel">Enter QUIZ</button>
        </div>
      </template>
    </Modal>
    <LoginBlock ref="loginBlock"/>
    <!--    <div class="debug" v-html="appState.debugStr"></div>-->
  </div>
</template>
<style lang="scss" scoped>
.btn-group {
  display: flex;
  justify-content: center;

  .btn-item {
    margin: 20px 10px 0;
    cursor: pointer;
    outline: none;
    padding: 0;
    width: 234px;
    height: 48px;
    gap: 8px;
    border-radius: 0px 0px 8px 8px;
    border: 1px solid #df9808;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    font-size: 16px;
    font-weight: bold;
    background: #DF9808;
    font-family: 'KrossNeueGrotesk-Heavy';

    &:last-child {
      color: #df9808;
      background: transparent;
    }
  }
}

</style>
<style>
@import "@/assets/fonts/KrossNeueGrotesk-Bold/KrossNeueGrotesk-Bold.css";
@import "@/assets/fonts/KrossNeueGrotesk-BoldItalic/KrossNeueGrotesk-BoldItalic.css";
@import "@/assets/fonts/KrossNeueGrotesk-Book/KrossNeueGrotesk-Book.css";
@import "@/assets/fonts/KrossNeueGrotesk-BookItalic/KrossNeueGrotesk-BookItalic.css";
@import "@/assets/fonts/KrossNeueGrotesk-Heavy/KrossNeueGrotesk-Heavy.css";
@import "@/assets/fonts/KrossNeueGrotesk-HeavyItalic/KrossNeueGrotesk-HeavyItalic.css";
@import "@/assets/fonts/KrossNeueGrotesk-Italic/KrossNeueGrotesk-Italic.css";
@import "@/assets/fonts/KrossNeueGrotesk-Light/KrossNeueGrotesk-Light.css";
@import "@/assets/fonts/KrossNeueGrotesk-LightItalic/KrossNeueGrotesk-LightItalic.css";
@import "@/assets/fonts/KrossNeueGrotesk-Regular/KrossNeueGrotesk-Regular.css";
@import "@/assets/fonts/KrossNeueGrotesk-Thin/KrossNeueGrotesk-Thin.css";
@import "@/assets/fonts/KrossNeueGrotesk-ThinItalic/KrossNeueGrotesk-ThinItalic.css";
@import "@/assets/fonts/Montserrat-Regular/Montserrat-Regular.css";
@import "@/assets/fonts/Prototype/Prototype.css";
@import "@/assets/fonts/RAXON-RAXON-Outline/RAXON-RAXON-Outline.css";
@import "@/assets/fonts/RAXON-RAXON-OutlineSlant/RAXON-RAXON-OutlineSlant.css";
@import "@/assets/fonts/RAXON-Regular/RAXON-Regular.css";
@import "@/assets/fonts/RAXON-RegularSlant/RAXON-RegularSlant.css";

:root {
  --page-inner-width: 1440px;
  --vh: 100vh;
  --vw: 100vw;
  --color-1: #ede4cc;
  --color-2: #FAAC07;
  --color-3: #0A1619;
  --color-4: #152226;
  --color-5: #f0d35f;
  --color-6: #cdcdcd;
  --color-7: #FFE61B;
  --color-8: #737578;
  --color-9: #111D20;

}

body,
div,
dl,
dt,
dd,
tr,
td,
th,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
br,
img,
table,
input,
form,
a,
p,
textarea {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-weight: normal;
  margin-block: 0;
  margin-inline: 0;
}

a {
  text-decoration: none;
  display: block;
}

img {
  border: 0;
  display: block;
}

button {
  display: block;
  outline: none;
  border: none;
  background: transparent;
  padding: 0;
}

.clearfloat {
  zoom: 1;
}

.clearfloat:after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
}

.swiper-free-mode > .swiper-wrapper {
  transition-timing-function: linear !important;
}

* {
  -webkit-tap-highlight-color: transparent
}

html {
  background: #0E171A;
}

.page {
  position: relative;
  min-height: var(--vh);
  width: 100%;
  //overflow-y: hidden;
  overflow-x: hidden;
  background: radial-gradient(50% 50% at 50% 50%, #1D2C31 0%, #0E171A 100%);
}

audio {
  position: absolute;
  z-index: -999;
  opacity: 0;
  width: 0;
  height: 0;
}

.debug {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.41);
  color: #ffffff;
  font-size: 14px;
  width: 500px;
  z-index: 99999999;
  max-height: 500px;
  overflow: auto;
}

.index {
  width: 100%;
  //max-width: var(--page-inner-width);
  margin: 0 auto;
  overflow: hidden;
}

[class*='enter-active'], [class*='leave-active'] {
  transition: all 0.5s ease 0s;
}

.opacity-enter-from,
.opacity-leave-to {
  opacity: 0;
}

.left-in-enter-from,
.left-in-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.right-in-enter-from,
.right-in-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.bottom-in-enter-from,
.bottom-in-leave-to {
  opacity: 0;
  transform: translateY(200%);
}

.scale-in-enter-from,
.scale-in-leave-to {
  opacity: 0;
  transform: scale(0);
}
.hidden{
  display: none;
}
code{
  background: rgba(153, 153, 153, 0.5);
  border-radius: 2px;
  padding: 0 3px;
}

pre{
  background: rgba(153, 153, 153, 0.5);
  padding-left: 10px;
  border-radius: 8px;
  code{
    padding: 0;
    background:transparent;
  }
}
</style>
