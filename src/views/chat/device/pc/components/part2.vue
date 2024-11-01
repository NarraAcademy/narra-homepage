<template>
  <div class="part2">
    <div class="page-center">
      <div class="sider">
        <div class="menu">
          <div class="menu-item" ref="sessionGroupEl" @click="sessionGroupActive = i.groupId"
               :class="{'menu-item-active':sessionGroupActive === i.groupId}" v-for="i in sessionList" :key="i.groupId">
            {{ i.groupName }}
          </div>
        </div>
        <div class="add-btn" @click="addSessionGroupHandle">
          <img class="icon" :src="addIcon"/>
          Create New Topic
        </div>
        <div class="img">
          <div class="zai">
            <img class="zai-gif" src="https://oss.narralayer.ai/images/mascot-3.gif" alt="">
          </div>
          <div class="zai-text">
            “ZAI is eager to chat with you~”
          </div>
        </div>
      </div>
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
              <div class="text" v-html="marked(i.text+(i.id === cursorId?`<span class=${(i.id === cursorId?'cursor':'hidden')} ></span>`:''))"/>
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
    </div>
  </div>
</template>

<script setup>
import mixin from '@/mixin/chat.js'
import addIcon from '@/assets/images/plus-icons.png'
import zaiAvatar from '@/assets/images/zai-avatar.svg'
import userAvatar from '@/assets/images/user-avatar.png'
import sendIcon from '@/assets/images/send-icon.svg'
import {nextTick, ref, watch} from "vue";
import {useUserState} from "@/store/modules/user.js";

const userState = useUserState()

const textarea = ref()
const sessionItemEl = ref()
const sessionGroupEl = ref()
const {
  sessionGroupActive,
  submit,
  fetchStopVisiable,
  user_say,
  send_ready,
  fetchStopHandle,
  sessionList,
  cursorId,
  addSessionGroupHandle,
  chatList,
  _done,
  addGroupDone,
  marked
} = mixin()
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
    if (sessionGroupEl?.value?.length) {
      // console.log(sessionGroupEl.value.at(sessionGroupActive.value).offsetTop)
      sessionGroupEl.value.at(sessionGroupActive.value).parentNode.scrollTop = (sessionGroupEl.value.at(sessionGroupActive.value - 1).offsetTop - 155) || 0
    }
  })
}, {
  deep: true,
})
watch(sessionGroupEl, () => {
  nextTick(() => {
    console.log(sessionGroupEl.value.at(sessionGroupActive.value).parentNode.scrollTop)
    sessionGroupEl.value.at(sessionGroupActive.value).parentNode.scrollTop = 0
  })
})
</script>

<style lang="scss" scoped>
.part2 {
  width: 100%;
}

.page-center {
  width: 100%;
  max-width: var(--page-inner-width);
  margin: 0 auto 70px;
  display: flex;
  padding: 0 40px;
}

.sider {
  width: 25%;
  margin-right: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  container-type: inline-size;
  justify-content: center;
}

.menu {
  width: 100%;
  aspect-ratio: 310 / 375;
  padding: 0 22px;
  border-radius: 8px;
  overflow-x: hidden;
  overflow-y: auto;
  border: 1px solid #32434A;
  //display: flex;
  margin-bottom: 20px;
  flex-direction: column;

  &::-webkit-scrollbar {
    display: none;
  }

  .menu-item {
    flex-shrink: 0;
    container-type: inline-size;
    width: 100%;
    margin: 3% 0;
    font-size: 8cqw;
    aspect-ratio: 286.48 / 101.65;
    display: flex;
    align-items: center;
    font-family: "Prototype";
    color: var(--color-1);
    padding-left: 15%;
    background: url("@/assets/images/chat-item-bg.svg") no-repeat center center /100% 100%
  }

  .menu-item-active {
    color: var(--color-2);
    background: url("@/assets/images/chat-item-bg-active.svg") no-repeat center center /100% 100%
  }
}

.add-btn {
  width: 80%;
  aspect-ratio: 234 / 48;
  background: var(--color-7);
  border: 1px solid var(--color-1);
  border-radius: 0 0 8px 8px;
  container-type: inline-size;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 20px;

  .icon {
    width: 11cqw;
    height: 11cqw;
    margin-right: 1cqw;
  }

  font-size: 6cqw;
  font-family: 'KrossNeueGrotesk-Heavy';
  color: var(--color-4);
}

