<template>
  <modal-a v-model:open="open" title="Account Center">
      <div class="page-inner">
        <div class="card" :class="{active:userState.userInfo.Bind_address}">
          <div class="card-inner">
            <div class="des">ACCESS CARD</div>
            <div class="avatar"></div>
            <h3 class="name">{{ userState.userInfo.User_name?.replaceAll('', '\u200B') }}</h3>
            <h5 class="date"><span>Date Joined : </span>{{ userState.userInfo.joinDate }}</h5>
            <div class="inventory">
              <h6 class="inventory-title">INVENTORY</h6>
              <div class="inventory-body">
                <div v-if="!(userState.userInfo.Is_mint||userState.userInfo.Is_quiz)" class="inventory-body-item">
                <span>
                Still Empty
                </span>
                </div>
                <div v-if="userState.userInfo.Is_quiz" class="inventory-body-item">
                  <img :src="itemPic1" alt="">
                  <p>Quiz<br>Completed</p>
                </div>
                <div v-if="userState.userInfo.Is_mint" class="inventory-body-item">
                  <img :src="itemPic2" alt="">
                  <p>Access Card<br>NFT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="set">
          <img class="top-pic" :src="topPic" alt="">
          <div class="set-main">
            <div class="form">
              <my-form :formList="formList" ref="form"/>
              <a class="password" @click="sendEmail.openHandle()">Click to change password!</a>
              <div v-if="!userState.userInfo.Bind_address" class="form-item">
                Wallet Connected :
                <MySwitch v-model:checked="walletChecked"/>
              </div>
              <div class="bindAddress" v-else><span>Wallet Address :</span> {{ maskString(userState.userInfo.Bind_address) }}
                <CopyOutlined class="copyicon" @click="copyToClipboard(userState.userInfo.Bind_address)"/>
              </div>
              <div class="form-item">
                Newsletter :
                <MySwitch :disabled="!edit" v-model:checked="newsletterChecked"/>
              </div>
              <div class="btn-group">
<!--                <button v-if="edit" class="cancel" @click="cancelHandle">cancel</button>-->
                <button v-if="edit" class="save" @click="submitHandle">save</button>
                <button v-else class="save" @click="edit = true">edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SendEmail ref="sendEmail"
                 @success="(address)=>codeVerification.openHandle(address)"
                 @error="modal.open({
               title:'error',
               content:'We can’t find this email in our records. Please try again. ',
               type:'error'
               })"/>
      <CodeVerification ref="codeVerification" @error="modal.open({
               title:'error',
               content:'Verification failed! Please try again. ',
               type:'error'
               })" @success="modal.open({
               title:'success',
               content:'Verification successful !',
               type:'error'
               })"/>
      <WalletBlock ref="walletBlock" @close="updateHandle"/>
  </modal-a>
</template>

<script setup>
import mixin from "./index.js";
import MyForm from "@/components/myForm.vue";
import MySwitch from "@/components/MySwitch.vue";
import {CopyOutlined} from '@ant-design/icons-vue'
import CodeVerification from "@/components/CodeVerification.vue";
import SendEmail from "@/components/SendEmail.vue";
import {copyToClipboard, modal} from "@/utils/utils.js";
import WalletBlock from "@/components/WalletBlock/WalletBlock.vue";
import {ref} from "vue";
import ModalA from "@/components/Modal-A.vue";

const walletBlock = ref()
const sendEmail = ref()
const codeVerification = ref()
const {formList, itemPic1, itemPic2, topPic, leftPic, userState, walletChecked, newsletterChecked,width,submitHandle,updateHandle,maskString,edit} = mixin({walletBlock})
defineOptions({
  name:'accountCenterModal',
})
const open = ref(false)
const openHandle = ()=>{
  edit.value = false
  open.value = true
}
const closeHandle = ()=>{
  open.value = false
}
defineExpose({
  openHandle,
  closeHandle
})
</script>

<style lang="scss" scoped>

