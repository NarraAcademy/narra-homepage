<template>
  <div class="part3">
    <img class="rq-code" src="https://oss.narralayer.ai/images/RQcode.svg"/>
    <div class="left">
      <h1 class="thank"> Thank you! </h1>
      <div class="des">We hoped you enjoy chatting with ZAI!
        Here’s your personal qr code! Share us with your friends! We are tracking your contributions! Stay tuned!</div>
      <div class="code">
        <div class="code-text">
          {{ code}}
        </div>
        <div @click="copyHandle" class="code-copy">
          <img class="copy-icon" :src="copyIcon"/>
        </div>
      </div>
<!--      <div class="share-container">-->
<!--        <img class="share-item" v-for="i in shareList" :src="i"/>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script setup>
import mixin from '@/mixin/chat.js'
import copyIcon from '@/assets/images/copy-icon.svg'

const {code,shareList,copyHandle} =mixin()
</script>

<style lang="scss" scoped>
.part3{
  height: 494px;
  max-width: 1312px;
  width: 100%;
  margin: 50px auto 64px;
  border: 1px solid var(--color-1);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.rq-code{
  width: 398px;
  height: 398px;
  margin-right: 48px;
}
.left{
  width: 560px;
  .thank{
    font-size: 80px;
    font-family: 'RAXON-Regular';
    color: var(--color-1);
    margin-bottom: 32px;
  }
  .des{
    font-size:16px ;
    font-family: 'KrossNeueGrotesk-Heavy';
    color: var(--color-1);
    margin-bottom: 32px;
  }
  .code{
    box-sizing: border-box;
    width: 422px;
    height: 48px;
    display: flex;
    background: var(--color-3);
    margin-bottom: 32px;
    .code-text{
      flex: 1;
      font-size: 16px;
      line-height: 48px;
      padding-left: 12px;
      color: var(--color-8);
      border: 1px solid var(--color-1);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .code-copy{
      height: 48px;
      width: 48px;
      background: var(--color-7);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      .copy-icon{
        width: 27px;
        height: 27px;
      }
    }
  }
  .share-container{
    display: flex;
    .share-item{
      width: 40px;
      height: 40px;
      margin-right: 45px;
    }
  }
}

</style>