.img {
  display: flex;
  flex-direction: column;
  align-items: center;
  container-type: inline-size;
  width: 100%;

  .zai {
    width: 100%;
    aspect-ratio: 310 / 275;
    background: url("@/assets/images/chat-zai-bg.png") no-repeat center center /100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .zai-gif {
      width: 150%;
    }
  }

  .zai-text {
    width: 85%;
    margin-top: -50px;
    backdrop-filter: blur(10px); /* 毛玻璃效果 */
    aspect-ratio: 234 / 72;
    background: url("@/assets/images/chat-zai-text-bg.svg") no-repeat center center /100% 100%;
    display: flex;
    padding: 0 5%;
    align-items: center;
    justify-content: center;
    font-size: 6cqw;
    color: var(--color-1);
    font-family: "KrossNeueGrotesk-Regular";
  }
}

.content {
  flex: 1;
  aspect-ratio: 968 / 973;
  background: url("@/assets/images/chat-block-bg.svg") no-repeat center /100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &-inner {
    width: 85%;
    height: 75%;
    display: flex;
    flex-direction: column;

    .message-list {
      padding-right: 1%;
      flex: 1;
      overflow-y: auto;
      /* 整体滚动条样式 */
      &::-webkit-scrollbar {
        height: 6px;
        width: 6px; /* 滚动条宽度 */
      }

      /* 滚动条轨道 */
      &::-webkit-scrollbar-track {
        background: transparent; /* 轨道背景色 */
      }

      /* 滚动条滑块 */
      &::-webkit-scrollbar-thumb {
        background: rgba(184, 184, 184, 0.5); /* 滑块颜色 */
        border-radius: 3px; /* 滑块圆角 */
      }
    }

    .message-item {
      display: flex;
      flex-direction: column;
      align-items: end;
      margin-bottom: 11px;

      .info {
        margin-bottom: 8px;
        display: flex;
        align-items: center;

        .avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }

        .name {
          font-size: 14px;
          margin: 0 8px;
          font-family: "Prototype";
          color: var(--color-1);
        }
      }

      .text {
        max-width: 90%;
        border-radius: 8px;
        //white-space: pre-wrap;
        overflow-wrap: break-word;
        padding: 10px;
        font-size: 16px;
        line-height: 24px;
        color: var(--color-1);
        font-family: "KrossNeueGrotesk-Regular";
        background: var(--color-4);
      }

      &:last-child {
        margin-bottom: 45px;
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
  height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  position: relative;

  form {
    position: relative;
    width: 100%;
    height: 44px;
  }

  textarea {
    display: block;
    height: 44px;
    width: 100%;
    background: transparent;
    outline: none;
    border: 1px solid var(--color-1);
    border-radius: 8px;
    padding: 10px 40px 0 10px;
    resize: none;
    /* 整体滚动条样式 */
    &::-webkit-scrollbar {
      height: 6px;
      width: 6px; /* 滚动条宽度 */
    }

    /* 滚动条轨道 */
    &::-webkit-scrollbar-track {
      background: transparent; /* 轨道背景色 */
    }

    /* 滚动条滑块 */
    &::-webkit-scrollbar-thumb {
      background: rgba(184, 184, 184, 0.5); /* 滑块颜色 */
      border-radius: 3px; /* 滑块圆角 */
    }
  }

  textarea, textarea::placeholder, textarea:focus {
    font-size: 16px;
    color: var(--color-1);
    font-family: 'KrossNeueGrotesk-Regular';
  }


  img {
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 10px;
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    transform: translateY(-50%);
  }

  .fetchStopVisiable {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40px;
    font-family: 'KrossNeueGrotesk-Regular';
    position: absolute;
    top: -40px;
    padding: 0 10px;
    left: 0;
    font-size: 12px;
    color: var(--color-1);

    span {
      display: block;
      padding: 5px 10px;
      border-radius: 8px;
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

.cursor {
  display: inline-block;
  width: 3px;
  height: 18px;
  vertical-align: middle;
  animation: cursorAnimation 1s infinite steps(1);
}

</style>