.page-inner {
  position: relative;
  width: 60cqw;
  min-width: 700px;
  max-width: 900px;
  display: flex;
  z-index: 2;
  justify-content: center;
  align-items: center;
}



.card {
  width: 300px;
  height: 417px;
  background-image: url("https://oss.narralayer.ai/images/Access-Card-default.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  margin-right: 20px;

  &-inner {
    position: absolute;
    right: 28px;
    bottom: 40px;
    width: 131px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .des {
      font-size: 12px;
      line-height: 16px;
      font-family: "KrossNeueGrotesk-Regular";
      color: #faac07;
      margin-bottom: 14px;
    }

    .avatar {
      width: 113px;
      height: 113px;
      background-image: url("@/assets/images/accessSetting/account-avatar-default.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: center;
      margin-bottom: 4px;
    }

    .name {
      color: #faac07;
      font-size: 20px;
      text-align: center;
      line-height: 26px;
      font-family: "Prototype";
      margin-bottom: 16px;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      max-height: 50px;
    }

    .date {
      font-family: "Prototype";
      font-size: 12px;
      color: #faac07;
      margin-bottom: 6px;

      span {
        color: #EDE4CC;
      }
    }

    .inventory {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 131px;
      height: 94px;
      background-image: url("@/assets/images/accessSetting/inventory-bg-default.svg");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: center;

      &-title {
        font-size: 12px;
        color: #EDE4CC;
        font-family: "Prototype";
        margin-bottom: 6px;
      }

      &-body {
        width: 100%;
        display: flex;
        justify-content: center;

        &-item {
          display: flex;
          flex-direction: column;
          align-items: center;

          &:last-child {
            margin-left: 6px;
          }

          img {
            height: 30px;
            margin-bottom: 6px;
          }

          p {
            font-size: 8px;
            line-height: 12px;
            text-align: center;
            color: #EDE4CC;
            font-family: "KrossNeueGrotesk-Book";
          }
          span{
            font-size: 16px;
            line-height: 80px;
            color: #faac07;
            font-weight: bold;
            font-family: "KrossNeueGrotesk-Regular";
          }
        }
      }
    }
  }
}

.active {
  background-image: url("https://oss.narralayer.ai/images/Access-Card-active.png");

  .card-inner {
    .des, .name {
      color: #152226;
    }

    .avatar {
      background-image: url("@/assets/images/accessSetting/account-avatar-active.png");
    }

    .date {
      color: #152226;

      span {
        color: #32434A;
      }
    }

    .inventory {
      background-image: url("@/assets/images/accessSetting/inventory-bg-active.svg");
    }
  }
}

.left-pic{
  width: 33px;
  height: 100%;
  margin-right:20px;
}


.set {

  .top-pic {
    height: 33px;
    margin: 0 auto 10px;
  }
  .title {
    font-size: 32px;
    line-height: 36px;
    font-family: "RAXON-Regular";
    color: #faac07;
    width: 100%;
    text-align: end;
    margin: 10px 0 32px;
  }

  .set-main {
    display: flex;
    align-items: start;
    justify-content: space-between;

    .left-bg {
      width: 33px;
      height: 596px;
    }

    .form {
      width: 364px;

      .form-item {
        font-size: 24px;
        line-height: 32px;
        color: #EDE4CC;
        font-family: "Prototype";
        margin-bottom: 24px;
      }

      .password {
        margin-bottom: 24px;
        font-size: 16px;
        display: block;
        font-family: 'KrossNeueGrotesk-Regular';
        text-decoration: underline;
        cursor: pointer;
        color: #FAAC07;
      }

      .bindAddress {
        font-size: 14px;
        line-height: 18px;
        color: #EDE4CC;
        font-family: "KrossNeueGrotesk-Book";
        margin-bottom: 24px;

        span {
          font-family: "KrossNeueGrotesk-Heavy";
        }

        .copyicon {
          cursor: pointer;

          &:hover {
            color: rgba(237, 228, 204, 0.43);
          }
        }
      }
    }
  }
}

.btn-group {
  width: 100%;
  display: flex;
  justify-content: center;

  button {
    width: 170px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    font-family: "KrossNeueGrotesk-Heavy";
    font-size: 16px;
    line-height: 20px;
    border-width: 1px;
    border-style: solid;
    border-radius: 0px 0px 8px 8px;
    cursor: pointer;
  }

  .edit, .cancel {
    border-color: #DF9808;
    color: #DF9808;
  }

  .save {
    border-color: #EDE4CC;
    color: #152226;
    background: #DF9808;

    &[disabled] {
      border-color: #686B63;
      color: #111D20;
      background: #634C15;
      cursor: default;
    }
  }
}

.mobile-modal{
  .page-inner {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    flex-direction: column;
  }



  .card {
    width: 2.5rem;
    height: 3.475rem;
    margin-right: 0;

    &-inner {
      right: 0.1rem;
      bottom: 0.4rem;
      width: 1.31rem;

      .des {
        font-size: 0.12rem;
        line-height: 0.16rem;
        font-family: "KrossNeueGrotesk-Regular";
        color: #faac07;
        margin-bottom: 0.14rem;
      }

      .avatar {
        width: 0.83rem;
        height: 0.83rem;
        margin-bottom: 0.04rem;
      }

      .name {
        font-size: 0.16rem;
        line-height: 0.2rem;
        margin-bottom: 0.12rem;
        max-height: 0.5rem;
      }

      .date {
        font-family: "Prototype";
        font-size: 0.1rem;
        color: #faac07;
        margin-bottom: 0.06rem;

        span {
          color: #EDE4CC;
        }
      }

      .inventory {
        width: 1.2rem;
        height: 0.8rem;
        &-title {
          font-size: 0.12rem;
          margin-bottom: 0.04rem;
        }

        &-body {

          &-item {

            &:last-child {
              margin-left: 0.06rem;
            }

            img {
              height: 0.25rem;
              margin-bottom: 0.04rem;
            }

            p {
              font-size: 0.07rem;
              line-height: 0.1rem;
            }
            span{
              font-size: 0.16rem;
              line-height: 0.8rem;
            }
          }
        }
      }
    }
  }

  .active {

    .card-inner {
      .des, .name {
        color: #152226;
      }

      .avatar {
        background-image: url("@/assets/images/accessSetting/account-avatar-active.png");
      }

      .date {
        color: #152226;

        span {
          color: #32434A;
        }
      }

      .inventory {
        background-image: url("@/assets/images/accessSetting/inventory-bg-active.svg");
      }
    }
  }

  .set {
    margin-top: 0.2rem;
    .top-pic {
      width: 100%;
      height: 0.28rem;
      margin: 0 auto 0.1rem;
    }
    .set-main {

      .form {
        width:100%;

        .form-item {
          font-size: 24px;
          line-height: 32px;
          color: #EDE4CC;
          font-family: "Prototype";
          margin-bottom: 24px;
        }

        .password {
          margin-bottom: 24px;
          font-size: 16px;
          display: block;
          font-family: 'KrossNeueGrotesk-Regular';
          text-decoration: underline;
          cursor: pointer;
          color: #FAAC07;
        }

        .bindAddress {
          font-size: 0.14rem;
          line-height: 0.18rem;
          margin-bottom: 0.24rem;
        }
      }
    }
  }

  .btn-group {
    width: 100%;
    display: flex;
    justify-content: center;

    button {
      width: 2.4rem;
      height: 0.48rem;
      text-align: center;
      font-family: "KrossNeueGrotesk-Heavy";
      font-size: 0.16rem;
      line-height: 0.2rem;
      border-width: 0.01rem;
      border-style: solid;
      border-radius: 0rem 0rem 0.08rem 0.08rem;
      cursor: pointer;
    }

    .edit, .cancel {
      border-color: #DF9808;
      color: #DF9808;
    }

    .save {
      border-color: #EDE4CC;
      color: #152226;
      background: #DF9808;

      &[disabled] {
        border-color: #686B63;
        color: #111D20;
        background: #634C15;
        cursor: default;
      }
    }
  }
}
</style>
