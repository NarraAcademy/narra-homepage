<template>
  <div class="chatting">
    <ComHeader/>
    <img class="back" @click="router.back()" :src="backIcon"/>
    <div class="content">
      <div class="content-inner">
        <div class="message-list">
          <div class="message-item" ref="sessionItemEl" :class="{'message-item-zai':i.type === 0}"
               v-for="i in chatList">
            <div class="info">
              <img v-if="i.type === 0" class="avatar" :src="zaiAvatar" alt="">
              <div class="name">{{ i.type === 0 ? 'ZAI' : userState.userInfo.User_name }}</div>
              <img v-if="i.type === 1" class="avatar" :src="userAvatar" alt="">
            </div>
            <div class="text" v-html="marked(i.text+(i.id === cursorId?`<span class=${(i.id === cursorId?'cursor-mobile':'hidden')} ></span>`:''))"/>
          </div>
        </div>
        <div class="search-input">
          <form @submit.prevent="submit">
              <textarea ref="textarea" :disabled="!fetchStopVisiable"
                        :placeholder="fetchStopVisiable?'Type here':'Typing...'"
                        @keydown.enter="send_ready" v-model="user_say" type="text"/>
            <img :src="sendIcon" @click="submit"/>
            <div v-if="!fetchStopVisiable" class="fetchStopVisiable">
              ZAI is Typing...... <span @click="fetchStopHandle">stop responding</span>
            </div>
          </form>
        </div>
      </div>
    </div>
    <ComFooter/>
  </div>
</template>

<script setup>
import mixin from '@/mixin/chat.js'
import {nextTick, onMounted, ref, watch} from "vue";
import ComHeader from "@/components/header/mobile/header.vue";
import ComFooter from "@/components/footer/mobile/footer.vue";
import sendIcon from '@/assets/images/send-icon.svg'
import zaiAvatar from '@/assets/images/zai-avatar.svg'
import userAvatar from '@/assets/images/user-avatar.png'
import backIcon from '@/assets/images/back-icon.svg'
import {useRoute, useRouter} from "vue-router";
import storage from "store";
import {useUserState} from "@/store/modules/user.js";

const userState = useUserState()
const router = useRouter()
const textarea = ref()
const sessionItemEl = ref()
const route = useRoute()
const {
  submit,
  fetchStopVisiable,
  user_say,
  send_ready,
  fetchStopHandle,
  cursorId,
  sessionList,
  chatList,
  sessionGroupActive,
  addGroupDone,
  _done,
  marked
} = mixin()
onMounted(() => {
  sessionGroupActive.value = +route.params.id
  storage.set('sessionGroupActive', sessionGroupActive.value)
})
watch(_done, () => {
  if (_done) {
    textarea.value.focus()
  }
})
watch([sessionList, addGroupDone], () => {
  nextTick(() => {
    if (sessionItemEl?.value?.length) {
      sessionItemEl.value.at(-1).parentNode.scrollTop = sessionItemEl.value.at(-1).offsetTop
      // sessionItemEl.value.at(-1).scrollIntoView({behavior: "smooth",block: "end"})
    }
  })
}, {
  deep: true,
})
</script>

<style lang="scss" scoped>
.chatting{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: var(--vh);
}
.back{
  margin-top: 1.27rem;
  width: 0.24rem;
  height: 0.24rem;
  margin-left: 0.24rem;
}
.content {
  flex: 1;
  margin: 0.15rem auto 0.6rem;
  min-height: 6.2rem;
  width: 3.45rem;
  background: url("@/assets/images/chat-block-mobile-bg.svg") no-repeat center /100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &-inner {
    width: 92%;
    height: 86%;
    display: flex;
    flex-direction: column;

    .message-list {
      padding-right: 2%;
      flex: 1;
      overflow-y: auto;
      /* 整体滚动条样式 */
      &::-webkit-scrollbar {
        height: 0.05rem;
        width: 0.05rem; /* 滚动条宽度 */
      }

      /* 滚动条轨道 */
      &::-webkit-scrollbar-track {
        background: transparent; /* 轨道背景色 */
      }

      /* 滚动条滑块 */
      &::-webkit-scrollbar-thumb {
        background: rgba(184, 184, 184, 0.5); /* 滑块颜色 */
        border-radius: 0.03rem; /* 滑块圆角 */
      }
    }

    .message-item {
      display: flex;
      flex-direction: column;
      align-items: end;
      //margin-bottom: 0.1rem;

      .info {
        margin-bottom: 0.08rem;
        display: flex;
        align-items: center;

        .avatar {
          width: 0.32rem;
          height: 0.32rem;
          border-radius: 50%;
        }

        .name {
          font-size: 0.14rem;
          margin: 0 0.08rem;
          font-family: "Prototype";
          color: var(--color-1);
        }
      }

      .text {
        margin: 0;
        max-width: 60%;
        border-radius: 0.08rem;
        //white-space: pre-wrap;
        overflow-wrap: break-word;
        padding: 0.1rem;
        font-size: 0.16rem;
        line-height: 0.25rem;
        color: var(--color-1);
        font-family: "KrossNeueGrotesk-Regular";
        background: var(--color-4);
      }

      &:last-child {
        margin-bottom: 0.45rem;
      }
    }

    .message-item-zai {
      align-items: start;

      .text {
        color: var(--color-9);
        background: var(--color-7);
      }
    }
  }
}

.search-input {
  height: 0.44rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  position: relative;

  form {
    position: relative;
    width: 100%;
    height: 0.44rem;
  }

  textarea {
    display: block;
    height: 0.44rem;
    width: 100%;
    background: transparent;
    outline: none;
    border: 1px solid var(--color-1);
    border-radius: 0.08rem;
    padding: 0.1rem 0.4rem 0 0.1rem;
    resize: none;
    /* 整体滚动条样式 */
    &::-webkit-scrollbar {
      height: 0.06rem;
      width: 0.06rem; /* 滚动条宽度 */
    }

    /* 滚动条轨道 */
    &::-webkit-scrollbar-track {
      background: transparent; /* 轨道背景色 */
    }

    /* 滚动条滑块 */
    &::-webkit-scrollbar-thumb {
      background: rgba(184, 184, 184, 0.5); /* 滑块颜色 */
      border-radius: 0.03rem; /* 滑块圆角 */
    }
  }

  textarea, textarea::placeholder, textarea:focus {
    font-size: 0.16rem;
    color: var(--color-1);
    font-family: 'KrossNeueGrotesk-Regular';
  }


  img {
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 0.1rem;
  }

  img {
    width: 0.24rem;
    height: 0.24rem;
    border-radius: 50%;
    transform: translateY(-50%);
  }

  .fetchStopVisiable {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 0.4rem;
    font-family: 'KrossNeueGrotesk-Regular';
    position: absolute;
    top: -0.4rem;
    padding: 0 0.1rem;
    left: 0;
    font-size: 0.12rem;
    color: var(--color-1);

    span {
      display: block;
      padding: 0.05rem 0.1rem;
      border-radius: 0.08rem;
      border: 1px solid var(--color-2);
      color: var(--color-2);
      cursor: pointer;
    }
  }
}
</style>
<style>
@keyframes cursorAnimation {
  0% {
    background: transparent;
  }
  50% {
    background: var(--color-3);
  }
  100% {
    background: transparent;
  }
}

.cursor-mobile {
  display: inline-block;
  width: 0.03rem;
  height: 0.18rem;
  vertical-align: middle;
  animation: cursorAnimation 1s infinite steps(1);
}

</style>
