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
  width: 3.45rem;
  border: 1px solid var(--color-1);
  border-radius: 0.24rem;
  display: flex;
  margin: 0 auto 0.6rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.rq-code{
  width: 3.05rem;
  height: 3.05rem;
  margin-bottom: 0.48rem;
}
.left{
  width: 100%;
  .thank{
    font-size: 0.48rem;
    font-family: 'RAXON-Regular';
    color: var(--color-1);
    margin-bottom: 0.32rem;
  }
  .des{
    font-size:0.16rem ;
    font-family: 'KrossNeueGrotesk-Heavy';
    color: var(--color-1);
    margin-bottom: 0.32rem;
  }
  .code{
    box-sizing: border-box;
    width: 100%;
    height: 0.48rem;
    display: flex;
    background: var(--color-3);
    margin-bottom: 0.32rem;
    .code-text{
      flex: 1;
      font-size: 0.16rem;
      line-height: 0.48rem;
      padding-left: 0.12rem;
      color: var(--color-8);
      border: 1px solid var(--color-1);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .code-copy{
      height: 0.48rem;
      width: 0.48rem;
      background: var(--color-7);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      .copy-icon{
        width: 0.27rem;
        height: 0.27rem;
      }
    }
  }
  .share-container{
    display: flex;
    .share-item{
      width: 0.4rem;
      height: 0.4rem;
      margin-right: 0.26rem;
    }
  }
}

</style>
