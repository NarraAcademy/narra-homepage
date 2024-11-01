<template>
  <div class="part2">
    <div class="page-center">
      <div class="sider">
        <div class="menu">
          <div class="menu-item" ref="sessionGroupEl" @click="clickHandle(i)"
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
<!--      <div class="content">-->
<!--        <div class="content-inner">-->
<!--          <div class="message-list">-->
<!--            <div class="message-item" ref="sessionItemEl" :class="{'message-item-zai':i.type === 0}"-->
<!--                 v-for="i in chatList">-->
<!--              <div class="info">-->
<!--                <img v-if="i.type === 0" class="avatar" :src="zaiAvatar" alt="">-->
<!--                <div class="name">{{ i.type === 0 ? 'ZAI' : 'USERNAME' }}</div>-->
<!--                <img v-if="i.type === 1" class="avatar" :src="userAvatar" alt="">-->
<!--              </div>-->
<!--              <pre class="text" v-html="i.text+`<span class=${(i.id === cursorId?'cursor':'')} ></span>`"/>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="search-input">-->
<!--            <form @submit.prevent="submit">-->
<!--            <textarea ref="textarea" :disabled="!fetchStopVisiable"-->
<!--                      :placeholder="fetchStopVisiable?'Type here':'Typing...'"-->
<!--                      @keydown.enter="send_ready" v-model="user_say" type="text"/>-->
<!--              <img :src="sendIcon" @click="submit"/>-->
<!--              <div v-if="!fetchStopVisiable" class="fetchStopVisiable">-->
<!--                ZAI is Typing...... <span @click="fetchStopHandle">stop responding</span>-->
<!--              </div>-->
<!--            </form>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script setup>
import mixin from '@/mixin/chat.js'
import addIcon from '@/assets/images/plus-icons.png'
import {nextTick, onMounted, ref, watch} from "vue";
import {useRouter} from "vue-router";
import storage from "store";

const textarea = ref()
const sessionItemEl = ref()
const sessionGroupEl = ref()
const router =useRouter()
const {
  sessionGroupActive,
  sessionList,
  addSessionGroupHandle,
  _done,
  addGroupDone
} = mixin()
onMounted(()=>{
  sessionGroupActive.value = +storage.get('sessionGroupActive')||0
  storage.remove('sessionGroupActive')
})
const clickHandle = (i)=>{
  // sessionGroupActive.value = i.groupId;
  // console.log(sessionGroupActive.value)
  router.push({ name: 'chatting', params: { id: i.groupId } })
}
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
  width: 3.45rem;
  max-width: var(--page-inner-width);
  margin: 0 auto 70px;
  display: flex;
}

.sider {
  width:100%;
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
</style>
